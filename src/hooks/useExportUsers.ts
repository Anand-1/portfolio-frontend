import { useState } from 'react';
import * as XLSX from 'xlsx';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

interface ExportUser {
  id: string;
  username: string;
  created_at: string;
}

const EXPORT_PAGE_SIZE = 1000;

export function useExportUsers() {
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState('');
  const [exportError, setExportError] = useState(false);

  async function exportUsers() {
    setIsExporting(true);
    setExportMessage('');
    setExportError(false);

    try {
      const supabase = getSupabaseBrowserClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();

      if (authError) {
        throw new Error(authError.message);
      }

      if (!authData.user) {
        setExportError(true);
        setExportMessage('Sign in before exporting user data.');
        return;
      }

      const users: ExportUser[] = [];

      for (let offset = 0; ; offset += EXPORT_PAGE_SIZE) {
        const { data, error } = await supabase
          .from('users')
          .select('id, username, created_at')
          .order('id', { ascending: true })
          .range(offset, offset + EXPORT_PAGE_SIZE - 1)
          .returns<ExportUser[]>();

        if (error) {
          throw new Error(error.message);
        }

        users.push(...data);

        if (data.length < EXPORT_PAGE_SIZE) {
          break;
        }
      }

      const worksheet = XLSX.utils.json_to_sheet(
        users.map(({ id, username, created_at }) => ({
          ID: id,
          Username: username,
          'Created At': created_at,
        }))
      );
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
      const date = new Date().toISOString().slice(0, 10);
      XLSX.writeFile(workbook, `users-${date}.xlsx`);
      setExportMessage(`Exported ${users.length} user${users.length === 1 ? '' : 's'}.`);
    } catch (error) {
      setExportError(true);
      setExportMessage(
        error instanceof Error ? `Export failed: ${error.message}` : 'Export failed unexpectedly.'
      );
    } finally {
      setIsExporting(false);
    }
  }

  return { isExporting, exportMessage, exportError, exportUsers };
}

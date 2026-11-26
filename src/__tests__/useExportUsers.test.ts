import { act, renderHook } from '@testing-library/react';
import * as XLSX from 'xlsx';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';
import { useExportUsers } from '@/hooks/useExportUsers';

const mockGetUser = jest.fn();
const mockReturns = jest.fn();
const mockRange = jest.fn(() => ({ returns: mockReturns }));
const mockOrder = jest.fn(() => ({ range: mockRange }));
const mockSelect = jest.fn(() => ({ order: mockOrder }));
const mockFrom = jest.fn(() => ({ select: mockSelect }));

jest.mock('@/lib/supabase/client', () => ({
  getSupabaseBrowserClient: jest.fn(() => ({
    auth: { getUser: mockGetUser },
    from: mockFrom,
  })),
}));

jest.mock('xlsx', () => ({
  utils: {
    json_to_sheet: jest.fn((rows) => rows),
    book_new: jest.fn(() => ({ SheetNames: [], Sheets: {} })),
    book_append_sheet: jest.fn(),
  },
  writeFile: jest.fn(),
}));

describe('useExportUsers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches signed-in user data and downloads it as an Excel workbook', async () => {
    mockGetUser.mockResolvedValue({ data: { user: { id: 'user-id' } }, error: null });
    mockReturns.mockResolvedValue({
      data: [{ id: 'user-id', username: 'anand', created_at: '2026-11-27T00:00:00Z' }],
      error: null,
    });
    const { result } = renderHook(() => useExportUsers());

    await act(async () => {
      await result.current.exportUsers();
    });

    expect(getSupabaseBrowserClient).toHaveBeenCalled();
    expect(mockFrom).toHaveBeenCalledWith('users');
    expect(XLSX.writeFile).toHaveBeenCalledWith(
      expect.objectContaining({ SheetNames: [], Sheets: {} }),
      expect.stringMatching(/^users-\d{4}-\d{2}-\d{2}\.xlsx$/)
    );
    expect(result.current).toMatchObject({
      isExporting: false,
      exportMessage: 'Exported 1 user.',
      exportError: false,
    });
  });

  it('does not fetch data when no user is signed in', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null }, error: null });
    const { result } = renderHook(() => useExportUsers());

    await act(async () => {
      await result.current.exportUsers();
    });

    expect(mockFrom).not.toHaveBeenCalled();
    expect(XLSX.writeFile).not.toHaveBeenCalled();
    expect(result.current).toMatchObject({
      isExporting: false,
      exportMessage: 'Sign in before exporting user data.',
      exportError: true,
    });
  });
});

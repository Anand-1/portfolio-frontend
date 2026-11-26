import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ChatPortal from '@/components/Chat/ChatPortal';
import UsernamePopup from '@/components/Usernamepopup/UsernamePopup';
import Navigation from '@/components/Navigation';

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <UsernamePopup />
      <div className="appContent">{children}</div>
      <ChatPortal />
    </>
  );
}

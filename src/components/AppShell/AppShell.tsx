import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground/AnimatedBackground';
import ChatPortal from '@/components/Chat/ChatPortal';
import Navigation from '@/components/Navigation/Navigation';

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <div className="appContent">{children}</div>
      <ChatPortal />
    </>
  );
}

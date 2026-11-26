import React from 'react';
const Navigation = React.lazy(() => import('@/app/navigation/page'));
const ChatPortal = React.lazy(() => import('@/app/components/Chat/ChatPortal'));
const AnimatedBackground = React.lazy(() => import('@/app/components/AnimatedBackground'));
const UsernamePopup = React.lazy(() => import('@/app/components/Usernamepopup/UsernamePopup'));

// import Sidebar from './Sidebar';

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <UsernamePopup />
      {/* <Sidebar/> */}
      <div className="appContent">{children}</div>
      <ChatPortal />
    </>
  );
}

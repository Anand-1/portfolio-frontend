import Navigation from '@/app/navigation/page';
import ChatPortal from '@/app/components/Chat/ChatPortal';
import AnimatedBackground from '@/app/components/AnimatedBackground';
// import Sidebar from './Sidebar';

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      {/* <Sidebar/> */}
      <div className="appContent">{children}</div>
      <ChatPortal />
    </>
  );
}

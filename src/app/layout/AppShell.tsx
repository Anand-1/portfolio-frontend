import Navigation from '@/app/navigation/page';
import ChatPortal from '@/app/components/Chat/ChatPortal';
import AnimatedBackground from '@/app/components/AnimatedBackground';
import UsernamePopup from '@/app/components/Usernamepopup/UsernamePopup';
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

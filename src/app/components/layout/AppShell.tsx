import Navigation from '@/app/Navigation/page';
import ChatPortal from '@/app/components/Chat/ChatPortal';
import AnimatedBackground from '@/app/components/AnimatedBackground';

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

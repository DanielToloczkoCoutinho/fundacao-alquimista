import { Logo } from './icons';
import { SidebarTrigger } from './ui/sidebar';

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="flex items-center gap-2 md:hidden">
        <SidebarTrigger />
        <Logo />
      </div>
      <div className="hidden items-center gap-3 md:flex">
        <Logo />
        <h1 className="font-headline text-xl font-bold text-foreground">
          Alchemist's Codex
        </h1>
      </div>
    </header>
  );
}

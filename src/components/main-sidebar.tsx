import { sections } from '@/lib/codex-data';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from './ui/sidebar';
import { Logo } from './icons';

interface MainSidebarProps {
  selectedSectionId: string;
  setSelectedSectionId: (id: string) => void;
}

export default function MainSidebar({
  selectedSectionId,
  setSelectedSectionId,
}: MainSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3">
          <Logo />
          <h1 className="font-headline text-xl font-bold text-foreground group-data-[collapsible=icon]:hidden">
            Alchemist's Codex
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sections.map((section) => (
            <SidebarMenuItem key={section.id}>
              <SidebarMenuButton
                onClick={() => setSelectedSectionId(section.id)}
                isActive={selectedSectionId === section.id}
                tooltip={{ children: section.title, side: 'right' }}
              >
                <section.icon />
                <span>{section.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

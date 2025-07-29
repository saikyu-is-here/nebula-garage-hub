import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user?: any;
  onShowProfile?: () => void;
}

export function DashboardLayout({ children, user, onShowProfile }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <TopBar user={user} onShowProfile={onShowProfile} />
            <main className="flex-1 p-6 space-y-6 animate-fade-in">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
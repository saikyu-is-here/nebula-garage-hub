import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";

// DashboardLayoutProps interface removed for JavaScript

export function DashboardLayout({ children, user, onShowProfile }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar user={user} />
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
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  Wrench,
  Calendar,
  Car,
  Clock,
  Bell,
  AlertTriangle,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Garages", url: "/garages", icon: Building2 },
  { title: "Users", url: "/users", icon: Users },
  { title: "Tyres & Stock", url: "/tyres", icon: Wrench },
  { title: "Reservations", url: "/reservations", icon: Calendar },
  { title: "Vehicles", url: "/vehicles", icon: Car },
  { title: "Garage Hours", url: "/hours", icon: Clock },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Stock Alerts", url: "/alerts", icon: AlertTriangle },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarContent>
        {/* Logo Section */}
        <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
            <Wrench className="w-4 h-4 text-white" />
          </div>
          {state !== "collapsed" && (
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">
                GarageOS
              </h1>
              <p className="text-xs text-sidebar-foreground/70">
                Tyre Management
              </p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className={`transition-all duration-200 ${
                      isActive(item.url)
                        ? "bg-sidebar-accent text-neon-blue border-l-2 border-neon-blue shadow-neon-blue"
                        : "hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                    }`}
                  >
                    <NavLink to={item.url} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
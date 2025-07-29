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

const allNavItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, roles: ["admin", "manager", "client"] },
  { title: "Garages", url: "/garages", icon: Building2, roles: ["admin"] },
  { title: "Users", url: "/users", icon: Users, roles: ["admin"] },
  { title: "Tyres & Stock", url: "/tyres", icon: Wrench, roles: ["admin", "manager"] },
  { title: "Reservations", url: "/reservations", icon: Calendar, roles: ["admin", "manager", "client"] },
  { title: "Vehicles", url: "/vehicles", icon: Car, roles: ["admin", "client"] },
  { title: "Garage Hours", url: "/hours", icon: Clock, roles: ["admin", "manager"] },
  { title: "Notifications", url: "/notifications", icon: Bell, roles: ["admin", "manager", "client"] },
  { title: "Stock Alerts", url: "/alerts", icon: AlertTriangle, roles: ["admin", "manager"] },
  { title: "Settings", url: "/settings", icon: Settings, roles: ["admin", "manager", "client"] },
];

interface AppSidebarProps {
  user?: any;
}

export function AppSidebar({ user }: AppSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = allNavItems.filter(item => 
    user?.role ? item.roles.includes(user.role) : true
  );

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
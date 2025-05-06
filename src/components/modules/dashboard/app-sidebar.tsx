"use client";

import * as React from "react";
import {
  Users,
  BriefcaseMedicalIcon,
  LogsIcon,
  HandCoins,
  LayoutDashboard,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Manage Medicines",
      url: "/admin/medicines",
      icon: BriefcaseMedicalIcon,
      isActive: true,
      items: [
        {
          title: "Medicines",
          url: "/admin/medicines",
        },
      ],
    },

    {
      title: "Manage Orders",
      url: "/admin/orders",
      icon: LogsIcon,
      items: [
        {
          title: "Orders",
          url: "/admin/orders",
        },
      ],
    },
    {
      title: "Manage Users",
      url: "/admin/users",
      icon: Users,
      items: [
        {
          title: "Users",
          url: "/admin/users",
        },
      ],
    },
    {
      title: "Manage Coupons",
      url: "/admin/coupon",
      icon: HandCoins,
      items: [
        {
          title: "Coupons",
          url: "/admin/coupon",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center"></div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">Medi Mart</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

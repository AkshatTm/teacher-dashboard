"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Calendar,
  Users,
  GraduationCap,
  UserCheck,
  FileText,
  Megaphone,
  FolderOpen,
  MessageSquare,
  Settings,
  X,
} from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "#" },
  { name: "Timetable", icon: Calendar, href: "#", active: true },
  { name: "Classes", icon: Users, href: "#" },
  { name: "Students", icon: GraduationCap, href: "#" },
  { name: "Attendance", icon: UserCheck, href: "#" },
  { name: "Assignments", icon: FileText, href: "#" },
  { name: "Announcements", icon: Megaphone, href: "#" },
  { name: "Resources", icon: FolderOpen, href: "#" },
  { name: "Messages", icon: MessageSquare, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <span className="text-lg font-semibold">Navigation</span>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-8 lg:mt-4">
          <div className="px-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant={item.active ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    item.active && "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
                  )}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Button>
              )
            })}
          </div>
        </nav>
      </div>
    </>
  )
}

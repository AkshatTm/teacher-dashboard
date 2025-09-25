"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, FileText, Megaphone, UserCheck, X, TrendingUp, Users } from "lucide-react"

export function RightRail() {
  const upcomingClasses = [
    { time: "09:00", course: "CS101", room: "Lab-101", section: "A" },
    { time: "11:00", course: "MATH201", room: "Room-205", section: "B" },
    { time: "14:00", course: "PHY301", room: "Lab-301", section: "A" },
  ]

  const tasksToGrade = [
    { assignment: "Programming Assignment 1", count: 24, status: "pending" },
    { assignment: "Math Quiz 3", count: 18, status: "in-progress" },
    { assignment: "Physics Lab Report", count: 12, status: "completed" },
  ]

  const announcements = [
    { id: 1, title: "Faculty Meeting Tomorrow", time: "2h ago" },
    { id: 2, title: "New Lab Equipment Arrived", time: "4h ago" },
    { id: 3, title: "Student Evaluation Period", time: "1d ago" },
  ]

  const weekStats = {
    totalHours: 24,
    classes: 18,
    sections: 6,
    freePeriods: 8,
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-sm border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            </div>
            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">This Week</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{weekStats.totalHours}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Total Hours</div>
            </div>
            <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{weekStats.classes}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Classes</div>
            </div>
            <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{weekStats.sections}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Sections</div>
            </div>
            <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{weekStats.freePeriods}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Free Periods</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
              <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">Upcoming Classes</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {upcomingClasses.map((class_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-lg">
                  {class_.time}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">{class_.course}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {class_.room} • Sec {class_.section}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
              <FileText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">Tasks to Grade</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {tasksToGrade.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl"
              >
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">{task.assignment}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{task.count} submissions</div>
                </div>
                <Badge
                  variant={
                    task.status === "completed" ? "default" : task.status === "in-progress" ? "secondary" : "outline"
                  }
                  className="text-xs rounded-full"
                >
                  {task.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
              <Megaphone className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            </div>
            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">Announcements</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="flex items-start justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">{announcement.title}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{announcement.time}</div>
                </div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-slate-200 dark:hover:bg-slate-600">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">Quick Actions</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl"
              size="sm"
            >
              <Megaphone className="h-4 w-4 mr-3" />
              Create Announcement
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl"
              size="sm"
            >
              <FileText className="h-4 w-4 mr-3" />
              Upload Assignment
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl"
              size="sm"
            >
              <UserCheck className="h-4 w-4 mr-3" />
              Mark Attendance
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

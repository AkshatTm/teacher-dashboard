"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, FileText, Megaphone, UserCheck, X, TrendingUp, Users } from "lucide-react"

export function RightRail() {
  const studentStats = {
    attendance: 92,
    assignments: 8,
    upcomingTests: 3,
    currentGPA: 3.8,
  };

  const upcomingDeadlines = [
    { title: "Math Assignment", due: "Tomorrow", subject: "Mathematics" },
    { title: "Physics Lab Report", due: "In 2 days", subject: "Physics" },
    { title: "Programming Project", due: "Next week", subject: "CS101" },
  ];

  const recentGrades = [
    { subject: "Mathematics", grade: "A", score: 92 },
    { subject: "Physics", grade: "A-", score: 88 },
    { subject: "Computer Science", grade: "B+", score: 85 },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Card */}
      <Card className="shadow-sm border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle>Academic Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-2xl font-bold text-indigo-600">
                {studentStats.attendance}%
              </div>
              <div className="text-xs">Attendance</div>
            </div>
            <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-2xl font-bold text-emerald-600">
                {studentStats.assignments}
              </div>
              <div className="text-xs">Pending Tasks</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Deadlines */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Deadlines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingDeadlines.map((deadline, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl"
              >
                <div>
                  <div className="font-semibold">{deadline.title}</div>
                  <div className="text-xs text-slate-500">{deadline.due}</div>
                </div>
                <Badge>{deadline.subject}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
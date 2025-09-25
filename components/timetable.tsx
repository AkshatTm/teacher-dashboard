"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Plus, Filter, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Mock data types
interface Course {
  id: string
  code: string
  name: string
  color: string
}

interface TimetableEntry {
  id: string
  courseId: string
  section: string
  room: string
  day: number // 0 = Monday, 1 = Tuesday, etc.
  startTime: string
  endTime: string
  period: string
}

// Mock data
const courses: Course[] = [
  { id: "1", code: "CS101", name: "Computer Science Fundamentals", color: "bg-blue-500" },
  { id: "2", code: "MATH201", name: "Advanced Mathematics", color: "bg-green-500" },
  { id: "3", code: "PHY301", name: "Physics Laboratory", color: "bg-purple-500" },
  { id: "4", code: "ENG102", name: "Technical Writing", color: "bg-orange-500" },
]

const timetableEntries: TimetableEntry[] = [
  {
    id: "1",
    courseId: "1",
    section: "A",
    room: "Lab-101",
    day: 0,
    startTime: "09:00",
    endTime: "10:30",
    period: "P1-P2",
  },
  {
    id: "2",
    courseId: "2",
    section: "B",
    room: "Room-205",
    day: 0,
    startTime: "11:00",
    endTime: "12:30",
    period: "P3-P4",
  },
  {
    id: "3",
    courseId: "3",
    section: "A",
    room: "Lab-301",
    day: 1,
    startTime: "10:00",
    endTime: "11:30",
    period: "P2-P3",
  },
  {
    id: "4",
    courseId: "4",
    section: "C",
    room: "Room-102",
    day: 2,
    startTime: "14:00",
    endTime: "15:30",
    period: "P6-P7",
  },
  {
    id: "5",
    courseId: "1",
    section: "B",
    room: "Lab-102",
    day: 3,
    startTime: "09:00",
    endTime: "10:30",
    period: "P1-P2",
  },
  {
    id: "6",
    courseId: "2",
    section: "A",
    room: "Room-206",
    day: 4,
    startTime: "13:00",
    endTime: "14:30",
    period: "P5-P6",
  },
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const timeSlots = [
  { time: "08:00", period: "P1" },
  { time: "09:00", period: "P2" },
  { time: "10:00", period: "P3" },
  { time: "11:00", period: "P4" },
  { time: "12:00", period: "Lunch" },
  { time: "13:00", period: "P5" },
  { time: "14:00", period: "P6" },
  { time: "15:00", period: "P7" },
  { time: "16:00", period: "P8" },
]

export function Timetable() {
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [selectedEntry, setSelectedEntry] = useState<TimetableEntry | null>(null)

  const getCourse = (courseId: string) => courses.find((c) => c.id === courseId)

  const getEntryForSlot = (day: number, time: string) => {
    return timetableEntries.find((entry) => {
      const entryTime = Number.parseInt(entry.startTime.split(":")[0])
      const slotTime = Number.parseInt(time.split(":")[0])
      return entry.day === day && entryTime === slotTime
    })
  }

  const formatWeekRange = (date: Date) => {
    const start = new Date(date)
    start.setDate(date.getDate() - date.getDay() + 1) // Monday
    const end = new Date(start)
    end.setDate(start.getDate() + 5) // Saturday

    return `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${end.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
  }

  return (
    <Card className="w-full shadow-sm border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
              <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Weekly Timetable
              </CardTitle>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Your teaching schedule overview</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="rounded-full bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Event
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Event</DialogTitle>
                </DialogHeader>
                <div className="p-4">
                  <p className="text-slate-600 dark:text-slate-400">Mock dialog for creating new events.</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-transparent"
              onClick={() => {
                const newDate = new Date(currentWeek)
                newDate.setDate(currentWeek.getDate() - 7)
                setCurrentWeek(newDate)
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-semibold text-slate-700 dark:text-slate-300 px-2">
              {formatWeekRange(currentWeek)}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-transparent"
              onClick={() => {
                const newDate = new Date(currentWeek)
                newDate.setDate(currentWeek.getDate() + 7)
                setCurrentWeek(newDate)
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full ml-2 bg-transparent"
              onClick={() => setCurrentWeek(new Date())}
            >
              Today
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Desktop Grid View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-7 gap-2 mb-4">
            <div className="p-3 font-semibold text-center text-slate-600 dark:text-slate-400 text-sm">Time</div>
            {days.map((day, index) => (
              <div
                key={day}
                className={`p-3 font-semibold text-center text-sm rounded-lg ${
                  index === new Date().getDay() - 1
                    ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {timeSlots.map((slot) => (
            <div key={slot.time} className="grid grid-cols-7 gap-2 mb-2">
              <div className="p-3 text-sm font-medium text-slate-500 dark:text-slate-400 border-r border-slate-200 dark:border-slate-700">
                <div className="font-semibold">{slot.time}</div>
                <div className="text-xs text-slate-400">{slot.period}</div>
              </div>
              {days.map((_, dayIndex) => {
                const entry = getEntryForSlot(dayIndex, slot.time)
                const course = entry ? getCourse(entry.courseId) : null

                return (
                  <div
                    key={dayIndex}
                    className="p-1 min-h-[70px] border border-slate-100 dark:border-slate-700 rounded-lg bg-slate-50/50 dark:bg-slate-800/50"
                  >
                    {entry && course && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <div
                            className={`p-3 rounded-lg cursor-pointer hover:opacity-90 transition-all hover:scale-105 ${course.color} text-white text-xs shadow-sm`}
                          >
                            <div className="font-semibold">{course.code}</div>
                            <div className="truncate opacity-90">{course.name}</div>
                            <div className="flex items-center justify-between mt-2 text-xs opacity-80">
                              <span>Sec {entry.section}</span>
                              <span>{entry.room}</span>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Class Details</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-lg">
                                {course.code} - {course.name}
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400">Section {entry.section}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-slate-700 dark:text-slate-300">Time:</span>
                                <p className="text-slate-600 dark:text-slate-400">
                                  {entry.startTime} - {entry.endTime}
                                </p>
                              </div>
                              <div>
                                <span className="font-medium text-slate-700 dark:text-slate-300">Room:</span>
                                <p className="text-slate-600 dark:text-slate-400">{entry.room}</p>
                              </div>
                              <div>
                                <span className="font-medium text-slate-700 dark:text-slate-300">Day:</span>
                                <p className="text-slate-600 dark:text-slate-400">{days[entry.day]}</p>
                              </div>
                              <div>
                                <span className="font-medium text-slate-700 dark:text-slate-300">Period:</span>
                                <p className="text-slate-600 dark:text-slate-400">{entry.period}</p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Mobile List View */}
        <div className="md:hidden space-y-4">
          {days.map((day, dayIndex) => (
            <div
              key={day}
              className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-slate-800"
            >
              <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">{day}</h3>
              <div className="space-y-3">
                {timetableEntries
                  .filter((entry) => entry.day === dayIndex)
                  .map((entry) => {
                    const course = getCourse(entry.courseId)
                    return course ? (
                      <div
                        key={entry.id}
                        className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                      >
                        <div className={`w-4 h-4 rounded-full ${course.color}`} />
                        <div className="flex-1">
                          <div className="font-medium text-sm text-slate-900 dark:text-white">{course.code}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {entry.startTime} - {entry.endTime}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs rounded-full">
                          {entry.room}
                        </Badge>
                      </div>
                    ) : null
                  })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

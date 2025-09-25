"use client"

import { Header } from "@/components/header"
import { Timetable } from "@/components/timetable"
import { RightRail } from "@/components/right-rail"
import { ThemeProvider } from "@/components/theme-provider"

export default function Dashboard() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Header />

        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Hero Timetable Card - Takes up most space */}
              <div className="lg:col-span-8">
                <Timetable />
              </div>

              {/* Right Rail Cards */}
              <div className="lg:col-span-4">
                <RightRail />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

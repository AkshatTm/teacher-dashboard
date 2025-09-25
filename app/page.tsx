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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Class Schedule */}
              <div className="lg:col-span-8">
                <Timetable />
              </div>

              {/* Student Information */}
              <div className="lg:col-span-4">
                <RightRail />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
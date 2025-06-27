"use client"

import { Button } from "@/components/ui/button"
import { getDayOfWeek, getThaiDate } from "@/lib/utils"

interface HeaderProps {
  selectedDate?: Date
}

export default function Header({ selectedDate }: HeaderProps) {
  const currentDay = getDayOfWeek(selectedDate)
  const currentDate = getThaiDate(selectedDate)

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-purple-200/50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg ring-2 ring-purple-200">
                <span className="text-white font-bold text-xl">🌈</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  สีประจำวัน
                </h1>
                <p className="text-sm text-gray-800 font-semibold">
                  ดวงชะตาประจำวันให้เสริมดวง
                </p>
              </div>
            </div>
          </div>

          {/* Center - Current Day Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-lg border border-purple-200 shadow-sm">
              <p className="text-base font-bold text-purple-800">{currentDay}</p>
              <p className="text-sm text-purple-700 font-medium">{currentDate}</p>
            </div>
          </div>

          {/* Right side - Login/Profile */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-purple-700 hover:text-purple-900 hover:bg-purple-50 font-semibold"
            >
              เข้าสู่ระบบ
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 
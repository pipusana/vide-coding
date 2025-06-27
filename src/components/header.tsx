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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌈</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">สีประจำวัน</h1>
                <p className="text-xs text-gray-500">ดวงชะตาประจำวันให้เสริมดวง</p>
              </div>
            </div>
          </div>

          {/* Center - Current Day Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">{currentDay}</p>
              <p className="text-xs text-gray-500">{currentDate}</p>
            </div>
          </div>

          {/* Right side - Login/Profile */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              เข้าสู่ระบบ
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 
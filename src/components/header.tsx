"use client"

import { Button } from "@/components/ui/button"
import { getDayOfWeek, getThaiDate } from "@/lib/utils"
import { Bell, Search, Menu, User } from "lucide-react"

interface HeaderProps {
  selectedDate?: Date
}

export default function Header({ selectedDate }: HeaderProps) {
  const currentDay = getDayOfWeek(selectedDate)
  const currentDate = getThaiDate(selectedDate)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {/* Modern Logo */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                  <span className="text-white font-bold text-2xl">🌈</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  สีประจำวัน
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  เสริมดวงมงคลทุกวัน
                </p>
              </div>
            </div>
          </div>

          {/* Center - Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {[
                { label: "หน้าแรก", active: true },
                { label: "ดูดวงรายวัน" },
                { label: "สินค้าแนะนำ" },
                { label: "เกี่ยวกับเรา" }
              ].map((item, index) => (
                <button 
                  key={index}
                  className={`text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                    item.active 
                      ? "text-purple-600 bg-purple-50 px-4 py-2 rounded-full" 
                      : "text-gray-700 hover:text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right side - Current Day Info & Actions */}
          <div className="flex items-center space-x-4">
            {/* Current Day Info */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-3 rounded-xl border border-purple-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <p className="text-base font-bold text-purple-800 mb-1">{currentDay}</p>
                  <p className="text-xs text-purple-600 font-medium">{currentDate}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                className="w-10 h-10 p-0 hover:bg-purple-50 text-gray-600 hover:text-purple-600 transition-all duration-300"
              >
                <Search className="h-4 w-4" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="w-10 h-10 p-0 hover:bg-purple-50 text-gray-600 hover:text-purple-600 transition-all duration-300 relative"
              >
                <Bell className="h-4 w-4" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </Button>

              <Button 
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <User className="h-4 w-4 mr-2" />
                เข้าสู่ระบบ
              </Button>

              {/* Mobile Menu */}
              <Button 
                variant="ghost" 
                size="sm"
                className="lg:hidden w-10 h-10 p-0 hover:bg-purple-50 text-gray-600 hover:text-purple-600"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay (hidden by default) */}
      <div className="lg:hidden hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
        <div className="px-4 py-6 space-y-4">
          {["หน้าแรก", "ดูดวงรายวัน", "สินค้าแนะนำ", "เกี่ยวกับเรา"].map((item, index) => (
            <button key={index} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-all duration-300">
              {item}
            </button>
          ))}
          
          {/* Mobile Current Day Info */}
          <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl border border-purple-200/50">
            <div className="text-center">
              <p className="text-lg font-bold text-purple-800 mb-1">{currentDay}</p>
              <p className="text-sm text-purple-600 font-medium">{currentDate}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 
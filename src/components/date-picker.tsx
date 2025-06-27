"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react"
import { useState } from "react"

interface DatePickerProps {
  selectedDate: Date
  onDateChange: (date: Date) => void
}

export default function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  const [showDatePicker, setShowDatePicker] = useState(false)
  
  const today = new Date()

  const formatDisplayDate = (date: Date) => {
    const days = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
    
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`
  }

  const formatFullDate = (date: Date) => {
    const days = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
    
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear() + 543}`
  }

  const handleDateSelect = (date: Date) => {
    onDateChange(date)
    setShowDatePicker(false)
  }

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1))
    onDateChange(newDate)
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const currentDate = new Date(selectedDate)
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    for (let i = 0; i < 42; i++) {
      const day = new Date(startDate)
      day.setDate(startDate.getDate() + i)
      days.push(day)
    }
    
    return days
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate)
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1))
    onDateChange(newDate)
  }

  const calendarDays = generateCalendarDays()
  const currentMonth = selectedDate.getMonth()
  const currentYear = selectedDate.getFullYear()

  return (
    <div className="relative z-50">
      <Card className="bg-white/95 backdrop-blur-lg border border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-purple-800 text-lg">
            <Calendar className="h-4 w-4" />
            <span className="font-bold">เลือกวันที่</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 relative z-50 pb-4">
          {/* Current Date Display - Clickable */}
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="w-full flex items-center justify-between bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 rounded-xl p-4 border border-purple-200 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CalendarDays className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-base font-bold text-purple-800">
                    {formatDisplayDate(selectedDate)}
                  </p>
                  <p className="text-sm text-purple-600 font-medium">
                    {formatFullDate(selectedDate)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateDate('prev')
                  }}
                  className="hover:bg-purple-200 z-50 relative h-8 w-8 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateDate('next')
                  }}
                  className="hover:bg-purple-200 z-50 relative h-8 w-8 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </button>

            {/* Calendar Dropdown */}
            {showDatePicker && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-purple-200 z-50 p-4">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateMonth('prev')}
                    className="hover:bg-purple-100"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <h3 className="font-bold text-purple-800">
                    {['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'][currentMonth]} {currentYear + 543}
                  </h3>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateMonth('next')}
                    className="hover:bg-purple-100"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Week Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'].map((day) => (
                    <div key={day} className="text-center text-xs font-semibold text-purple-600 p-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    const isCurrentMonth = day.getMonth() === currentMonth
                    const isSelected = day.toDateString() === selectedDate.toDateString()
                    const isToday = day.toDateString() === today.toDateString()
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(day)}
                        className={`
                          h-8 w-8 text-xs rounded-lg transition-all duration-200 font-medium
                          ${isSelected 
                            ? 'bg-purple-600 text-white shadow-lg' 
                            : isToday
                            ? 'bg-purple-100 text-purple-800 font-bold'
                            : isCurrentMonth 
                            ? 'text-purple-700 hover:bg-purple-50' 
                            : 'text-gray-400'
                          }
                          ${isCurrentMonth ? 'hover:scale-110' : ''}
                        `}
                      >
                        {day.getDate()}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
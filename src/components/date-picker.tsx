"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

interface DatePickerProps {
  selectedDate: Date
  onDateChange: (date: Date) => void
}

export default function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const quickDates = [
    { label: "เมื่อวาน", date: yesterday },
    { label: "วันนี้", date: today },
    { label: "พรุ่งนี้", date: tomorrow }
  ]

  const formatDisplayDate = (date: Date) => {
    const days = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
    
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`
  }

  const handleDateSelect = (date: Date) => {
    onDateChange(date)
  }

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1))
    onDateChange(newDate)
  }

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-purple-800">
          <Calendar className="h-5 w-5" />
          <span className="text-xl font-bold">เลือกวันที่</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Date Display */}
        <div className="text-center">
          <div className="flex items-center justify-between mb-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigateDate('prev')}
              className="hover:bg-purple-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
              <p className="text-lg font-bold text-gray-900">
                {formatDisplayDate(selectedDate)}
              </p>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigateDate('next')}
              className="hover:bg-purple-100"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Quick Date Selection */}
        <div className="space-y-2">
          <p className="text-base font-bold text-purple-800">เลือกด่วน:</p>
          <div className="grid grid-cols-1 gap-2">
            {quickDates.map((item, index) => (
              <Button
                key={index}
                variant={selectedDate.toDateString() === item.date.toDateString() ? "default" : "outline"}
                size="sm"
                onClick={() => handleDateSelect(item.date)}
                className={`w-full justify-start ${
                  selectedDate.toDateString() === item.date.toDateString() 
                    ? "bg-purple-600 hover:bg-purple-700 text-white font-bold" 
                    : "hover:bg-purple-50 border-purple-200 text-gray-800 font-semibold"
                }`}
              >
                {item.label}
                <span className="ml-auto text-sm font-medium opacity-80">
                  {formatDisplayDate(item.date)}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Manual Date Input */}
        <div className="pt-2 border-t border-purple-200">
          <input
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e) => onDateChange(new Date(e.target.value))}
            className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 font-medium"
          />
        </div>
      </CardContent>
    </Card>
  )
} 
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DatePicker from "./date-picker"
import { getDayOfWeek, getThaiDate } from "@/lib/utils"
import { Sparkles, Calendar, Info, Palette } from "lucide-react"

interface DayInfo {
  day: string
  description: string
  details: string[]
  luckyColor: string
  colorDisplay: string
  gradient: string
  additionalColors: {
    primary: string
    secondary: string
    description: string
  }
}

interface DailyColorSectionProps {
  selectedDate: Date
  onDateChange: (date: Date) => void
}

const dayData: Record<string, DayInfo> = {
  "อาทิตย์": {
    day: "วันอาทิตย์",
    description: "สีแดง ความร้อนแรง กล้าหาญ นำโชค",
    details: [
      "สีประจำวันนี้เป็นสีแดง แสดงถึงความร้อนแรงและความกล้าหาญ",
      "เหมาะสำหรับการเริ่มต้นสิ่งใหม่ การแข่งขัน และการแสดงออก พร้อมเสริมโชคลาภ"
    ],
    luckyColor: "สีแดง",
    colorDisplay: "bg-red-500",
    gradient: "from-red-500 to-rose-600",
    additionalColors: {
      primary: "สีส้ม",
      secondary: "สีชมพู",
      description: "สีเสริม - ส้ม (ศุกรา), ชมพู (อังคาร), เขียว (พุธ), ม่วง (เสาร์)"
    }
  },
  "จันทร์": {
    day: "วันจันทร์",
    description: "สีเหลือง ความรุ่งโรจน์ สุขภาพ การเงิน",
    details: [
      "สีประจำวันนี้เป็นสีเหลือง แสดงถึงความรุ่งโรจน์และความมั่งคั่ง",
      "เหมาะสำหรับการลงทุน การขาย และการสร้างความมั่นคงทางการเงิน"
    ],
    luckyColor: "สีเหลือง",
    colorDisplay: "bg-yellow-500",
    gradient: "from-yellow-400 to-amber-600",
    additionalColors: {
      primary: "สีชมพู",
      secondary: "สีเขียว",
      description: "สีเสริม - ชมพู (อังคาร), เขียว (พุธ), ม่วง (เสาร์), ส้ม (ศุกรา)"
    }
  },
  "อังคาร": {
    day: "วันอังคาร",
    description: "สีชมพู ความรัก อ่อนโยน ความสุข",
    details: [
      "สีประจำวันนี้เป็นสีชมพู แสดงถึงความรักและความอ่อนโยน",
      "เหมาะสำหรับการแสดงความรัก การรักษาความสัมพันธ์ และการสร้างความสุข"
    ],
    luckyColor: "สีชมพู",
    colorDisplay: "bg-pink-500",
    gradient: "from-pink-400 to-rose-500",
    additionalColors: {
      primary: "สีเขียว",
      secondary: "สีม่วง",
      description: "สีเสริม - เขียว (พุธ), ม่วง (เสาร์), ส้ม (ศุกรา), เทา (พฤหัส)"
    }
  },
  "พุธ": {
    day: "วันพุธ",
    description: "สีเขียว ความเจริญเติบโต ความสมดุล",
    details: [
      "สีประจำวันนี้เป็นสีเขียว แสดงถึงความเจริญเติบโตและความสมดุล",
      "เหมาะสำหรับการเรียน การทำงาน และการพัฒนาตัวเอง"
    ],
    luckyColor: "สีเขียว",
    colorDisplay: "bg-green-500",
    gradient: "from-green-400 to-emerald-600",
    additionalColors: {
      primary: "สีม่วง",
      secondary: "สีส้ม",
      description: "สีเสริม - ม่วง (เสาร์), ส้ม (ศุกรา), เทา (พฤหัส), น้ำเงิน (ศุกร์)"
    }
  },
  "พฤหัสบดี": {
    day: "วันพฤหัสบดี",
    description: "สีเทา ความมั่นคง สติปัญญา ความเป็นกลาง",
    details: [
      "สีประจำวันนี้เป็นสีเทา แสดงถึงความมั่นคงและสติปัญญา",
      "เหมาะสำหรับการตัดสินใจ การคิดวิเคราะห์ และการหาข้อสรุป"
    ],
    luckyColor: "สีเทา",
    colorDisplay: "bg-gray-500",
    gradient: "from-gray-400 to-slate-600",
    additionalColors: {
      primary: "สีน้ำเงิน",
      secondary: "สีแดง",
      description: "สีเสริม - น้ำเงิน (ศุกร์), แดง (อาทิตย์), เหลือง (จันทร์), ชมพู (อังคาร)"
    }
  },
  "ศุกร์": {
    day: "วันศุกร์",
    description: "สีน้ำเงิน ความนิ่ง น่าเชื่อถือ สันติภาพ",
    details: [
      "สีประจำวันนี้เป็นสีน้ำเงิน แสดงถึงความนิ่งและความน่าเชื่อถือ",
      "เหมาะสำหรับการทำงาน การเจรจา และการสร้างความเชื่อมั่น"
    ],
    luckyColor: "สีน้ำเงิน",
    colorDisplay: "bg-blue-500",
    gradient: "from-blue-500 to-indigo-600",
    additionalColors: {
      primary: "สีแดง",
      secondary: "สีเหลือง",
      description: "สีเสริม - แดง (อาทิตย์), เหลือง (จันทร์), ชมพู (อังคาร), เขียว (พุธ)"
    }
  },
  "เสาร์": {
    day: "วันเสาร์",
    description: "สีม่วง ความลึกลับ จิตวิญญาณ ความสร้างสรรค์",
    details: [
      "สีประจำวันนี้เป็นสีม่วง แสดงถึงความลึกลับและพลังจิตวิญญาณ",
      "เหมาะสำหรับการทำสมาธิ การสร้างสรรค์ และการพัฒนาจิตใจ"
    ],
    luckyColor: "สีม่วง",
    colorDisplay: "bg-purple-500",
    gradient: "from-purple-500 to-violet-600",
    additionalColors: {
      primary: "สีน้ำเงิน",
      secondary: "สีชมพู",
      description: "สีเสริม - น้ำเงิน (ศุกร์), ชมพู (อังคาร), เขียว (พุธ), เทา (พฤหัส)"
    }
  }
}

export default function DailyColorSection({ selectedDate, onDateChange }: DailyColorSectionProps) {
  const selectedDayOfWeek = getDayOfWeek(selectedDate)
  const selectedThaiDate = getThaiDate(selectedDate)
  const dayInfo = dayData[selectedDayOfWeek]

  return (
    <div className="space-y-8">
      {/* Date Picker Section - Always visible and accessible */}
      <div className="relative z-20">
        <DatePicker 
          selectedDate={selectedDate}
          onDateChange={onDateChange}
        />
      </div>

      {/* Hero Color Card */}
      <div className="relative z-10">
        <Card className={`bg-gradient-to-br ${dayInfo.gradient} text-white shadow-2xl border-0 overflow-hidden relative`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <CardContent className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{selectedThaiDate}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {dayInfo.day}
                </h2>
                <p className="text-xl md:text-2xl font-semibold mb-6 text-white/95">
                  {dayInfo.description}
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">🎨 สีหลัก: {dayInfo.luckyColor}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">✨ เสริมดวงมงคล</span>
                  </div>
                </div>
              </div>
              
              {/* Right Color Display */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative group">
                  <div className={`w-48 h-48 rounded-3xl ${dayInfo.colorDisplay} shadow-2xl border-8 border-white/30 group-hover:scale-105 transition-all duration-500`}>
                    <div className={`absolute inset-4 rounded-2xl bg-gradient-to-br ${dayInfo.gradient} opacity-60`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-16 h-16 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-white text-lg">✨</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                    <span className="text-white text-sm">🌟</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Meaning Card */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 ring-1 ring-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl text-gray-900">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Info className="h-5 w-5 text-white" />
              </div>
              ความหมายและเคล็ดลับ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dayInfo.details.map((detail, index) => (
              <div key={index} className="relative p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500 hover:shadow-md transition-all duration-300">
                <div className="absolute top-4 right-4 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-800 text-base leading-relaxed font-medium pr-8">
                  {detail}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Color Palette Card */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 ring-1 ring-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl text-gray-900">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Palette className="h-5 w-5 text-white" />
              </div>
              สีมงคลวันนี้
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Color */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 ${dayInfo.colorDisplay} rounded-2xl shadow-lg border-4 border-white`}></div>
                <div>
                  <h4 className="font-bold text-xl text-green-900">สีหลัก</h4>
                  <p className="text-green-700 font-semibold">{dayInfo.luckyColor}</p>
                </div>
              </div>
              <p className="text-gray-800 font-medium">
                {dayInfo.description}
              </p>
            </div>

            {/* Additional Colors */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-orange-400 rounded-xl shadow-lg border-2 border-white"></div>
                  <div className="w-12 h-12 bg-purple-400 rounded-xl shadow-lg border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-amber-900">สีเสริม</h4>
                  <p className="text-amber-700 font-semibold">{dayInfo.additionalColors.primary}, {dayInfo.additionalColors.secondary}</p>
                </div>
              </div>
              <p className="text-gray-800 font-medium">
                {dayInfo.additionalColors.description}
              </p>
            </div>

            {/* Tips Badge */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full border border-purple-200">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="text-purple-800 font-semibold">ใส่สีนี้เพื่อเสริมดวงมงคล</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
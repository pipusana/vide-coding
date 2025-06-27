"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DatePicker from "./date-picker"
import { getDayOfWeek, getThaiDate } from "@/lib/utils"

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
    description: "สีแดง ความร้อนแรง กล้าหาญ",
    details: [
      "สีประจำวันนี้เป็นสีแดง แสดงถึงความร้อนแรงและความกล้าหาญ",
      "เหมาะสำหรับการเริ่มต้นสิ่งใหม่ การแข่งขัน และการแสดงออก"
    ],
    luckyColor: "สีแดง",
    colorDisplay: "bg-red-500",
    gradient: "from-red-500 to-rose-600",
    additionalColors: {
      primary: "สีส้ม",
      secondary: "สีชมพู",
      description: "สีเสริม - เพิ่มความมั่นใจและความรัก"
    }
  },
  "จันทร์": {
    day: "วันจันทร์",
    description: "สีขาว ความบริสุทธิ์ สงบ",
    details: [
      "สีประจำวันนี้เป็นสีขาว แสดงถึงความบริสุทธิ์และความสงบ",
      "เหมาะสำหรับการทำสมาธิ การรักษา และการเริ่มต้นใหม่"
    ],
    luckyColor: "สีขาว",
    colorDisplay: "bg-white border-4 border-gray-300",
    gradient: "from-gray-100 to-white",
    additionalColors: {
      primary: "สีฟ้า",
      secondary: "สีเงิน",
      description: "สีเสริม - เพิ่มความสงบและความชัดเจน"
    }
  },
  "อังคาร": {
    day: "วันอังคาร",
    description: "สีชมพู ความรัก อ่อนโยน",
    details: [
      "สีประจำวันนี้เป็นสีชมพู แสดงถึงความรักและความอ่อนโยน",
      "เหมาะสำหรับการแสดงความรัก การรักษาความสัมพันธ์ และการให้อภัย"
    ],
    luckyColor: "สีชมพู",
    colorDisplay: "bg-pink-500",
    gradient: "from-pink-400 to-rose-500",
    additionalColors: {
      primary: "สีแดง",
      secondary: "สีม่วง",
      description: "สีเสริม - เพิ่มความรักและความโรแมนติก"
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
      primary: "สีเหลือง",
      secondary: "สีน้ำตาล",
      description: "สีเสริม - เพิ่มความฉลาดและความมั่นคง"
    }
  },
  "พฤหัสบดี": {
    day: "วันพฤหัสบดี",
    description: "สีส้ม ความสุข ความสร้างสรรค์",
    details: [
      "สีประจำวันนี้เป็นสีส้ม แสดงถึงความสุขและความสร้างสรรค์",
      "เหมาะสำหรับการสร้างสรรค์ การเรียนรู้ และการพัฒนาทักษะ"
    ],
    luckyColor: "สีส้ม",
    colorDisplay: "bg-orange-500",
    gradient: "from-orange-400 to-amber-600",
    additionalColors: {
      primary: "สีเหลือง",
      secondary: "สีแดง",
      description: "สีเสริม - เพิ่มความสุขและความสำเร็จ"
    }
  },
  "ศุกร์": {
    day: "วันศุกร์",
    description: "สีน้ำเงิน ความนิ่ง น่าเชื่อถือ",
    details: [
      "สีประจำวันนี้เป็นสีน้ำเงิน แสดงถึงความนิ่งและความน่าเชื่อถือ",
      "เหมาะสำหรับการทำงาน การเจรจา และการสร้างความเชื่อมั่น"
    ],
    luckyColor: "สีน้ำเงิน",
    colorDisplay: "bg-blue-500",
    gradient: "from-blue-500 to-indigo-600",
    additionalColors: {
      primary: "สีฟ้า",
      secondary: "สีม่วง",
      description: "สีเสริม - เพิ่มความสงบและความฉลาด"
    }
  },
  "เสาร์": {
    day: "วันเสาร์",
    description: "สีม่วง ความลึกลับ ความมีสติ",
    details: [
      "สีประจำวันนี้เป็นสีม่วง แสดงถึงความลึกลับและความมีสติ",
      "เหมาะสำหรับการทำสมาธิ การวิเคราะห์ และการตัดสินใจ"
    ],
    luckyColor: "สีม่วง",
    colorDisplay: "bg-purple-500",
    gradient: "from-purple-500 to-violet-600",
    additionalColors: {
      primary: "สีดำ",
      secondary: "สีน้ำเงิน",
      description: "สีเสริม - เพิ่มความลึกลับและความลึกซึ้ง"
    }
  }
}

export default function DailyColorSection({ selectedDate, onDateChange }: DailyColorSectionProps) {
  const selectedDayOfWeek = getDayOfWeek(selectedDate)
  const selectedThaiDate = getThaiDate(selectedDate)
  const dayInfo = dayData[selectedDayOfWeek]

  return (
    <div className="space-y-8">
      {/* Date Selection */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          {/* Main Day Section */}
          <Card className={`bg-gradient-to-br ${dayInfo.gradient} text-white shadow-2xl border-0 ring-1 ring-white/20`}>
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold mb-2">
                {dayInfo.day}
              </CardTitle>
              <p className="text-white/95 text-lg font-semibold">
                {dayInfo.description}
              </p>
              <p className="text-white/90 text-base font-medium">
                {selectedThaiDate}
              </p>
            </CardHeader>
          </Card>
        </div>
        
        {/* Date Picker */}
        <div className="lg:w-80">
          <DatePicker 
            selectedDate={selectedDate}
            onDateChange={onDateChange}
          />
        </div>
      </div>

      {/* Daily Information */}
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 ring-1 ring-purple-200/50">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="font-bold text-3xl mb-4 text-gray-900">ความหมาย</h3>
                <div className="space-y-4">
                  {dayInfo.details.map((detail, index) => (
                    <p key={index} className="text-gray-800 text-lg leading-relaxed bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border-l-4 border-purple-500 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Color Circle */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className={`w-40 h-40 rounded-full ${dayInfo.colorDisplay} shadow-2xl border-8 border-white ring-4 ring-purple-200/50`}>
                  <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${dayInfo.gradient} opacity-80`}></div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">✨</span>
                </div>
              </div>
              <div className="text-center bg-white/95 p-4 rounded-xl shadow-lg border border-purple-200">
                <p className="text-base font-semibold text-purple-700 mb-1">สีประจำวัน</p>
                <p className="font-bold text-xl text-gray-900">{dayInfo.luckyColor}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Daily Colors Section */}
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 ring-1 ring-purple-200/50">
        <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl">🎨</span>
            สีมงคลและสีเสริมประจำวัน
          </CardTitle>
          <p className="text-violet-100 text-base font-medium">
            สีมงคลและสีเสริมที่เหมาะสำหรับวันนี้
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Color */}
            <div className="space-y-4 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h4 className="font-bold text-xl text-green-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🎨</span>
                </span>
                สีหลัก
              </h4>
              <p className="text-gray-800 leading-relaxed text-base font-medium">
                {dayInfo.luckyColor} - {dayInfo.description}
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${dayInfo.colorDisplay} rounded-full shadow-lg border-2 border-white`}></div>
                <span className="text-base font-bold text-gray-800">{dayInfo.luckyColor}</span>
              </div>
            </div>

            {/* Additional Colors */}
            <div className="space-y-4 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
              <h4 className="font-bold text-xl text-amber-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </span>
                สีเสริม
              </h4>
              <p className="text-gray-800 leading-relaxed text-base font-medium">
                {dayInfo.additionalColors.description}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-400 rounded-full shadow-lg border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-400 rounded-full shadow-lg border-2 border-white"></div>
                <span className="text-base font-bold text-gray-800">{dayInfo.additionalColors.primary}, {dayInfo.additionalColors.secondary}</span>
              </div>
            </div>

            {/* Tips */}
            <div className="space-y-4 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h4 className="font-bold text-xl text-blue-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💡</span>
                </span>
                เคล็ดลับ
              </h4>
              <p className="text-gray-800 leading-relaxed text-base font-medium">
                ใส่สีประจำวันนี้เพื่อเสริมดวงและเพิ่มความมั่นใจในกิจกรรมต่างๆ
              </p>
              <div className="text-sm text-blue-800 bg-blue-100 px-4 py-2 rounded-full inline-block font-semibold">
                ✨ เสริมดวงมงคล
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
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
    colorDisplay: "bg-gray-100 border-2 border-gray-300",
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
    <div className="space-y-6">
      {/* Date Selection */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          {/* Main Day Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {dayInfo.day}
              </CardTitle>
              <p className="text-blue-100">
                {dayInfo.description}
              </p>
              <p className="text-blue-200 text-sm">
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
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">ความหมาย</h3>
                <div className="space-y-2">
                  {dayInfo.details.map((detail, index) => (
                    <p key={index} className="text-gray-700 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Color Circle */}
            <div className="flex flex-col items-center space-y-4">
              <div className={`w-32 h-32 rounded-full ${dayInfo.colorDisplay} shadow-lg border-4 border-white`}>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">สีประจำวัน</p>
                <p className="font-semibold">{dayInfo.luckyColor}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Daily Colors Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">สีมงคลและสีเสริมประจำวัน</CardTitle>
          <p className="text-sm text-gray-600">
            สีมงคลและสีเสริมที่เหมาะสำหรับวันนี้
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Color */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-green-700">🎨 สีหลัก</h4>
              <p className="text-sm text-gray-600">
                {dayInfo.luckyColor} - {dayInfo.description}
              </p>
              <div className="flex gap-2">
                <div className={`w-6 h-6 ${dayInfo.colorDisplay} rounded`}></div>
                <span className="text-xs text-gray-500">{dayInfo.luckyColor}</span>
              </div>
            </div>

            {/* Additional Colors */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-yellow-700">✨ สีเสริม</h4>
              <p className="text-sm text-gray-600">
                {dayInfo.additionalColors.description}
              </p>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-orange-400 rounded"></div>
                <div className="w-6 h-6 bg-purple-400 rounded"></div>
                <span className="text-xs text-gray-500">{dayInfo.additionalColors.primary}, {dayInfo.additionalColors.secondary}</span>
              </div>
            </div>

            {/* Tips */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-blue-700">💡 เคล็ดลับ</h4>
              <p className="text-sm text-gray-600">
                ใส่สีประจำวันนี้เพื่อเสริมดวงและเพิ่มความมั่นใจในกิจกรรมต่างๆ
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
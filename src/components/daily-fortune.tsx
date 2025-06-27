import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FortuneCategory {
  title: string
  color: string
  bgColor: string
  textColor: string
  description: string
  icon: string
}

const fortuneCategories: FortuneCategory[] = [
  {
    title: "โชคลาภ",
    color: "สีเขียว",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    description: "โชคดี การเงิน เข้ามาได้อย่างคาดไม่ถึง",
    icon: "💰"
  },
  {
    title: "ความรัก",
    color: "สีชมพู ชมพูเข้ม",
    bgColor: "bg-pink-100",
    textColor: "text-pink-800",
    description: "ความรักวุ่นวาย ความรักเลิกลาง อคติ ข้องใจ",
    icon: "💕"
  },
  {
    title: "การงาน",
    color: "สีน้ำเงิน",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    description: "การงานที่ดี มีความมั่นคงในชีวิต",
    icon: "💼"
  },
  {
    title: "การเงิน",
    color: "สีเขียว น้ำเงิน",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    description: "การเงินมีเงินใช้ได้อย่างที่คิดไว้",
    icon: "💵"
  },
  {
    title: "เคล็ดลับดำรง",
    color: "สีม่วง เม่น ม่วง",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
    description: "วิธีดำรงชีพไม่ทำการทำขายกินความบาปได้",
    icon: "✨"
  }
]

export default function DailyFortune() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>📅</span>
          <span>ดำฤทธิ์ประจำวัน วันศุกร์</span>
        </CardTitle>
        <p className="text-sm text-gray-600">
          ดวงการเงินและความรุ่งเรืองในการหารายได้ วันนี้ 5 มีค่า
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fortuneCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-lg p-4 border-l-4 ${category.textColor.replace('text', 'border')}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{category.icon}</span>
                <h3 className={`font-semibold ${category.textColor}`}>
                  {category.title}
                </h3>
              </div>
              <p className={`text-sm font-medium mb-1 ${category.textColor}`}>
                {category.color}
              </p>
              <p className="text-sm text-gray-700">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 
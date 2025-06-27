import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FortuneCategory {
  title: string
  color: string
  bgColor: string
  textColor: string
  description: string
  icon: string
  gradient: string
}

const fortuneCategories: FortuneCategory[] = [
  {
    title: "โชคลาภ",
    color: "สีเขียว",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-900",
    description: "โชคดี การเงิน เข้ามาได้อย่างคาดไม่ถึง",
    icon: "💰",
    gradient: "from-emerald-400 to-green-600"
  },
  {
    title: "ความรัก",
    color: "สีชมพู ชมพูเข้ม",
    bgColor: "bg-pink-50",
    textColor: "text-pink-900",
    description: "ความรักวุ่นวาย ความรักเลิกลาง อคติ ข้องใจ",
    icon: "💕",
    gradient: "from-pink-400 to-rose-600"
  },
  {
    title: "การงาน",
    color: "สีน้ำเงิน",
    bgColor: "bg-blue-50",
    textColor: "text-blue-900",
    description: "การงานที่ดี มีความมั่นคงในชีวิต",
    icon: "💼",
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    title: "การเงิน",
    color: "สีเขียว น้ำเงิน",
    bgColor: "bg-teal-50",
    textColor: "text-teal-900",
    description: "การเงินมีเงินใช้ได้อย่างที่คิดไว้",
    icon: "💵",
    gradient: "from-teal-400 to-cyan-600"
  },
  {
    title: "เคล็ดลับดำรง",
    color: "สีม่วง เม่น ม่วง",
    bgColor: "bg-purple-50",
    textColor: "text-purple-900",
    description: "วิธีดำรงชีพไม่ทำการทำขายกินความบาปได้",
    icon: "✨",
    gradient: "from-purple-400 to-violet-600"
  }
]

export default function DailyFortune() {
  return (
    <Card className="w-full bg-white/90 backdrop-blur-sm shadow-xl border-0 ring-1 ring-purple-200/50">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <span className="text-3xl">📅</span>
          <div>
            <span className="font-bold">ดำฤทธิ์ประจำวัน วันศุกร์</span>
            <p className="text-purple-100 text-base font-medium mt-1">
              ดวงการเงินและความรุ่งเรืองในการหารายได้ วันนี้ 5 มีค่า
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fortuneCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-xl">{category.icon}</span>
                  </div>
                  <h3 className={`font-bold text-xl ${category.textColor}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className={`inline-block px-4 py-2 rounded-full ${category.bgColor} ${category.textColor} text-base font-bold mb-4 border-2 border-current/30`}>
                  {category.color}
                </div>
                
                <p className="text-gray-800 text-base leading-relaxed font-medium">
                  {category.description}
                </p>
                
                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${category.gradient} opacity-20`}></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 
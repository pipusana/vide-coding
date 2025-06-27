import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDayOfWeek, getThaiDate } from "@/lib/utils"

interface FortuneCategory {
  title: string
  color: string
  bgColor: string
  textColor: string
  description: string
  icon: string
  gradient: string
}

interface DailyFortuneProps {
  selectedDate: Date
}

// Day-specific fortune predictions based on Thai astrology 2568
const dayFortuneData: Record<string, FortuneCategory[]> = {
  "อาทิตย์": [
    {
      title: "โชคลาภ",
      color: "สีเขียว",
      bgColor: "bg-green-50",
      textColor: "text-green-900",
      description: "เขียว - โชคลาภด้านการเงินและการลงทุน มีโอกาสได้รับผลตอบแทนที่ดี",
      icon: "🍀",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "ความรัก",
      color: "สีชมพู สีม่วง สีน้ำเงิน",
      bgColor: "bg-pink-50",
      textColor: "text-pink-900",
      description: "ชมพู ม่วง น้ำเงิน - ความรักมีความหลากหลายและมีสีสัน เหมาะสำหรับการแสดงออกทางความรู้สึก",
      icon: "💕",
      gradient: "from-pink-400 to-purple-500"
    },
    {
      title: "การงาน",
      color: "สีม่วง",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
      description: "ม่วง - งานมีความก้าวหน้าและได้รับการยอมรับ เหมาะสำหรับการตัดสินใจสำคัญ",
      icon: "👑",
      gradient: "from-purple-400 to-violet-600"
    },
    {
      title: "การเงิน",
      color: "สีม่วง",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
      description: "ม่วง - การเงินมีพลังและเพิ่มขึ้นอย่างรวดเร็ว การลงทุนให้ผลดี",
      icon: "💜",
      gradient: "from-purple-400 to-violet-600"
    },
    {
      title: "เคล็ดลับชีวิต",
      color: "สีแดง",
      bgColor: "bg-red-50",
      textColor: "text-red-900",
      description: "แดง - ใส่สีแดงเพื่อเพิ่มพลังและความมั่นใจ ออกกำลังกายเพื่อเสริมพลังงาน",
      icon: "⚡",
      gradient: "from-red-400 to-orange-500"
    }
  ],
  "จันทร์": [
    {
      title: "โชคลาภ",
      color: "สีเทา สีดำ",
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      description: "เทา ดำ - โชคลาภมาจากการวางแผนที่รอบคอบและการใช้สติปัญญา",
      icon: "🧠",
      gradient: "from-gray-500 to-slate-700"
    },
    {
      title: "ความรัก",
      color: "สีแดง สีชมพู",
      bgColor: "bg-red-50",
      textColor: "text-red-900",
      description: "แดง ชมพู - ความรักมีความร้อนแรงและอ่อนโยน เหมาะสำหรับการสื่อสารทางใจ",
      icon: "❤️",
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "การงาน",
      color: "สีแดง สีชมพู",
      bgColor: "bg-red-50",
      textColor: "text-red-900",
      description: "แดง ชมพู - งานมีความคืบหน้าและได้รับความร่วมมือที่ดี",
      icon: "🔥",
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "การเงิน",
      color: "สีเหลือง สีกรม",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      description: "เหลือง กรม - การเงินมั่นคงและมีการเติบโต รายได้จากหลายช่องทาง",
      icon: "💛",
      gradient: "from-yellow-400 to-blue-800"
    },
    {
      title: "เคล็ดลับชีวิต",
      color: "สีขาว",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      description: "ขาว - ใส่สีขาวเพื่อเสริมความบริสุทธิ์และความสงบ ทำจิตใจให้ผ่องใส",
      icon: "🤍",
      gradient: "from-white to-gray-200"
    }
  ],
  "อังคาร": [
    {
      title: "โชคลาภ",
      color: "สีน้ำเงิน สีฟ้า",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      description: "น้ำเงิน ฟ้า - โชคลาภมาจากการสื่อสารและการสร้างเครือข่าย",
      icon: "💙",
      gradient: "from-blue-500 to-sky-400"
    },
    {
      title: "ความรัก",
      color: "สีเหลือง สีกรม",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      description: "เหลือง กรม - ความรักมีความลึกซึ้งและมั่นคง เหมาะสำหรับความสัมพันธ์ระยะยาว",
      icon: "💛",
      gradient: "from-yellow-400 to-blue-800"
    },
    {
      title: "การงาน",
      color: "สีดำ สีกรม สีขาว",
      bgColor: "bg-slate-50",
      textColor: "text-slate-900",
      description: "ดำ กรม ขาว - งานต้องการความละเอียดและความรอบคอบ จะประสบความสำเร็จ",
      icon: "⚫",
      gradient: "from-slate-700 to-white"
    },
    {
      title: "การเงิน",
      color: "สีดำ สีกรม สีขาว",
      bgColor: "bg-slate-50",
      textColor: "text-slate-900",
      description: "ดำ กรม ขาว - การเงินมีเสถียรภาพและเติบโตอย่างค่อยเป็นค่อยไป",
      icon: "⚫",
      gradient: "from-slate-700 to-white"
    },
    {
      title: "เคล็ดลับชีวิต",
      color: "สีชมพู",
      bgColor: "bg-pink-50",
      textColor: "text-pink-900",
      description: "ชมพู - ใส่สีชมพูเพื่อเสริมเสน่ห์และความน่ารัก ดูแลความงามของตัวเอง",
      icon: "🌸",
      gradient: "from-pink-300 to-rose-400"
    }
  ],
  "พฤหัสบดี": [
    {
      title: "โชคลาภ",
      color: "สีขาว สีชมพู",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      description: "ขาว ชมพู - โชคลาภมาจากการใช้สติปัญญาและการให้คำปรึกษาที่ดี",
      icon: "🤍",
      gradient: "from-white to-pink-300"
    },
    {
      title: "ความรัก",
      color: "สีเหลือง สีชมพู สีม่วง",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      description: "เหลือง ชมพู ม่วง - ความรักมีความบริสุทธิ์และอ่อนโยน เหมาะสำหรับการพูดคุยเรื่องอนาคต",
      icon: "💛",
      gradient: "from-yellow-300 to-purple-400"
    },
    {
      title: "การงาน",
      color: "สีน้ำเงิน สีกรม",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      description: "น้ำเงิน กรม - งานที่ต้องการความรอบคอบและการวิเคราะห์จะสำเร็จได้ดี",
      icon: "💙",
      gradient: "from-blue-400 to-blue-800"
    },
    {
      title: "การเงิน",
      color: "สีน้ำเงิน สีฟ้า",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      description: "น้ำเงิน ฟ้า - การลงทุนอย่างมีสติและรอบคอบจะให้ผลตอบแทนที่ดี",
      icon: "💙",
      gradient: "from-blue-400 to-sky-400"
    },
    {
      title: "เคล็ดลับชีวิต",
      color: "สีเทา สีดำ",
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      description: "เทา ดำ - ใส่สีเทาหรือสีดำเพื่อเสริมความมั่นคงและภูมิปัญญา",
      icon: "⚫",
      gradient: "from-gray-500 to-slate-700"
    }
  ],
  "ศุกร์": [
    {
      title: "โชคลาภ",
      color: "สีขาว สีกรม",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      description: "ขาว กรม - โชคลาภมาจากการทำงานที่จริงใจและการสร้างความไว้วางใจ",
      icon: "🤍",
      gradient: "from-white to-blue-800"
    },
    {
      title: "ความรัก",
      color: "สีเหลือง สีชมพู สีขาว",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      description: "เหลือง ชมพู ขาว - ความรักมีความสงบและไว้วางใจ เหมาะสำหรับการสร้างความเข้าใจ",
      icon: "💛",
      gradient: "from-yellow-300 to-pink-200"
    },
    {
      title: "การงาน",
      color: "สีเหลือง สีชมพู สีขาว",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      description: "เหลือง ชมพู ขาว - งานที่เกี่ยวกับการสื่อสารและการบริการจะเป็นไปได้ดี",
      icon: "💛",
      gradient: "from-yellow-300 to-pink-200"
    },
    {
      title: "การเงิน",
      color: "สีเหลือง สีชมพู สีขาว",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      description: "เหลือง ชมพู ขาว - รายได้มั่นคงจากการทำงานที่ซื่อสัตย์และมีคุณภาพ",
      icon: "💛",
      gradient: "from-yellow-300 to-pink-200"
    },
    {
      title: "เคล็ดลับชีวิต",
      color: "สีม่วง สีดำ",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
      description: "ม่วง ดำ - ใส่สีม่วงหรือสีดำเพื่อเสริมความสงบใจและความจริงใจ",
      icon: "💜",
      gradient: "from-purple-500 to-slate-700"
    }
  ],
  "เสาร์": [
    {
      title: "โชคลาภ",
      color: "สีชมพู",
      bgColor: "bg-pink-50",
      textColor: "text-pink-900",
      description: "ชมพู - โชคลาภมาจากสิ่งที่ซ่อนเร้นและการค้นพบโอกาสใหม่ที่ไม่คาดคิด",
      icon: "🌸",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      title: "ความรัก",
      color: "สีเขียว สีน้ำเงิน สีเขียว",
      bgColor: "bg-green-50",
      textColor: "text-green-900",
      description: "เขียว น้ำเงิน เขียว - ความรักมีความลึกซึ้งและลึกลับ เหมาะสำหรับการเปิดเผยใจ",
      icon: "💚",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "การงาน",
      color: "สีดำ สีเทา สีเขียว",
      bgColor: "bg-slate-50",
      textColor: "text-slate-900",
      description: "ดำ เทา เขียว - งานที่ต้องการความคิดสร้างสรรค์และจินตนาการจะประสบผลสำเร็จ",
      icon: "⚫",
      gradient: "from-slate-700 to-green-500"
    },
    {
      title: "การเงิน",
      color: "สีดำ สีเทา สีเขียว",
      bgColor: "bg-slate-50",
      textColor: "text-slate-900",
      description: "ดำ เทา เขียว - การลงทุนที่ไม่ธรรมดาอาจให้ผลตอบแทนที่น่าประหลาดใจ",
      icon: "⚫",
      gradient: "from-slate-700 to-green-500"
    },
    {
      title: "เคล็ดลับชีวิต",
      color: "สีน้ำเงิน",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      description: "น้ำเงิน - ใส่สีน้ำเงินเพื่อเสริมพลังจิตวิญญาณ ทำสมาธิลึก ค้นหาความหมายในชีวิต",
      icon: "💙",
      gradient: "from-blue-500 to-indigo-600"
    }
  ],
  "พุธ": [
    {
      title: "โชคลาภ",
      color: "สีแดง สีชมพู",
      bgColor: "bg-red-50",
      textColor: "text-red-900",
      description: "แดง ชมพู - โชคลาภมาจากการใช้ความคิดสร้างสรรค์และการเรียนรู้",
      icon: "❤️",
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "ความรัก",
      color: "สีดำ สีกรม",
      bgColor: "bg-slate-50",
      textColor: "text-slate-900",
      description: "ดำ กรม - ความรักมีความลึกลับและน่าค้นหา เหมาะสำหรับการเข้าใจกันมากขึ้น",
      icon: "🖤",
      gradient: "from-slate-700 to-blue-900"
    },
    {
      title: "การงาน",
      color: "สีดำ สีกรม",
      bgColor: "bg-slate-50",
      textColor: "text-slate-900",
      description: "ดำ กรม - งานที่ต้องการการวิเคราะห์และการใช้ปัญญาจะสำเร็จลุล่วง",
      icon: "⚫",
      gradient: "from-slate-700 to-blue-900"
    },
    {
      title: "การเงิน",
      color: "สีดำ สีกรม",
      bgColor: "bg-slate-50",
      textColor: "text-slate-900",
      description: "ดำ กรม - การเงินต้องใช้ความรอบคอบในการตัดสินใจ ลงทุนอย่างมีสติ",
      icon: "⚫",
      gradient: "from-slate-700 to-blue-900"
    },
    {
      title: "เคล็ดลับชีวิต",
      color: "สีเขียว",
      bgColor: "bg-green-50",
      textColor: "text-green-900",
      description: "เขียว - ใส่สีเขียวเพื่อเสริมความสงบและความสมดุล เรียนรู้สิ่งใหม่",
      icon: "💚",
      gradient: "from-green-400 to-emerald-500"
    }
  ]
}

export default function DailyFortune({ selectedDate }: DailyFortuneProps) {
  const selectedDayOfWeek = getDayOfWeek(selectedDate)
  const selectedThaiDate = getThaiDate(selectedDate)
  const fortuneCategories = dayFortuneData[selectedDayOfWeek]

  return (
    <Card className="w-full bg-white/90 backdrop-blur-sm shadow-xl border-0 ring-1 ring-purple-200/50">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <span className="text-3xl">📅</span>
          <div>
            <span className="font-bold">ดำฤทธิ์ประจำวัน {selectedDayOfWeek}</span>
            <p className="text-purple-100 text-base font-medium mt-1">
              ดวงการเงินและความรุ่งเรืองในการหารายได้ {selectedThaiDate}
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
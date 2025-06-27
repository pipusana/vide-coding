"use client"

import { useState } from "react"
import Header from '@/components/header'
import DailyColorSection from '@/components/daily-color-section'
import DailyFortune from '@/components/daily-fortune'
import ProductRecommendations from '@/components/product-recommendations'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="min-h-screen bg-gray-50">
      <Header selectedDate={selectedDate} />
      
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Daily Color Information */}
        <DailyColorSection selectedDate={selectedDate} onDateChange={setSelectedDate} />
        
        {/* Daily Fortune Categories */}
        <DailyFortune />
        
        {/* Product Recommendations */}
        <ProductRecommendations />
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              © 2024 สีประจำวัน - เสริมดวงด้วยสีมงคลประจำวัน
            </p>
            <p className="text-xs mt-2">
              ข้อมูลเพื่อความเชื่อและความบันเทิงเท่านั้น
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

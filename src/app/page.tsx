"use client"

import { useState } from "react"
import Header from '@/components/header'
import DailyColorSection from '@/components/daily-color-section'
import DailyFortune from '@/components/daily-fortune'
import ProductRecommendations from '@/components/product-recommendations'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header selectedDate={selectedDate} />
      
      {/* Hero Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23f0f0f0' stroke-width='1' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}></div>
        
        <main className="relative max-w-6xl mx-auto px-4 py-8 space-y-8">
          {/* Daily Color Information */}
          <DailyColorSection selectedDate={selectedDate} onDateChange={setSelectedDate} />
          
          {/* Daily Fortune Categories */}
          <DailyFortune />
          
          {/* Product Recommendations */}
          <ProductRecommendations />
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
                สีประจำวัน
              </h3>
              <p className="text-gray-100 text-lg font-medium">
                เสริมดวงด้วยสีมงคลประจำวัน
              </p>
            </div>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-base text-gray-200 mb-2 font-medium">
                © 2024 สีประจำวัน - เสริมดวงด้วยสีมงคลประจำวัน
              </p>
              <p className="text-sm text-gray-300 font-medium">
                ข้อมูลเกี่ยวกับดวงชะตาและสีมงคลในเว็บไซต์นี้ เป็นเพียงความเชื่อและความบันเทิงเท่านั้น
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

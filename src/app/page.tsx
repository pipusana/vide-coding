"use client"

import { useState } from "react"
import Header from '@/components/header'
import DailyColorSection from '@/components/daily-color-section'
import DailyFortune from '@/components/daily-fortune'
import ProductRecommendations from '@/components/product-recommendations'

// E-commerce & Fashion Brand Logo Components
const ShopeeLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L3.09 8.26l1.64 1.15L12 4.6l7.27 4.81 1.64-1.15L12 2zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7.5 6.5h-15c-.83 0-1.5-.67-1.5-1.5V12c0-.83.67-1.5 1.5-1.5h3v2H6v6h12v-6h-1.5v-2h3c.83 0 1.5.67 1.5 1.5v7.5c0 .83-.67 1.5-1.5 1.5z"/>
  </svg>
)

const LazadaLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 13.5c0 .83-.67 1.5-1.5 1.5H8c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v3zm-1.5-2.5h-6v1h6v-1zm-6-1h6v-1h-6v1z"/>
  </svg>
)

const UniqloLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <path d="M8 8h8v8H8z" fill="white"/>
    <path d="M10 10v4h4v-4h-4z" fill="currentColor"/>
  </svg>
)

const HMLogo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v18H3V3z"/>
    <path d="M6 6h3v3H6V6zm0 6h3v3H6v-3zm9-6h3v3h-3V6zm0 6h3v3h-3v-3z" fill="white"/>
    <text x="12" y="16" fontSize="4" textAnchor="middle" fill="white" fontWeight="bold">H&M</text>
  </svg>
)

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Extreme Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-500/5 to-transparent"></div>
      </div>

      <Header selectedDate={selectedDate} />
      
      {/* Extreme Hero Section */}
      <div className="relative pt-24">
        {/* 3D Floating Elements */}
        <div className="absolute top-32 left-16 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg rotate-45 animate-bounce shadow-2xl" style={{ animationDelay: '1s', transform: 'perspective(1000px) rotateX(45deg)' }}></div>
        <div className="absolute top-56 right-24 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-bounce shadow-2xl" style={{ animationDelay: '3s', transform: 'perspective(1000px) rotateY(45deg)' }}></div>
        <div className="absolute bottom-48 left-32 w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg animate-bounce shadow-2xl" style={{ animationDelay: '5s', transform: 'perspective(1000px) rotateZ(45deg)' }}></div>
        
        <main className="relative max-w-8xl mx-auto px-4 py-16 space-y-20">
          {/* Extreme Welcome Banner */}
          <div className="text-center mb-20 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[800px] h-[300px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full shadow-2xl border border-white/20 mb-8 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-white font-bold text-lg">✨ ระบบดูดวงอัจฉริยะ AI ✨</span>
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-6 leading-tight relative">
                <span className="relative inline-block">
                  เสริมดวงด้วยสีมงคล
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 opacity-30 blur-2xl -z-10"></div>
                </span>
              </h1>
              
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-2xl md:text-3xl text-gray-200 font-bold leading-relaxed">
                  ค้นหาสีประจำวันที่เหมาะกับคุณ เพื่อ
                  <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> เสริมโชคลาภ </span>
                  และ
                  <span className="text-transparent bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text"> ความมั่นใจ </span>
                  ในชีวิตประจำวัน
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 justify-center mb-12">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                  <span className="relative z-10">🔮 ดูดวงทันที</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </button>
                
                <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl font-bold text-white text-lg shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                  <span className="relative z-10">🌟 เรียนรู้เพิ่มเติม</span>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </button>
              </div>

              {/* Floating Achievement Badges */}
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { icon: "👑", text: "อันดับ 1 ในไทย", gradient: "from-yellow-400 to-orange-500" },
                  { icon: "⭐", text: "รีวิว 4.9/5", gradient: "from-blue-400 to-purple-500" },
                  { icon: "🔥", text: "ใช้งานล่าสุด", gradient: "from-red-400 to-pink-500" },
                  { icon: "💎", text: "พรีเมียม AI", gradient: "from-emerald-400 to-teal-500" }
                ].map((badge, index) => (
                  <div key={index} className={`inline-flex items-center gap-2 bg-gradient-to-r ${badge.gradient} px-4 py-2 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    <span className="text-lg">{badge.icon}</span>
                    <span className="text-sm">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Sections with Enhanced Animations */}
          <div className="space-y-24">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <DailyColorSection selectedDate={selectedDate} onDateChange={setSelectedDate} />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <DailyFortune />
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <ProductRecommendations />
              </div>
            </div>
          </div>

          {/* Extreme Stats Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-3xl blur-2xl"></div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8">
              {[
                { number: "500K+", label: "ผู้ใช้งานทั่วโลก", icon: "🌍", color: "from-blue-500 to-cyan-500" },
                { number: "7", label: "สีมงคลเฉพาะตัว", icon: "🌈", color: "from-purple-500 to-pink-500" },
                { number: "365", label: "คำทำนายต่อปี", icon: "📅", color: "from-emerald-500 to-teal-500" },
                { number: "99.9%", label: "ความแม่นยำสูงสุด", icon: "🎯", color: "from-amber-500 to-orange-500" }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-white/20">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110`}>
                      <span className="text-white text-2xl">{stat.icon}</span>
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">{stat.number}</div>
                    <div className="text-gray-300 font-semibold group-hover:text-white transition-colors duration-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      
      {/* Ultra Modern Footer */}
      <footer className="relative mt-32 bg-gradient-to-br from-black via-purple-900/50 to-black text-white overflow-hidden">
        {/* Footer Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -top-20 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-3xl">🌈</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                  <span className="text-white text-sm">✨</span>
                </div>
              </div>
              <h3 className="text-5xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                สีประจำวัน
              </h3>
            </div>
            
            <p className="text-2xl text-gray-200 font-bold mb-12 max-w-3xl mx-auto">
             เทคโนโลยี AI ผสานกับภูมิปัญญาไทย
              <br />
              <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text">เพื่อชีวิตที่เต็มไปด้วยสีสัน</span>
            </p>

            {/* Partner Brands */}
            <div className="flex justify-center gap-6 mb-12">
              {[
                { icon: <ShopeeLogo />, label: "Shopee", color: "from-orange-600 to-red-600", hover: "hover:from-orange-500 hover:to-red-500" },
                { icon: <LazadaLogo />, label: "Lazada", color: "from-blue-600 to-indigo-600", hover: "hover:from-blue-500 hover:to-indigo-500" },
                { icon: <UniqloLogo />, label: "Uniqlo", color: "from-red-600 to-pink-600", hover: "hover:from-red-500 hover:to-pink-500" },
                { icon: <HMLogo />, label: "H&M", color: "from-purple-600 to-pink-600", hover: "hover:from-purple-500 hover:to-pink-500" }
              ].map((brand, index) => (
                <button key={index} className={`group relative w-16 h-16 bg-gradient-to-br ${brand.color} ${brand.hover} rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2`}>
                  <span className="text-white group-hover:scale-125 transition-transform duration-300">{brand.icon}</span>
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl`}></div>
                </button>
              ))}
            </div>
            
            <p className="text-lg text-gray-300 font-semibold">
              🛍️ พาร์ทเนอร์สำหรับช้อปปิ้งเสื้อผ้าสีมงคล
            </p>
          </div>
          
          <div className="border-t border-gray-700/50 pt-12 text-center">
            <p className="text-gray-200 font-bold text-lg mb-4">
              © 2025 สีประจำวัน - ผู้นำเทคโนโลยีดูดวงแห่งอนาคต
            </p>
            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
              ข้อมูลการทำนายและคำแนะนำในเว็บไซต์นี้ใช้เทคโนโลยี AI ผสานกับภูมิปัญญาไทย เพื่อการบันเทิงและแรงบันดาลใจในชีวิต
            </p>
          </div>

          {/* Extreme Decorative elements */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-5 h-5 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </footer>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out both;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}

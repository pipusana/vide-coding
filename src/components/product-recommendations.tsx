"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Sparkles, ShoppingCart, ShoppingBag, Store, Shirt } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  retailer: {
    name: string
    logo: React.ReactNode
    color: string
    url: string
    gradient: string
  }
}

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "เสื้อยืดทั่วไป",
    price: 350,
    rating: 4.5,
    reviewCount: 1928,
    image: "/api/placeholder/200/200",
    retailer: {
      name: "Shopee",
      logo: <ShoppingCart className="h-6 w-6" />,
      color: "bg-orange-500",
      url: "https://shopee.co.th",
      gradient: "from-orange-400 to-red-500"
    }
  },
  {
    id: "2",
    name: "เสื้อยืดใส่ประจำ",
    price: 1100,
    originalPrice: 1500,
    rating: 4.4,
    reviewCount: 557,
    image: "/api/placeholder/200/200",
    retailer: {
      name: "Lazada",
      logo: <ShoppingBag className="h-6 w-6" />,
      color: "bg-blue-600",
      url: "https://lazada.co.th",
      gradient: "from-blue-400 to-indigo-600"
    }
  },
  {
    id: "3",
    name: "เสื้อยืดเบสิกส์",
    price: 1190,
    rating: 4.7,
    reviewCount: 892,
    image: "/api/placeholder/200/200",
    retailer: {
      name: "Uniqlo",
      logo: <Store className="h-6 w-6" />,
      color: "bg-red-600",
      url: "https://uniqlo.com/th",
      gradient: "from-red-400 to-pink-600"
    }
  },
  {
    id: "4",
    name: "เสื้อแขนสั้นยืดเบสิกส์",
    price: 1699,
    rating: 4.5,
    reviewCount: 543,
    image: "/api/placeholder/200/200",
    retailer: {
      name: "H&M",
      logo: <Shirt className="h-6 w-6" />,
      color: "bg-purple-600",
      url: "https://hm.com/th",
      gradient: "from-purple-500 to-pink-600"
    }
  }
]

const retailers = [
  { name: "Shopee", logo: <ShoppingCart className="h-8 w-8" />, url: "https://shopee.co.th", gradient: "from-orange-400 to-red-500" },
  { name: "Lazada", logo: <ShoppingBag className="h-8 w-8" />, url: "https://lazada.co.th", gradient: "from-blue-400 to-indigo-600" },
  { name: "Uniqlo", logo: <Store className="h-8 w-8" />, url: "https://uniqlo.com/th", gradient: "from-red-400 to-pink-600" },
  { name: "H&M", logo: <Shirt className="h-8 w-8" />, url: "https://hm.com/th", gradient: "from-purple-500 to-pink-600" }
]

export default function ProductRecommendations() {
  const handleProductClick = (product: Product) => {
    window.open(product.retailer.url, '_blank')
  }

  const handleRetailerClick = (retailer: typeof retailers[0]) => {
    window.open(retailer.url, '_blank')
  }

  return (
    <div className="space-y-8">
      <Card className="w-full bg-white/90 backdrop-blur-sm shadow-xl border-0 ring-1 ring-purple-200/50">
        <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <span className="text-3xl">🛍️</span>
            <div>
              <span className="font-bold">แนะนำสินค้าสำหรับวัน ศุกร์พิเศษ</span>
              <p className="text-green-100 text-base font-medium mt-1">
                เลือกซื้อเสื้อผ้าเสริมมงคลตามสีประจำวันได้ที่แพลตฟอร์มต่างๆ
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sampleProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden mb-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-square w-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <span className="text-6xl filter drop-shadow-lg">👔</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <Badge 
                    variant="destructive" 
                    className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 border-0 shadow-lg"
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    -21%
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-purple-800 font-bold">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-purple-900 line-clamp-2 group-hover:text-purple-700 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-red-600">
                      ฿{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-base text-gray-600 line-through font-medium">
                        ฿{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    onClick={() => handleProductClick(product)}
                    className={`w-full bg-gradient-to-r ${product.retailer.gradient} hover:shadow-lg transition-all duration-300 border-0 font-semibold`}
                    size="sm"
                  >
                    <span className="mr-2 text-white">{product.retailer.logo}</span>
                    ซื้อเลย
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Retailer Links Section */}
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 ring-1 ring-purple-200/50 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
          <CardTitle className="text-xl font-bold flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Store className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-white drop-shadow-sm">หาซื้อเสื้อผ้าเพิ่มได้ที่</span>
              <p className="text-white/90 text-sm font-normal mt-1">
                คลิกเพื่อเข้าสู่เว็บไซต์ของแต่ละแบรนด์
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {retailers.map((retailer, index) => (
              <div
                key={index}
                onClick={() => handleRetailerClick(retailer)}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-purple-100 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    {/* Logo with enhanced styling */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${retailer.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <span className="text-white">{retailer.logo}</span>
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Brand name */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-purple-900 group-hover:text-purple-700 transition-colors duration-300">
                        {retailer.name}
                      </h3>
                      <p className="text-sm text-purple-600 group-hover:text-purple-500 transition-colors duration-300 mt-1">
                        เลือกซื้อได้เลย
                      </p>
                    </div>
                    
                    {/* Action button */}
                    <div className={`w-full py-2 px-4 rounded-xl bg-gradient-to-r ${retailer.gradient} text-white text-sm font-semibold text-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                      <div className="flex items-center justify-center gap-2">
                        <span>เข้าชม</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional call-to-action */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800">เลือกซื้อสินค้าตามสีมงคลประจำวันเพื่อเสริมดวง</span>
              <Sparkles className="h-4 w-4 text-purple-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
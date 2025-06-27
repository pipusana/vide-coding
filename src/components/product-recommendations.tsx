"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Sparkles } from "lucide-react"

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
    logo: string
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
      logo: "🛒",
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
      logo: "🛍️",
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
      logo: "🏪",
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
      logo: "👔",
      color: "bg-black",
      url: "https://hm.com/th",
      gradient: "from-gray-700 to-black"
    }
  }
]

const retailers = [
  { name: "Shopee", logo: "🛒", url: "https://shopee.co.th", gradient: "from-orange-400 to-red-500" },
  { name: "Lazada", logo: "🛍️", url: "https://lazada.co.th", gradient: "from-blue-400 to-indigo-600" },
  { name: "Uniqlo", logo: "🏪", url: "https://uniqlo.com/th", gradient: "from-red-400 to-pink-600" },
  { name: "H&M", logo: "👔", url: "https://hm.com/th", gradient: "from-gray-600 to-gray-800" }
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    <span className="text-sm text-gray-800 font-bold">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2 group-hover:text-purple-700 transition-colors">
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
                    <span className="mr-2 text-lg">{product.retailer.logo}</span>
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
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 ring-1 ring-purple-200/50">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl">🏪</span>
            หาซื้อเสื้อผ้าเพิ่มได้ที่:
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {retailers.map((retailer, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleRetailerClick(retailer)}
                className="flex flex-col items-center p-6 h-auto space-y-3 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 border-purple-200 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${retailer.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <span className="text-white text-xl">{retailer.logo}</span>
                </div>
                <span className="text-base font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                  {retailer.name}
                </span>
                <ExternalLink className="h-3 w-3 text-gray-500 group-hover:text-purple-500 transition-colors" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
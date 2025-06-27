"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink } from "lucide-react"

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
      url: "https://shopee.co.th"
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
      url: "https://lazada.co.th"
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
      url: "https://uniqlo.com/th"
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
      url: "https://hm.com/th"
    }
  }
]

const retailers = [
  { name: "Shopee", logo: "🛒", url: "https://shopee.co.th" },
  { name: "Lazada", logo: "🛍️", url: "https://lazada.co.th" },
  { name: "Uniqlo", logo: "🏪", url: "https://uniqlo.com/th" },
  { name: "H&M", logo: "👔", url: "https://hm.com/th" }
]

export default function ProductRecommendations() {
  const handleProductClick = (product: Product) => {
    window.open(product.retailer.url, '_blank')
  }

  const handleRetailerClick = (retailer: typeof retailers[0]) => {
    window.open(retailer.url, '_blank')
  }

  return (
    <div className="space-y-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>🛍️</span>
            <span>แนะนำสินค้าสำหรับวัน ศุกร์พิเศษ</span>
          </CardTitle>
          <p className="text-sm text-gray-600">
            เลือกซื้อเสื้อผ้าเสริมมงคลตามสีประจำวันได้ที่แพลตฟอร์มต่างๆ
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sampleProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <div className="aspect-square w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-4xl">👔</span>
                  </div>
                  <Badge 
                    variant="destructive" 
                    className="absolute top-2 right-2"
                  >
                    -21%
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-600">
                      ฿{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ฿{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    onClick={() => handleProductClick(product)}
                    className="w-full bg-black text-white hover:bg-gray-800"
                    size="sm"
                  >
                    <span className="mr-2">{product.retailer.logo}</span>
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
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">หาซื้อเสื้อผ้าเพิ่มได้ที่:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {retailers.map((retailer, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleRetailerClick(retailer)}
                className="flex flex-col items-center p-6 h-auto space-y-2 hover:bg-gray-50"
              >
                <span className="text-2xl">{retailer.logo}</span>
                <span className="text-sm font-medium">{retailer.name}</span>
                <ExternalLink className="h-3 w-3 text-gray-400" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
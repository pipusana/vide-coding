"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Sparkles, ShoppingCart, ShoppingBag, Store, Shirt } from "lucide-react"
import { getDayOfWeek, getThaiDate } from "@/lib/utils"

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

interface ProductRecommendationsProps {
  selectedDate: Date
}

// Day-specific color and product data
const dayProductData: Record<string, {
  color: string
  colorName: string
  gradient: string
  headerGradient: string
  products: Product[]
}> = {
  "อาทิตย์": {
    color: "red",
    colorName: "สีแดง",
    gradient: "from-red-500 to-rose-600",
    headerGradient: "from-red-600 to-rose-600",
    products: [
      {
        id: "sun1",
        name: "เสื้อยืดสีแดงเสริมโชค",
        price: 399,
        rating: 4.8,
        reviewCount: 2156,
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
        id: "sun2",
        name: "เดรสสีแดงสำหรับผู้หญิง",
        price: 1290,
        originalPrice: 1690,
        rating: 4.6,
        reviewCount: 892,
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
        id: "sun3",
        name: "เสื้อเชิ้ตสีแดงทรงสวย",
        price: 1590,
        rating: 4.7,
        reviewCount: 634,
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
        id: "sun4",
        name: "เสื้อกันหนาวสีแดง",
        price: 1999,
        rating: 4.5,
        reviewCount: 456,
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
  },
  "จันทร์": {
    color: "yellow",
    colorName: "สีเหลือง",
    gradient: "from-yellow-400 to-amber-600",
    headerGradient: "from-yellow-600 to-amber-600",
    products: [
      {
        id: "mon1",
        name: "เสื้อยืดสีเหลืองมงคล",
        price: 350,
        rating: 4.7,
        reviewCount: 1843,
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
        id: "mon2",
        name: "เดรสสีเหลืองสดใส",
        price: 1150,
        originalPrice: 1450,
        rating: 4.5,
        reviewCount: 765,
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
        id: "mon3",
        name: "เสื้อเชิ้ตสีเหลือง",
        price: 1390,
        rating: 4.6,
        reviewCount: 543,
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
        id: "mon4",
        name: "เสื้อแจ็คเก็ตสีเหลือง",
        price: 2190,
        rating: 4.4,
        reviewCount: 321,
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
  },
  "อังคาร": {
    color: "pink",
    colorName: "สีชมพู",
    gradient: "from-pink-400 to-rose-500",
    headerGradient: "from-pink-600 to-rose-600",
    products: [
      {
        id: "tue1",
        name: "เสื้อยืดสีชมพูน่ารัก",
        price: 425,
        rating: 4.9,
        reviewCount: 2345,
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
        id: "tue2",
        name: "เดรสสีชมพูหวาน",
        price: 1350,
        originalPrice: 1750,
        rating: 4.8,
        reviewCount: 987,
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
        id: "tue3",
        name: "เสื้อเชิ้ตสีชมพูอ่อน",
        price: 1290,
        rating: 4.7,
        reviewCount: 456,
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
        id: "tue4",
        name: "เสื้อสเวตเตอร์สีชมพู",
        price: 1890,
        rating: 4.6,
        reviewCount: 234,
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
  },
  "พุธ": {
    color: "green",
    colorName: "สีเขียว",
    gradient: "from-green-400 to-emerald-600",
    headerGradient: "from-green-600 to-emerald-600",
    products: [
      {
        id: "wed1",
        name: "เสื้อยืดสีเขียวธรรมชาติ",
        price: 380,
        rating: 4.6,
        reviewCount: 1567,
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
        id: "wed2",
        name: "เดรสสีเขียวสดชื่น",
        price: 1250,
        originalPrice: 1550,
        rating: 4.7,
        reviewCount: 845,
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
        id: "wed3",
        name: "เสื้อเชิ้ตสีเขียวใบไม้",
        price: 1490,
        rating: 4.8,
        reviewCount: 623,
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
        id: "wed4",
        name: "เสื้อฮูดสีเขียว",
        price: 2090,
        rating: 4.5,
        reviewCount: 378,
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
  },
  "พฤหัสบดี": {
    color: "gray",
    colorName: "สีเทา",
    gradient: "from-gray-400 to-slate-600",
    headerGradient: "from-gray-600 to-slate-600",
    products: [
      {
        id: "thu1",
        name: "เสื้อยืดสีเทาคลาสสิก",
        price: 420,
        rating: 4.7,
        reviewCount: 1789,
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
        id: "thu2",
        name: "เดรสสีเทาสุภาพ",
        price: 1390,
        originalPrice: 1690,
        rating: 4.6,
        reviewCount: 567,
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
        id: "thu3",
        name: "เสื้อเชิ้ตสีเทาเป็นทางการ",
        price: 1590,
        rating: 4.8,
        reviewCount: 445,
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
        id: "thu4",
        name: "เสื้อสูทสีเทา",
        price: 2590,
        rating: 4.9,
        reviewCount: 234,
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
  },
  "ศุกร์": {
    color: "blue",
    colorName: "สีน้ำเงิน",
    gradient: "from-blue-500 to-indigo-600",
    headerGradient: "from-blue-600 to-indigo-600",
    products: [
      {
        id: "fri1",
        name: "เสื้อยืดสีน้ำเงินสงบ",
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
        id: "fri2",
        name: "เดรสสีน้ำเงินเรียบหรู",
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
        id: "fri3",
        name: "เสื้อเชิ้ตสีน้ำเงินเข้ม",
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
        id: "fri4",
        name: "เสื้อแจ็คเก็ตยีนส์",
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
  },
  "เสาร์": {
    color: "purple",
    colorName: "สีม่วง",
    gradient: "from-purple-500 to-violet-600",
    headerGradient: "from-purple-600 to-violet-600",
    products: [
      {
        id: "sat1",
        name: "เสื้อยืดสีม่วงสวยงาม",
        price: 450,
        rating: 4.8,
        reviewCount: 2134,
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
        id: "sat2",
        name: "เดรสสีม่วงหรูหรา",
        price: 1590,
        originalPrice: 1990,
        rating: 4.9,
        reviewCount: 876,
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
        id: "sat3",
        name: "เสื้อเชิ้ตสีม่วงไวโอเลต",
        price: 1790,
        rating: 4.7,
        reviewCount: 654,
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
        id: "sat4",
        name: "เสื้อโค้ทสีม่วงเข้ม",
        price: 2990,
        rating: 4.6,
        reviewCount: 345,
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
  }
}

const retailers = [
  { name: "Shopee", logo: <ShoppingCart className="h-8 w-8" />, url: "https://shopee.co.th", gradient: "from-orange-400 to-red-500" },
  { name: "Lazada", logo: <ShoppingBag className="h-8 w-8" />, url: "https://lazada.co.th", gradient: "from-blue-400 to-indigo-600" },
  { name: "Uniqlo", logo: <Store className="h-8 w-8" />, url: "https://uniqlo.com/th", gradient: "from-red-400 to-pink-600" },
  { name: "H&M", logo: <Shirt className="h-8 w-8" />, url: "https://hm.com/th", gradient: "from-purple-500 to-pink-600" }
]

export default function ProductRecommendations({ selectedDate }: ProductRecommendationsProps) {
  const selectedDayOfWeek = getDayOfWeek(selectedDate)
  const selectedThaiDate = getThaiDate(selectedDate)
  const dayData = dayProductData[selectedDayOfWeek]

  const handleProductClick = (product: Product) => {
    window.open(product.retailer.url, '_blank')
  }

  const handleRetailerClick = (retailer: typeof retailers[0]) => {
    window.open(retailer.url, '_blank')
  }

  return (
    <div className="space-y-8">
      <Card className="w-full bg-white/90 backdrop-blur-sm shadow-xl border-0 ring-1 ring-purple-200/50">
        <CardHeader className={`bg-gradient-to-r ${dayData.headerGradient} text-white rounded-t-lg`}>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <span className="text-3xl">🛍️</span>
            <div>
              <span className="font-bold">แนะนำสินค้า{dayData.colorName} สำหรับ{selectedDayOfWeek}</span>
              <p className="text-white/90 text-base font-medium mt-1">
                เลือกซื้อเสื้อผ้า{dayData.colorName}เสริมมงคลตามสีประจำวัน {selectedThaiDate}
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dayData.products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden mb-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`aspect-square w-full bg-gradient-to-br ${dayData.gradient} opacity-20 flex items-center justify-center relative`}>
                    <span className="text-6xl filter drop-shadow-lg">👔</span>
                    <div className={`absolute inset-0 bg-gradient-to-t ${dayData.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
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
              <span className="text-white drop-shadow-sm">หาซื้อเสื้อผ้า{dayData.colorName}เพิ่มได้ที่</span>
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
              <span className="text-sm font-semibold text-purple-800">เลือกซื้อสินค้า{dayData.colorName}ตามสีมงคลประจำวันเพื่อเสริมดวง</span>
              <Sparkles className="h-4 w-4 text-purple-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
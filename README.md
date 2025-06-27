# สีประจำวัน - Thai Daily Lucky Colors Website

เว็บไซต์ดูดวงสีประจำวันแบบไทยๆ พร้อมระบบแนะนำสินค้าที่เหมาะกับสีมงคลประจำวัน

## 🌈 Features

### Core Features

- **🎨 สีประจำวัน 7 วัน** - แสดงสีมงคลและความหมายสำหรับแต่ละวัน
- **📅 เลือกวันที่** - Date picker ที่ใช้งานง่าย รองรับการเลือกวันที่แบบต่างๆ
- **🔮 ดำฤทธิ์ประจำวัน** - คำทำนายใน 5 หมวด (โชคลาภ, ความรัก, การงาน, การเงิน, เคล็ดลับดำรง)
- **🛍️ แนะนำสินค้า** - เชื่อมต่อกับ Shopee, Lazada, Uniqlo, H&M
- **📱 Responsive Design** - รองรับทุกขนาดหน้าจอ

### Design Features

- **🎭 Ultra Modern Design** - Dark theme พร้อม neon effects
- **✨ Advanced Animations** - Glassmorphism, 3D effects, floating particles
- **🌟 Interactive Elements** - Hover effects, micro-animations
- **💎 Gradient & Glow Effects** - สีสันสดใสและเอฟเฟกต์สวยงาม

## 🚀 Technology Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Shadcn/ui + Radix UI
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Database**: Redis (planned)

## 🎯 Latest Updates

### v2.0 - Ultra Modern Design (Current)

- **🌌 Extreme Dark Theme** พร้อม floating particles และ animated grid
- **💫 3D Visual Effects** พร้อม perspective transforms
- **🎨 Enhanced Typography** ขนาด 7xl-8xl พร้อม gradient glow effects
- **⚡ Advanced Interactions** พร้อม scale, translate, และ blur animations
- **🔧 Compact Date Picker** - ลดขนาดให้กระชับ เปลี่ยนสีดำเป็นสีม่วงให้เข้าธีม

### v1.5 - Modern Design Upgrade

- **🎨 Color Enhancement** - ปรับสีตัวอักษรให้ชัดเจนและอ่านง่าย
- **🏗️ Layout Improvements** - ปรับ structure ให้เป็นระเบียบ
- **📱 Mobile Optimization** - ปรับปรุงประสบการณ์บนมือถือ

## 📦 Installation

```bash
# Clone repository
git clone [repository-url]
cd vibe-coding

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page (Ultra modern design)
├── components/
│   ├── ui/                 # Shadcn UI components
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   └── badge.tsx
│   ├── header.tsx          # Modern glassmorphism header
│   ├── daily-color-section.tsx  # Hero section with 3D effects
│   ├── daily-fortune.tsx   # Enhanced fortune cards
│   ├── product-recommendations.tsx  # E-commerce integration
│   └── date-picker.tsx     # Compact interactive date picker
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design System

### Color Palette

- **Primary**: Purple gradients (สีม่วง)
- **Secondary**: Pink to Blue gradients
- **Accent**: Yellow, Orange, Green accents
- **Background**: Dark slate with purple tones
- **Text**: White with purple tints

### Animation System

- **Entrance**: Fade-in, Slide-up with stagger
- **Hover**: Scale, Translate, Glow effects
- **Background**: Floating particles, Grid movement
- **Interactive**: 3D transforms, Perspective effects

### Components Design

- **Cards**: Glassmorphism with backdrop-blur
- **Buttons**: Gradient backgrounds with glow effects
- **Date Picker**: Compact horizontal layout (3-column quick select)
- **Typography**: Black font weights with gradient texts

## 🌟 Key Improvements

### Performance

- ✅ CSS-based animations (no JavaScript libraries)
- ✅ Optimized bundle size
- ✅ Fast loading with Next.js optimization

### User Experience

- ✅ Intuitive date selection (horizontal quick buttons)
- ✅ Clear visual hierarchy
- ✅ Accessible interactive elements
- ✅ No overlapping z-index issues

### Visual Appeal

- ✅ Consistent purple/pink theme throughout
- ✅ No jarring black elements
- ✅ Smooth transitions and micro-interactions
- ✅ Modern dark theme with neon accents

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 90+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## 🔧 Configuration

### Environment Variables

```env
# Add your configuration here
NEXT_PUBLIC_API_URL=your_api_url
```

### Customization

- Colors: Edit `tailwind.config.js`
- Fonts: Modify `app/layout.tsx`
- Components: Customize in `src/components/`

## 📈 Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Shadcn/ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful icon set
- **Thai Culture** - Traditional color meanings and fortune telling

---

Made with ❤️ for Thai culture and modern web technologies

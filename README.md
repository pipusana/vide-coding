# Daily Lucky Colors Website (สีประจำวัน)

เว็บไซต์สีประจำวันที่แสดงดวงชะตาและความโชคดีประจำวัน พร้อมแนะนำสินค้าเสื้อผ้าเสริมมงคลจากร้านค้าออนไลน์ชั้นนำ

## 🌈 Features

### หน้าหลัก (Main Features)

- **สีประจำวัน** - แสดงสีมงคลประจำวันพร้อมความหมาย
- **ดำฤทธิ์ประจำวัน** - ดูดวงในหมวดต่างๆ (โชคลาภ, ความรัก, การงาน, การเงิน, เคล็ดลับดำรง)
- **แนะนำสินค้า** - เสื้อผ้าเสริมมงคลจาก Shopee, Lazada, Uniqlo, H&M
- **Responsive Design** - ใช้งานได้ทุกอุปกรณ์

### เทคโนโลยี (Technology Stack)

- **Next.js 15.3.4** - React Framework with App Router
- **React 19** - User Interface Library
- **TypeScript** - Type Safety
- **Tailwind CSS 4** - Styling Framework
- **Shadcn/ui** - UI Component Library
- **Axios** - HTTP Client (พร้อมสำหรับ API)
- **Redis** - Database (พร้อมสำหรับ Backend)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm หรือ yarn
- Git

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd vibe-coding
```

2. Install dependencies

```bash
npm install
```

3. Run development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # หน้าหลัก
│   ├── layout.tsx         # Layout หลัก
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # UI Components
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   └── badge.tsx
│   ├── header.tsx         # Header ของเว็บ
│   ├── daily-color-section.tsx    # ส่วนแสดงสีประจำวัน
│   ├── daily-fortune.tsx          # ส่วนดำฤทธิ์ประจำวัน
│   └── product-recommendations.tsx # ส่วนแนะนำสินค้า
└── lib/
    └── utils.ts           # Utility functions
```

## 🛍️ E-commerce Integration

เว็บไซต์รองรับการเชื่อมต่อกับแพลตฟอร์มต่างๆ:

- **Shopee** - สินค้าราคาประหยัด
- **Lazada** - สินค้าแบรนด์ดัง
- **Uniqlo** - เสื้อผ้าคุณภาพ
- **H&M** - แฟชั่นสมัยใหม่

## 🎨 UI Components

### Cards

- Daily color information cards
- Fortune category cards
- Product recommendation cards

### Interactive Elements

- External shopping links
- Responsive navigation
- Rating displays

## 📱 Responsive Design

- **Mobile First** - ออกแบบสำหรับมือถือก่อน
- **Tablet Optimized** - เหมาะสำหรับแท็บเล็ต
- **Desktop Enhanced** - ใช้งานเต็มประสิทธิภาพบนเดสก์ท็อป

## 🔮 Future Enhancements

### Backend Features

- [ ] Redis database integration
- [ ] REST API endpoints
- [ ] User authentication
- [ ] Personalized recommendations

### Advanced Features

- [ ] Real-time fortune updates
- [ ] Social sharing
- [ ] Multi-language support
- [ ] Admin dashboard

## 🧪 Development

### Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Style

- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Tailwind CSS utilities

## 📚 Documentation

- [Architecture](.ai/architecture.md) - Technical architecture
- [Checklist](.ai/checklist.md) - Development progress

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Shadcn/ui for beautiful components
- Tailwind CSS for styling system
- Next.js team for the amazing framework
- Thai fortune telling traditions

---

**Note**: ข้อมูลเกี่ยวกับดวงชะตาและสีมงคลในเว็บไซต์นี้ เป็นเพียงความเชื่อและความบันเทิงเท่านั้น

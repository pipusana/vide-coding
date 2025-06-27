# Architecture - Daily Lucky Colors Website

## Project Overview

เว็บไซต์สีประจำวัน (Daily Lucky Colors) เป็นเว็บแอปพลิเคชันที่แสดงข้อมูลสีมงคลประจำวันและแนะนำสินค้าเสื้อผ้าจากร้านค้าออนไลน์ต่างๆ

## Technology Stack

### Frontend

- **Next.js 15.3.4** - React Framework with App Router
- **React 19** - User Interface Library
- **TypeScript** - Type Safety
- **Tailwind CSS 4** - Styling Framework
- **Shadcn/ui** - UI Component Library

### Dependencies

- **Radix UI** - Headless UI Components
- **Lucide React** - Icon Library
- **Class Variance Authority** - Component Variants
- **clsx & tailwind-merge** - Utility Functions
- **date-fns** - Date Manipulation
- **axios** - HTTP Client (Ready for API integration)

## Architecture Pattern

### File Structure

```
src/
├── app/
│   ├── page.tsx           # Main homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   └── badge.tsx
│   ├── header.tsx         # Site header
│   ├── daily-color-section.tsx    # Daily color information
│   ├── daily-fortune.tsx          # Fortune categories
│   └── product-recommendations.tsx # Product showcase
└── lib/
    └── utils.ts           # Utility functions
```

### Component Architecture

#### 1. Server Components (Default)

- **Header**: Static header with branding
- **DailyColorSection**: Shows daily color information
- **DailyFortune**: Displays fortune categories
- **Main Layout**: Overall page structure

#### 2. Client Components

- **ProductRecommendations**: Interactive product cards with external links

### Data Flow

1. **Static Data**: Currently uses hardcoded Thai content for demonstrations
2. **Dynamic Content**: Ready for API integration with Redis backend
3. **External Links**: Direct links to e-commerce platforms (Shopee, Lazada, Uniqlo, H&M)

## Key Features

### 1. Daily Color Display

- Shows current day in Thai
- Displays lucky colors with visual representations
- Responsive color circles and information cards

### 2. Fortune Categories

- Five main categories: โชคลาภ, ความรัก, การงาน, การเงิน, เคล็ดลับดำรง
- Color-coded displays
- Thai descriptions

### 3. Product Recommendations

- E-commerce integration ready
- Product cards with ratings and prices
- Direct links to retailer websites
- Responsive grid layout

### 4. Responsive Design

- Mobile-first approach
- Tablet and desktop optimizations
- Flexible grid systems

## Future Enhancements

### Backend Integration

- Redis database for dynamic content
- REST API endpoints for:
  - Daily fortune data
  - Product recommendations
  - User preferences

### Additional Features

- User authentication
- Personalized recommendations
- Social sharing
- Multi-language support
- Admin dashboard for content management

## Performance Optimizations

- Static generation for main content
- Lazy loading for product images
- Optimized bundle size
- CDN-ready for production deployment

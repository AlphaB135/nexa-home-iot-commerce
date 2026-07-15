import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'ESP32 DevKit V4',
    slug: 'esp32-s3-devkit',
    description: 'บอร์ดพัฒนา ESP32 WiFi + Bluetooth',
    price: 215,
    stock: 50,
    categoryId: 'mcu',
    images: [],
    specs: {},
    rating: 5.0,
    reviewsCount: 48,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '2',
    name: '4 Channel Relay Module',
    slug: 'relay-4ch',
    description: 'โมดูลรีเลย์ 4 ช่อง 5V',
    price: 165,
    stock: 30,
    categoryId: 'actuator',
    images: [],
    specs: {},
    rating: 4.9,
    reviewsCount: 19,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '3',
    name: 'DHT22 Temperature & Humidity Sensor',
    slug: 'dht22-sensor',
    description: 'เซนเซอร์วัดอุณหภูมิและความชื้น',
    price: 75,
    stock: 120,
    categoryId: 'sensor',
    images: [],
    specs: {},
    rating: 4.8,
    reviewsCount: 32,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '4',
    name: '0.96" OLED Display I2C',
    slug: 'oled-096',
    description: 'จอ OLED 0.96 นิ้ว I2C',
    price: 128,
    stock: 80,
    categoryId: 'display',
    images: [],
    specs: {},
    rating: 4.7,
    reviewsCount: 25,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '5',
    name: 'Sonoff Basic R3',
    slug: 'sonoff-basic',
    description: 'สวิตช์อัจฉริยะ WiFi',
    price: 220,
    stock: 40,
    categoryId: 'smarthome',
    images: [],
    specs: {},
    rating: 4.8,
    reviewsCount: 86,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '6',
    name: 'Power Supply 5V 2A',
    slug: 'power-supply',
    description: 'พาวเวอร์ซัพพลาย 5V 2A',
    price: 110,
    stock: 200,
    categoryId: 'power',
    images: [],
    specs: {},
    rating: 4.6,
    reviewsCount: 54,
    createdAt: '',
    updatedAt: ''
  }
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Products List */}
        <div className="lg:col-span-9 space-y-6">
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-black text-slate-805">สินค้าแนะนำ</h2>
            <span className="bg-orange-50 text-orange-600 text-[9px] font-black px-2 py-0.5 rounded flex items-center space-x-0.5">
              <span>🔥</span> <span>ยอดนิยม</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mockProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Right Column: Project Promotion Banner */}
        <div className="lg:col-span-3 flex">
          <div className="bg-gradient-to-b from-blue-50 to-indigo-50 border border-slate-100 rounded-3xl p-8 text-center flex flex-col justify-between items-center shadow-sm w-full relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-300/10 rounded-full blur-2xl"></div>
            
            <div className="space-y-4 z-10">
              <h3 className="text-sm font-black text-slate-800 leading-tight">
                เริ่มต้นโปรเจกต์ <br />
                <span className="text-blue-650">Smart Home ของคุณ</span>
              </h3>
              <p className="text-slate-500 text-[10px] leading-relaxed max-w-[180px] mx-auto font-medium">
                รวมไอเดียและโค้ดตัวอย่าง พร้อมอุปกรณ์แนะนำ
              </p>
            </div>

            {/* 3D-like Vector House Graphic */}
            <div className="my-6 w-full max-w-[130px] z-10 flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-full h-auto text-blue-500 fill-none">
                <path d="M80 30 L130 65 L130 115 L80 145 L30 115 L30 65 Z" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" strokeWidth="2.2" strokeLinejoin="round" />
                <path d="M80 30 L80 145" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M30 65 L80 95 L130 65" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round" />
                <rect x="45" y="80" width="15" height="15" rx="2" stroke="#3b82f6" strokeWidth="1.5" />
                <rect x="100" y="80" width="15" height="15" rx="2" stroke="#3b82f6" strokeWidth="1.5" />
                <path d="M72 110 L72 140 L88 140 L88 110 Z" stroke="#3b82f6" strokeWidth="1.5" />
                <circle cx="80" cy="30" r="3" fill="#10b981" />
                <circle cx="30" cy="65" r="3" fill="#6366f1" />
                <circle cx="130" cy="65" r="3" fill="#06b6d4" />
              </svg>
            </div>

            <Link href="/projects" className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl text-[10px] tracking-wide shadow-md shadow-blue-500/10 hover:shadow-blue-500/30 transition-all flex items-center justify-center space-x-1.5 z-10">
              <span>ดูโปรเจกต์ทั้งหมด</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

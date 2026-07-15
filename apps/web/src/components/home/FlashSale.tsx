'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types';

const saleProducts: Product[] = [
  {
    id: 'sale-1',
    name: 'Raspberry Pi 4 Model B (8GB)',
    slug: 'raspberry-pi-4-8gb',
    description: 'Credit card sized computer loaded with 8GB RAM, dual micro HDMI outputs.',
    price: 3200,
    salePrice: 2499,
    stock: 12,
    categoryId: 'mcu',
    images: [],
    specs: {},
    rating: 5.0,
    reviewsCount: 110,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: 'sale-2',
    name: 'Soil Moisture Sensor v1.2',
    slug: 'soil-moisture-sensor',
    description: 'Capacitive corrosion resistant soil hydration measurement sensor probe.',
    price: 50,
    salePrice: 29,
    stock: 45,
    categoryId: 'sensor',
    images: [],
    specs: {},
    rating: 4.7,
    reviewsCount: 84,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: 'sale-3',
    name: 'SG90 Micro Servo Motor 9g',
    slug: 'sg90-servo',
    description: 'Lightweight micro servo with high reliability, 180 degrees rotation.',
    price: 65,
    salePrice: 39,
    stock: 3,
    categoryId: 'motor',
    images: [],
    specs: {},
    rating: 4.8,
    reviewsCount: 198,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: 'sale-4',
    name: 'Zigbee 3.0 Smart Gateway',
    slug: 'zigbee-gateway',
    description: 'Universal smart bridge to control and automate your Zigbee node networks.',
    price: 1200,
    salePrice: 899,
    stock: 18,
    categoryId: 'smarthome',
    images: [],
    specs: {},
    rating: 4.9,
    reviewsCount: 37,
    createdAt: '',
    updatedAt: ''
  }
];

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState(8 * 60 * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 10 ? prev - 10 : 0));
    }, 10);
    return () => clearInterval(timer);
  }, []);

  const hrs = Math.floor(timeLeft / (1000 * 60 * 60));
  const mins = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secs = Math.floor((timeLeft / 1000) % 60);
  const ms = Math.floor((timeLeft % 1000) / 10);

  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-505 text-white relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <span className="bg-white/20 border border-white/10 text-[9px] font-black px-2 py-0.5 rounded-full uppercase inline-block">Flash Offer</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Midnight Blitz Flash Sale</h2>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center space-x-2 text-slate-900 font-bold shrink-0">
            <span className="text-white text-xs font-semibold mr-1">ENDS IN:</span>
            <div className="bg-white px-3 py-2 rounded-xl flex flex-col items-center justify-center min-w-[45px]">
              <span className="text-sm font-extrabold">{hrs.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-white">:</span>
            <div className="bg-white px-3 py-2 rounded-xl flex flex-col items-center justify-center min-w-[45px]">
              <span className="text-sm font-extrabold">{mins.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-white">:</span>
            <div className="bg-white px-3 py-2 rounded-xl flex flex-col items-center justify-center min-w-[45px]">
              <span className="text-sm font-extrabold">{secs.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-white">:</span>
            <div className="bg-white px-3 py-2 rounded-xl flex flex-col items-center justify-center min-w-[45px]">
              <span className="text-sm font-extrabold text-red-500">{ms.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {saleProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

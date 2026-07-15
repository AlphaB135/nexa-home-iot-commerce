'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/home/ProductCard';
import { Product } from '@/types';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const allProducts: Product[] = [
  {
    id: '1',
    name: 'ESP32-S3 DevKit',
    slug: 'esp32-s3-devkit',
    description: 'High-performance dual-core micro-controller with support for Wi-Fi and BLE 5.',
    price: 299,
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
    name: 'DHT22 Temp & Humidity Sensor',
    slug: 'dht22-sensor',
    description: 'High accuracy capacitive sensor to monitor ambient temperature and relative humidity.',
    price: 89,
    stock: 120,
    categoryId: 'sensors',
    images: [],
    specs: {},
    rating: 4.8,
    reviewsCount: 32,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '3',
    name: '4CH Optocoupler Relay Module',
    slug: 'relay-4ch',
    description: 'Optocoupler isolated 4-channel relay board suitable for home automation switching.',
    price: 149,
    stock: 30,
    categoryId: 'relays',
    images: [],
    specs: {},
    rating: 4.9,
    reviewsCount: 19,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '4',
    name: 'OLED Display Module 0.96"',
    slug: 'oled-096',
    description: 'Sleek I2C 128x64 graphic screen display with high readability for telemetry feeds.',
    price: 119,
    stock: 80,
    categoryId: 'displays',
    images: [],
    specs: {},
    rating: 4.7,
    reviewsCount: 25,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '5',
    name: 'ESP32-CAM HD Module',
    slug: 'esp32-cam',
    description: 'Integrated dev board equipped with OV2640 camera, TF card slot, and LED flash.',
    price: 259,
    stock: 4,
    categoryId: 'cameras',
    images: [],
    specs: {},
    rating: 4.8,
    reviewsCount: 86,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '6',
    name: 'DC-DC Buck Converter 5V 3A',
    slug: 'buck-5v',
    description: 'Highly efficient step-down voltage regulator module converting input voltages.',
    price: 79,
    stock: 200,
    categoryId: 'power',
    images: [],
    specs: {},
    rating: 4.6,
    reviewsCount: 54,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '7',
    name: 'LoRa SX1276 Node Module',
    slug: 'lora-sx1276',
    description: 'Long-range telemetry wireless transceiver board operating on 915MHz frequency.',
    price: 349,
    stock: 15,
    categoryId: 'wireless',
    images: [],
    specs: {},
    rating: 5.0,
    reviewsCount: 14,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '8',
    name: 'Smart Plug Matter & Thread',
    slug: 'smart-plug-matter',
    description: 'Next-generation smart power plug featuring Matter support and Thread networking.',
    price: 499,
    stock: 63,
    categoryId: 'smarthome',
    images: [],
    specs: {},
    rating: 4.9,
    reviewsCount: 63,
    createdAt: '',
    updatedAt: ''
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number>(500);

  const filteredProducts = allProducts.filter(p => {
    const matchCat = selectedCategory === 'all' || p.categoryId === selectedCategory;
    const matchPrice = p.price <= priceRange;
    return matchCat && matchPrice;
  });

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header toolbar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">Developer Hardware Store</h1>
            <p className="text-slate-500 text-xs mt-0.5">Showing {filteredProducts.length} premium IoT modules</p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <button className="flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200/80 text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-all">
              <span>Sort: Popularity</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Sidebar Filters */}
          <aside className="space-y-6 lg:sticky lg:top-20">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  <span>Filters</span>
                </h3>
                <button 
                  onClick={() => { setSelectedCategory('all'); setPriceRange(500); }}
                  className="text-[10px] text-indigo-500 hover:text-indigo-700 font-bold"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">Category</h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" checked={selectedCategory === 'all'} onChange={() => setSelectedCategory('all')} className="text-blue-600 focus:ring-blue-400" />
                    <span>All Products</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" checked={selectedCategory === 'mcu'} onChange={() => setSelectedCategory('mcu')} className="text-blue-600 focus:ring-blue-400" />
                    <span>Microcontrollers</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" checked={selectedCategory === 'sensors'} onChange={() => setSelectedCategory('sensors')} className="text-blue-600 focus:ring-blue-400" />
                    <span>Sensors</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" checked={selectedCategory === 'displays'} onChange={() => setSelectedCategory('displays')} className="text-blue-600 focus:ring-blue-400" />
                    <span>Displays</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" checked={selectedCategory === 'smarthome'} onChange={() => setSelectedCategory('smarthome')} className="text-blue-600 focus:ring-blue-400" />
                    <span>Smart Home</span>
                  </label>
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">Max Price</h4>
                  <span className="text-xs font-bold text-indigo-950 font-semibold">฿{priceRange}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="500" 
                  step="10"
                  value={priceRange} 
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Stock switch */}
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs font-semibold text-slate-700">In Stock Only</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 rounded focus:ring-blue-400" />
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 pt-6 border-t border-slate-200">
              <button className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-xs font-bold rounded-xl text-slate-650">Prev</button>
              <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-sm">1</button>
              <button className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-xs font-bold rounded-xl text-slate-650">2</button>
              <button className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-xs font-bold rounded-xl text-slate-655">Next</button>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}

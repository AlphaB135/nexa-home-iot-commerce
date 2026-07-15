'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/home/ProductCard';
import { Star, ShieldCheck, Heart, GitCompare, FileText } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { toast } from 'sonner';
import { Button } from '@nexahome/ui';
import { Product } from '@/types';

const product: Product = {
  id: '1',
  name: 'ESP32-S3 DevKit v4',
  slug: 'esp32-s3-devkit',
  description: 'High-performance dual-core microcontroller equipped with Xtensa 32-bit LX7 core operating at 240MHz. Supports stable 2.4GHz Wi-Fi and Bluetooth 5.0 Low Energy, loaded with 8MB flash and 2MB PSRAM.',
  price: 299,
  stock: 12,
  categoryId: 'mcu',
  images: [],
  specs: {
    'Core Processor': 'Xtensa 32-bit LX7 Dual-Core',
    'Speed': '240 MHz',
    'Flash memory': '8 MB',
    'SRAM': '512 KB',
    'PSRAM': '2 MB',
    'Wi-Fi': '802.11 b/g/n (up to 150 Mbps)',
    'Bluetooth': 'V5.0 BLE'
  },
  rating: 4.9,
  reviewsCount: 68,
  createdAt: '',
  updatedAt: ''
};

const relatedProducts: Product[] = [
  {
    id: '2',
    name: 'DHT22 Sensor',
    slug: 'dht22-sensor',
    description: 'Ambient temp/humidity tracking module.',
    price: 89,
    stock: 20,
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
    name: '4CH Relay Module',
    slug: 'relay-4ch',
    description: 'Optocoupler isolated power relays.',
    price: 149,
    stock: 15,
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
    name: 'OLED Display 0.96"',
    slug: 'oled-096',
    description: 'Sleek graphic OLED screen.',
    price: 119,
    stock: 8,
    categoryId: 'displays',
    images: [],
    specs: {},
    rating: 4.7,
    reviewsCount: 25,
    createdAt: '',
    updatedAt: ''
  }
];

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState<'desc' | 'spec' | 'datasheet' | 'reviews'>('desc');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success(`Added ${quantity}x ${product.name} to cart!`);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Main Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Gallery Blueprint Placeholder */}
          <div className="space-y-4">
            <div className="h-80 w-full bg-gradient-to-tr from-indigo-650 to-indigo-850 rounded-3xl relative flex items-center justify-center p-8 text-white shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
              <span className="text-6xl">🔌</span>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              <div className="h-16 bg-slate-100 hover:bg-slate-200 border border-indigo-400 rounded-xl cursor-pointer flex items-center justify-center text-xl">🔌</div>
              <div className="h-16 bg-slate-100 hover:bg-slate-200 border border-transparent rounded-xl cursor-pointer flex items-center justify-center text-xl">⚙️</div>
              <div className="h-16 bg-slate-100 hover:bg-slate-200 border border-transparent rounded-xl cursor-pointer flex items-center justify-center text-xl">📡</div>
              <div className="h-16 bg-slate-100 hover:bg-slate-200 border border-transparent rounded-xl cursor-pointer flex items-center justify-center text-xl">🛡️</div>
            </div>
          </div>

          {/* Product Meta */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Microcontroller</span>
                <span className="text-xs text-slate-400">SKU: MCU-ESP32S3-V4</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">{product.name}</h1>
              
              <div class="flex items-center space-x-2 pt-1">
                <div className="flex items-center text-amber-400 text-sm">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <strong className="ml-1 font-bold text-slate-800">{product.rating.toFixed(1)}</strong>
                </div>
                <span className="text-xs text-slate-400 font-medium">({product.reviewsCount} reviews)</span>
                <span className="text-slate-200">•</span>
                <span className="text-xs text-emerald-500 font-bold">Only {product.stock} items left in stock</span>
              </div>
            </div>

            <div className="border-y border-slate-100 py-4 flex items-baseline space-x-3">
              <span className="text-3xl font-black text-indigo-950">{formatPrice(product.price)}</span>
              <span className="text-xs text-slate-400">VAT Included</span>
            </div>

            <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">{product.description}</p>

            {/* Stepper + Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-55">
                  <button onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)} className="px-3.5 py-2 hover:bg-slate-100 font-bold text-sm">-</button>
                  <span className="px-4 text-xs font-bold text-slate-800">{quantity}</span>
                  <button onClick={() => setQuantity(prev => prev + 1)} className="px-3.5 py-2 hover:bg-slate-100 font-bold text-sm">+</button>
                </div>
                <Button onClick={handleAddToCart} className="flex-1 py-3 text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20">Add to Cart</Button>
              </div>

              <div className="flex space-x-3 text-slate-500 text-xs font-semibold">
                <button className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-rose-500 transition-colors">
                  <Heart className="h-4 w-4" /> <span>Add to Wishlist</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  <GitCompare className="h-4 w-4" /> <span>Compare specs</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-100 space-y-3.5 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-4 w-4 text-indigo-500" />
                <span>Genuine product guaranteed with 2 years exchange warranty</span>
              </div>
            </div>

          </div>
        </div>

        {/* Tabs section */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex space-x-6 border-b border-slate-100 pb-3 text-xs font-bold text-slate-400">
            <button onClick={() => setActiveTab('desc')} className={`pb-2.5 transition-all ${activeTab === 'desc' ? 'text-indigo-650 border-b-2 border-indigo-650' : 'hover:text-slate-800'}`}>Description</button>
            <button onClick={() => setActiveTab('spec')} className={`pb-2.5 transition-all ${activeTab === 'spec' ? 'text-indigo-650 border-b-2 border-indigo-655' : 'hover:text-slate-800'}`}>Specifications</button>
            <button onClick={() => setActiveTab('datasheet')} className={`pb-2.5 transition-all ${activeTab === 'datasheet' ? 'text-indigo-655 border-b-2 border-indigo-655' : 'hover:text-slate-800'}`}>Datasheet</button>
            <button onClick={() => setActiveTab('reviews')} className={`pb-2.5 transition-all ${activeTab === 'reviews' ? 'text-indigo-655 border-b-2 border-indigo-655' : 'hover:text-slate-800'}`}>Reviews</button>
          </div>

          <div className="py-6 text-xs sm:text-sm text-slate-550 leading-relaxed min-h-[160px]">
            {activeTab === 'desc' && (
              <p>ESP32-S3 DevKit is equipped with standard header pins breakouts. Perfect to deploy smart home node controls, wireless sensors grids, and machine learning models directly at the Edge. Full libraries support on PlatformIO and Arduino frameworks.</p>
            )}
            
            {activeTab === 'spec' && (
              <table className="w-full max-w-md text-left text-xs border-collapse">
                <tbody>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <tr key={key} className="border-b border-slate-100">
                      <td className="py-2.5 font-bold text-slate-700 w-1/3">{key}</td>
                      <td className="py-2.5 text-slate-500">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'datasheet' && (
              <div className="flex items-center space-x-3.5 bg-slate-55 p-4.5 rounded-2xl border border-slate-100 max-w-sm">
                <FileText className="h-8 w-8 text-rose-500" />
                <div>
                  <h4 className="font-bold text-xs text-slate-800">ESP32-S3-DevKit-v4_Datasheet.pdf</h4>
                  <p className="text-[10px] text-slate-400">PDF Document • 4.2 MB</p>
                </div>
                <button className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg ml-auto hover:bg-blue-500">Download</button>
              </div>
            )}

            {activeTab === 'reviews' && (
              <p>No verified reviews for v4 batch yet. Be the first to leave feedback!</p>
            )}
          </div>
        </div>

        {/* Related Products Grid */}
        <section className="space-y-6 pt-6">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Related IoT Hardware</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

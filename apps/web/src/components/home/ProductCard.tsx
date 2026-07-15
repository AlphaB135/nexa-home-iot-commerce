'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isBestSeller = product.slug === 'esp32-s3-devkit';
  const isNew = product.slug === 'relay-4ch';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`เพิ่ม ${product.name} ลงในตะกร้าแล้ว!`);
  };

  // Helper to render high-fidelity custom SVGs representing each IoT product hardware
  const renderHardwareSVG = () => {
    switch (product.slug) {
      case 'esp32-s3-devkit':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-800 animate-float-slow" fill="none">
            <rect x="35" y="20" width="50" height="80" rx="3" fill="#1e293b" />
            <rect x="40" y="30" width="40" height="30" rx="1.5" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M30 25 h5 M30 35 h5 M30 45 h5 M30 55 h5 M30 65 h5 M30 75 h5 M30 85 h5 M30 95 h5" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
            <path d="M85 25 h5 M85 35 h5 M85 45 h5 M85 55 h5 M85 65 h5 M85 75 h5 M85 85 h5 M85 95 h5" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
            <rect x="52" y="96" width="16" height="6" rx="1" fill="#94a3b8" />
            <text x="60" y="48" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">ESP32</text>
            <circle cx="60" cy="75" r="3" fill="#ef4444" className="animate-pulse" />
          </svg>
        );
      case 'relay-4ch':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-800" fill="none">
            <rect x="25" y="30" width="70" height="60" rx="4" fill="#0f766e" />
            <rect x="32" y="38" width="11" height="28" rx="1" fill="#2563eb" stroke="#3b82f6" strokeWidth="1" />
            <rect x="46" y="38" width="11" height="28" rx="1" fill="#2563eb" stroke="#3b82f6" strokeWidth="1" />
            <rect x="60" y="38" width="11" height="28" rx="1" fill="#2563eb" stroke="#3b82f6" strokeWidth="1" />
            <rect x="74" y="38" width="11" height="28" rx="1" fill="#2563eb" stroke="#3b82f6" strokeWidth="1" />
            <rect x="32" y="68" width="11" height="12" fill="#475569" />
            <rect x="46" y="68" width="11" height="12" fill="#475569" />
            <rect x="60" y="68" width="11" height="12" fill="#475569" />
            <rect x="74" y="68" width="11" height="12" fill="#475569" />
            <text x="60" y="88" fill="#fff" fontSize="5" fontWeight="bold" textAnchor="middle">4CH RELAY</text>
          </svg>
        );
      case 'dht22-sensor':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-800" fill="none">
            <rect x="40" y="25" width="40" height="55" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M45 35 h30 M45 45 h30 M45 55 h30 M45 65 h30" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M50 25 v55 M60 25 v55 M70 25 v55" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M50 80 v18 M60 80 v18 M70 80 v18" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case 'oled-096':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-800" fill="none">
            <rect x="30" y="25" width="60" height="70" rx="3" fill="#1e293b" />
            <rect x="35" y="38" width="50" height="34" rx="1" fill="#000" stroke="#3b82f6" strokeWidth="1.5" />
            <path d="M45 25 v-6 M55 25 v-6 M65 25 v-6 M75 25 v-6" stroke="#94a3b8" strokeWidth="2" />
            <text x="60" y="58" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" className="animate-pulse">28.5°C</text>
            <text x="60" y="90" fill="#94a3b8" fontSize="6" textAnchor="middle">I2C OLED</text>
          </svg>
        );
      case 'sonoff-basic':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-800" fill="none">
            <rect x="25" y="40" width="70" height="40" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="45" cy="60" r="4" fill="#3b82f6" />
            <rect x="65" y="57" width="16" height="6" rx="1" fill="#cbd5e1" />
            <path d="M25 40 L35 40 L35 80 L25 80 Z" fill="#e2e8f0" />
            <path d="M95 40 L85 40 L85 80 L95 80 Z" fill="#e2e8f0" />
            <text x="60" y="74" fill="#94a3b8" fontSize="5" fontWeight="bold" textAnchor="middle">SONOFF</text>
          </svg>
        );
      case 'power-supply':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 text-slate-800" fill="none">
            <rect x="25" y="30" width="70" height="60" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M30 35 h60 M30 43 h60 M30 51 h60 M30 59 h60 M30 67 h60 M30 75 h60" stroke="#788896" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="30" y="80" width="50" height="10" fill="#1e293b" />
            <path d="M35 80 v10 M45 80 v10 M55 80 v10 M65 80 v10 M75 80 v10" stroke="#f59e0b" strokeWidth="1.5" />
          </svg>
        );
      default:
        return (
          <div className="text-3xl">🔌</div>
        );
    }
  };

  return (
    <div className="group bg-white rounded-3xl border border-slate-100/90 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col overflow-hidden relative">
      
      {/* Badge Pills */}
      {isBestSeller && (
        <span className="absolute top-3.5 left-3.5 z-10 bg-purple-50 text-purple-650 text-[8px] font-black px-2.5 py-1 rounded-lg shadow-sm tracking-wider">
          BEST SELLER
        </span>
      )}
      {isNew && (
        <span className="absolute top-3.5 left-3.5 z-10 bg-emerald-55 text-emerald-650 text-[8px] font-black px-2.5 py-1 rounded-lg shadow-sm tracking-wider">
          NEW
        </span>
      )}

      {/* Image Block */}
      <div className="h-44 w-full bg-slate-50/50 relative flex items-center justify-center p-6 transition-all duration-300">
        {renderHardwareSVG()}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <h3 className="font-bold text-xs text-slate-800 group-hover:text-blue-500 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-black text-blue-500">
            {formatPrice(product.price)}
          </span>
          
          <button 
            onClick={handleAddToCart}
            className="p-2.5 bg-blue-600 hover:bg-blue-550 text-white rounded-full transition-all duration-200 flex items-center justify-center shadow-md shadow-blue-500/10 hover:shadow-blue-500/30"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}

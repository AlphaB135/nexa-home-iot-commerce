import React from 'react';
import Link from 'next/link';
import { Folder, Smartphone, Wifi, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-indigo-50/20 to-white border border-slate-100 rounded-[32px] p-8 lg:p-12 shadow-sm">
        
        {/* Abstract glowing backgrounds */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Side Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center text-blue-600 font-extrabold tracking-widest text-[10px] uppercase">
              BUILD • CONNECT • AUTOMATE
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-855 leading-tight">
              สร้างบ้านอัจฉริยะ <br />
              เริ่มต้นที่นี่ กับ <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">SMARTIO</span>
            </h1>
            
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
              รวมอุปกรณ์ IoT คุณภาพสำหรับคนรัก Smart Home <br />
              ครบ จบ ในที่เดียว พร้อมส่งไว ส่งจริง สินค้ามีประกัน
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link href="/products" className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl text-xs text-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-1.5">
                <span>ช้อปเลย</span>
                <span className="text-sm">→</span>
              </Link>
              <Link href="/projects" className="w-full sm:w-auto px-6 py-3.5 bg-white/80 hover:bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-xs text-center hover:-translate-y-0.5 shadow-sm transition-all duration-200 flex items-center justify-center gap-1.5">
                <Folder className="h-4 w-4 text-slate-500" />
                <span>ดูโปรเจกต์ตัวอย่าง</span>
              </Link>
            </div>
          </div>

          {/* Right Side Illustration & Overlay Cards */}
          <div className="lg:col-span-6 relative h-[320px] w-full max-w-[450px] mx-auto lg:mx-0 flex items-center justify-center">
            
            {/* Base Isometric House/Circuit SVG Illustration */}
            <div className="absolute inset-0 flex items-center justify-center opacity-95">
              <svg viewBox="0 0 400 300" className="w-full h-full max-h-[260px] text-blue-500" fill="none">
                {/* Simulated Modern House Outline */}
                <path d="M150 150 L250 80 L350 150 L350 250 L150 250 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-15" />
                <path d="M250 80 L250 250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-20" />
                {/* Circuit lines */}
                <path d="M50 200 L120 200 L150 170" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-25" />
                <path d="M350 200 L280 200 L250 230" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-25" />
                <circle cx="120" cy="200" r="3" fill="currentColor" className="opacity-35 animate-ping" />
                <circle cx="280" cy="200" r="3" fill="currentColor" className="opacity-35 animate-ping" />
                
                {/* Mock ESP32 Chip rendering inside SVG */}
                <rect x="180" y="160" width="30" height="45" rx="2" fill="#1e293b" className="opacity-80" />
                <rect x="220" y="170" width="35" height="25" rx="2" fill="#3b82f6" className="opacity-20" />
                
                {/* Glowing Smart House outline */}
                <path d="M180 220 L220 190 L260 220 L260 250 L180 250 Z" stroke="#3b82f6" strokeWidth="2.5" className="opacity-60" />
              </svg>
            </div>

            {/* Overlay Pill 1 (Smartphone Control) */}
            <div className="absolute top-4 left-6 bg-white/90 backdrop-blur border border-slate-100/60 p-3 rounded-2xl shadow-md flex items-center space-x-2.5 hover:scale-105 transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                <Smartphone className="h-4.5 w-4.5" />
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black text-slate-800">ควบคุมได้ทุกที่</h4>
                <p className="text-[8px] text-slate-400">ผ่านมือถือ</p>
              </div>
            </div>

            {/* Overlay Pill 2 (Easy Connection) */}
            <div className="absolute bottom-12 left-0 bg-white/90 backdrop-blur border border-slate-100/60 p-3 rounded-2xl shadow-md flex items-center space-x-2.5 hover:scale-105 transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                <Wifi className="h-4.5 w-4.5" />
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black text-slate-800">เชื่อมต่อค้าง่าย</h4>
                <p className="text-[8px] text-slate-400">WiFi / Bluetooth</p>
              </div>
            </div>

            {/* Overlay Pill 3 (Auto Work) */}
            <div className="absolute top-16 right-4 bg-white/90 backdrop-blur border border-slate-100/60 p-3 rounded-2xl shadow-md flex items-center space-x-2.5 hover:scale-105 transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center shrink-0">
                <Zap className="h-4.5 w-4.5" />
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black text-slate-800">ทำงานอัตโนมัติ</h4>
                <p className="text-[8px] text-slate-400">ด้วย Automation</p>
              </div>
            </div>

          </div>

        </div>
      </header>
    </div>
  );
}

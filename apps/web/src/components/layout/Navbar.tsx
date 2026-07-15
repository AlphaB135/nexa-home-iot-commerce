'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, BookOpen, Lightbulb, HelpCircle, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Subtitle */}
          <div className="flex flex-col justify-center shrink-0">
            <Link href="/" className="flex items-baseline space-x-0.5">
              <span className="text-xl font-black tracking-tight text-slate-800 uppercase">SMART</span>
              <span className="text-xl font-black tracking-tight text-blue-500 uppercase">IO</span>
            </Link>
            <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase -mt-1">
              BUILD YOUR SMART WORLD
            </span>
          </div>

          {/* Product Categories Button */}
          <button className="hidden lg:flex items-center space-x-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-705 transition-all">
            <Menu className="h-4 w-4" />
            <span>หมวดหมู่สินค้า</span>
          </button>

          {/* Center Search Input */}
          <div className="hidden md:block flex-1 max-w-md lg:max-w-xl mx-2">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="ค้นหาสินค้า เช่น ESP32, Sensor, Relay..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-800 text-xs rounded-full pl-10 pr-4 py-3 outline-none border border-slate-200/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            </form>
          </div>

          {/* Right Action Links */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-bold text-slate-650">
            <Link href="/blog" className="flex items-center space-x-1.5 hover:text-blue-500 transition-colors">
              <BookOpen className="h-4.5 w-4.5" />
              <span>บทความ</span>
            </Link>
            <Link href="/projects" className="flex items-center space-x-1.5 hover:text-blue-500 transition-colors">
              <Lightbulb className="h-4.5 w-4.5" />
              <span>โปรเจกต์</span>
            </Link>
            <Link href="/help" className="flex items-center space-x-1.5 hover:text-blue-500 transition-colors">
              <HelpCircle className="h-4.5 w-4.5" />
              <span>ช่วยเหลือ</span>
            </Link>
            <Link href="/login" className="flex items-center space-x-1.5 hover:text-blue-500 transition-colors">
              <User className="h-4.5 w-4.5" />
              <span>เข้าสู่ระบบ</span>
            </Link>
          </div>

          {/* Cart Icon & Mobile Hamburg */}
          <div className="flex items-center space-x-2">
            <Link href="/cart" className="relative p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/50 rounded-xl text-slate-600 hover:text-blue-500 transition-all">
              <ShoppingCart className="h-4.5 w-4.5" />
              <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[8px] font-black h-4.5 w-4.5 rounded-full flex items-center justify-center border-2 border-white">
                0
              </span>
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="md:hidden">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="ค้นหาสินค้า เช่น ESP32, Sensor, Relay..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 text-xs rounded-full pl-9 pr-4 py-2.5 outline-none border border-slate-200/60"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            </form>
          </div>
          <button className="w-full flex items-center justify-center space-x-1.5 bg-slate-50 border border-slate-200/60 rounded-xl py-2.5 text-xs font-semibold text-slate-700">
            <Menu className="h-4 w-4" />
            <span>หมวดหมู่สินค้า</span>
          </button>
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold text-slate-600 pt-2">
            <Link href="/blog" className="py-2 bg-slate-55 rounded-xl hover:bg-slate-100">บทความ</Link>
            <Link href="/projects" className="py-2 bg-slate-55 rounded-xl hover:bg-slate-100">โปรเจกต์</Link>
            <Link href="/help" className="py-2 bg-slate-55 rounded-xl hover:bg-slate-100">ช่วยเหลือ</Link>
            <Link href="/login" className="py-2 bg-slate-55 rounded-xl hover:bg-slate-100">เข้าสู่ระบบ</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, User, Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 shrink-0 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-md text-white group-hover:rotate-6 transition-transform">
              <Cpu className="h-4.5 w-4.5" />
            </div>
            <span className="text-base font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              NexaHome
            </span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold text-slate-650">
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <Link href="/solutions" className="hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          </div>

          {/* Search */}
          <div className="hidden sm:block flex-1 max-w-xs md:max-w-sm">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="Search smart IoT hardware..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 hover:bg-slate-200/70 focus:bg-white text-slate-800 text-xs rounded-full pl-9 pr-4 py-2 outline-none border border-transparent focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3.5">
            <Link href="/wishlist" className="relative p-2 text-slate-600 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
              <Heart className="h-4.5 w-4.5" />
              <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[8px] font-black h-3.5 w-3.5 rounded-full flex items-center justify-center">2</span>
            </Link>

            <Link href="/cart" className="relative p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
              <ShoppingCart className="h-4.5 w-4.5" />
              <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[8px] font-black h-3.5 w-3.5 rounded-full flex items-center justify-center">3</span>
            </Link>

            <Link href="/login" className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
              <User className="h-4.5 w-4.5" />
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-2">
          <Link href="/products" className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">Products</Link>
          <Link href="/solutions" className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">Solutions</Link>
          <Link href="/projects" className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">Projects</Link>
          <Link href="/blog" className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">Blog</Link>
          <div className="pt-2">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="Search smart IoT hardware..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 text-xs rounded-full pl-9 pr-4 py-2 outline-none border border-transparent"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

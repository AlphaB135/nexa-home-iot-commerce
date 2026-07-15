import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white pt-16 pb-24 lg:pt-28 lg:pb-36 px-4">
      {/* Abstract glowing grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Info */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
            </span>
            <span>Industrial IoT & Smart Home Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-indigo-50 to-cyan-50 bg-clip-text text-transparent">
            Build Your Smart Home with <br className="hidden sm:inline" />
            <span className="text-yellow-300">Professional IoT Hardware</span>
          </h1>
          
          <p className="text-indigo-50 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Unleash your innovation with our range of high-performance dev boards, microcontrollers, real-time environmental sensors, and smart relays. Designed for extreme durability, precision, and ease of integration.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link href="/products" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-indigo-700 font-bold rounded-2xl text-center shadow-lg shadow-indigo-605/30 hover:shadow-indigo-605/50 hover:-translate-y-0.5 transition-all duration-200">
              Shop Now
            </Link>
            <Link href="/projects" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold rounded-2xl text-center backdrop-blur hover:-translate-y-0.5 transition-all duration-200">
              Explore Projects
            </Link>
          </div>
        </div>

        {/* Right Floating Device Cards */}
        <div className="lg:col-span-5 relative h-[380px] w-full max-w-[400px] mx-auto lg:mx-0 flex items-center justify-center">
          
          {/* Card 1: ESP32 */}
          <div className="absolute top-4 left-4 w-44 bg-slate-900/60 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-indigo-400 tracking-wider uppercase">MCU</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <h3 className="text-xs font-bold text-white">ESP32-S3 Board</h3>
            <p className="text-[9px] text-slate-400 mt-1 font-mono">GPIOs / WiFi / BLE 5</p>
          </div>

          {/* Card 2: DHT22 */}
          <div className="absolute bottom-4 left-0 w-44 bg-slate-900/60 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-emerald-400 tracking-wider uppercase">Sensor</span>
              <span className="text-[10px] text-emerald-400 font-bold">25.4°C</span>
            </div>
            <h3 className="text-xs font-bold text-white">DHT22 Module</h3>
            <p className="text-[9px] text-slate-400 mt-1 font-mono">Temp & Humidity</p>
          </div>

          {/* Card 3: Relay */}
          <div className="absolute top-20 right-0 w-44 bg-slate-900/60 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-cyan-400 tracking-wider uppercase">Actuator</span>
              <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
            </div>
            <h3 className="text-xs font-bold text-white">4CH Opto Relay</h3>
            <p className="text-[9px] text-slate-400 mt-1 font-mono">250VAC Load Control</p>
          </div>

          {/* Card 4: ESP32-CAM */}
          <div className="absolute bottom-8 right-2 w-44 bg-slate-900/60 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-rose-400 tracking-wider uppercase">Camera</span>
              <span className="text-[8px] bg-rose-500/20 text-rose-300 px-1 py-0.5 rounded">LIVE</span>
            </div>
            <h3 className="text-xs font-bold text-white">ESP32-CAM</h3>
            <p className="text-[9px] text-slate-400 mt-1 font-mono">OV2640 HD Stream</p>
          </div>

        </div>

      </div>
    </header>
  );
}

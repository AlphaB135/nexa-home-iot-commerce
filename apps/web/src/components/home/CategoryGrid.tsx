import React from 'react';
import { Cpu, Wifi, HardDrive, ToggleLeft, Monitor, Zap, Lightbulb, Paperclip, Gift, Star } from 'lucide-react';

const categories = [
  { name: 'บอร์ด ESP', icon: Cpu, color: 'text-slate-500 bg-slate-50' },
  { name: 'โมดูล WiFi / BLE', icon: Wifi, color: 'text-blue-500 bg-blue-50' },
  { name: 'เซนเซอร์', icon: HardDrive, color: 'text-cyan-500 bg-cyan-50' },
  { name: 'รีเลย์ / สวิตช์', icon: ToggleLeft, color: 'text-sky-500 bg-sky-50' },
  { name: 'จอแสดงผล', icon: Monitor, color: 'text-emerald-500 bg-emerald-50' },
  { name: 'แหล่งจ่ายไฟ', icon: Zap, color: 'text-blue-500 bg-blue-50' },
  { name: 'อุปกรณ์ IoT', icon: Lightbulb, color: 'text-orange-500 bg-orange-50' },
  { name: 'อุปกรณ์เสริม', icon: Paperclip, color: 'text-slate-500 bg-slate-50' },
  { name: 'ชุดคิท / Starter Kit', icon: Gift, color: 'text-rose-500 bg-rose-50' },
  { name: 'สินค้าแนะนำ', icon: Star, color: 'text-teal-500 bg-teal-50' },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Title row */}
        <div className="flex items-center justify-between">
          <h2 className="text-base font-black text-slate-800">หมวดหมู่สินค้า</h2>
          <button className="text-xs font-bold text-blue-500 hover:text-blue-600 transition-colors">
            ดูทั้งหมด
          </button>
        </div>

        {/* 10 Columns Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div 
                key={i}
                className="group bg-white p-4.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center space-y-3"
              >
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="font-extrabold text-[10px] text-slate-700 leading-tight group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

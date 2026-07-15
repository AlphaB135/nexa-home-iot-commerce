import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Footer from '@/components/layout/Footer';
import { ShieldCheck, Truck, Headset, Package, Coins } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      {/* Trust Badges Row */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {/* Badge 1 */}
          <div className="flex items-center space-x-3.5 md:px-4 py-2 md:py-0">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5.5 w-5.5" />
            </div>
            <div className="text-left leading-tight">
              <h4 className="text-xs font-black text-slate-800">ของแท้ 100%</h4>
              <p className="text-[9px] text-slate-400 font-medium">รับประกันศูนย์ไทย</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center space-x-3.5 md:px-4 py-2 md:py-0">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-550 flex items-center justify-center shrink-0">
              <Truck className="h-5.5 w-5.5" />
            </div>
            <div className="text-left leading-tight">
              <h4 className="text-xs font-black text-slate-800">จัดส่งไว</h4>
              <p className="text-[9px] text-slate-400 font-medium">ส่งเร็วทั่วประเทศ</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center space-x-3.5 md:px-4 py-2 md:py-0">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-550 flex items-center justify-center shrink-0">
              <Headset className="h-5.5 w-5.5" />
            </div>
            <div className="text-left leading-tight">
              <h4 className="text-xs font-black text-slate-800">บริการหลังการขาย</h4>
              <p className="text-[9px] text-slate-400 font-medium">ให้คำปรึกษาโดยผู้เชี่ยวชาญ</p>
            </div>
          </div>

          {/* Badge 4 */}
          <div className="flex items-center space-x-3.5 md:px-4 py-2 md:py-0">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-550 flex items-center justify-center shrink-0">
              <Package className="h-5.5 w-5.5" />
            </div>
            <div className="text-left leading-tight">
              <h4 className="text-xs font-black text-slate-800">แพ็คสินค้าอย่างดี</h4>
              <p className="text-[9px] text-slate-400 font-medium">มั่นใจทุกการสั่งซื้อ</p>
            </div>
          </div>

          {/* Badge 5 */}
          <div className="flex items-center space-x-3.5 md:px-4 py-2 md:py-0">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-550 flex items-center justify-center shrink-0">
              <Coins className="h-5.5 w-5.5" />
            </div>
            <div className="text-left leading-tight">
              <h4 className="text-xs font-black text-slate-800">สะสมแต้ม</h4>
              <p className="text-[9px] text-slate-400 font-medium">แลกส่วนลดได้</p>
            </div>
          </div>

        </div>
      </section>

      <CategoryGrid />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

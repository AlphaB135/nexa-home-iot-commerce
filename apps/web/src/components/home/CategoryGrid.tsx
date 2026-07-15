import React from 'react';

const categories = [
  { name: 'ESP32', desc: 'Microcontrollers', emoji: '🔌', bg: 'from-blue-50 to-indigo-50' },
  { name: 'Arduino', desc: 'Dev Boards', emoji: '🤖', bg: 'from-cyan-50 to-blue-50' },
  { name: 'Raspberry Pi', desc: 'Single Board PC', emoji: '🍓', bg: 'from-rose-50 to-pink-50' },
  { name: 'Sensors', desc: 'Environmental', emoji: '🌡️', bg: 'from-emerald-50 to-teal-50' },
  { name: 'Displays', desc: 'OLED & LCD Screens', emoji: '📺', bg: 'from-violet-50 to-purple-50' },
  { name: 'Power Supply', desc: 'Regulators', emoji: '🔋', bg: 'from-amber-50 to-orange-50' },
  { name: 'Relay', desc: 'Switching Boards', emoji: '🎛️', bg: 'from-indigo-50 to-violet-50' },
  { name: 'Wireless', desc: 'WiFi/LoRa/Zigbee', emoji: '📡', bg: 'from-sky-50 to-blue-50' },
  { name: 'Camera', desc: 'Computer Vision', emoji: '📷', bg: 'from-teal-50 to-cyan-50' },
  { name: 'Motors', desc: 'Servos & Steppers', emoji: '⚙️', bg: 'from-slate-100 to-slate-200/50' },
  { name: 'Automation', desc: 'Matter Devices', emoji: '🏡', bg: 'from-purple-50 to-indigo-50' },
  { name: 'DIY Kits', desc: 'Learning Bundles', emoji: '🛠️', bg: 'from-yellow-50 to-amber-50' },
  { name: 'Smart Home', desc: 'Automation Nodes', emoji: '🏡', bg: 'from-emerald-50 to-green-50' },
  { name: 'Starter Kits', desc: 'Beginner Packs', emoji: '📦', bg: 'from-orange-50 to-red-50' },
  { name: 'Dev Boards', desc: 'Custom Modules', emoji: '🛡️', bg: 'from-blue-50 to-sky-50' },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Browse by Category</h2>
          <p className="text-slate-505 text-xs sm:text-sm">Find premium grade components curated for your automation requirements.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <div 
              key={i}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${cat.bg} border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center space-y-2`}
            >
              <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">{cat.emoji}</span>
              <h3 className="font-bold text-xs text-slate-800">{cat.name}</h3>
              <p className="text-[9px] text-slate-400 font-medium">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

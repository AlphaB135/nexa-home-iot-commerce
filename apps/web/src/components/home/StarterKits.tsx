import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@nexahome/ui';

const kits = [
  {
    name: 'Home Automation Kit',
    type: 'IoT core automation pack',
    desc: 'Configure Node-RED and Home Assistant natively. Connect high-power appliances and lights.',
    price: 790,
    wasPrice: 980,
    items: [
      '1x ESP32-S3 Microcontroller',
      '1x 4-Channel Relay Board',
      '2x DHT22 Temp/Humidity Sensors',
      '1x OLED display 128x64 I2C',
      '50x Dupont Jumper Wires'
    ]
  },
  {
    name: 'Smart Garden Kit',
    type: 'Bio agriculture starter pack',
    desc: 'Construct self-monitoring hydration grids. Automate plant watering with moisture analytics.',
    price: 640,
    wasPrice: 850,
    items: [
      '1x Arduino Uno R3 Board',
      '2x Capacitive Soil Sensors',
      '1x Mini Submersible Pump 5V',
      '1x Single Channel Relay Module',
      '1x Water Hose (1 Meter)'
    ]
  },
  {
    name: 'Intelligent Security Kit',
    type: 'Computer vision alarm pack',
    desc: 'Develop neural node surveillance. Train facial logs and motion alerts directly via Telegram.',
    price: 520,
    wasPrice: 690,
    items: [
      '1x ESP32-CAM (with OV2640)',
      '1x PIR Motion Sensor Module',
      '1x High Decibel Buzzer Module',
      '1x 18650 Battery Shield',
      '1x 3D Printed Prototype Shell'
    ]
  }
];

export default function StarterKits() {
  return (
    <section className="py-16 px-4 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Complete Starter Kits</h2>
          <p className="text-slate-500 text-xs sm:text-sm">Scaffold your DIY automated networks without sourcing individual modules.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kits.map((kit, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-indigo-505 uppercase tracking-wider">{kit.type}</span>
                  <h3 className="text-lg font-bold text-slate-900">{kit.name}</h3>
                </div>
                
                <p className="text-slate-550 text-xs leading-relaxed">{kit.desc}</p>
                
                <div className="space-y-2 pt-2">
                  <h4 className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider">Bundle components:</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {kit.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 line-through">฿{kit.wasPrice}</span>
                  <span className="text-lg font-black text-indigo-950">฿{kit.price}</span>
                </div>
                <Button variant="primary">Add Bundle</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Facebook, Instagram, Youtube, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Col 1: About */}
        <div className="col-span-2 lg:col-span-1 space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <div class="h-7 w-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white">
              <Cpu className="h-4.5 w-4.5" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">NexaHome</span>
          </Link>
          <p className="text-xs text-slate-550 leading-relaxed">
            Premium Smart Home and IoT Hardware development modules tailored for makers and innovators.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <a href="#" className="hover:text-white transition-colors"><Github className="h-4.5 w-4.5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-4.5 w-4.5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-4.5 w-4.5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-4.5 w-4.5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube className="h-4.5 w-4.5" /></a>
          </div>
        </div>

        {/* Col 2: Products */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Products</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="#" className="hover:text-white transition-colors">Microcontrollers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Sensors & Actuators</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Complete Kits</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Wireless Transceivers</Link></li>
          </ul>
        </div>

        {/* Col 3: Company */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Engineering Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Affiliate</Link></li>
          </ul>
        </div>

        {/* Col 4: Support */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Support</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Project Blueprints</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Pinout Guides</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact Forum</Link></li>
          </ul>
        </div>

        {/* Col 5: Legal */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Return Policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-550 gap-4">
        <div>© NexaHome 2024. All rights reserved. Designed for makers globally.</div>
        <div className="flex items-center space-x-6">
          <Link href="#" className="hover:text-slate-400">Terms</Link>
          <Link href="#" className="hover:text-slate-400">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu } from 'lucide-react';
import { Button } from '@nexahome/ui';
import { toast } from 'sonner';

export default function RegisterPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Registration successful (welcome mail dispatched)!');
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-100 shadow-xl p-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-md text-white mx-auto">
            <Cpu className="h-5 w-5" />
          </div>
          <h1 className="text-xl font-black text-slate-900">Create Maker Account</h1>
          <p className="text-xs text-slate-400">Join 15,000+ developers in home automation.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Full Name</label>
            <input 
              type="text" 
              placeholder="Assawut Khunthong" 
              required
              className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-400 focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              placeholder="developer@nexahome.com" 
              required
              className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-400 focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required
                className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-400 focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Confirm</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required
                className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-400 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-2 pt-1.5">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 text-blue-600 rounded focus:ring-blue-400" />
            <span className="text-[10px] text-slate-500 leading-normal">
              I agree to the terms of service and allow NexaHome to transmit project documents.
            </span>
          </div>

          <Button type="submit" className="w-full py-3.5 shadow-md shadow-blue-500/10">Create Account</Button>
        </form>

        <div className="text-center text-xs text-slate-500">
          <span>Already have an account?</span>{' '}
          <Link href="/login" className="font-bold text-indigo-650 hover:text-indigo-800">Sign In</Link>
        </div>

      </div>
    </main>
  );
}

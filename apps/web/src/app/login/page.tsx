'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Github, Chrome } from 'lucide-react';
import { Button } from '@nexahome/ui';
import { toast } from 'sonner';

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Successfully logged in (mock session created)!');
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-100 shadow-xl p-8 space-y-6">
        
        {/* Logo and header */}
        <div className="text-center space-y-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-md text-white mx-auto">
            <Cpu className="h-5 w-5" />
          </div>
          <h1 className="text-xl font-black text-slate-900">Sign In to NexaHome</h1>
          <p className="text-xs text-slate-400">Unlock project codes and order tracking logs.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              placeholder="developer@nexahome.com" 
              required
              className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-400 focus:bg-white transition-all"
            />
          </div>

          <div class="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Password</label>
              <a href="#" className="text-[9px] font-bold text-indigo-500 hover:text-indigo-700">Forgot?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-400 focus:bg-white transition-all"
            />
          </div>

          <Button type="submit" className="w-full py-3.5 shadow-md shadow-blue-500/10">Sign In</Button>
        </form>

        {/* Divider */}
        <div className="flex items-center space-x-2 text-[10px] text-slate-400 uppercase tracking-wider">
          <div className="flex-1 h-px bg-slate-100"></div>
          <span>Or sign in with</span>
          <div className="flex-1 h-px bg-slate-100"></div>
        </div>

        {/* Social login */}
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => toast.success('Logged in with Google')} className="flex items-center justify-center space-x-2 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
            <Chrome className="h-4 w-4" /> <span>Google</span>
          </button>
          <button onClick={() => toast.success('Logged in with GitHub')} className="flex items-center justify-center space-x-2 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
            <Github className="h-4 w-4" /> <span>GitHub</span>
          </button>
        </div>

        <div className="text-center text-xs text-slate-500">
          <span>New maker?</span>{' '}
          <Link href="/register" className="font-bold text-indigo-650 hover:text-indigo-800">Create an account</Link>
        </div>

      </div>
    </main>
  );
}

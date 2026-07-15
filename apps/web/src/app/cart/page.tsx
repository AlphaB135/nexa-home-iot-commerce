'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { formatPrice } from '@/lib/utils';
import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@nexahome/ui';

interface LocalItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
}

const mockCartItems: LocalItem[] = [
  { id: '1', name: 'ESP32-S3 DevKit', price: 299, qty: 2, image: '🔌' },
  { id: '2', name: 'DHT22 Sensor', price: 89, qty: 1, image: '🌡️' },
  { id: '3', name: 'Smart Plug Matter', price: 499, qty: 1, image: '🏡' }
];

export default function CartPage() {
  const [items, setItems] = useState<LocalItem[]>(mockCartItems);

  const handleUpdateQty = (idx: number, delta: number) => {
    setItems(prev => {
      const copy = [...prev];
      const nextQty = copy[idx].qty + delta;
      if (nextQty > 0) {
        copy[idx].qty = nextQty;
      }
      return copy;
    });
  };

  const handleRemove = (idx: number) => {
    const name = items[idx].name;
    setItems(prev => prev.filter((_, i) => i !== idx));
    toast.success(`Removed ${name} from cart`);
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 mb-8 flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 text-indigo-650" />
          <span>Shopping Cart</span>
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl space-y-4">
            <div className="text-4xl text-slate-300">🛒</div>
            <h3 className="font-bold text-slate-800 text-sm">Your cart is empty</h3>
            <p className="text-slate-400 text-xs">Browse our inventory to add hardware items.</p>
            <Button variant="primary">Shop Now</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Table */}
            <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm overflow-hidden">
              <div className="overflow-x-auto font-sans">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider pb-3">
                      <th className="pb-3 w-12 text-center">Image</th>
                      <th className="pb-3 px-4">Product</th>
                      <th className="pb-3 text-center">Quantity</th>
                      <th className="pb-3 text-right">Price</th>
                      <th className="pb-3 text-center w-16">Remove</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {items.map((item, idx) => (
                      <tr key={item.id} className="hover:bg-slate-50/20 transition-all">
                        <td className="py-4"><div className="h-10 w-10 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl text-2xl mx-auto">{item.image}</div></td>
                        <td className="py-4 px-4 font-bold text-slate-800">{item.name}</td>
                        <td className="py-4">
                          <div className="flex items-center justify-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50 w-24 mx-auto">
                            <button onClick={() => handleUpdateQty(idx, -1)} className="px-2 py-1 font-bold">-</button>
                            <span className="px-2 text-[10px] font-bold text-slate-800">{item.qty}</span>
                            <button onClick={() => handleUpdateQty(idx, 1)} className="px-2 py-1 font-bold">+</button>
                          </div>
                        </td>
                        <td className="py-4 text-right font-semibold text-slate-900">{formatPrice(item.price * item.qty)}</td>
                        <td className="py-4 text-center">
                          <button onClick={() => handleRemove(idx)} className="text-slate-400 hover:text-red-500 transition-colors">
                            <Trash2 className="h-4.5 w-4.5 mx-auto" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-6">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-3">Order Summary</h3>
              
              <div className="space-y-3 text-xs text-slate-650">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-800">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping (Flat Rate)</span>
                  <span class="font-bold text-slate-800">{formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-slate-100 pt-3 flex justify-between text-sm font-black text-indigo-950">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <Button className="w-full py-3.5 uppercase tracking-wider text-[11px] font-bold flex items-center justify-center space-x-1 shadow-lg shadow-indigo-500/20">
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>

          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

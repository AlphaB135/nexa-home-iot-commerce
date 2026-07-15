'use client';

import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isLowStock = product.stock > 0 && product.stock <= 5;
  const isOutOfStock = product.stock === 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`Added ${product.name} to cart!`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`Added ${product.name} to wishlist!`);
  };

  return (
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col overflow-hidden relative">
      
      {/* Wishlist Button */}
      <button 
        onClick={handleToggleWishlist}
        className="absolute top-3.5 right-3.5 z-10 bg-white/90 hover:bg-white p-2 rounded-xl text-slate-400 hover:text-rose-500 shadow-sm border border-slate-100 transition-all duration-200"
      >
        <Heart className="h-4 w-4" />
      </button>

      {/* Sale/Stock Badges */}
      <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5">
        {product.salePrice && (
          <span className="bg-rose-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm font-semibold">SALE</span>
        )}
        {isOutOfStock ? (
          <span className="bg-slate-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm font-semibold">OUT OF STOCK</span>
        ) : isLowStock ? (
          <span className="bg-amber-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm font-semibold">LOW STOCK</span>
        ) : (
          <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm font-semibold">IN STOCK</span>
        )}
      </div>

      {/* Image Blueprint Placeholder */}
      <div className="h-44 w-full bg-gradient-to-br from-indigo-500 to-indigo-800 relative flex items-center justify-center p-6 text-white group-hover:scale-[1.02] transition-transform duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px] opacity-15"></div>
        <div className="text-[32px] filter drop-shadow-md">🔌</div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-bold text-slate-700">{product.rating.toFixed(1)}</span>
            <span className="text-[9px] text-slate-400 font-medium">({product.reviewsCount} reviews)</span>
          </div>
          <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{product.name}</h3>
          <p className="text-[10px] text-slate-400 line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            {product.salePrice ? (
              <>
                <span className="text-sm font-extrabold text-indigo-950">{formatPrice(product.salePrice)}</span>
                <span className="text-[10px] line-through text-slate-400">{formatPrice(product.price)}</span>
              </>
            ) : (
              <span className="text-sm font-extrabold text-indigo-950">{formatPrice(product.price)}</span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed text-[10px] font-bold px-3 py-2 rounded-xl transition-all duration-200 flex items-center space-x-1"
          >
            <ShoppingCart className="h-3 w-3" />
            <span>Buy</span>
          </button>
        </div>
      </div>

    </div>
  );
}

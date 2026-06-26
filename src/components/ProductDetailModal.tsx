/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Heart, MessageSquare, Info, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export default function ProductDetailModal({ product, onClose, isWishlisted, onToggleWishlist }: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) return null;

  const handleWhatsAppAction = () => {
    const sizeSuffix = selectedSize ? ` (Size: ${selectedSize})` : '';
    const text = `Hello, I am interested in the following product:\n\nProduct Name: ${product.name}${sizeSuffix}\n\nCould you please provide more details regarding availability, size options, pricing, and delivery?`;
    const waUrl = `https://wa.me/919173495718?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-black/75 backdrop-blur-md animate-fade-in">
      
      {/* Drawer Card Frame */}
      <div className="relative w-full max-w-5xl bg-warm-ivory border border-rose-gold/15 shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-[85vh]">
        
        {/* Close Button top-right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-40 bg-warm-ivory/80 backdrop-blur border border-rose-gold/10 hover:bg-primary hover:text-warm-ivory p-2 rounded-none transition-colors duration-300"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Content Image Panel (Left) */}
        <div className="relative w-full md:w-1/2 bg-soft-beige aspect-[4/5] md:aspect-auto overflow-hidden">
          <img 
            src={product.image} 
            alt={product.alt} 
            className="w-full h-full object-cover object-center transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/30 via-transparent to-transparent" />
          
          {/* Quick badge */}
          <div className="absolute bottom-6 left-6 bg-primary/95 text-warm-ivory px-4 py-2 border border-rose-gold/15 select-none font-sans text-[10px] uppercase tracking-widest">
            {product.category}
          </div>
        </div>

        {/* Content detail text metrics panel (Right) */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 overflow-y-auto flex flex-col justify-between text-charcoal-black bg-warm-ivory">
          
          <div>
            {/* Header / Category label */}
            <span className="text-rose-gold font-sans text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 block">
              Indo West Elite Series
            </span>

            {/* Title / Name */}
            <h2 className="font-editorial text-2xl sm:text-3xl text-primary font-bold tracking-wide leading-tight mb-4">
              {product.name}
            </h2>

            {/* Star badge static */}
            <div className="flex items-center gap-1.5 mb-6 text-yellow-500 text-xs">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={11} className="fill-current" />
                ))}
              </div>
              <span className="text-charcoal-black/45">(Premium Edition)</span>
            </div>

            {/* Short outline / summary */}
            <p className="font-sans text-xs text-charcoal-black/50 tracking-widest uppercase mb-4 leading-relaxed font-semibold">
              {product.description}
            </p>

            {/* Long narrative */}
            <p className="font-sans text-xs sm:text-sm text-charcoal-black/70 leading-relaxed mb-8 font-light">
              {product.longDescription}
            </p>

            {/* Sizes section selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 text-[10px] uppercase tracking-widest font-bold text-charcoal-black/60">
                <span>Tailored Fitting Sizes</span>
                <span className="text-rose-gold font-semibold italic">Standard Sizing guide</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => {
                  const isActive = selectedSize === sz;
                  return (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`h-10 px-4 flex items-center justify-center font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 pointer-events-auto cursor-pointer border ${
                        sz === 'One Size' ? 'w-28' : 'w-12'
                      } ${
                        isActive 
                          ? 'bg-primary text-warm-ivory border-primary shadow' 
                          : 'bg-transparent text-charcoal-black/80 hover:text-primary hover:border-primary border-rose-gold/15'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail bullet specs */}
            <div className="mb-10 p-4 bg-soft-beige/60 border border-rose-gold/5 flex flex-col gap-2.5">
              <h4 className="font-sans text-[10px] uppercase font-bold tracking-widest text-primary flex items-center gap-2">
                <Info size={11} />
                <span>Materials & Couture Details</span>
              </h4>
              <ul className="list-none flex flex-col gap-1.5">
                {product.details.map((dt, index) => (
                  <li key={index} className="font-sans text-xs text-charcoal-black/60 leading-relaxed font-light flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-rose-gold" />
                    <span>{dt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Row containing WhatsApp Inquiry and Wishlist toggle */}
          <div className="flex items-center gap-4 pt-6 border-t border-charcoal-black/5">
            <button
              onClick={handleWhatsAppAction}
              className="flex-1 bg-primary hover:bg-secondary text-warm-ivory py-4 flex items-center justify-center gap-3 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow cursor-pointer border border-primary"
            >
              <MessageSquare size={14} className="fill-current text-green-300 animate-pulse" />
              <span>Inquire via WhatsApp</span>
            </button>

            <button
              onClick={onToggleWishlist}
              className={`p-4 border transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center ${
                isWishlisted 
                  ? 'bg-red-50 text-red-500 border-red-200' 
                  : 'bg-transparent text-charcoal-black/70 hover:text-primary hover:border-primary border-rose-gold/20'
              }`}
              aria-label="Wishlist piece"
            >
              <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

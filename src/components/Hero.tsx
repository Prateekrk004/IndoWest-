/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onWhatsApp: () => void;
}

export default function Hero({ onExplore, onWhatsApp }: HeroProps) {
  return (
    <section className="relative h-[85vh] min-h-[500px] md:h-[90vh] flex items-center overflow-hidden bg-soft-beige">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2O5UmxiZvTps3D2VovezQdsetB3U_r8FiUGTl7TgSgxAQC9GZUnYDg3p9NRLrhyLbKjuseCbmpkfuKQQKNKXQz51yvjo25SQ7_GOJGDoag4_2hGV6KEDnz6nSAQUrpbWsUqjC4CJ2NA"
          alt="Indo West Premium Collection Model" 
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow filter brightness-[0.8]"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-black/80 via-charcoal-black/40 to-transparent md:bg-gradient-to-r" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-warm-ivory animate-fade-in">
        <div className="max-w-2xl">
          {/* Brand Header (Serving as the Hero Statement) */}
          <div className="mb-12 flex flex-col animate-fade-in-up">
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.15em] leading-tight text-primary uppercase">
              INDO WEST
            </h1>
            <p className="font-serif italic text-gold-gradient font-normal text-2xl sm:text-3.5xl md:text-4xl mt-3 tracking-wide">
              Women&apos;s Fashion Store
            </p>
          </div>
          
          {/* Call to action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onExplore}
              className="flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-warm-ivory px-8 py-4 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl border border-primary hover:scale-[1.03]"
            >
              <span>Explore Collection</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onWhatsApp}
              className="flex items-center justify-center gap-3 bg-transparent text-warm-ivory border border-warm-ivory/60 hover:bg-warm-ivory hover:text-charcoal-black px-8 py-4 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-[1.03]"
            >
              <MessageCircle size={15} className="fill-current text-green-400" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative side scroll indicator */}
      <div className="absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-4">
        <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-warm-ivory/40 rotate-90 translate-y-12 origin-right">
          Scroll to explore
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-rose-gold/60 to-transparent" />
      </div>
    </section>
  );
}

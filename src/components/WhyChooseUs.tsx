/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Zap, Sparkles, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const promises = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Each garment is crafted from the finest fabrics with meticulous attention to detail, ensuring comfort and premium longevity.'
    },
    {
      icon: Zap,
      title: 'Trendy Collections',
      description: 'Stay ahead of the curve with our weekly updated custom catalog of fusion wear and contemporary Western silhouettes.'
    },
    {
      icon: ShieldCheck,
      title: 'Affordable Luxury',
      description: 'We believe high-end luxury fashion should be accessible. Experience exclusive boutique aesthetics without exorbitant markups.'
    },
    {
      icon: HeartHandshake,
      title: 'Custom Fit Support',
      description: 'Interact with our elite sizing assistance via quick WhatsApp connectivity to receive advice tailored perfectly for you.'
    }
  ];

  return (
    <section className="py-24 bg-charcoal-black text-warm-ivory relative overflow-hidden">
      
      {/* Decorative dark vector circle */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 filter blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-rose-gold/5 filter blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-20">
          <span className="text-rose-gold font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-3 block">
            THE INTEGRITY MANIFESTO
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-warm-ivory tracking-wide leading-tight font-light">
            The Indo West Promise
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-4" />
          <p className="font-sans text-xs sm:text-sm text-warm-ivory/60 max-w-lg mx-auto mt-4 font-light">
            Commitment to excellence in every detail of your boutique shopping journey.
          </p>
        </div>

        {/* 4 Cards Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((prom, idx) => {
            const Icon = prom.icon;
            return (
              <div 
                key={idx}
                className="glassmorphism-dark group p-8 rounded-none border border-rose-gold/5 hover:border-rose-gold/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Custom Icon Circle */}
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary text-rose-gold group-hover:text-warm-ivory border border-rose-gold/15 flex items-center justify-center rounded-none mb-6 transition-all duration-500">
                  <Icon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                </div>

                <h3 className="font-editorial text-lg font-bold tracking-wide text-warm-ivory mb-3 group-hover:text-rose-gold transition-colors">
                  {prom.title}
                </h3>
                
                <p className="font-sans text-xs text-warm-ivory/60 leading-relaxed font-light">
                  {prom.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Calendar, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagery Column */}
          <div className="relative">
            {/* Subtle vintage border frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-rose-gold/35 rounded-none z-0" />
            
            {/* Main Image */}
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/zTzHXpqp/Whats-App-Image-2026-06-23-at-12-44-31.jpg"
                alt="INDO WEST Boutique Interior Design" 
                className="w-full h-[450px] sm:h-[550px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/30 to-transparent" />
            </div>

            {/* Quick badge */}
            <div className="absolute bottom-6 right-6 z-20 bg-primary px-6 py-4 border border-rose-gold/20 flex flex-col shadow-lg select-none">
              <span className="font-editorial text-2xl font-bold tracking-[0.2em] text-warm-ivory">EST. 2018</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-rose-gold/80 font-medium">Flagship Store</span>
            </div>
          </div>

          {/* Dialogue Column */}
          <div className="flex flex-col text-charcoal-black">
            {/* Editorial Category Tag */}
            <span className="text-primary font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Our Visionary Heritage
            </span>
            
            {/* Heading */}
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight mb-8">
              Crafting Confidence <br />
              <span className="font-serif italic text-primary/80">Through Every Thread</span>
            </h2>

            {/* Red gold divider */}
            <div className="w-20 h-[2px] bg-rose-gold mb-8" />

            {/* Descriptive texts */}
            <p className="font-sans text-sm text-charcoal-black/70 leading-relaxed mb-6 font-light">
              At INDO WEST, we believe that fashion is more than just clothing — it is an emotional expression of your pristine identity. Our boutique is a sanctuary of style where traditional Indian elegance meets modern Western minimalism.
            </p>
            
            <p className="font-sans text-sm text-charcoal-black/70 leading-relaxed mb-10 font-light">
              Each piece in our collection is meticulously handpicked to ensure the highest standards of quality, luxury, comfort, and sophistication. From the intricate scalloped gold borders of our fusion sarees to the crisp clean lines of our executive blazers, we design for the woman who values exclusivity and timeless appeal.
            </p>

            {/* Bento Bullet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-charcoal-black/5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/5 text-primary">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-1">Couture Cut</h4>
                  <p className="font-sans text-[11px] text-charcoal-black/60 leading-relaxed">Artisan curated selection</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/5 text-primary">
                  <Globe size={16} />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-1">Global Touch</h4>
                  <p className="font-sans text-[11px] text-charcoal-black/60 leading-relaxed">Indo-Western styling</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/5 text-primary">
                  <Calendar size={16} />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-1">Fresh Edits</h4>
                  <p className="font-sans text-[11px] text-charcoal-black/60 leading-relaxed">Weekly showcase drops</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

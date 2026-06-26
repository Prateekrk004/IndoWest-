/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CollectionsGridProps {
  onSelectCategory: (category: string) => void;
}

export default function CollectionsGrid({ onSelectCategory }: CollectionsGridProps) {
  const categories = [
    {
      title: 'Indowestern',
      subtitle: 'MODERN FUSION',
      description: 'Sleek, fluid silhouettes and contemporary jackets that effortlessly unite Western cuts and Indian artistry.',
      image: 'https://i.ibb.co/Q2Yft7v/indowestern-jpg.jpg',
      filterValue: 'Indowestern'
    },
    {
      title: 'Lehengas',
      subtitle: 'ROYAL HERITAGE',
      description: 'Meticulously crafted traditional ensembles and luxury zari veils made for your grandest occasions.',
      image: 'https://i.ibb.co/gnDCFpT/Lehengas-jpg.jpg',
      filterValue: 'Lehengas'
    },
    {
      title: 'Salwar suits | Shararas',
      subtitle: 'CLASSIC COUTURE',
      description: 'Ethereal custom coordinates adorned with fine motif hand embroidery and elegant straight-cut drapes.',
      image: 'https://i.ibb.co/4w9W27tV/shararas-jpg.jpg',
      filterValue: 'Salwar suits | Shararas'
    }
  ];

  return (
    <section className="py-24 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-4">
          <div className="text-center md:text-left">
            <span className="text-primary font-sans text-xs font-semibold uppercase tracking-[0.3em] block mb-3">
              Curated Masterpieces
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-primary font-light tracking-wide">
              Our Curated Collections
            </h2>
          </div>
          <div className="w-24 h-[1px] bg-rose-gold md:hidden" />
          <p className="font-sans text-xs sm:text-sm text-charcoal-black/60 max-w-sm text-center md:text-right leading-relaxed font-light">
            Each collection explores a distinct dialogue of form and drape, merging historical luxury with contemporary comfort.
          </p>
        </div>

        {/* 3-Card Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => onSelectCategory(cat.filterValue)}
              className="group cursor-pointer bg-warm-ivory border border-rose-gold/10 hover:border-rose-gold/30 rounded-none overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Visual Frame */}
                <div className="relative overflow-hidden aspect-[4/5] bg-soft-beige">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/20 to-transparent" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-4 right-4 bg-warm-ivory text-primary p-2 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow shadow-primary/10 hover:bg-primary hover:text-warm-ivory">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Typography metadata */}
                <div className="p-6">
                  <span className="text-rose-gold font-sans text-[10px] font-semibold tracking-[0.25em] uppercase mb-2 block">
                    {cat.subtitle}
                  </span>
                  <h3 className="font-editorial text-xl font-bold tracking-wide text-charcoal-black mb-3">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-black/60 leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* View Trigger link */}
              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-2 font-sans text-[10px] text-primary/80 group-hover:text-primary font-bold uppercase tracking-widest transition-colors">
                  <span>View Collection</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

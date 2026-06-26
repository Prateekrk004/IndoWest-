/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, MessageSquare, Tag, Eye } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface CollectionsListProps {
  onSelectProduct: (product: Product) => void;
  directFilterCategory: string;
}

export default function CollectionsList({ onSelectProduct, directFilterCategory }: CollectionsListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(directFilterCategory || 'All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [sortBy, setSortBy] = useState('Default');

  const categories = ['All', 'Indowestern', 'Lehengas', 'Salwar suits | Shararas'];
  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', 'One Size'];

  // Update initial selected category if injected from collection grids
  React.useEffect(() => {
    if (directFilterCategory) {
      setSelectedCategory(directFilterCategory);
    }
  }, [directFilterCategory]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
      );
    }

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Size availability
    if (selectedSize !== 'All') {
      result = result.filter((p) => p.sizes.includes(selectedSize));
    }

    // Sort products
    if (sortBy === 'Name (A-Z)') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Name (Z-A)') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [searchTerm, selectedCategory, selectedSize, sortBy]);

  const handleQuickWhatsApp = (e: React.MouseEvent, p: Product) => {
    e.stopPropagation(); // Stop parent click trigger from launching details
    const text = `Hello, I am interested in the following product:\n\nProduct Name: ${p.name}\n\nCould you please provide more details regarding availability, size options, pricing, and delivery?`;
    const waUrl = `https://wa.me/919173495718?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="py-12 bg-warm-ivory min-h-screen text-charcoal-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Banner introduction details */}
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-3 block">
            INDIVIDUAL STYLE DIALOGUES
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-primary font-light tracking-wide leading-tight mb-4">
            Curated Showroom Catalog
          </h2>
          <div className="w-16 h-px bg-rose-gold mx-auto" />
          <p className="font-sans text-xs sm:text-sm text-charcoal-black/60 max-w-lg mx-auto mt-4 font-light leading-relaxed">
            Please browse our static design directory. Indo West specializes in exclusive boutique pieces. Sizing is customizable upon custom WhatsApp enquiry.
          </p>
        </div>

        {/* Filters and Search Dashboard Control Board */}
        <div className="bg-warm-ivory p-6 sm:p-8 border border-rose-gold/15 flex flex-col gap-6 mb-12 shadow-sm rounded-none">
          
          {/* First Row: Search input & Sorters menu */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            <div className="md:col-span-8 relative flex items-center">
              <Search size={16} className="absolute left-4 text-charcoal-black/45" />
              <input 
                type="text"
                placeholder="Search collection or garment category (e.g., Zari, linen, Kurta)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-soft-beige/30 border border-rose-gold/15 focus:border-primary focus:outline-none p-4 pl-12 text-xs tracking-wider"
              />
            </div>

            <div className="md:col-span-4 relative flex items-center">
              <span className="absolute left-4 font-sans text-[10px] uppercase font-bold text-charcoal-black/50">Sort By</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-soft-beige/30 border border-rose-gold/15 focus:border-primary focus:outline-none p-4 pl-20 text-xs tracking-wider cursor-pointer"
              >
                <option value="Default">Default lineup</option>
                <option value="Name (A-Z)">Name (A - Z)</option>
                <option value="Name (Z-A)">Name (Z - A)</option>
              </select>
            </div>

          </div>

          {/* Second Row: Category selections flow */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-charcoal-black/50 flex items-center gap-1.5">
              <Tag size={11} className="text-primary" />
              <span>Garment Categories</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); }}
                    className={`px-4 py-2 font-sans text-[11px] uppercase tracking-wider font-semibold border pointer-events-auto cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary border-primary text-warm-ivory shadow' 
                        : 'bg-transparent border-rose-gold/15 hover:border-primary text-charcoal-black/70 hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Third Row: Sizing inclusions check */}
          <div className="flex flex-col gap-3 border-t border-charcoal-black/5 pt-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-charcoal-black/50 flex items-center gap-1.5">
              <SlidersHorizontal size={11} className="text-primary" />
              <span>Custom Fabric Sizes</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {sizes.map((sz) => {
                const isActive = selectedSize === sz;
                return (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-4 py-2 font-sans text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 pointer-events-auto cursor-pointer border ${
                      isActive 
                        ? 'bg-rose-gold border-rose-gold text-warm-ivory shadow-sm' 
                        : 'bg-transparent border-rose-gold/15 hover:border-rose-gold text-charcoal-black/60'
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Catalog Showcase list results */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="group cursor-pointer bg-warm-ivory border border-rose-gold/10 hover:border-rose-gold/30 rounded-none overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                
                {/* Visual Panel */}
                <div className="relative overflow-hidden aspect-[3/4] bg-soft-beige">
                  <img 
                    src={prod.image} 
                    alt={prod.alt} 
                    className="w-full h-full object-cover object-center transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category floating pill top-left */}
                  <div className="absolute top-4 left-4 bg-primary text-warm-ivory px-3 py-1 border border-rose-gold/15 select-none font-sans text-[9px] uppercase tracking-widest font-semibold">
                    {prod.category}
                  </div>

                  {/* Elegant View details indicator on image center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-charcoal-black/85 backdrop-blur-md px-6 py-3 border border-rose-gold/30 hover:bg-primary shadow text-warm-ivory flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform">
                      <Eye size={13} className="text-rose-gold" />
                      <span className="font-sans text-[10px] uppercase font-bold tracking-widest">Detail Showroom</span>
                    </div>
                  </div>
                </div>

                {/* Info and WhatsApp quick-inquiry row */}
                <div className="p-6">
                  <h3 className="font-editorial text-lg font-bold tracking-wide text-charcoal-black mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {prod.name}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-black/60 leading-relaxed font-light mb-5 line-clamp-2">
                    {prod.description}
                  </p>
                  
                  {/* Action buttons footer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-charcoal-black/5 justify-between">
                    <span className="font-sans text-[10px] text-rose-gold font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
                      Sizes: {prod.sizes.join(', ')}
                    </span>
                    
                    <button
                      onClick={(e) => handleQuickWhatsApp(e, prod)}
                      className="px-4 py-2.5 bg-soft-beige hover:bg-primary border border-rose-gold/20 hover:border-primary text-primary hover:text-warm-ivory font-sans text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
                    >
                      <MessageSquare size={11} className="fill-current text-green-500 group-hover:text-warm-ivory" />
                      <span>WhatsApp Inquiry</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-warm-ivory border border-rose-gold/10">
            <span className="text-3xl block mb-4">🔍</span>
            <p className="font-editorial text-xl text-primary font-light mb-2">No boutique items found</p>
            <p className="font-sans text-xs text-charcoal-black/55 font-light">
              Try adjusting your custom size values, tags, or clearing your seek keywords.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedSize('All'); }}
              className="mt-6 font-sans text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/25 pb-0.5 hover:text-secondary"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

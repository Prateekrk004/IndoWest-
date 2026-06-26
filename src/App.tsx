/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Heart, X, MessageSquare, Trash2, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CollectionsGrid from './components/CollectionsGrid';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import CollectionsList from './components/CollectionsList';
import ProductDetailModal from './components/ProductDetailModal';
import Alterations from './components/Alterations';
import { Product } from './types';
import { PRODUCTS } from './data';

export default function App() {
  // Navigation & Categorization states
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [directFilterCategory, setDirectFilterCategory] = useState<string>('All');
  
  // Interactive Product detail overlay modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Wishlist bookmarking state (backed by localStorage for premium persistence)
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);

  // Initialize wishlist from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('indowest_wishlist');
      if (stored) {
        setWishlist(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('LocalStorage unavailable:', e);
    }
  }, []);

  // Save wishlist modifications
  const toggleWishlist = (id: string) => {
    let updated;
    if (wishlist.includes(id)) {
      updated = wishlist.filter((item) => item !== id);
    } else {
      updated = [...wishlist, id];
    }
    setWishlist(updated);
    try {
      localStorage.setItem('indowest_wishlist', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save to LocalStorage:', e);
    }
  };

  // Switch tabs and inject prefiltered category parameter cleanly
  const handleSelectCategory = (category: string) => {
    setDirectFilterCategory(category);
    setCurrentTab('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleNavbarDirectInquiry = () => {
    setCurrentTab('contact');
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Convert wishlisted IDs back to full products
  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-warm-ivory min-h-screen text-charcoal-black font-sans relative">
      
      {/* Custom Global Header Frame */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* RENDER VIEW CONTROLLER */}
      <main className="animate-fade-in">
        {currentTab === 'home' && (
          <div>
            {/* Landing Banner */}
            <Hero 
              onExplore={() => handleSelectCategory('All')} 
              onWhatsApp={() => window.open('https://wa.me/919173495718', '_blank')}
            />

            {/* Custom Narrative Story */}
            <About />

            {/* Collection category links */}
            <CollectionsGrid onSelectCategory={handleSelectCategory} />

            {/* Why Choose Us Promise Grid */}
            <WhyChooseUs />

            {/* Testimonials customer reviews */}
            <Testimonials />

            {/* Store details and Custom inquiry formulas */}
            <ContactSection />
          </div>
        )}

        {currentTab === 'collections' && (
          <CollectionsList 
            onSelectProduct={handleOpenProduct} 
            directFilterCategory={directFilterCategory}
          />
        )}

        {currentTab === 'alterations' && (
          <Alterations />
        )}

        {currentTab === 'about' && (
          <div className="bg-warm-ivory py-6 animate-fade-in">
            <About />
            <WhyChooseUs />
            <Testimonials />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="bg-warm-ivory py-6 animate-fade-in">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Global Interactive Boutique Footer */}
      <footer className="bg-charcoal-black text-warm-ivory border-t border-rose-gold/15 transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo / Tag column */}
          <div className="flex flex-col gap-4">
            <span className="font-editorial text-2xl font-bold tracking-[0.2em] text-white">
              INDO WEST
            </span>
            <span className="text-[10px] text-rose-gold font-sans uppercase tracking-[0.3em] font-medium">
              Women&apos;s Fashion Store
            </span>
            <p className="font-sans text-xs text-warm-ivory/50 leading-relaxed font-light mt-2">
              Celebrating the beautiful intersection of traditional Indian artistry and contemporary Western outlines. Each drop is a dedicated testament to custom luxury.
            </p>
          </div>

          {/* Quick links list column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-rose-gold">
              Showroom Navigation
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-xs font-light text-warm-ivory/60">
              <button onClick={() => setCurrentTab('home')} className="text-left hover:text-white transition-colors">Boutique Home</button>
              <button onClick={() => handleSelectCategory('All')} className="text-left hover:text-white transition-colors">Showcase Catalog</button>
              <button onClick={() => setCurrentTab('alterations')} className="text-left hover:text-white transition-colors">Perfect Alterations</button>
              <button onClick={() => setCurrentTab('about')} className="text-left hover:text-white transition-colors">Bespoke Vision</button>
              <button onClick={() => setCurrentTab('contact')} className="text-left hover:text-white transition-colors">Stylist Connect</button>
            </div>
          </div>

          {/* Sizing categories list column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-rose-gold">
              Luxury Collections
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-xs font-light text-warm-ivory/60">
              <button onClick={() => handleSelectCategory('Indo-Western')} className="text-left hover:text-white transition-colors">Indo-Western</button>
              <button onClick={() => handleSelectCategory('Lehengas')} className="text-left hover:text-white transition-colors">Lehengas</button>
              <button onClick={() => handleSelectCategory('Salwar Suits | Shararas')} className="text-left hover:text-white transition-colors">Salwar Suits | Shararas</button>
            </div>
          </div>

          {/* Newsletter support mockup column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-rose-gold">
              Stay Connected
            </h4>
            <p className="font-sans text-xs text-warm-ivory/50 leading-relaxed font-light">
              Receive updates on seasonal lifestyle launches and private gallery fittings.
            </p>
            <div className="relative flex items-center mt-2">
              <input 
                type="email" 
                placeholder="Submit your email"
                className="w-full bg-warm-ivory/10 border border-rose-gold/20 focus:border-white focus:outline-none p-3.5 text-xs text-white"
              />
              <button 
                onClick={() => alert('Warmest welcome! You have subscribed to our private boutique updates.')}
                className="absolute right-2 p-2 bg-primary hover:bg-secondary text-warm-ivory rounded-none transition-colors"
                aria-label="Submit Button"
              >
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Global base copyrights and credentials line */}
        <div className="border-t border-rose-gold/10 bg-charcoal-black/50 py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-[10px] text-warm-ivory/40 uppercase tracking-widest font-light text-center sm:text-left">
              &copy; {new Date().getFullYear()} INDO WEST WOMEN&apos;S CLOTHING STORE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6 font-sans text-[10px] text-warm-ivory/40 uppercase tracking-widest font-bold">
              <span className="hover:text-rose-gold transition-colors select-none cursor-help">Flagship Boutique: Bengaluru</span>
              <span className="hover:text-rose-gold transition-colors select-none cursor-help">Private Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Wishlist Sliding Sidebar drawer */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-charcoal-black/60 backdrop-blur-sm animate-fade-in">
          
          {/* Cover panel dismiss layer */}
          <div className="absolute inset-0 z-0 cursor-pointer" onClick={() => setIsWishlistOpen(false)} />
          
          {/* Drawer container panel */}
          <div className="relative z-10 w-full max-w-md bg-warm-ivory h-full shadow-2xl flex flex-col justify-between py-8 px-6 sm:px-10 overflow-hidden text-charcoal-black">
            
            <div>
              {/* Header drawer row */}
              <div className="flex items-center justify-between border-b border-charcoal-black/10 pb-6 mb-8">
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-primary fill-current" />
                  <h3 className="font-editorial text-xl font-bold tracking-wide">
                    Your Wishlist
                  </h3>
                </div>
                <button 
                  onClick={() => setIsWishlistOpen(false)}
                  className="p-1.5 border border-charcoal-black/10 hover:bg-primary hover:text-warm-ivory transition-all cursor-pointer rounded-none"
                  aria-label="Dismiss Drawer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Items Display list */}
              {wishlistedProducts.length > 0 ? (
                <div className="flex flex-col gap-6 overflow-y-auto max-h-[60vh] pr-2">
                  {wishlistedProducts.map((p) => (
                    <div 
                      key={p.id}
                      className="flex items-center gap-4 p-3 bg-soft-beige/70 border border-rose-gold/5 group hover:border-rose-gold/25 transition-all"
                    >
                      {/* Image Thumbnail */}
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-16 h-20 object-cover object-center bg-soft-beige"
                      />
                      
                      {/* Text info */}
                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() => { setSelectedProduct(p); setIsWishlistOpen(false); }}
                          className="font-editorial text-sm font-bold text-charcoal-black hover:text-primary transition-colors text-left block truncate w-full"
                        >
                          {p.name}
                        </button>
                        <p className="font-sans text-[10px] text-rose-gold uppercase font-semibold tracking-widest mt-1">
                          {p.category}
                        </p>
                        
                        <button
                          onClick={() => {
                            const text = `Hi Indo West team! I am inquiring about availability of: "${p.name}".`;
                            window.open(`https://wa.me/919173495718?text=${encodeURIComponent(text)}`, '_blank');
                          }}
                          className="font-sans text-[9px] uppercase font-bold text-primary hover:text-secondary flex items-center gap-1 mt-2.5 transition-colors"
                        >
                          <MessageSquare size={9} className="fill-current text-green-500" />
                          <span>Direct Sizing Chat</span>
                        </button>
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => toggleWishlist(p.id)}
                        className="p-2 text-charcoal-black/40 hover:text-red-500 transition-colors rounded-none"
                        title="Remove piece"
                        aria-label="Remove Piece Button"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-soft-beige/50 border border-dashed border-rose-gold/20">
                  <Heart size={36} className="text-charcoal-black/20 mx-auto mb-4" />
                  <p className="font-editorial text-base text-primary/80 font-light mb-1">
                    Your showcase wishlist is empty
                  </p>
                  <p className="font-sans text-[11px] text-charcoal-black/55 font-light leading-relaxed max-w-xs mx-auto mb-6">
                    Start hearting pieces inside our product detail showrooms to catalog them here for customized fittings.
                  </p>
                  <button
                    onClick={() => { setCurrentTab('collections'); setIsWishlistOpen(false); }}
                    className="bg-primary hover:bg-secondary text-warm-ivory py-3 px-6 font-sans text-[10px] uppercase tracking-widest font-bold transition-all"
                  >
                    Browse Collections
                  </button>
                </div>
              )}
            </div>

            {/* Quick General Inquiry link */}
            {wishlistedProducts.length > 0 && (
              <div className="border-t border-charcoal-black/10 pt-6">
                <button
                  onClick={() => {
                    const names = wishlistedProducts.map((p) => p.name).join(', ');
                    const text = `Hi Indo West team!\n\nI am extremely interested in custom fittings regarding multiple products in my collection wishlist:\n\n✨ Items: ${names}\n\nCould you please guide me on private booking/sizing availability? Thank you!`;
                    window.open(`https://wa.me/919173495718?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="w-full bg-primary hover:bg-secondary text-warm-ivory py-4 flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow"
                >
                  <MessageSquare size={13} className="fill-current text-green-300" />
                  <span>Inquire Wishlist (WhatsApp)</span>
                </button>
              </div>
            )}

          </div>

        </div>
      )}

      {/* PRODUCT COUTURE OVERLAY MODAL */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          isWishlisted={wishlist.includes(selectedProduct.id)}
          onToggleWishlist={() => toggleWishlist(selectedProduct.id)}
        />
      )}

    </div>
  );
}

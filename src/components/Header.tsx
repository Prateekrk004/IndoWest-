/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, PhoneCall, Heart, ShoppingBag } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenWishlist: () => void;
}

export default function Header({ currentTab, setCurrentTab, onOpenWishlist }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Collections', id: 'collections' },
    { label: 'Alterations', id: 'alterations' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 glassmorphism border-b border-rose-gold/10 w-full">
      <div className="max-w-7xl mx-auto px-6 py-2 md:px-12 md:py-3.5 flex items-center justify-between w-full">
        
        {/* Logo Text / Asset */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex flex-col justify-center cursor-pointer select-none group"
        >
          <Logo className="h-18 sm:h-[80px] md:h-[96px] lg:h-[108px] w-auto my-[-8px] sm:my-[-12px] md:my-[-16px] lg:my-[-20px] text-primary group-hover:text-secondary transition-colors duration-300" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center md:gap-4 lg:gap-8 xl:gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1 font-sans text-[10px] lg:text-xs uppercase tracking-[0.1em] lg:tracking-[0.2em] font-medium transition-all duration-300 ${
                currentTab === item.id 
                  ? 'text-primary' 
                  : 'text-charcoal-black/70 hover:text-primary'
              }`}
            >
              {item.label}
              {currentTab === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Utility Actions */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button 
            onClick={onOpenWishlist}
            className="p-2 text-charcoal-black/70 hover:text-primary transition-colors relative"
            aria-label="Favorites"
          >
            <Heart size={18} />
          </button>
          
          <button 
            onClick={() => window.open('https://wa.me/919173495718', '_blank')}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-warm-ivory hover:bg-secondary px-3 py-2 md:px-5 md:py-2.5 rounded-none font-sans text-[10px] md:text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-0.5 flex-shrink-0"
          >
            <PhoneCall size={12} className="animate-pulse" />
            <span>WhatsApp Us</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-charcoal-black/70 hover:text-primary md:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-warm-ivory border-b border-rose-gold/10 shadow-xl py-6 px-8 flex flex-col gap-6 md:hidden animate-fade-in z-50">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-sans text-sm uppercase tracking-widest font-medium py-2 border-b border-charcoal-black/5 ${
                  currentTab === item.id ? 'text-primary pl-2 border-l-2 border-primary' : 'text-charcoal-black/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button 
            onClick={() => window.open('https://wa.me/919173495718', '_blank')}
            className="w-full bg-primary text-warm-ivory py-3 flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest font-medium"
          >
            <PhoneCall size={14} />
            Connect on WhatsApp
          </button>
        </div>
      )}
    </header>
  );
}

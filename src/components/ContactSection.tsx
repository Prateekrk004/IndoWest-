/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';

const LOCATIONS = [
  {
    id: 1,
    name: "Kamaraj Road - Main Flagship",
    label: "Flagship Boutique",
    address: "Ground Floor, Mahavir Mall, Shop no 1,2,3,4, k, Kamaraj Rd, below Mysore Saree Udyog 316, opp. to Commercial Street, Bengaluru, Karnataka 560042",
    mapsUrl: "https://maps.app.goo.gl/GUG5PvcCyY86ivMo9?g_st=ic",
    embedUrl: "https://maps.google.com/maps?q=INDO-WEST%20(Below%20Mysore%20Saree%20Udhyog)%20Kamaraj%20Rd%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 2,
    name: "Kamaraj Road - Store 2",
    label: "Boutique Annex",
    address: "Indo-West (Kamraj Road ), No.301, K, Kamaraj Rd, opp. to Koski Showroom, Bengaluru, Karnataka 560042",
    mapsUrl: "https://maps.app.goo.gl/JbAvgrREte4yfoWY6?g_st=ic",
    embedUrl: "https://maps.google.com/maps?q=Indo-West%20(Kamraj%20Road%20),%20No.301,%20K,%20Kamaraj%20Rd,%20opp.%20to%20koski%20Showroom,%20Bengaluru,%20Karnataka%20560042&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 3,
    name: "Jayanagar Store",
    label: "Heritage Showroom",
    address: "M.Palike no, Indo West Jayanagar, No.47, B.B, 16/3, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
    mapsUrl: "https://maps.app.goo.gl/eekiaSaTUzLb7Szk9?g_st=ic",
    embedUrl: "https://maps.google.com/maps?q=M.Palike%20no,%20Indo%20West%20Jayanagar,%20No.47,%20B.B,%2016/3,%2010th%20Main%20Rd,%204th%20Block,%20Jayanagar,%20Bengaluru,%20Karnataka%20560011&t=&z=16&ie=UTF8&iwloc=&output=embed"
  }
];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('General Boutique Inquiry');
  const [message, setMessage] = useState('');
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);

  const boutiquePhone = '919173495718'; // Custom business contact phone

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct prefilled WhatsApp string
    const text = `Hi Indo West!\n\nName: ${name || 'Interested Guest'}\nSubject: ${subject}\nMessage: ${message || 'I would like to enquire about your gorgeous collections.'}`;
    const encodedText = encodeURIComponent(text);
    
    // Direct redirect link to WhatsApp API
    const waUrl = `https://wa.me/${boutiquePhone}?text=${encodedText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-24 bg-warm-ivory border-t border-rose-gold/10 text-charcoal-black" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Address & Store Metadata Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-primary font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4 block">
                Flagship Boutique
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-primary font-light tracking-wide leading-tight mb-8">
                Visit Our Store
              </h3>
              
              <p className="font-sans text-sm text-charcoal-black/70 leading-relaxed mb-10 font-light max-w-sm">
                Experience the beauty and premium materials of our collections in person at our spacious flagship boutique, designed to help you browse in absolute peace.
              </p>

              {/* Information Cards list */}
              <div className="flex flex-col gap-6">
                
                <div className="border-b border-rose-gold/15 pb-4">
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                    <MapPin size={14} /> Our Store Locations
                  </h4>
                  <div className="flex flex-col gap-5">
                    {LOCATIONS.map((loc) => (
                      <div key={loc.id} className="pl-6 border-l-2 border-rose-gold/20 hover:border-primary transition-colors py-1">
                        <h5 className="font-editorial text-sm font-semibold tracking-wide text-primary mb-1">
                          {loc.name}
                        </h5>
                        <p className="font-sans text-[11px] text-charcoal-black/75 leading-relaxed font-light mb-1.5">
                          {loc.address}
                        </p>
                        <a 
                          href={loc.mapsUrl} 
                          target="_blank"  
                          rel="noopener noreferrer" 
                          className="text-[10px] text-primary hover:text-secondary uppercase tracking-widest font-bold font-sans transition-colors inline-flex items-center gap-0.5"
                        >
                          View on Interactive Google Maps ↗
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 text-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-1">Boutique Hours</h4>
                    <p className="font-sans text-xs text-charcoal-black/70 leading-relaxed font-light">
                      Monday &ndash; Sunday : 10:30 AM to 9:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-1">Store Connect</h4>
                    <p className="font-sans text-xs text-charcoal-black/70 leading-relaxed font-light">
                      Direct Boutique Line: +91 91734 95718<br />
                      WhatsApp Business: +91 91734 95718
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-1">Email Support</h4>
                    <p className="font-sans text-xs text-charcoal-black/70 leading-relaxed font-light">
                      experience@indowestboutique.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Subtle disclaimer */}
            <div className="mt-12 pt-6 border-t border-charcoal-black/5">
              <span className="text-[10px] text-charcoal-black/45 tracking-widest uppercase">
                &copy; Boutique Private Booking Available
              </span>
            </div>
          </div>

          {/* Interactive Connect Form / WhatsApp Generator */}
          <div className="lg:col-span-7 bg-soft-beige p-8 sm:p-12 border border-rose-gold/10 relative shadow-lg">
            <span className="text-rose-gold font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              QUICK DESIGN ENQUIRY
            </span>
            <h3 className="font-editorial text-2xl text-charcoal-black font-light tracking-wide mb-8">
              Bespoke Boutique Connect
            </h3>

            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Guest Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="font-sans text-[10px] uppercase tracking-widest text-charcoal-black/60 font-semibold">
                    Your Name
                  </label>
                  <input 
                    id="name-input"
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="bg-warm-ivory border border-rose-gold/20 focus:border-primary focus:outline-none p-3.5 text-xs tracking-wider"
                    required
                  />
                </div>

                {/* Inquiry Type selection */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject-input" className="font-sans text-[10px] uppercase tracking-widest text-charcoal-black/60 font-semibold">
                    Inquiry Type
                  </label>
                  <select 
                    id="subject-input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-warm-ivory border border-rose-gold/20 focus:border-primary focus:outline-none p-3.5 text-xs tracking-wider"
                  >
                    <option value="General Boutique Inquiry">General Boutique Inquiry</option>
                    <option value="Product Availability Sizing">Product Sizing / Materials</option>
                    <option value="Custom Bespoke Fitting">Bridal / Bespoke Sizing</option>
                    <option value="Home Delivery Request">Store Booking / Visit Reservation</option>
                  </select>
                </div>
              </div>

              {/* Message text area */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message-input" className="font-sans text-[10px] uppercase tracking-widest text-charcoal-black/60 font-semibold">
                  Custom Request Details
                </label>
                <textarea 
                  id="message-input"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you are looking for... (e.g. Sizing details, occasion dates)"
                  className="bg-warm-ivory border border-rose-gold/20 focus:border-primary focus:outline-none p-3.5 text-xs tracking-wider resize-none"
                  required
                />
              </div>

              {/* Buttons */}
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-warm-ivory py-4 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow cursor-pointer"
              >
                <MessageSquare size={14} className="fill-current text-green-300 animate-bounce" />
                <span>Submit WhatsApp Inquiry</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Safe Note regarding Static Site */}
              <p className="font-sans text-[10px] text-charcoal-black/50 leading-relaxed text-center font-light">
                *Indo West is a high-fashion static showcase boutique. Pressing this button prepares a real pre-filled message, opening your official WhatsApp chat client to connect with our stylist.
              </p>

            </form>
          </div>

        </div>

        {/* Dynamic & Premium Google Maps Preview Section */}
        <div className="mt-16 border border-rose-gold/15 bg-white p-3 shadow-xl">
          <div className="relative w-full h-[440px] overflow-hidden bg-warm-ivory group">
            <iframe 
              src={LOCATIONS[activeLocationIndex].embedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] sepia-[15%] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              title={`${LOCATIONS[activeLocationIndex].name} Google Map Preview`}
            />
            {/* High-class floating premium card over the Map */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto bg-charcoal-black text-warm-ivory p-6 md:p-8 max-w-sm border border-rose-gold/25 shadow-2xl backdrop-blur bg-charcoal-black/95 z-10">
              <span className="text-rose-gold font-sans text-[10px] uppercase tracking-[0.3em] font-semibold block mb-2 animate-pulse">
                {LOCATIONS[activeLocationIndex].label} Location
              </span>
              <h4 className="font-editorial text-lg tracking-wide mb-3 font-semibold text-white">
                {LOCATIONS[activeLocationIndex].name}
              </h4>
              <p className="font-sans text-[11px] text-warm-ivory/80 leading-relaxed mb-4 font-light">
                {LOCATIONS[activeLocationIndex].address}
              </p>
              
              {/* Interactive Boutique Location Selector Tabs */}
              <div className="flex gap-1.5 mb-5 border-t border-b border-warm-ivory/10 py-3">
                {LOCATIONS.map((loc, idx) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocationIndex(idx)}
                    className={`flex-1 py-2 px-1 text-[9px] uppercase tracking-widest font-bold font-sans transition-all duration-300 text-center border cursor-pointer ${
                      activeLocationIndex === idx 
                        ? 'bg-primary text-warm-ivory border-primary shadow-md' 
                        : 'bg-transparent text-warm-ivory/50 border-warm-ivory/15 hover:text-warm-ivory hover:border-warm-ivory/40'
                    }`}
                  >
                    Loc {idx + 1}
                  </button>
                ))}
              </div>

              <a 
                href={LOCATIONS[activeLocationIndex].mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-warm-ivory px-5 py-3 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 w-full text-center"
              >
                <span>Navigate via Google Maps</span>
                <span className="text-rose-gold font-bold">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

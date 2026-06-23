/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('General Boutique Inquiry');
  const [message, setMessage] = useState('');

  const boutiquePhone = '917411279019'; // Custom business contact phone

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
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-1">Store Address</h4>
                    <p className="font-sans text-xs text-charcoal-black/70 leading-relaxed font-light mb-1.5">
                      Ground Floor, Mahavir Mall, Shop no 1,2,3,4, k,<br />
                      Kamaraj Rd, below Mysore saree udyog 316, opp. to Commercial Street,<br />
                      Bengaluru, Karnataka 560042
                    </p>
                    <a 
                      href="http://google.com/maps/place/INDO-WEST+(Below+Mysore+Saree+Udhyog)/@12.9814812,77.6103771,17z/data=!3m1!5s0x3bae1689aa29045d:0x512e835814138336!4m8!3m7!1s0x3bae17a544fb8ea9:0xc4995bdc825b3d43!8m2!3d12.9814812!4d77.6103771!9m1!1b1!16s%2Fg%2F11j1bg51t_!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank"  
                      rel="noopener noreferrer" 
                      className="text-[10px] text-primary hover:text-secondary uppercase tracking-widest font-bold font-sans transition-colors"
                    >
                      View on Interactive Google Maps ↗
                    </a>
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
          <div className="relative w-full h-[400px] overflow-hidden bg-warm-ivory group">
            <iframe 
              src="https://maps.google.com/maps?q=INDO-WEST%20(Below%20Mysore%20Saree%20Udhyog)%20Kamaraj%20Rd%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] sepia-[15%] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              title="Indo West Flagship Boutique Google Map Preview"
            />
            {/* High-class floating premium card over the Map */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto bg-charcoal-black text-warm-ivory p-6 md:p-8 max-w-sm border border-rose-gold/25 shadow-2xl backdrop-blur bg-charcoal-black/95">
              <span className="text-rose-gold font-sans text-[10px] uppercase tracking-[0.3em] font-semibold block mb-2 animate-pulse">
                Flagship Boutique Location
              </span>
              <h4 className="font-editorial text-xl tracking-wide mb-3 font-semibold">
                Indo West Showroom
              </h4>
              <p className="font-sans text-xs text-warm-ivory/80 leading-relaxed mb-6 font-light">
                Ground Floor, Mahavir Mall, Shop no 1,2,3,4, k, Kamaraj Rd, below Mysore saree udyog 316, opp. to Commercial Street, Bengaluru, Karnataka 560042
              </p>
              <a 
                href="http://google.com/maps/place/INDO-WEST+(Below+Mysore+Saree+Udhyog)/@12.9814812,77.6103771,17z/data=!3m1!5s0x3bae1689aa29045d:0x512e835814138336!4m8!3m7!1s0x3bae17a544fb8ea9:0xc4995bdc825b3d43!8m2!3d12.9814812!4d77.6103771!9m1!1b1!16s%2Fg%2F11j1bg51t_!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" 
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

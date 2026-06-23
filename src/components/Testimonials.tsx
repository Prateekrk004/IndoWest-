/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 bg-warm-ivory text-charcoal-black relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Floating Quote graphic */}
        <div className="absolute top-12 left-12 text-primary/5 -z-10">
          <Quote size={200} className="fill-current" />
        </div>

        {/* Section title */}
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-3 block">
            THE EXPERIENCE ENSEMBLE
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal-black tracking-wide font-light">
            Genuine Google Reviews
          </h2>
          <div className="w-16 h-px bg-rose-gold mx-auto mt-4" />
        </div>

        {/* Grid of 4 elegant cards (div:nth-of-type(3)) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-soft-beige p-8 border border-rose-gold/10 relative shadow-md hover:shadow-xl hover:border-rose-gold/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[320px] group"
            >
              <div>
                {/* Quote Graphic Overlay */}
                <div className="absolute top-6 right-6 text-rose-gold/10 group-hover:text-rose-gold/20 transition-colors duration-300">
                  <Quote size={32} className="fill-current" />
                </div>

                {/* Stars Rating */}
                <div className="flex gap-1 mb-5 text-rose-gold">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-current" />
                  ))}
                </div>

                {/* Testimony block quote */}
                <blockquote className="font-sans text-[12px] sm:text-xs font-light leading-relaxed text-charcoal-black/80 mb-6 group-hover:text-charcoal-black transition-colors duration-300 italic">
                  &ldquo;{t.review}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-rose-gold/15 flex items-center justify-between">
                <div>
                  <p className="font-editorial text-sm font-semibold tracking-wide text-primary">
                    {t.name}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-rose-gold font-medium mt-0.5">
                    {t.role}
                  </p>
                </div>
                <div className="text-[10px] font-sans text-charcoal-black/40 font-bold uppercase tracking-widest bg-warm-ivory py-1 px-2 border border-rose-gold/5 flex items-center gap-1">
                  <MapPin size={9} className="text-rose-gold" />
                  <span>5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button Row */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-12 h-px bg-rose-gold/30 hidden sm:block" />
          <a 
            href="http://google.com/maps/place/INDO-WEST+(Below+Mysore+Saree+Udhyog)/@12.9814812,77.6103771,17z/data=!3m1!5s0x3bae1689aa29045d:0x512e835814138336!4m8!3m7!1s0x3bae17a544fb8ea9:0xc4995bdc825b3d43!8m2!3d12.9814812!4d77.6103771!9m1!1b1!16s%2Fg%2F11j1bg51t_!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            id="gmaps-reviews-link"
            className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-rose-gold hover:text-primary transition-all flex items-center gap-2 group border border-rose-gold/20 hover:border-primary/40 px-6 py-3 bg-soft-beige shadow-sm"
          >
            <span>VERIFIED GOOGLE BUSINESS LISTING</span>
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
          <div className="w-12 h-px bg-rose-gold/30 hidden sm:block" />
        </div>

      </div>
    </section>
  );
}

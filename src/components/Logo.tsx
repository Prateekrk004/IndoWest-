import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-14 text-primary group-hover:text-secondary transition-colors duration-300" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 280 110" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crown Monogram */}
      <g className="opacity-95">
        {/* Crown peaks / spikes */}
        <path d="M 125 24 C 126 19, 128 15, 129.2 13.5 C 132.2 17, 135 21, 138 9.5 C 141 21, 143.8 17, 146.8 13.5 C 148 15, 150 19, 151 24 C 144 25, 132 25, 125 24 Z" />
        {/* Pearls on the peaks */}
        <circle cx="138" cy="8.5" r="1.5" />
        <circle cx="129.2" cy="12.5" r="1.2" />
        <circle cx="146.8" cy="12.5" r="1.2" />
        <circle cx="124" cy="23.5" r="0.8" />
        <circle cx="152" cy="23.5" r="0.8" />
      </g>

      {/* "I W" Monogram Letters */}
      <text 
        x="138" 
        y="49" 
        textAnchor="middle" 
        className="font-display font-medium text-[25px]"
        letterSpacing="6.5"
        style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
      >
        IW
      </text>

      {/* "INDO WEST" Text */}
      <text 
        x="138" 
        y="78" 
        textAnchor="middle" 
        className="font-display font-semibold text-[17px] uppercase"
        letterSpacing="4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        INDO WEST
      </text>

      {/* "Women's Fashion Store" Script/Italic Text */}
      <text 
        x="138" 
        y="96" 
        textAnchor="middle" 
        className="font-serif italic font-normal text-[10px]"
        letterSpacing="0.5"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
      >
        Women&apos;s Fashion Store
      </text>
    </svg>
  );
}

import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-14 text-primary group-hover:text-secondary transition-colors duration-300" }: LogoProps) {
  return (
    <img 
      src="https://i.ibb.co/fd1LxgCs/indowest-logo-removebg-preview.png"
      alt="Indo West Logo"
      className={`${className} object-contain`}
      referrerPolicy="no-referrer"
    />
  );
}


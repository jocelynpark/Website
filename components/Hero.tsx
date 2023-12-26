"use client"
import React, { useState } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


interface HeroProps {
  showAbout: boolean;
  id?: string; // Make 'id' an optional property if it is not always required
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Hero: React.FC<HeroProps> = ({ id, showAbout }) => {
  return (
    <div id={id}> {/* Now you can use id here */}
      <div className='hero-height flex flex-col items-center justify-center transition-all'>
        <h1 className={`h1-responsive text-center text-darkbrown transition-all duration-400 transform ${showAbout ? 'scale-50 translate-y-[-10%]' : ''}`}>
          Hi, I&apos;m Jocelyn.
        </h1>
        {showAbout && (
          <div className="text-justify w-3/4 transition-all duration-400">
            <p className='text-darkbrown'>I’m a student at Cornell University studying Information Science with concentrations in Data Science & User Experience. I spend my time primarily between New York City & Ithaca, vlogging my adventures anywhere in between.</p>
            <br></br>
            <p className='text-darkbrown'>My work is driven by user-centric, visually engaging experiences. I am guided by the notion that art should make one feel something and this motivates the design choices I make. </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

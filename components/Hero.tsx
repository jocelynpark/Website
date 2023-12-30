"use client"
import React, { useState } from 'react';

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
            <p className='text-darkbrown'>I’m a student at Cornell University studying Information Science with concentrations in Data Science & User Experience. I spend my time primarily between New York City & Ithaca, <a href="https://www.youtube.com/@jspcreates" className="text-graygreen font-extrabold hover:opacity-50" target="_blank" rel="noopener noreferrer">vlogging</a> my adventures anywhere in between.</p>
            <br></br>
            <p className='text-darkbrown'>My <a href="#design" className="text-graygreen font-extrabold hover:opacity-50">work</a> is driven by user-centric, visually engaging experiences. I am guided by the notion that art should make one feel something and this motivates the design choices I make. I value empathy, compassion, and enthusiasm to learn. I strive to bring these values to the forefront in design. </p>
            <br></br>
            <p>
              In my free time, I like to indulge in reading, watching films, or binging YouTube videos about slow fashion and sustainable living. I’m also a huge <a href="https://beliapp.co/lists/jocelynpark" className="text-graygreen font-extrabold hover:opacity-50" target="_blank" rel="noopener noreferrer">foodie</a>.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

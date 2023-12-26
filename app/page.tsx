"use client"
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Illustration from '@/components/illustration';
import Design from '@/components/design';

const App: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <Hero id="hero" showAbout={showAbout} /> {/* Assign an ID here */}
      <Navbar onAboutClick={() => setShowAbout(!showAbout)} />
      <Illustration id="illustration" /> {/* And here */}
      <Design id="design" /> {/* And here */}
    </>
  );
};

export default App;

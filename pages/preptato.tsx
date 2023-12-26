import React, { useState } from 'react';
import Smallnavbar from './Smallnavbar';
import Header from '@/components/Header';

import '../app/globals.css'; // The path to your global styles

const Preptato: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div> {/* Flex container */}
      <div className="flex justify-between items-center">
        <Smallnavbar onAboutClick={() => setShowAbout(!showAbout)} />
        <Header />
      </div>
      <div className="items-center px-8 mt-12"> {/* Adjust margin as needed */}
        <h1 className="text-5xl font-bold font-genera text-center mb-4">Preptato</h1>
        <p className="text-xl text-center mb-8 text-graygreen">Meal prepping, for us couch potatoes.</p>
        {/* CONTENT */}
        <div className='md:flex md:items-start bg-gray-100 mx-16 sm:block sm:mx-0'>
          {/* Image container */}
          <div className="md:flex-none md:w-1/4 lg:w-1/4 sm:w-full sm:mb-4 sm:text-center">
            <img src="/PreptatoScreenshot.png" alt="Preptato App Screenshot" className="mx-auto" />
          </div>
          {/* Text container */}
          <div className='flex-grow bg-gray-100 md:px-16 sm:px-4'>
            <h2 className="text-2xl font-bold mb-3 text-graygreen">OBJECTIVE</h2>
            <p className="mb-6">
              To enhance the sense of responsibility in adhering to the meal
              prepping journey, while simultaneously diversifying the experience
              for those who choose to embark upon it.
            </p>
            <h2 className="text-2xl font-bold mb-3 text-graygreen">ROLES</h2>
            <p>User Experience Researcher, User Interface Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preptato;

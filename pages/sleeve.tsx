import React, { useState } from 'react';
import Smallnavbar from './Smallnavbar';
import Header from '@/components/Header';
import '../app/globals.css'; // The path to your global styles

const Sleeve: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div> {/* Flex container for ENTIRE PAGE */}
      <div className="flex justify-between items-center">
        <Smallnavbar onAboutClick={() => setShowAbout(!showAbout)} />
        <Header />
      </div>
      {/* CONTENT */}
      <div className="items-center px-8 mt-12"> {/* Adjust margin as needed */}
        <h1 className="text-5xl font-bold font-genera text-center mb-4 text-sleevepurple">Sleeve</h1>
        <p className="text-xl text-center mb-8 text-sleevedarkgreen">Welcome to the era of sustainable shopping.</p>
        {/* BLURB CONTENT */}
        <div className='md:flex md:items-start md:mx-24 py-8 block mx-0'>

          {/* Text container */}
          <div className='flex-grow md:px-16 sm:px-4'>
            <h2 className="text-2xl font-bold mb-4 text-sleevepurple mt-8 md:mt-0">OBJECTIVE</h2>
            <p className="mb-8">
              Sleeve began in 2023 with a mission to provide affordable, sustainable fashion. Today, we partner with brands to offer surplus inventory at accessible prices, redefining the narrative that eco-conscious fashion must be expensive. Every day, we connect customers with unique, eco-friendly fashion choices.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-sleevepurple">ROLES</h2>
            <p className='mb-8'>Project Manager, User Interface Designer</p>
            <h2 className="text-2xl font-bold mb-4 text-sleevepurple">PROJECTS</h2>
            <p className='mb-8'>I work on the product team, which develops the Sleeve website. I began at Sleeve as a Frontend User Interface Developer, implementing designs I received from other designers and writing code to publish on our application. I transitioned to a Project Manager role a few months after joining Sleeve because of my skill sets in both Design and Software Engineering, acting as a liaison between developers, designers, and our CEO.</p>
            {/* Image container */}
            <figure className="md:flex-none md:w-full lg:w-full sm:w-full sm:mb-4 sm:text-center">
              <img src="/Anchovyscreenshot.png" alt="Anchovy Studio" className="mx-auto" />
              <figcaption className='text-gray-500 mt-2'>Our newest partner, Anchovy Studio, featured on our home page.</figcaption>
            </figure>
            <p>Here are a few of the problems and solutions I have coordinated our team to tackle:</p>
          </div>
        </div>

        {/* WRITING CONTENT */}
        <div className='lg:mx-72 md:mx-40 mx-8'>
          <hr></hr>
          <div className='my-8'>
            <h2 className="text-2xl font-bold mb-4 text-sleevepurple">PROBLEM</h2>
            <p className='mb-8'>Currently, the item cards in our Shop serve as mere redirects to each brand's respective website. This setup introduces unnecessary navigational complexity and disrupts the shopping experience. Such disjointed user flow can increase customer drop-off rates and diminish the perceived convenience of our marketplace, potentially discouraging users from completing their purchases with us. </p>
            <h2 className="text-2xl font-bold mb-4 text-sleevepurple">SOLUTION</h2>
            <p className='mb-8'>Ultimately, we want to reduce friction in the buying process for our users. So, we are in contact with a payments platform that will help us with native payments inside our marketplace itself, instead of payments on another website.</p>
            <p>Some things to consider when we are integrating a native payment option is the transfer of payment to the actual company. Another consideration is the tracking of click rates from our marketplace, which ideally will be included in reports from the payment platform we are working with.</p>
            <h2 className=" my-8 text-2xl font-bold mb-4 text-sleevepurple">PROBLEM</h2>
            <p className='mb-8'>Our item cards on our Shop page are aggregated into one pile with no organization.</p>
            {/* Image container */}
            <figure className="md:flex-none md:w-full lg:w-full sm:w-full sm:mb-4 sm:text-center">
              <img src="/shopalldisorganized.png" alt="Anchovy Studio" className="mx-auto" />
              <figcaption className='text-gray-500 mt-2'>Our item cards with no filters.</figcaption>
            </figure>
            <h2 className="text-2xl font-bold mb-4 text-sleevepurple">SOLUTION</h2>
            <p className='mb-8'>I created a low and mid-fidelity mockup of our filter’s infrastructure and discussed it with our developers and our CEO. Although we are still in discussion about filtering properties, there have been things to consider during implementation, such as storing properties, being exhaustive with all of our products, and property naming conventions that may not match across all the companies we have on our marketplace.</p>
            <p>It has been fulfilling and enlightening working on a small team towards something I am passionate about (sustainable fashion). As a project manager, I am able to leverage my experiences in software and design, and have learned to see the bigger picture when working on a product. Look forward to our new features soon!</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Sleeve;

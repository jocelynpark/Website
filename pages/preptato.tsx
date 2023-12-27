import React, { useState } from 'react';
import Smallnavbar from './Smallnavbar';
import Header from '@/components/Header';
import '../app/globals.css'; // The path to your global styles

const Preptato: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div> {/* Flex container for ENTIRE PAGE */}
      <div className="flex justify-between items-center">
        <Smallnavbar onAboutClick={() => setShowAbout(!showAbout)} />
        <Header />
      </div>
      {/* CONTENT */}
      <div className="items-center px-8 mt-12 text-darkbrown"> {/* Adjust margin as needed */}
        <h1 className="text-5xl font-bold font-genera text-center mb-4">Preptato</h1>
        <p className="text-xl text-center mb-8 text-graygreen">Meal prepping, for us couch potatoes.</p>
        {/* BLURB CONTENT */}
        <div className='mb-16 md:flex md:items-start md:mx-24 py-8 block mx-0'>
          {/* Image container */}
          <div className="md:flex-none md:w-1/4 lg:w-1/4 sm:w-full sm:mb-4 sm:text-center">
            <img src="/PreptatoScreenshot.png" alt="Preptato App Screenshot" className="mx-auto" />
          </div>
          {/* Text container */}
          <div className='flex-grow md:px-16 sm:px-4'>
            <h2 className="text-2xl font-bold mb-4 text-graygreen mt-8 md:mt-0">OBJECTIVE</h2>
            <p className="mb-8">
              To <strong>enhance the sense of responsibility</strong> in adhering to the meal
              prepping journey, while simultaneously <strong>diversifying the experience </strong>
              for those who choose to embark upon it.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-graygreen">ROLES</h2>
            <p className='mb-8'>User Experience Researcher, User Interface Designer</p>
            <h2 className="text-2xl font-bold mb-4 text-graygreen">TEAM</h2>
            <p><strong>Amber Zheng</strong>, User Experience Researcher</p>
            <p><strong>Joseph Agaba</strong>, User Experience Researcher</p>
            <p><strong>Matt Salud</strong>, User Experience Researcher</p>
            <p><strong>Alex Zadeh</strong>, User Experience Researcher</p>
            <p><strong>Diana Valdivia</strong>, User Experience Researcher</p>
          </div>
        </div>

        {/* WRITING CONTENT */}
        <div className='lg:mx-72 md:mx-40 mx-8'>
          <hr></hr>
          <div className='my-8'>
            <h1 className="text-2xl font-bold font-genera">User Research</h1>
            <h2 className='h2'>Understanding user’s motivations: Why do people meal prep?</h2>
            <p>In order to understand the meal preppers’ persona, we spoke to people around us who varied in meal prepping experience and occupation.</p>
            <div className="my-8 md:flex-none sm:mb-4 sm:text-center">
              <img src="/PreptatoAffinity.png" alt="Preptato App Screenshot" className="mx-auto" />
            </div>
            <p>Some major insights we found into why users were motivated to start meal prepping were:
            </p>
            <p className='my-2 lg:mx-24 md:mx-16 mx-8'>1.  Meal prepping is convenient.</p>
            <p className='my-2 lg:mx-24 md:mx-16 mx-8'>2.  Meal prepping offers healthier options. </p>
            <p className='my-2 lg:mx-24 md:mx-16 mx-8'>3.  Meal prepping is cost-efficient. </p>
            <p>But if meal prepping offers so many benefits, why did many of our interviewees say they only “used” to do it? Some major pain points we identified in meal prepping were:</p>

            <p className='my-2 lg:mx-24 md:mx-16 mx-8'>1.  They get bored of eating the same thing every day. </p>
            <p className='my-2 lg:mx-24 md:mx-16 mx-8'>2.  It’s difficult to stay on track when plans come up, such as spontaneous outings.</p>
            <p className='my-2 lg:mx-24 md:mx-16 mx-8'>3.  It’s labor-intensive to prepare all your meals at once.</p>

            <p>After identifying pain points, we created three user personas who could represent users in our audience:</p>
          </div>
          <div className="flex-none w-full w-full mb-4 text-center">
            <img src="/personas.webp" alt="Affinity Diagram" className="mx-auto" />
          </div>
          <p className='mb-8'>Below is a user journey map that takes us through the process of meal prepping specific to each of the three personas.</p>
          <div className="flex-none w-full w-full mb-4 text-center">
            <img src="/journeymap.webp" alt="Journey Map" className="mx-auto" />
          </div>
          <h2 className='h2 mt-8'>Figuring out domains to address</h2>
          <p>After looking at our diagrams and brainstorming, we identified two opportunity areas: </p>

          <p className='my-2 lg:mx-24 md:mx-16 mx-8'>1. Exploring more diverse cooking options </p>
          <p className='my-2 lg:mx-24 md:mx-16 mx-8'>2. Holding people accountable for staying on their diet </p>
          <h2 className="text-2xl font-bold mb-4 text-graygreen mt-16">THE PROBLEM</h2>
          <p className='mb-16'>People have a hard time maintaining meal prepping habits after they decide to start because their schedules are <strong>unpredictable</strong>, they get <strong>tired</strong> of eating the same thing every day, and it is <strong>labor-intensive</strong> to prep many meals at once.
          </p>
          <h2 className='h2'>Understanding the contexts in which they meal prep</h2>
          <p>After interviewing people who prepare their own meals, both through meal prepping and just regular cooking, we found meal preppers on our college campus are mostly comprised of two demographics:</p>
          <p className='my-2 lg:mx-24 md:mx-16 mx-8'>1. Members of greek life/organizations on college campus </p>
          <p className='my-2 lg:mx-24 md:mx-16 mx-8'>2. People who live with others </p>
          <p><strong>Key insight</strong>: people who are around others feel motivated to meal prep and meal prep with others. They are pushed to do it when they have some sense of accountability and can share with others what they have created.</p>
          <h2 className='h2 mt-8'>Encouraging meal preppers to stay on track
          </h2>
          <p>People enjoy a sense of togetherness. It’s evident through the fraternity brothers who say that they started meal prepping because they wanted to join their brothers, or the roommates who said it was a great bonding experience. So, we concluded that</p>
          <p className='my-8 text-center'><strong>Sharing experiences and progress fosters a sense of mutual responsibility and commitment, creating a space where individuals hold each other accountable.</strong></p>
          <h2 className='h2 mt-8'>Creating a hub that maximizes customizability
          </h2>
          <p>One of the issues that meal preppers have with following a meal prepping regimen is that there is little room for customizability and creativity. By having a diverse range of recipes and ability to share with others, users are able to make whatever dish they want their own.</p>
          <h2 className="text-2xl font-bold mb-4 text-graygreen mt-16">OUR SOLUTION</h2>
          <p>So users are drawn to accountability, a sense of community, and exploration. We settled on a social media app that allows users to share their prepped meals, explore new recipes, and plan them in advance if they would like, but also keep it agile for when they fall off so it’s forgiving and easy to come back to. It might be difficult to find ‘friends,’ so a sense of community without the pressure of the connotation that ‘friends’ has led us to a more explore-focused area. This way, users are more likely to engage and push each other towards things they like.</p>
          <h2 className='h2 mt-8'>Final Designs</h2>
          <p>Below is the final interaction for Preptato.</p>
          <div className="my-8 flex justify-center items-center w-full md:w-2/3">
            <img src="/interaction.gif" alt="Preptato Interaction" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Preptato;

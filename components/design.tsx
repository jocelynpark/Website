import React from 'react'
import Image from "next/image"
import Link from 'next/link';

interface DesignProps {
  id?: string; // Make 'id' an optional property if it is not always required
}

const projects = [
  {
    name: "Preptato",
    image: "/PreptatoCard.png",
    description: "Preparing meals, for us couch potatoes.",
    link: "/preptato",
    external: false
  },
  {
    name: "Sleeve",
    image: "/SleeveCard4.png",
    description: "Welcome to the era of sustainable shopping.",
    link: "/sleeve",
    external: false
  },
  {
    name: "This Website",
    image: "/WebsiteCard.png",
    description: "Built from scratch.",
    link: "https://github.com/jocelynpark/Website",
    external: true
  },
  // {
  //   name: "Ari Yuh",
  //   image: "/PreptatoCard.png",
  //   description: "Preparing meals, for us couch potatoes.",
  //   link: "/ari-yuh",
  //   external: false
  // }
]

const Design: React.FC<DesignProps> = ({ id }) => {
  return (
    <div id={id}> {/* Now you can use id here */}
      <section id="design" className='md:px-24 px-8'>
        <h1 className='h1-responsive text-darkbrown'>Design</h1>
        <div className='flex md:flex-row md:flex-1 md:space-x-8 flex-col items-center space-x-0 my-2'>
          {projects.map((project, idx) => {
            // This is the content common to both internal and external links.
            const content = (
              <>
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="responsive"
                  width={100}
                  height={100}
                />
                <h3 className="py-2 h3-responsive font-genera text-darkbrown self-start text-left">{project.name}</h3>
                <p className='text-darkbrown self-start text-left'>{project.description}</p>
              </>
            );

            return (
              <div key={idx} className={`md:w-1/2 w-full hover:opacity-70 hover:cursor-pointer sm:mb-0 sm:space-y-0 relative my-8`}>
                {project.external ? (
                  // External link with an anchor tag.
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center justify-center overflow-hidden`}>
                    {content}
                  </a>
                ) : (
                  // Internal link using Next.js Link component.
                  <Link href={project.link} passHref>
                    <div className={`flex flex-col items-center justify-center overflow-hidden`}>
                      {content}
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default Design
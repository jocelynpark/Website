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
    name: "This Website",
    image: "/WebsiteCard.png",
    description: "Built from scratch.",
    link: "https://github.com/jocelynpark/my-project",
    external: true
  },
]

const Design: React.FC<DesignProps> = ({ id }) => {
  return (
    <div id={id}> {/* Now you can use id here */}
      <section id="design" className='py-36 px-24 sm:px-8'>
        <div className='flex flex-row flex-1 space-x-8 sm:flex-col sm:space-y-2 sm:items-center sm:space-x-0 my-2'>
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
              <div key={idx} className={`w-1/2 sm:w-full hover:opacity-70 hover:cursor-pointer sm:mb-0 sm:space-y-0 relative my-8`}>
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
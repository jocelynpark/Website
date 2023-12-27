import React from 'react'
import Image from "next/image"

interface IllustrationProps {
  id?: string; // Make 'id' an optional property if it is not always required
}

const arts1 = [
  {
    name: "A Mother's Burden",
    image: "/a-mothers-burden.JPG",
  },
  {
    name: "Looking Ahead",
    image: "/looking-ahead.JPG",
  },
]

const arts2 = [
  {
    name: "Looking Glass",
    image: "/looking-glass.JPG",
  },
  {
    name: "Water Bed",
    image: "/water-bed.JPG",
  },
]



const Illustration: React.FC<IllustrationProps> = ({ id }) => {
  return (
    <div id={id}> {/* Now you can use id here */}
      <section id="illustration" className='py-16 md:px-40 px-8'>
        <div className='flex md:flex-row md:space-x-2 flex-col items-center space-x-0 my-2'>
          {arts1.map((project, idx) => {
            return (
              <div key={idx} className={`md:w-1/2 rounded-md w-full`}>
                <div className={`flex flex-col items-center rounded-md overflow-hidden mb-4 md:mb-0`}>
                  <Image
                    src={project.image}
                    alt=""
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex md:flex-row md:space-x-2 flex-col  items-center space-x-0 my-2'>
          {arts2.map((project, idx) => {
            return (
              <div key={idx} className={`md:w-1/2 rounded-md w-full`}>
                <div className={`flex flex-col items-center rounded-md overflow-hidden mb-4 md:mb-0`}>
                  <Image
                    src={project.image}
                    alt=""
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Illustration

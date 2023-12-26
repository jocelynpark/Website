import React from 'react'
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const Header = () => {
  return (
    <div className='header-height flex justify-end mx-24 items-center'>
      <div className='justify-end flex'>
        <div className='flex space-x-8'>
          <a
            href="https://youtube.com/@jspcreates"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 hover:text-red-600 transition-transform cursor-pointer text-darkbrown"
              size={24}
            />
          </a>
          <a href="https://github.com/jocelynpark" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 hover:text-purple-800 transition-transform cursor-pointer text-darkbrown"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jocelynsprofessional/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 hover:text-blue-600 transition-transform cursor-pointer text-darkbrown"
              size={24}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
"use client";
import React, { useState } from 'react';
import { Link } from 'react-scroll/modules'

interface NavbarProps {
  onAboutClick: () => void; // This is the type for your onAboutClick handler
}

interface NavItem {
  label: string;
  page: string;
  external?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onAboutClick }) => {
  const [activePage, setActivePage] = useState<string>('');

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "about",
      page: "about",
    },
    {
      label: "design",
      page: "design",
    },
    {
      label: "illustration",
      page: "illustration",
    },
    {
      label: "resume",
      page: "https://drive.google.com/file/d/1RutCJYJB2Ylrq1lZQ196-4NxE6lcWXVV/view?usp=sharing",
      external: true,
    },
  ];

  const handleNavItemClick = (page: string) => {
    setActivePage(page);
    if (page === 'about') {
      onAboutClick();
    }
  };

  return (
    <div className='flex justify-center'>
      <div className='mt-24 justify-between flex w-3/4'>
        {NAV_ITEMS.map((item, idx) => {
          const isActive = activePage === item.page;
          const navItemClasses = `text-xl md:text-3xl text-darkbrown opacity-100 hover:opacity-30 hover:cursor-pointer ${isActive ? 'opacity-100 font-black' : ''}`;

          if (item.external) {
            return (
              <a
                key={idx}
                href={item.page}
                className={navItemClasses}
                onClick={() => handleNavItemClick(item.page)}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.label}
              </a>
            );
          } else {
            return (
              <Link
                key={idx}
                to={item.page}
                className={navItemClasses}
                onClick={() => handleNavItemClick(item.page)}
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {item.label}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;
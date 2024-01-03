import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link

interface NavbarProps {
  onAboutClick: () => void;
}

interface NavItem {
  label: string;
  page: string;
  external?: boolean;
}

const Smallnavbar: React.FC<NavbarProps> = ({ onAboutClick }) => {
  const [activePage, setActivePage] = useState<string>('');

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "about",
      page: "./#about",
    },
    {
      label: "design",
      page: "./#design",
    },
    {
      label: "illustration",
      page: "./#illustration",
    },
    {
      label: "resume",
      page: "https://drive.google.com/file/d/1RutCJYJB2Ylrq1lZQ196-4NxE6lcWXVV/view?usp=sharing",
      external: true,
    }
  ];

  const handleNavItemClick = (page: string) => {
    setActivePage(page);
    if (page === 'about') {
      onAboutClick();
    }
  };

  return (
    <div className='flex mx-32'>
      <div className='justify-between flex'>
        {NAV_ITEMS.map((item, idx) => {
          const isActive = activePage === item.page;
          const navItemClasses = `sm:text-xl px-8 text-2xl text-darkbrown opacity-100 hover:opacity-30 hover:cursor-pointer ${isActive ? 'opacity-100 font-black' : ''}`;

          if (item.external) {
            // Keep as is for external links
            return (
              <a
                key={idx}
                href={item.page}
                className={navItemClasses}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.label}
              </a>
            );
          } else {
            // Use Next.js Link for internal navigation
            return (
              <Link href={item.page} key={idx}
                className={navItemClasses} onClick={() => handleNavItemClick(item.page)}>
                {item.label}

              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Smallnavbar;


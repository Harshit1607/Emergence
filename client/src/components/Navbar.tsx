'use client';

import Link from 'next/link';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleClick = () =>{
    setShowNav(!showNav);
  }

useEffect(() => {
  const checkIsPhone = () => {
    setIsPhone(window.innerWidth <= 768); // You can adjust this breakpoint
  };

  // Run once on mount
  checkIsPhone();

  // Listen for window resize
  window.addEventListener('resize', checkIsPhone);

  // Cleanup listener on unmount
  return () => {
    window.removeEventListener('resize', checkIsPhone);
  };
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-screen h-[12vh] z-[100]
          glass-effect shadow-lg transition-transform duration-300 md:text-2xl text-md
          ${scrollDirection === 'down' && !scrolledToTop ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="w-[90%] h-full mx-auto flex justify-between items-center">
          <Link href="/" className="font-medium relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] hoverBg after:transition-all after:duration-300 hover:after:w-full cursor-none">
            Home
          </Link>
          <div className="flex gap-8">
            {
              isPhone ?
                <img
                  onClick={handleClick}
                  src="/assets/options.svg"
                  alt="Menu"
                  className="w-6 h-6 transition-transform duration-200 hover:scale-110 cursor-none foreground-color mr-1"
                />

              :
                <>
                  <ThemeToggle />
                  {[
                    { label: 'Projects', href: '/project' },
                    { label: 'About Me', href: '/about' },
                    // { label: 'Contact', href: '/contact' },
                  ].map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] hoverBg after:transition-all after:duration-300 hover:after:w-full cursor-none"
                    >
                      {label}
                    </Link>
                    ))}
                </>
                
                  
            }
            
          </div>
        </div>
      </div>
      {isPhone && showNav && 
      <div className={`fixed top-[12vh] w-screen z-[100]
          glass-effect shadow-md transition-transform duration-300 md:text-2xl text-md
          ${scrollDirection === 'down' && !scrolledToTop ? '-translate-y-[45vh]' : 'translate-y-0'} flex flex-col
          items-center justify-start
        `}>
            
            {[
              { label: 'Projects', href: '/project' },
              { label: 'About Me', href: '/about' },
              // { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <div className='h-[10vh] border-b-1 w-full flex items-center justify-center' key={label}>
                  <Link
                    onClick={() => setShowNav(false)}  
                    href={href}
                    className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-0 after:h-[2px] hoverBg after:transition-all after:duration-300 hover:after:w-full cursor-none"
                  >
                    {label}
                  </Link>
              </div>
              
              ))}
              <div className='h-[10vh] flex items-center justify-center'>
                <ThemeToggle />
              </div>
              
      </div>
      }
    </>
    
  );
};

export default Navbar;

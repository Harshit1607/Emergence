'use client';

import { useEffect, useRef, useState } from 'react';

const ScrollSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1);
  const [windowHeight, setWindowHeight] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const helloRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[][]>([]);

  console.log(isMobile)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const blackBgProgress = Math.min(scrollY / windowHeight, 1);
  const textProgress = Math.min(scrollY / (windowHeight * 1.5), 1);
  const blackWidth = blackBgProgress * windowWidth;

  // Responsive paddings based on screen width
  const rightPadding = windowWidth < 640 ? 20 : windowWidth < 1024 ? 40 : 80;
  const leftPadding = windowWidth < 640 ? 20 : windowWidth < 1024 ? 40 : 80;

  const helloWidth = helloRef.current?.getBoundingClientRect().width || 0;
  const nameWidth = nameRef.current?.getBoundingClientRect().width || 0;

  const helloMaxShift = -(windowWidth - rightPadding - leftPadding - helloWidth);
  const nameMaxShift = -(windowWidth - rightPadding - leftPadding - nameWidth);

  const helloTranslateX = Math.max(textProgress * helloMaxShift, helloMaxShift);
  const nameTranslateX = Math.max(textProgress * nameMaxShift, nameMaxShift);

  useEffect(() => {
    charsRef.current.forEach((line) => {
      let whiteCount = 0;

      line.forEach((char) => {
        if (char) {
          const rect = char.getBoundingClientRect();
          const charLeft = rect.left;
          const isWhite = charLeft < blackWidth;
          char.style.color = isWhite ? 'white' : 'black';
          if (isWhite) whiteCount++;
        }
      });

      const parent = line[0]?.parentElement;
      if (parent) {
        if (whiteCount > line.length / 2) {
          parent.classList.add('underline-white');
          parent.classList.remove('underline-black');
        } else {
          parent.classList.add('underline-black');
          parent.classList.remove('underline-white');
        }
      }
    });
  }, [scrollY, windowWidth]);

  const sideLinks = [
    { text: 'Github', url: 'https://github.com/Harshit1607' },
    { text: 'Resume', url: 'https://drive.google.com/file/d/1tAeYrMzwMDUDfFaTSd47gFINPDyC0h5i/view?usp=sharing' },
    { text: 'Linkedin', url: 'https://www.linkedin.com/in/harshit-bareja-359a36292/' },
  ];

  // Calculate responsive font sizes
  const getHeadingFontSize = () => {
    if (windowWidth < 640) return 'text-5xl'; // Small screens
    if (windowWidth < 1024) return 'text-7xl'; // Medium screens
    return 'text-9xl'; // Large screens
  };

  const getDescriptionSize = () => {
    if (windowWidth < 640) return 'text-md max-w-xs';
    if (windowWidth < 1024) return 'text-xl max-w-sm';
    return 'text-2xl max-w-sm';
  };

  const getLinkSize = () => {
    if (windowWidth < 640) return 'text-base';
    if (windowWidth < 1024) return 'text-xl';
    return 'text-2xl';
  };

  // Adjust vertical positioning for headings
  const getHelloPosition = () => {
    if (windowWidth < 640) return 'top-[15%]';
    if (windowWidth < 1024) return 'top-[20%]';
    return 'top-[20%]';
  };

  const getNamePosition = () => {
    if (windowWidth < 640) return 'top-[25%]';
    if (windowWidth < 1024) return 'top-[35%]';
    return 'top-[40%]';
  };

  return (
    <div className="relative box-border h-[250dvh] w-[100vw] max-w-[100vw] bg-white">
      <div className="sticky top-0 left-0 w-screen h-screen max-h-[100dvh] z-50 box-border overflow-x-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-black origin-left"
          style={{
            width: `${windowWidth}px`,
            transform: `scaleX(${blackBgProgress})`,
            transition: 'transform 0.1s ease-out',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-between items-end pb-10 md:pb-12 px-7 md:px-10 lg:px-20 box-border">
          <div className={`${getDescriptionSize()} text-white my-0`}>
            <span>
              A Web developer crafting clean, responsive, and user-focused applications with a focus on scalability and intuitive user experience.
            </span>
          </div>

          <div className="flex flex-col items-end gap-1 md:gap-2 box-border">
            {sideLinks.map((link, linkIdx) => (
              <div key={linkIdx} className="flex">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="cursor-none">
                  <span
                    className={`${getLinkSize()} relative 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:-translate-x-1/2 after:w-0 after:h-[2px] 
                      after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {link.text.split('').map((char, charIdx) => {
                      const lineIndex = 2 + linkIdx;
                      if (!charsRef.current[lineIndex]) charsRef.current[lineIndex] = [];
                      return (
                        <span
                          key={charIdx}
                          ref={(el) => {
                            charsRef.current[lineIndex][charIdx] = el;
                          }}
                          className="transition-colors duration-75"
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      );
                    })}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={helloRef}
          className={`absolute ${getHeadingFontSize()} ${getHelloPosition()} font-gloock`}
          style={{
            right: rightPadding,
            transform: `translateX(${helloTranslateX}px)`,
            transition: 'transform 0.05s ease-out',
            zIndex: 10,
          }}
        >
          <div className="flex">
            {'Hello'.split('').map((char, idx) => {
              if (!charsRef.current[0]) charsRef.current[0] = [];
              return (
                <span
                  key={idx}
                  ref={(el) => {
                    charsRef.current[0][idx] = el;
                  }}
                  className="transition-colors duration-75"
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        </div>

        <div
          ref={nameRef}
          className={`absolute ${getHeadingFontSize()} ${getNamePosition()} font-gloock`}
          style={{
            right: rightPadding,
            transform: `translateX(${nameTranslateX}px)`,
            transition: 'transform 0.05s ease-out',
            zIndex: 10,
          }}
        >
          <div className="flex">
            {"I'm Harshit".split('').map((char, idx) => {
              if (!charsRef.current[1]) charsRef.current[1] = [];
              return (
                <span
                  key={idx}
                  ref={(el) => {
                    charsRef.current[1][idx] = el;
                  }}
                  className="transition-colors duration-75"
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
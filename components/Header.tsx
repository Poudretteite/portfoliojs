'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({
  lang,
  navDict,
  artistName
}: {
  lang: string,
  navDict: { language: string, langCode: string, bio: string, portfolio: string, contact: string },
  artistName: string
}) {
  const [isScrolledPastBio, setIsScrolledPastBio] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 20);
      const bioElement = document.getElementById('bio');
      if (bioElement) {
        const rect = bioElement.getBoundingClientRect();
        // If the bottom of the bio section is less than the header height, it's scrolled past
        setIsScrolledPastBio(rect.bottom < 100);
      } else {
        setIsScrolledPastBio(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 flex justify-between items-center h-16 md:h-20 transition-colors duration-300 px-6 md:px-8 lg:px-12 ${isAtTop ? 'bg-transparent border-transparent' : 'bg-neutral-950/90 backdrop-blur-md border-b border-white/5'}`}>
      <div className="flex-1">
        <AnimatePresence>
          {isScrolledPastBio && (
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-medium tracking-tight text-white/90 uppercase"
            >
              {artistName}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex items-center gap-4 md:gap-6 text-xs md:text-sm tracking-widest uppercase">
        <a href="#bio" className="text-white/50 hover:text-white transition-colors hidden sm:block">{navDict.bio}</a>
        <a href="#portfolio" className="text-white/50 hover:text-white transition-colors">{navDict.portfolio}</a>
        <a href="#contact" className="text-white/50 hover:text-white transition-colors">{navDict.contact}</a>
        {/*<LanguageSwitcher currentLang={lang} navDict={{ language: navDict.language, langCode: navDict.langCode }} />*/}
      </nav>
    </header>
  );
}

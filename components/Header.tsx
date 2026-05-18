'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { galleryImages } from '@/lib/gallery';

export default function Header({
  lang,
  navDict,
  artistName
}: {
  lang: 'pl' | 'en',
  navDict: { language: string, langCode: string, bio: string, portfolio: string, exhibitions: string, contact: string },
  artistName: string
}) {
  const [isScrolledPastBio, setIsScrolledPastBio] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 20);
      const bioElement = document.getElementById('bio');
      if (bioElement) {
        const rect = bioElement.getBoundingClientRect();
        setIsScrolledPastBio(rect.bottom < 100);
      } else {
        setIsScrolledPastBio(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-40 flex justify-between items-center h-16 md:h-20 transition-colors duration-300 px-6 md:px-8 lg:px-12 ${isAtTop ? 'bg-transparent border-transparent' : 'bg-neutral-950/90 backdrop-blur-md border-b border-white/5'}`}>
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

          <button
            onClick={() => setIsGalleryOpen(true)}
            className="text-white/50 hover:text-white transition-colors uppercase tracking-widest"
          >
            {lang === 'pl' ? 'Galeria' : 'Gallery'}
          </button>

          <a href="#exhibitions" className="text-white/50 hover:text-white transition-colors">{navDict.exhibitions}</a>

          <a href="#contact" className="text-white/50 hover:text-white transition-colors">{navDict.contact}</a>

          <LanguageSwitcher currentLang={lang} navDict={navDict} />
        </nav>
      </header>

      {/* Globalny Modal Galerii */}
      <AnimatePresence>
        {isGalleryOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-0 bg-black/95 backdrop-blur-md">

            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 z-50 text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
              aria-label={lang === 'pl' ? 'Zamknij galerie' : 'Close gallery'}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full h-full overflow-y-auto px-4 md:px-12 py-24 flex flex-col items-center">
              <h4 className="text-xl md:text-2xl font-light tracking-widest text-white/70 uppercase mb-12 text-center shrink-0">
                {lang === 'pl' ? 'Wszystkie prace' : 'All works'}
              </h4>

              {/* Masonry layout: columns break into natural flow without gaps between rows */}
              <div className="w-full max-w-7xl mx-auto columns-1 md:columns-2 gap-4 md:gap-6 space-y-4 md:space-y-6">

                {galleryImages.map((img) => (
                  <div key={img.id} className="relative w-full shadow-2xl break-inside-avoid">
                    <Image
                      src={img.src}
                      alt={img.alt[lang]}
                      width={0}
                      height={0}
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto rounded-sm"
                    />
                  </div>
                ))}

              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
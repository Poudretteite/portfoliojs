'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '@/sanity/lib/types';
import VideoModal from './VideoModal';
import { urlFor } from '@/sanity/lib/image';

export default function ProjectCard({
  project,
  lang
}: {
  project: Project,
  lang: 'pl' | 'en'
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen || isGalleryOpen || isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isGalleryOpen, isVideoModalOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px", once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-16 md:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">

          {/* Left Column: Text (Sticky) */}
          <div className="lg:col-span-6 relative">
            <div className="lg:sticky lg:top-20 flex flex-col items-start text-left min-w-0 w-full">

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold tracking-tighter leading-[1.1] text-white uppercase mb-6 -ml-2 md:-ml-6 break-words hyphens-auto pr-4 overflow-hidden w-full max-w-full"
              >
                {project.title}
              </motion.h3>

              {/* Metadata */}
              <div className="text-[10px] md:text-sm text-white/40 mb-6 space-y-3 uppercase tracking-[0.2em] border-l border-white/20 pl-4">
                <p>Medium: {project.metadata.medium}</p>
                <p>Format: {project.metadata.format}</p>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-6">
                <p className="text-lg md:text-xl text-white/80 font-thin leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-6 mt-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-fit group flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors"
                  >
                    {lang === 'pl' ? 'Szczegóły' : 'Details'}
                  </button>

                  {project.videos && project.videos.length > 0 && (
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="w-fit group flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      {lang === 'pl' ? 'Zobacz film' : 'Watch video'}
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Images */}
          <div className="lg:col-span-6 flex flex-col gap-12 lg:gap-24 mt-16">
            {(project.images ?? []).slice(0, 5).map((img, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={idx}
                className="relative w-full overflow-hidden bg-white/5 rounded-sm shadow-2xl shadow-black/50 group"
              >
                <Image
                  src={urlFor(img).width(1200).url()}
                  alt={`${project.title} - Image ${idx + 1}`}
                  width={0}
                  height={0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            ))}

            {(project.images ?? []).length > 5 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors border border-white/20 px-8 py-4 rounded-full hover:bg-white/5"
                >
                  {lang === 'pl' ? 'Wszystkie zdjęcia' : 'All photos'}
                </button>
              </div>
            )}
          </div>

        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-neutral-900 border border-white/10 p-8 md:p-14 max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-xl shadow-2xl min-w-0"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                aria-label={lang === 'pl' ? 'Zamknij' : 'Close'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h4 className="text-2xl font-light tracking-widest text-white/90 uppercase mb-8 pr-8 pb-6 break-words overflow-hidden max-w-full">
                {project.title}
              </h4>

              <div
                className="text-white/60 leading-loose font-light text-base md:text-lg whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: project.longDesc }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-0 bg-black/95 backdrop-blur-md">
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 z-50 text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
              aria-label={lang === 'pl' ? 'Zamknij galerie' : 'Close gallery'}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Gallery Area */}
            <div className="w-full h-full overflow-y-auto px-4 md:px-12 py-24 flex flex-col items-center">
              <h4 className="text-xl md:text-2xl font-light tracking-widest text-white/70 uppercase mb-12 text-center shrink-0 break-words overflow-hidden max-w-full">
                {project.title} - {lang === 'pl' ? 'Galeria' : 'Gallery'}
              </h4>

              {/* Tabela (Grid) na zdjęcia */}
              <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {(project.images ?? []).map((img, idx) => (
                  // Usunięto w-3/4 mx-auto, aby zdjęcie wypełniło kolumnę
                  <div key={idx} className="relative w-full shadow-2xl shrink-0">
                    <Image
                      src={urlFor(img).width(1200).url()}
                      alt={`${project.title} - Image ${idx + 1}`}
                      width={1200}
                      height={800}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      {project.videos && project.videos.length > 0 && (
        <VideoModal
          videos={project.videos ?? []}
          title={project.title}
          lang={lang}
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />
      )}
    </>
  );
}
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  videos: string[];
  title: string;
  lang: 'pl' | 'en';
  isOpen: boolean;
  onClose: () => void;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com|youtu\.be)/.test(url);
}

function isFacebookUrl(url: string): boolean {
  return /facebook\.com/.test(url);
}

export default function VideoModal({
  videos,
  title,
  lang,
  isOpen,
  onClose,
}: VideoModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentVideo = videos[activeIndex];
  const isYouTube = isYouTubeUrl(currentVideo);
  const isFacebook = isFacebookUrl(currentVideo);
  const hasMultiple = videos.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-neutral-900 border border-white/10 p-6 md:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
              aria-label={lang === 'pl' ? 'Zamknij' : 'Close'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <h4 className="text-xl md:text-2xl font-light tracking-widest text-white/90 uppercase mb-8 pr-8">
              {title} — {lang === 'pl' ? 'Film' : 'Video'}
            </h4>

            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-6">
              {isYouTube ? (
                <iframe
                  key={currentVideo}
                  src={`https://www.youtube.com/embed/${getYouTubeId(currentVideo)}?autoplay=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : isFacebook ? (
                <iframe
                  key={currentVideo}
                  src={currentVideo}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder={0}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              ) : (
                <video
                  key={currentVideo}
                  controls
                  autoPlay
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                >
                  <source src={currentVideo} type="video/mp4" />
                  {lang === 'pl'
                    ? 'Twoja przeglądarka nie obsługuje odtwarzacza wideo.'
                    : 'Your browser does not support the video player.'}
                </video>
              )}
            </div>

            {/* Thumbnail Navigation for multiple videos */}
            {hasMultiple && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {videos.map((video, idx) => {
                  const thumb = getYouTubeThumbnail(video);
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative flex-shrink-0 w-28 h-16 rounded-md overflow-hidden border-2 transition-all ${
                        idx === activeIndex
                          ? 'border-white/80 opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-80'
                      }`}
                    >
                      {thumb ? (
                        <img
                          src={thumb}
                          alt={`${lang === 'pl' ? 'Film' : 'Video'} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/40 text-xs">
                          {idx + 1}
                        </div>
                      )}
                      {/* Play icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

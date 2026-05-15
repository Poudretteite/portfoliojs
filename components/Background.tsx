'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

export default function Background() {
  const [isMounted, setIsMounted] = useState(false);

  // Motion values for X and Y coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fast spring for the focused core light (very responsive)
  const fastSpringConfig = { damping: 20, stiffness: 300, mass: 0.2 };
  const fastX = useSpring(mouseX, fastSpringConfig);
  const fastY = useSpring(mouseY, fastSpringConfig);

  // Slow spring for the trailing smudge (lags behind significantly)
  const slowSpringConfig = { damping: 40, stiffness: 40, mass: 2 };
  const slowX = useSpring(mouseX, slowSpringConfig);
  const slowY = useSpring(mouseY, slowSpringConfig);

  // Template string combining both lights
  const background = useMotionTemplate`
    radial-gradient(180px circle at ${fastX}px ${fastY}px, rgba(255,255,255,0.15), transparent 60%),
    radial-gradient(200px circle at ${slowX}px ${slowY}px, rgba(255,255,255,0.06), transparent 60%)
  `;

  useEffect(() => {
    setIsMounted(true);

    // Set initial position to center of screen
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const updateMousePosition = (ev: MouseEvent) => {
      mouseX.set(ev.clientX);
      mouseY.set(ev.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <>
      {/* Interactive Spotlight Overlay */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-10"
        style={{ background }}
      />

      {/* SVG Noise Grain Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-20 mix-blend-overlay opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </>
  );
}

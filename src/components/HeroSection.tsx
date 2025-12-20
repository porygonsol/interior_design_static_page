import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#1a1614',
      }}
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY2MTQ1OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <p
            className="text-xl lg:text-2xl tracking-[0.3em] uppercase mb-6"
            style={{
              color: '#d4af37',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Interior Design
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl lg:text-8xl mb-8 text-white"
          style={{
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.2',
          }}
        >
          Crafting Spaces
          <br />
          <span
            className="text-5xl sm:text-6xl lg:text-7xl"
            style={{
              fontFamily: 'Allura, cursive',
              color: '#d4af37',
            }}
          >
            That Tell Stories
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-12"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            lineHeight: '1.8',
          }}
        >
          Where timeless elegance meets contemporary living. Every detail
          curated, every space transformed into a sanctuary of refined beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
        >
          <motion.a
            href="#philosophy"
            whileHover={{ scale: 1.05, backgroundColor: '#d4af37' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 border-2 border-[#d4af37] text-[#d4af37] tracking-widest uppercase transition-all duration-300 hover:text-white"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore Our Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={40} className="text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}

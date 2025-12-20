import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#hero" className="block">
            <h1
              className="text-3xl lg:text-4xl"
              style={{ fontFamily: 'Allura, cursive' }}
            >
              <span className={isScrolled ? 'text-gray-900' : 'text-white'}>
                Sophia Laurent
              </span>
            </h1>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className={`relative text-sm tracking-widest uppercase transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white/90 hover:text-white'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item.label}
              <motion.span
                className={`absolute -bottom-1 left-0 h-px ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                }`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="lg:hidden overflow-hidden bg-white"
      >
        <div className="px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 tracking-widest uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

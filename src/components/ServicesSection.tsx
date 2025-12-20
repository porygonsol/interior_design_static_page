import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Home, Palette, Lightbulb, Sofa } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description:
      'Transform your living spaces into personalized sanctuaries that reflect your unique style and enhance your daily life.',
  },
  {
    icon: Palette,
    title: 'Color & Material Consulting',
    description:
      'Expert guidance in selecting the perfect palette and materials to create harmonious, sophisticated interiors.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description:
      'Thoughtfully crafted lighting solutions that enhance ambiance, functionality, and architectural features.',
  },
  {
    icon: Sofa,
    title: 'Furniture Curation',
    description:
      'Carefully selected pieces that balance aesthetics with comfort, creating spaces that are both beautiful and livable.',
  },
];

export function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #7c3b3b 0%, #4a2c2a 50%, #2d1b1a 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e8b4b8]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: '#d4af37' }}
          >
            What We Offer
          </p>
          <h2
            className="text-5xl lg:text-7xl mb-6 text-white"
            style={{
              fontFamily: 'Playfair Display, serif',
            }}
          >
            Our{' '}
            <span
              className="text-5xl lg:text-7xl"
              style={{ fontFamily: 'Allura, cursive', color: '#e8b4b8' }}
            >
              Services
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-white/80"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
            }}
          >
            Comprehensive interior design solutions tailored to bring your
            vision to life with sophistication and elegance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-[#e8b4b8]/10 pointer-events-none"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6 inline-block"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          'linear-gradient(135deg, #d4af37 0%, #e8b4b8 100%)',
                      }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                  </motion.div>

                  <h3
                    className="text-2xl lg:text-3xl mb-4 text-white"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-white/70 leading-relaxed"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                    className="h-px mt-6"
                    style={{ background: '#d4af37' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <p
            className="text-xl mb-8 text-white/90"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Ready to transform your space?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#d4af37' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] tracking-widest uppercase transition-all duration-300 hover:text-white"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

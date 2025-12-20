import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';

export function PhilosophySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundColor: '#f5f1ea',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a882]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b7355]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <motion.img
                src="https://images.unsplash.com/photo-1747992021633-762a63985d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjA2MjY1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Design Philosophy"
                className="w-full h-[600px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8b7355]/30 to-transparent" />
            </div>

            {/* Floating accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white p-8 shadow-2xl"
              style={{ border: '1px solid #c9a882' }}
            >
              <p
                className="text-6xl"
                style={{ fontFamily: 'Playfair Display, serif', color: '#8b7355' }}
              >
                15+
              </p>
              <p
                className="text-sm tracking-widest uppercase mt-2"
                style={{ color: '#8b7355' }}
              >
                Years Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm tracking-[0.3em] uppercase mb-6"
              style={{ color: '#8b7355' }}
            >
              Our Philosophy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl lg:text-6xl mb-8"
              style={{
                fontFamily: 'Playfair Display, serif',
                color: '#2d2420',
                lineHeight: '1.2',
              }}
            >
              Design is
              <br />
              <span
                className="text-5xl lg:text-6xl"
                style={{ fontFamily: 'Allura, cursive', color: '#c9a882' }}
              >
                a Journey
              </span>
              <br />
              Not a Destination
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg mb-6 leading-relaxed"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: '#5a4a42',
              }}
            >
              Each space we create is a unique narrative, woven with threads of
              your personal story, aspirations, and lifestyle. We believe
              interior design transcends mere aesthetics—it's about cultivating
              environments that nurture the soul and inspire daily living.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg mb-10 leading-relaxed"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: '#5a4a42',
              }}
            >
              From the timeless elegance of natural materials to the careful
              curation of light and texture, every element is intentionally
              chosen to create spaces that feel both luxurious and lived-in,
              sophisticated yet warm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { number: '200+', label: 'Projects' },
                { number: '95%', label: 'Satisfaction' },
                { number: '50+', label: 'Awards' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <p
                    className="text-3xl mb-2"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#c9a882',
                    }}
                  >
                    {stat.number}
                  </p>
                  <p
                    className="text-xs tracking-wider uppercase"
                    style={{ color: '#8b7355' }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

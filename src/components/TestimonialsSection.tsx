import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alexandra Morrison',
    role: 'Homeowner',
    text: "Sophia transformed our penthouse into an absolute masterpiece. Every detail was considered, from the hand-selected fabrics to the custom lighting fixtures. It's not just a home—it's a work of art.",
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CEO, Tech Innovate',
    text: 'Working with this team was a dream. They understood our vision perfectly and delivered beyond expectations. The blend of modern aesthetics with timeless elegance is simply stunning.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Isabella Rousseau',
    role: 'Art Collector',
    text: 'An exceptional eye for detail and an unparalleled sense of sophistication. Our gallery space now perfectly showcases our collection while maintaining an inviting, warm atmosphere.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundColor: '#f9f7f4',
      }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #c5b8a8 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: '#9a8467' }}
          >
            Client Experiences
          </p>
          <h2
            className="text-5xl lg:text-7xl mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2d2420',
            }}
          >
            What{' '}
            <span
              className="text-5xl lg:text-7xl"
              style={{ fontFamily: 'Allura, cursive', color: '#b8a07e' }}
            >
              They Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 100,
                display: activeIndex === index ? 'block' : 'none',
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <div className="bg-white p-12 lg:p-16 shadow-2xl rounded-sm relative">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#c5b8a8' }}
                >
                  <Quote size={28} className="text-white" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView && activeIndex === index
                          ? { opacity: 1, scale: 1 }
                          : {}
                      }
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    >
                      <Star
                        size={20}
                        fill="#d4af37"
                        stroke="#d4af37"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView && activeIndex === index
                      ? { opacity: 1, y: 0 }
                      : {}
                  }
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-xl lg:text-2xl mb-8 leading-relaxed"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    color: '#5a4a42',
                  }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView && activeIndex === index
                      ? { opacity: 1, y: 0 }
                      : {}
                  }
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <p
                    className="text-xl mb-1"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#2d2420',
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-sm tracking-wider uppercase"
                    style={{ color: '#9a8467' }}
                  >
                    {testimonial.role}
                  </p>
                </motion.div>

                {/* Decorative corner */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
                  style={{
                    background:
                      'linear-gradient(135deg, transparent 50%, #b8a07e 50%)',
                  }}
                />
              </div>
            </motion.div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="transition-all duration-300"
                style={{
                  width: activeIndex === index ? '40px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  backgroundColor:
                    activeIndex === index ? '#b8a07e' : '#d4d0c8',
                }}
              />
            ))}
          </div>
        </div>

        {/* Auto-rotate effect */}
        {React.useEffect(() => {
          const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
          }, 5000);
          return () => clearInterval(interval);
        }, [])}
      </div>
    </section>
  );
}

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2a4a3a 0%, #1c3329 50%, #0f1e18 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8fae95]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm tracking-[0.3em] uppercase mb-6"
              style={{ color: '#c9b896' }}
            >
              Get In Touch
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl mb-8 text-white"
              style={{
                fontFamily: 'Playfair Display, serif',
                lineHeight: '1.2',
              }}
            >
              Let's Create
              <br />
              <span
                className="text-5xl lg:text-6xl"
                style={{ fontFamily: 'Allura, cursive', color: '#c9b896' }}
              >
                Something Beautiful
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg mb-12 leading-relaxed text-white/80"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
              }}
            >
              Whether you're envisioning a complete home transformation or
              seeking expert guidance for a single room, we'd love to hear from
              you. Let's begin the journey to your dream space.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'hello@sophialaurent.com',
                  delay: 0.8,
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+1 (555) 123-4567',
                  delay: 0.9,
                },
                {
                  icon: MapPin,
                  label: 'Studio',
                  value: 'New York, NY',
                  delay: 1.0,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: item.delay, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: '#c9b896' }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60 mb-1">
                        {item.label}
                      </p>
                      <p className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md p-10 lg:p-12 rounded-sm border border-white/10"
            >
              <div className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm tracking-wider uppercase mb-2 text-white/80"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c9b896] transition-all duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Enter your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm tracking-wider uppercase mb-2 text-white/80"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c9b896] transition-all duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm tracking-wider uppercase mb-2 text-white/80"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c9b896] transition-all duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="+1 (555) 123-4567"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm tracking-wider uppercase mb-2 text-white/80"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c9b896] transition-all duration-300 resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: '#c9b896' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 border-2 border-[#c9b896] text-[#c9b896] tracking-widest uppercase transition-all duration-300 hover:text-white flex items-center justify-center gap-3"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </motion.button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-12 border-t border-white/10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p
            className="text-4xl"
            style={{ fontFamily: 'Allura, cursive', color: '#c9b896' }}
          >
            Sophia Laurent
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-white/60 text-sm">
              © 2025 Sophia Laurent Interiors. All rights reserved.
            </p>
            
            {/* Made by Porygon */}
            <a
              href="https://porygonsol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 group cursor-pointer"
            >
              
              <span
                className="group-hover:opacity-80 transition-opacity duration-300"
                style={{
                  fontFamily: 'Allura, cursive',
                  fontSize: '30px',
                  color: '#c9b896',
                }}
              >
                Made by Porygon
              </span>
              <img
                src="/icon.png"
                alt="Porygon Icon"
                className="w-3 h-3 object-contain"
                style={{ width: '40px', height: '40px' }}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

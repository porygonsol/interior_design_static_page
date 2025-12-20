import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Serenity',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1760072513393-b9d81f65dd7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWluaW1hbGlzdCUyMGJlZHJvb218ZW58MXx8fHwxNzY2MTQ1OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Urban Elegance',
    category: 'Kitchen Design',
    image:
      'https://images.unsplash.com/photo-1658280911730-467b4764c09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbWFyYmxlfGVufDF8fHx8MTc2NjA3OTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Refined Gathering',
    category: 'Dining Room',
    image:
      'https://images.unsplash.com/photo-1685644201646-9e836c398c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2NjA3NjA2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Spa Sanctuary',
    category: 'Bathroom',
    image:
      'https://images.unsplash.com/photo-1760564019103-81cd3c225cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHNwYXxlbnwxfHx8fDE3NjYwODg4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ProjectsGallery() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #faf8f5 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
            Featured Work
          </p>
          <h2
            className="text-5xl lg:text-7xl mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2d2420',
            }}
          >
            Our{' '}
            <span
              className="text-5xl lg:text-7xl"
              style={{ fontFamily: 'Allura, cursive', color: '#b8a07e' }}
            >
              Portfolio
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#5a4a42',
            }}
          >
            A curated selection of our most cherished projects, each a testament
            to our commitment to excellence and artistry.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              style={{ aspectRatio: '4/5' }}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredId === project.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: hoveredId === project.id ? 0 : 20,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: '#d4af37' }}
                  >
                    {project.category}
                  </p>
                  <h3
                    className="text-3xl lg:text-4xl text-white mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-white"
                  >
                    <span className="text-sm tracking-wider uppercase">
                      View Project
                    </span>
                    <ArrowUpRight size={20} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Corner accent - always visible */}
              <div
                className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: '#d4af37' }}
              />
              <div
                className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: '#d4af37' }}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#b8a07e' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border-2 tracking-widest uppercase transition-all duration-300"
            style={{
              borderColor: '#b8a07e',
              color: '#b8a07e',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

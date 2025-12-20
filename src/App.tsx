import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <ProjectsGallery />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

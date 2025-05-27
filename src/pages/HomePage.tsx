import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HomePage: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection />
      
      <motion.div 
        className="flex justify-center -mt-8 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button 
          onClick={scrollToServices}
          className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          aria-label="Scroll to services"
        >
          <ChevronDown size={24} className="text-primary-600" />
        </button>
      </motion.div>
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <AboutSection />
      
      <TestimonialsSection />
      
      <CallToAction />
    </>
  );
};

export default HomePage;
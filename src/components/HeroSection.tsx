import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-primary-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-white mb-6">
              Your Trusted Legal Guide in Australia
            </h1>
            <p className="text-neutral-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Navigating the Australian Legal System with Confidence and Ease. Expert advice and dedicated support for all your legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn btn-secondary">
                Book a Consultation
              </Link>
              <Link to="/services" className="btn btn-outline text-white border-white hover:bg-white/10">
                Explore Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              {/* Golden border accent */}
              <div className="absolute inset-0 border-4 border-secondary-400 rounded-lg opacity-50"></div>
              
              <img
                src="https://www.skafflegal.com/wp-content/uploads/2023/05/Claudia-Skaff.jpg"
                alt="Claudia Skaff"
                className="w-full h-auto object-cover rounded-lg"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-xl font-semibold mb-1">Claudia Skaff</h3>
                <p className="text-sm text-neutral-200">Principal Lawyer & Founder</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary-400 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#ctaGrid)" />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white mb-6">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-neutral-200 text-lg mb-8">
            Schedule a consultation with our experienced legal team today. We're here to help you navigate your legal journey with confidence.
          </p>
          <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4">
            Book Your Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
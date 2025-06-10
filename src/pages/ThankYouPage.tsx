import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="thankYouGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#thankYouGrid)" />
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-20 h-20 text-secondary-400" />
              </div>
              
              <h1 className="text-white mb-6">Thank You!</h1>
              <p className="text-neutral-200 text-lg max-w-2xl mx-auto">
                Your message has been successfully sent. We appreciate you reaching out to Skaff Legal and will get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="bg-primary-600 w-12 h-12 flex items-center justify-center rounded-lg mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-neutral-200 text-sm mb-1">Australia</p>
                <p className="text-secondary-400 font-medium">0416 453 722</p>
                <p className="text-neutral-200 text-sm mt-2 mb-1">Lebanon</p>
                <p className="text-secondary-400 font-medium">+961 79 304 110</p>
                <p className="text-neutral-300 text-xs">(WhatsApp)</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="bg-primary-600 w-12 h-12 flex items-center justify-center rounded-lg mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-secondary-400 font-medium">info@skafflegal.com</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center md:col-span-2 lg:col-span-1">
                <div className="bg-primary-600 w-12 h-12 flex items-center justify-center rounded-lg mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">Visit Us</h3>
                <div className="text-neutral-200 text-sm">
                  <p className="font-medium mb-1">Australia:</p>
                  <p className="text-secondary-400">P.O Box 5029 Greystanes NSW</p>
                  <p className="font-medium mt-3 mb-1">Lebanon:</p>
                  <p className="text-secondary-400">Zgharta Ardeh – Meryata Road</p>
                  <p className="text-secondary-400">The North Center Above Happy First Floor</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
                <h3 className="font-serif text-xl font-semibold text-white mb-3">What Happens Next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-200">
                  <div>
                    <div className="bg-secondary-500 w-8 h-8 flex items-center justify-center rounded-full mx-auto mb-2 text-white font-bold">1</div>
                    <p className="text-sm">We'll review your message within 24 hours</p>
                  </div>
                  <div>
                    <div className="bg-secondary-500 w-8 h-8 flex items-center justify-center rounded-full mx-auto mb-2 text-white font-bold">2</div>
                    <p className="text-sm">Our team will contact you to discuss your needs</p>
                  </div>
                  <div>
                    <div className="bg-secondary-500 w-8 h-8 flex items-center justify-center rounded-full mx-auto mb-2 text-white font-bold">3</div>
                    <p className="text-sm">We'll schedule a consultation at your convenience</p>
                  </div>
                </div>
              </div>

              <Link to="/" className="btn btn-secondary inline-flex items-center">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
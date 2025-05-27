import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceData } from '../data/services';
import CallToAction from '../components/CallToAction';

const ServicesPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="servicesGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#servicesGrid)" />
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Legal Services
            </motion.h1>
            <motion.p 
              className="text-neutral-200 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive legal solutions tailored to your specific needs. We combine expertise with a client-centered approach to deliver exceptional results.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          {serviceData.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">{service.title}</h2>
                <p className="text-neutral-700 mb-6">
                  {service.longDescription}
                </p>
                
                <h3 className="font-serif text-xl font-semibold mb-3">Key Services</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-primary-600 mr-2 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/services/${service.slug}`} 
                  className="btn btn-primary"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default ServicesPage;
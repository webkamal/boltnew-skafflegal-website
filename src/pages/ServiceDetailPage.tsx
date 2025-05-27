import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { serviceData, ServiceType } from '../data/services';
import CallToAction from '../components/CallToAction';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ServiceDetailPageProps {
  serviceSlug: string;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceSlug }) => {
  const navigate = useNavigate();
  const service = serviceData.find((s) => s.slug === serviceSlug);
  
  if (!service) {
    navigate('/services');
    return null;
  }
  
  const currentIndex = serviceData.findIndex((s) => s.slug === serviceSlug);
  const prevService = currentIndex > 0 ? serviceData[currentIndex - 1] : null;
  const nextService = currentIndex < serviceData.length - 1 ? serviceData[currentIndex + 1] : null;
  
  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="serviceDetailGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#serviceDetailGrid)" />
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
              {service.title}
            </motion.h1>
            <motion.p 
              className="text-neutral-200 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {service.shortDescription}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl font-semibold mb-6">Overview</h2>
              <p className="text-neutral-700 mb-6">
                {service.longDescription}
              </p>
              
              <h3 className="font-serif text-xl font-semibold mb-4">Our Services Include:</h3>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mt-20"
          >
            <h2 className="font-serif text-3xl font-semibold mb-10 text-center">Benefits of Our {service.title} Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-neutral-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {prevService ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <button 
                  onClick={() => navigate(`/services/${prevService.slug}`)}
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  <span>Previous: {prevService.title}</span>
                </button>
              </motion.div>
            ) : (
              <div></div>
            )}
            
            {nextService && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <button 
                  onClick={() => navigate(`/services/${nextService.slug}`)}
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <span>Next: {nextService.title}</span>
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default ServiceDetailPage;
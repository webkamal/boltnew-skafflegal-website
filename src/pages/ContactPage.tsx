import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contactGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#contactGrid)" />
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-neutral-200 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're here to help with your legal needs. Reach out to schedule a consultation or ask any questions.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl font-semibold mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-neutral-700">Australia: 0416 453 722</p>
                    <p className="text-neutral-700">Lebanon: +961 79 304 110 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-1">Email</h3>
                    <p className="text-neutral-700">info@skafflegal.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-1">Office Locations</h3>
                    <div className="text-neutral-700">
                      <p className="font-medium mb-2">Australia:</p>
                      <p>P.O Box 5029 Greystanes NSW</p>
                      <p className="font-medium mt-4 mb-2">Lebanon:</p>
                      <p>Zgharta Ardeh – Meryata Road – The North Center Above Happy First Floor.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-neutral-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-neutral-700">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-lg mb-3">Book a Consultation</h3>
                <p className="text-neutral-700 mb-4">
                  We offer initial consultations to discuss your legal needs and how we can help. 
                  Fill out the form or call us to schedule your consultation.
                </p>
                <p className="text-neutral-700 font-medium">
                  Initial Consultation Fee: $250 (45 minutes)
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-card"
            >
              <h2 className="font-serif text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-subtle"
              >
                <h3 className="font-serif font-semibold text-lg mb-2">How do I schedule an initial consultation?</h3>
                <p className="text-neutral-700">
                  You can schedule an initial consultation by filling out our contact form, calling our office, or sending us an email. We'll get back to you promptly to arrange a time that works for you.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-subtle"
              >
                <h3 className="font-serif font-semibold text-lg mb-2">What should I bring to my first appointment?</h3>
                <p className="text-neutral-700">
                  For your first appointment, please bring any relevant documents related to your legal matter, identification, and a list of questions or concerns you'd like to discuss. This helps us provide the most accurate advice for your situation.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-subtle"
              >
                <h3 className="font-serif font-semibold text-lg mb-2">How are your fees structured?</h3>
                <p className="text-neutral-700">
                  Our fee structure varies depending on the type of legal service required. We offer fixed fees for certain services and hourly rates for others. We're committed to transparency, and we'll discuss all fee arrangements during your initial consultation.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-subtle"
              >
                <h3 className="font-serif font-semibold text-lg mb-2">Do you offer virtual consultations?</h3>
                <p className="text-neutral-700">
                  Yes, we offer virtual consultations via video conference or phone for clients who prefer remote meetings. These consultations are just as thorough as in-person meetings and allow for greater flexibility in scheduling.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
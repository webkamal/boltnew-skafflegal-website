import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Clock, Users, Heart } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary-600" />,
      title: "Legal Excellence",
      description: "We maintain the highest standards of legal expertise and stay current with evolving laws."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Client Focus",
      description: "Your needs and goals are at the center of everything we do."
    },
    {
      icon: <Star className="w-8 h-8 text-primary-600" />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our dealings."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: "Efficiency",
      description: "We value your time and strive to provide timely, efficient legal solutions."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Innovation",
      description: "We embrace modern approaches to make legal services more accessible and effective."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Compassion",
      description: "We understand the human side of legal challenges and provide supportive guidance."
    }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-primary-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#aboutGrid)" />
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
              About Skaff Legal
            </motion.h1>
            <motion.p 
              className="text-neutral-200 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your trusted partner in navigating the Australian legal system with confidence and ease.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/Claudia-Skaff.jpg"
                    alt="Claudia Skaff"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary-400 rounded-full opacity-20"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Hi, I'm Claudia 👋</h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  I am passionate about bridging the gap between the complex legal system and my clients' needs by keeping it simple. Perhaps expertise and skills I have mastered with through the juggling act as a legal professional.
                </p>
                <p>
                  I get it. Legal stuff can be confusing, complicated, and well… boring. Truth bomb: it doesn't have to be. I offer a personalised, modern, professional approach to the law.
                </p>
                <p>
                  My true passion lies in helping the everyday person, with the everyday problem. It took over a decade of working for some of Australian's largest organisations to figure out where my passion lies, and that is, helping the everyday person with everyday matters.
                </p>
                <p>
                  At Skaff Legal, we're not just lawyers – we're problem solvers and guides who are committed to making your legal journey as smooth as possible. We take the time to understand your unique situation, explain complex legal concepts in simple terms, and develop strategies tailored to your specific needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Values
            </motion.h2>
            <motion.p 
              className="text-neutral-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              These core principles guide everything we do at Skaff Legal and shape our approach to serving our clients.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="mb-4">Our Approach</h2>
              <p className="text-neutral-600 text-lg">
                We believe in a different kind of legal service – one that puts you first and makes the law work for you.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary-50 p-6 rounded-lg"
              >
                <h3 className="font-serif text-xl font-semibold mb-3">Client-Centered Service</h3>
                <p className="text-neutral-700">
                  We start by listening to understand your unique situation and goals. Your needs drive our approach, and we tailor our services accordingly. We're accessible, responsive, and committed to clear communication every step of the way.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary-50 p-6 rounded-lg"
              >
                <h3 className="font-serif text-xl font-semibold mb-3">Practical Solutions</h3>
                <p className="text-neutral-700">
                  We focus on practical, effective solutions that address your legal needs while considering your broader goals. We believe in making the law work for you, not the other way around. Our advice is always actionable and aligned with your best interests.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary-50 p-6 rounded-lg"
              >
                <h3 className="font-serif text-xl font-semibold mb-3">Transparent & Ethical Practice</h3>
                <p className="text-neutral-700">
                  We believe in transparency in all our dealings, from clear fee structures to honest case assessments. We maintain the highest ethical standards and are committed to doing what's right for our clients and the legal profession.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default AboutPage;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Award, Users, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Check className="w-8 h-8 text-primary-600" />,
      title: "Expertise",
      description: "Our team brings deep knowledge and experience in Australian law."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Client-Centered",
      description: "We put your needs first, with personalized service and clear communication."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our legal services."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Compassion",
      description: "We understand the human side of legal challenges and provide supportive guidance."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="relative z-10 p-2">
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-primary-800">Hi, I'm Claudia 👋</h3>
                  <p className="text-neutral-700 mb-4">
                    I am passionate about bridging the gap between the complex legal system and my clients' needs by keeping it simple. Perhaps expertise and skills I have mastered with through the juggling act as a legal professional.
                  </p>
                  <p className="text-neutral-700 mb-4">
                    I get it. Legal stuff can be confusing, complicated, and well… boring. Truth bomb: it doesn't have to be. I offer a personalised, modern, professional approach to the law.
                  </p>
                  <p className="text-neutral-700">
                    My true passion lies in helping the everyday person, with the everyday problem. It took over a decade of working for some of Australian's largest organisations to figure out where my passion lies, and that is, helping the everyday person with everyday matters.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-secondary-500 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 h-32 w-32 border-2 border-primary-400 rounded-full opacity-20"></div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4">About Skaff Legal</h2>
              <p className="text-neutral-600 text-lg mb-6">
                At Skaff Legal, we believe in making the law accessible and understandable for everyone. Our modern approach combines legal expertise with a client-focused mindset.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {values.map((value, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="mr-4 mt-1">{value.icon}</div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-neutral-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
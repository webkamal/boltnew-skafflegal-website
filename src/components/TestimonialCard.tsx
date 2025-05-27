import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialType } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-card p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="mb-4">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7C11 9.21 9.21 11 7 11C4.79 11 3 9.21 3 7C3 4.79 4.79 3 7 3C9.21 3 11 4.79 11 7Z" fill="#1a7f45" />
          <path d="M21 7C21 9.21 19.21 11 17 11C14.79 11 13 9.21 13 7C13 4.79 14.79 3 17 3C19.21 3 21 4.79 21 7Z" fill="#1a7f45" />
          <path d="M11 14.25C11 16.31 9.31 18 7.25 18H6.75C4.69 18 3 16.31 3 14.25C3 12.19 4.69 10.5 6.75 10.5H7.25C9.31 10.5 11 12.19 11 14.25Z" fill="#1a7f45" />
          <path d="M21 14.25C21 16.31 19.31 18 17.25 18H16.75C14.69 18 13 16.31 13 14.25C13 12.19 14.69 10.5 16.75 10.5H17.25C19.31 10.5 21 12.19 21 14.25Z" fill="#1a7f45" />
        </svg>
      </div>
      <p className="text-neutral-700 italic mb-6 flex-grow">{testimonial.content}</p>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-3">
          <h4 className="font-medium text-neutral-900">{testimonial.name}</h4>
          <p className="text-sm text-neutral-500">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
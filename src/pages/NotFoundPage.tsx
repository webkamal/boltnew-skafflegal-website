import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-50 py-16">
      <div className="container">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <AlertCircle className="w-24 h-24 text-primary-600" />
            </div>
            
            <h1 className="font-serif text-4xl font-semibold mb-4">Page Not Found</h1>
            <p className="text-neutral-600 text-lg mb-8">
              We're sorry, but the page you're looking for doesn't exist or has been moved.
            </p>
            
            <Link to="/" className="btn btn-primary inline-flex items-center">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
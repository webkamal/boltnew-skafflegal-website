import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/manjqdwr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        reset();
        navigate('/thank-you');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className={`input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Enter your full name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className={`input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Enter your email address"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          className={`input ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Enter your phone number"
          {...register('phone')}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
          Service of Interest
        </label>
        <select
          id="service"
          className="input"
          {...register('service')}
        >
          <option value="">Select a service</option>
          <option value="visa-immigration">Visa & Immigration</option>
          <option value="property-conveyancing">Property & Conveyancing</option>
          <option value="personal-legal">Personal Legal Services</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          className={`input h-32 resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Tell us about your legal needs"
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button 
        type="submit" 
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
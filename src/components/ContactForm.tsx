import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the form data to a server
    // For demo purposes, we'll just reset the form
    alert('Form submitted successfully!');
    reset();
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

      <button type="submit" className="btn btn-primary w-full">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
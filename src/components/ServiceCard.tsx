import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Home, User } from 'lucide-react';
import { ServiceType } from '../data/services';

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = () => {
    switch (service.icon) {
      case 'globe':
        return <Globe className="w-10 h-10 text-primary-600" />;
      case 'home':
        return <Home className="w-10 h-10 text-primary-600" />;
      case 'user':
        return <User className="w-10 h-10 text-primary-600" />;
      default:
        return <Globe className="w-10 h-10 text-primary-600" />;
    }
  };

  return (
    <div className="card group h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="bg-primary-50 w-16 h-16 flex items-center justify-center rounded-lg mb-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
        <p className="text-neutral-600 mb-4">{service.shortDescription}</p>
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 font-bold mr-2">•</span>
              <span className="text-neutral-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <Link 
          to={`/services/${service.slug}`} 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import WhatsAppQR from './WhatsAppQR';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white inline-block p-3 rounded-lg">
              <img 
                src="/SkaffLegal-logo-sticky.png" 
                alt="Skaff Legal"
                className="h-8"
              />
            </div>
            <p className="mt-4 text-neutral-300">
              Your premier destination for comprehensive legal guidance and services in Australia.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-4">Legal Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/visa-immigration" className="text-neutral-300 hover:text-white transition-colors">
                  Visa & Immigration
                </Link>
              </li>
              <li>
                <Link to="/services/property-conveyancing" className="text-neutral-300 hover:text-white transition-colors">
                  Property & Conveyancing
                </Link>
              </li>
              <li>
                <Link to="/services/personal-legal" className="text-neutral-300 hover:text-white transition-colors">
                  Personal Legal Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-neutral-300">Australia: 0416 453 722</p>
                  <p className="text-neutral-300">Lebanon: +961 79 304 110 (WhatsApp)</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">info@skafflegal.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary-400 flex-shrink-0 mt-1" />
                <div className="text-neutral-300">
                  <p className="font-medium mb-2">Australia:</p>
                  <p>P.O Box 5029 Greystanes NSW</p>
                  <p className="font-medium mt-4 mb-2">Lebanon:</p>
                  <p>Zgharta Ardeh – Meryata Road – The North Center Above Happy First Floor.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* WhatsApp QR Code Section */}
          <div className="flex justify-center lg:justify-start">
            <WhatsAppQR />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="text-center mb-4">
            <p className="text-neutral-400 text-sm font-medium">
              Liability Limited By A Scheme Approved Under Professional Standards Legislation.
            </p>
          </div>
          <div className="text-neutral-400 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Skaff Legal Pty Ltd. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
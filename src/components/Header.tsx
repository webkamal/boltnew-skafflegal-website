import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={closeMenu}>
          <Logo size={isScrolled ? 'small' : 'large'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" className="nav-link text-lg font-medium">
            Home
          </NavLink>
          <div className="relative group">
            <button 
              className="nav-link text-lg font-medium flex items-center"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 w-64 mt-2 origin-top-left bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <NavLink to="/services/visa-immigration" className="block px-4 py-3 text-sm hover:bg-primary-50 transition">
                  Visa & Immigration
                </NavLink>
                <NavLink to="/services/property-conveyancing" className="block px-4 py-3 text-sm hover:bg-primary-50 transition">
                  Property & Conveyancing
                </NavLink>
                <NavLink to="/services/personal-legal" className="block px-4 py-3 text-sm hover:bg-primary-50 transition">
                  Personal Legal Services
                </NavLink>
                <NavLink to="/services" className="block px-4 py-3 text-sm text-primary-600 font-medium hover:bg-primary-50 transition">
                  View All Services
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink to="/about" className="nav-link text-lg font-medium">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link text-lg font-medium">
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn-primary">
            Book a Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-neutral-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className="nav-link text-xl py-3"
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <div>
                <button 
                  className="nav-link text-xl py-3 flex items-center justify-between w-full"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services 
                  <ChevronDown size={20} className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2 mt-2"
                    >
                      <NavLink 
                        to="/services/visa-immigration" 
                        className="block py-2"
                        onClick={closeMenu}
                      >
                        Visa & Immigration
                      </NavLink>
                      <NavLink 
                        to="/services/property-conveyancing" 
                        className="block py-2"
                        onClick={closeMenu}
                      >
                        Property & Conveyancing
                      </NavLink>
                      <NavLink 
                        to="/services/personal-legal" 
                        className="block py-2"
                        onClick={closeMenu}
                      >
                        Personal Legal Services
                      </NavLink>
                      <NavLink 
                        to="/services" 
                        className="block py-2 text-primary-600 font-medium"
                        onClick={closeMenu}
                      >
                        View All Services
                      </NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <NavLink 
                to="/about" 
                className="nav-link text-xl py-3"
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className="nav-link text-xl py-3"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
              <Link 
                to="/contact" 
                className="btn btn-primary text-center mt-4"
                onClick={closeMenu}
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
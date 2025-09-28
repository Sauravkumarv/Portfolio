import React from 'react';
import { ChevronDown } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="relative border-t border-white/10 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            SK Verma

            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p>© 2025 SK Verma Crafted using React & Tailwind CSS.</p>
          </div>
          
          {/* Back to Top */}
          <button
            onClick={() => scrollToSection('home')}
            className="mt-4 md:mt-0 p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronDown className="rotate-180" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

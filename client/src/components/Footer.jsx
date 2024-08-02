import React from 'react';
import Logo from '../assets/Logo.svg'; 

const Footer = () => {
    return (
        <footer className="bg-white py-6">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
            <img src={Logo} alt="Company Logo" className="w-32 h-auto mb-4 sm:mb-0 sm:w-40 lg:w-48" />
            <nav className="flex gap-4 text-sm mb-4 sm:mb-0">
              <a href="/" className="text-gray-600 hover:text-black">Home</a>
              <a href="/features" className="text-gray-600 hover:text-black">Features</a>
              <a href="/team" className="text-gray-600 hover:text-black">Team</a>
            </nav>
            <a 
              href="/download" 
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              Download Now
            </a>
          </div>
          <div className="text-gray-500 text-xs text-center mt-4">
            &copy; 2024 PhysioSync. All rights reserved.
          </div>
        </footer>
    );
};

export default Footer;

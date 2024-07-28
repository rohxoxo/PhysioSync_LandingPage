import React from 'react';
import Logo from '../assets/Logo.svg'; 

const Footer = () => {
    return (
        <footer className="bg-white py-6">
          <div className="container mx-auto flex flex-col items-center">
            <img src={Logo} alt="Company Logo" className="w-100 h-auto mb-4" />
            <nav className="flex flex-col items-center gap-4 text-sm">
              <a href="/" className="text-gray-600 hover:text-black">Home</a>
              <a href="/features" className="text-gray-600 hover:text-black">Features</a>
              <a href="/team" className="text-gray-600 hover:text-black">Team</a>
            </nav>
            <a href="/download" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              Download Now
            </a>
            <div className="text-gray-500 text-xs mt-4">
              &copy; 2024 PhysioSync. All rights reserved.
            </div>
          </div>
        </footer>
      );
};

export default Footer;
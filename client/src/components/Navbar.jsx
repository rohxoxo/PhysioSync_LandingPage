import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import Logo from '../assets/Logo.svg';
import menubar from '../assets/menubar.svg';

Modal.setAppElement('#root');

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const slideIn = useSpring({
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    opacity: isMenuOpen ? 1 : 0,
    config: { duration: 500 },
  });

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center bg-gray-100 p-4">
        <img src={Logo} alt="Logo" className="w-32" />
        <ul className="flex space-x-8 text-lg">
        <li><a href="#home"> Home </a> </li>
            <li><a href="#features">Features </a></li>
            <li><a href="#team">Team </a></li>
            <li><a href="#proposal">Proposal </a></li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="m-4 flex justify-between items-center md:hidden">
        <img src={Logo} alt="Logo" className="w-24" />
        <img
          src={menubar}
          alt="Menu"
          className="cursor-pointer w-8"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu Modal */}
      <Modal
        isOpen={isMenuOpen}
        onRequestClose={toggleMenu}
        className="fixed inset-0 flex justify-center items-center z-50"
        overlayClassName="fixed inset-0 bg-opacity-75 bg-black"
      >
        <animated.div
          style={slideIn}
          className="w-full h-full text-white flex flex-col justify-center items-center bg-gray-800"
        >
          <button className="absolute top-4 right-4 text-2xl" onClick={toggleMenu}>
            &times;
          </button>
          <ul className="space-y-4 text-xl">
            <li><a href="#home"> Home </a> </li>
            <li><a href="#features">Features </a></li>
            <li><a href="#team">Team </a></li>
            <li><a href="#proposal">Proposal </a></li>
          </ul>
        </animated.div>
      </Modal>
    </div>
  );
}

export default Navbar;

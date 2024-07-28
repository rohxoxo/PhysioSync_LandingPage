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
      <div className="m-6 flex justify-between items-center self-stretch">
        <img src={Logo} alt="Logo" />
        <img src={menubar} alt="Menu" className="cursor-pointer" onClick={toggleMenu} />
      </div>

      <Modal
        isOpen={isMenuOpen}
        onRequestClose={toggleMenu}
        className="fixed inset-0 flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-opacity-75 bg-black z-50"
        style={{ overlay: { zIndex: 50 } }}
      >
        {isMenuOpen && ( 
          <animated.div
            style={slideIn}
            className="w-full h-full text-white flex flex-col justify-center items-center"
          >
            <button className="absolute top-4 right-4 text-2xl" onClick={toggleMenu}>
              &times;
            </button>
            <ul className="space-y-4 text-xl">
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
              <li>Menu Item 4</li>
            </ul>
          </animated.div>
        )}
      </Modal>
    </div>
  );
}

export default Navbar;

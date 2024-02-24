import React, { useState } from 'react';
import Logo from './images/vitpark-removebg-preview.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const smoothScroll = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-black p-5 flex flex-wrap items-center justify-between">
      {/* Logo */}
      <div className="flex items-center lg:ml-40 flex-shrink-0 mr-6">
        <img src={Logo} alt="Logo" className="h-12 md:h-16" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          <FaBars />
        </button>
      </div>

      {/* Centered Menu Icons */}
      <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:flex lg:items-center lg:w-auto`}>
        <div className="text-bold lg:mr-[500px] lg:text-center lg:text-xl font-serif lg:p text-white">
          <a href="#" className="block mt-4 lg:mr-9 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4" onClick={() => smoothScroll('home')}>Home</a>
          <a href="#about" className="block mt-4 md:inline-block lg:mr-9 md:mt-0 text-white hover:text-gray-300 mr-4" onClick={() => smoothScroll('about')}>About Us</a>
          <a href="#business" className="block mt-4 md:inline-block lg:mr-9 md:mt-0 text-white hover:text-gray-300 mr-4" onClick={() => smoothScroll('business')}>Business</a>
          <a href="#services" className="block mt-4 lg:mr-9 md:inline-block md:mt-0 text-white hover:text-gray-300" onClick={() => smoothScroll('services')}>Services</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

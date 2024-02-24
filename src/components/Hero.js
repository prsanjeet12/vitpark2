// HeroSection.js
import React from 'react';
import ff from './images/business1.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-[620px]">
      {/* Background Image */}
      <img src={ff} alt="Background" className="object-cover w-full h-full" />

      {/* Overlay Text */}
      <div className="absolute inset-y-0
       left-0 flex items-left justify-left ">
        <div className="text-gray-100 mt-20 p-9">
          <h1 className="text-3xl font-serif md:text-5xl md:ml-16 font-bold mb-4">Welcome to VITPARK</h1>
          <p className="lg:text-2xl font-serif md:ml-40  ml-16 md:text-xl mb-8">Your Gateway to Digital Innovation</p>
          <p className="lg:text-1xl  font-serif lg:text-center md:text-xl
           lg:w-[590px] mb-8">At VITPARK, we are dedicated to driving digital transformation and empowering businesses to thrive in the digital age. With our comprehensive suite of services and expertise in digital infrastructure, we provide end-to-end support to help businesses unlock endless possibilities for success.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
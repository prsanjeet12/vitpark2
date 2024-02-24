import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <AboutSection />
      <BusinessSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id='about' className="font-serif py-20 lg:w-1/2 bg-gray-100">
      <div className="container mx-auto p-10 ">
        <h2 className="text-3xl lg:text-4xl
         text-center lg:text-center 
        font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-center
         lg:text-center text-gray-700 mb-8">
          VITPARK leads digital transformation with advanced payment 
          gateways, last mile connectivity solutions, mobility
          services, comprehensive e-business support, and expert digital
          marketing strategies. Our state-of-the-art IT park fosters innovation 
          and collaboration. Join us for cutting-edge solutions and a culture of 
          excellence in the digital age. Experience limitless possibilities with VITPARK. We are your partner in navigating the digital landscape, offering innovative solutions and fostering a community of forward-thinking pioneers. Join us for unparalleled expertise and endless opportunities.
        </p>
      </div>
    </section>
  );
};

const BusinessSection = () => {
  return (
    <section id='business' className="font-serif py-20 lg:w-1/2 bg-gray-100">
      <div className="container mx-auto p-10">
      <h2 className="text-3xl lg:text-4xl text-center
       lg:text-center font-bold text-gray-800 mb-6 relative">Our Business
          
        </h2>
        <p className="text-lg font-serif text-center lg:text-center text-gray-700 mb-8">
          At VITPARK, we empower businesses with cutting-edge digital infrastructure solutions. From advanced payment gateways to last mile connectivity, tailored mobility solutions, comprehensive e-business support, and expert digital marketing strategies, we propel businesses towards success. Our state-of-the-art IT park fosters innovation and collaboration, providing an ideal environment for growth and technological advancement. Join us and unlock endless possibilities for your business in the digital age.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
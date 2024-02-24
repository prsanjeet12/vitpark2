import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing arrow icons from react-icons library
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import contect from './images/conect.jpeg';
import payment from './images/payment.jpeg';
import mobility from './images/conveity.jpeg';
import bus from './images/bus.jpg'; 
import digital from './images/market.jpeg';
import it from './images/park.jpeg';
import paymenticon from './images/paymneticon.png';
import coneticon from './images/convetivityicons.png';

const servicesData = [
  { 
    id: 1, 
    title: "Payment Gateways", 
    image: payment, 
    description: "Our advanced payment gateway solutions ensure seamless and secure online transactions for businesses of all sizes. With cutting-edge encryption technologies and robust fraud prevention measures, we empower merchants to accept payments with confidence while providing customers with a smooth and secure checkout experience." 
  },
  { 
    id: 2, 
    title: "Last Mile Connectivity", 
    image: contect, 
    description: "VITPARK understands the critical importance of last mile connectivity in delivering digital services to end-users. Through strategic partnerships and innovative infrastructure solutions, we bridge the gap between networks and end-users, ensuring reliable and high-speed connectivity to homes, businesses, and communities." 
  },
  { 
    id: 3, 
    title: "Mobility", 
    image: mobility, 
    description: "In an increasingly mobile-centric world, VITPARK enables businesses to embrace mobility with tailored solutions that cater to the needs of today's on-the-go consumers. Whether it's developing mobile applications, optimizing websites for mobile devices, or leveraging location-based services, we empower businesses to engage with their audiences anytime, anywhere." 
  },
  { 
    id: 4, 
    title: "E-business", 
    image: bus, 
    description: "Empower your business to thrive in the digital landscape with VITPARK's comprehensive e-business solutions. From setting up online storefronts and implementing digital payment systems to streamlining supply chain management and enhancing customer engagement, we provide end-to-end support to drive your e-business initiatives forward." 
  },
  { 
    id: 5, 
    title: "Digital Marketing", 
    image: digital, 
    description: "Unlock the full potential of your digital presence with VITPARK's digital marketing expertise. Our seasoned professionals specialize in a wide array of digital marketing strategies, including search engine optimization (SEO), social media marketing, email marketing, content marketing, and online advertising. Harness the power of digital channels to reach your target audience, drive engagement, and achieve your business objectives." 
  },
  { 
    id: 6, 
    title: "IT Park", 
    image: it, 
    description: "VITPARK's IT Park provides state-of-the-art infrastructure and facilities for businesses to thrive in the digital age. With high-speed internet connectivity, modern office spaces, conference rooms, and collaborative work environments, our IT Park fosters innovation, creativity, and growth. Join us at VITPARK and experience the ultimate workspace for your digital journey." 
  },
];

const ServicesSlider = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  const handleNext = () => {
    const currentIndex = servicesData.findIndex(service => service.id === selectedService.id);
    const nextIndex = (currentIndex + 1) % servicesData.length;
    setSelectedService(servicesData[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = servicesData.findIndex(service => service.id === selectedService.id);
    const previousIndex = (currentIndex - 1 + servicesData.length) % servicesData.length;
    setSelectedService(servicesData[previousIndex]);
  };

  return (
    <div id='services' className="relative mt-40 mb-[110px]">
      {/* Title and Description */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4">
        <h2 className="text-5xl font-semibold mb-9">{selectedService.title}</h2>
        <p className="text-lg lg:w-[900px] w-[340px] md:w-[600px]">{selectedService.description}</p>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer" onClick={handlePrevious}>
   <MdKeyboardArrowLeft size={90} className='text-white '/>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer" onClick={handleNext}>
   <MdKeyboardArrowRight size={90} className='text-white'/>
      </div>

      {/* Image Slider */}
      <img src={selectedService.image} 
      alt={selectedService.title} className="w-full h-[500px] object-cover" style={{ position: 'relative', zIndex: -1 }} />
    </div>
  );
};

export default ServicesSlider;
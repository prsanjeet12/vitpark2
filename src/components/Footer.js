import React from 'react';
import patner from '../components/images/patner.png'
import product from '../components/images/cholaLogo2.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* First Column */}
          <div className="col-span-2 md:col-span-1">
            <ul className="space-y-2">
              <li><div className="text-sm hover:text-gray-300">Privacy Policy</div></li>
              <li><div className="text-sm hover:text-gray-300">Terms of Service</div></li>
              <li><div className="text-sm hover:text-gray-300">Contact Us</div></li>
              <li><div className="text-sm hover:text-gray-300">About</div></li>
            </ul>
          </div>
          {/* Second Column */}
          <div className="col-span-2 md:col-span-1">
            <ul className="space-y-2">
              <li><div className="text-sm hover:text-gray-300">FAQs</div></li>
              <li><div className="text-sm hover:text-gray-300">Blog</div></li>
              <li><div className="text-sm hover:text-gray-300">Careers</div></li>
              <li><div className="text-sm hover:text-gray-300">Press</div></li>
            </ul>
          </div>
          {/* Third Column */}
          <div className="col-span-2 md:col-span-1">
            <ul className="space-y-2">
              <li><div className="text-sm hover:text-gray-300">Partners</div></li>
              <li><div className="text-sm hover:text-gray-300">Support</div></li>
              <li><div className="text-sm hover:text-gray-300">Feedback</div></li>
              <li><div className="text-sm hover:text-gray-300">Sitemap</div></li>
            </ul>
          </div>
          {/* Fourth Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-white p-4 w-[300px] h-[180px] rounded">
              <div className="flex justify-between items-center mb-4">
                {/* Our Partner */}
                <div className='lg:mb-8'>
                  <a href="https://biowms.com/">
                    <h4 className="text-[17px] font-bold mb-2 text-gray-900">Our Partner</h4>
                    <img src={patner} alt="Partner Image" className="w-20 h-20 mb-2" />
                    <h1 className='text-gray-900'>Chola Chariots</h1>
                  </a>
                </div>
                {/* Our Product */}
                <div className="flex items-center lg:mb-6 flex-col">
                  <h4 className="text-[17px] font-bold mb-2 text-gray-900">Our Product</h4>
                  <img src={product} alt="Product Image" className="w-30 h-20 mb-2" />
                  <h1 className='text-gray-900'>Chola Chariotsf</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All rights reserved */}
      <div className="max-w-8xl
      lg:mr-[840px]
      mx-auto px-4 sm:px-6 lg:px-10 text-center mt-4">
        <p className="text-sm">&copy; 2024 VIT Park. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

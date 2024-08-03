import React from 'react';
import image from '../assets/HeroSection.svg';
import ios from '../assets/appstoreicon.svg';
import download from '../assets/downloadBtn.svg'

const HeroSection = () => {
  return (
    <div className="text-center py-6 md:py-8 lg:py-12">
      <section id="home">
        <h1 className="text-black font-outfit text-2xl md:text-3xl lg:text-4xl font-semibold leading-7 md:leading-8 lg:leading-10 tracking-wider mb-4 md:mb-6 lg:mb-8" style={{ fontWeight: '600px' }}>
          Revolutionizing Your Physiotherapy Journey
        </h1>
        <p className="text-black font-outfit text-sm md:text-base lg:text-lg font-light leading-5 md:leading-6 lg:leading-7 tracking-wider mb-4 md:mb-6 lg:mb-8">
          Make your Physiotherapy experience seamless and simplified with PhysioSync.
        </p>
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-12 mx-4 md:mx-8 lg:mx-12">
          <button className="flex items-center px-[48px] px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg text-sm md:text-base">
            <img
              src={ios}
              alt="iOS illustration"
              className="w-6 h-6 md:w-8 md:h-8 mr-2" // Adjust the width, height, and margin as needed
            />
            <span>App Store</span>
          </button>
          <button className="flex items-center px-[30px] px-4 py-2 md:px-6 md:py-3 bg-white-600 border-[1px] border-blue-600 text-blue rounded-lg text-sm md:text-base">
            <img
              src={download}
              alt="iOS illustration"
              className="w-6 h-6 md:w-8 md:h-8 mr-2" // Adjust the width, height, and margin as needed
            />
            <span>Project Proposal</span>
          </button>
          
          
         
        </div>
        <div className="flex justify-center">
          <img src={image} alt="PhysioSync illustration" className="max-w-full h-auto" />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

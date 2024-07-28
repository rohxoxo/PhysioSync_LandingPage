import React from 'react';
import image from '../assets/HeroSection.svg'; 

const HeroSection = () => {
  return (
    <div className="text-center py-3">
      <h1 className="text-black font-outfit text-3xl font-semibold leading-8 tracking-wider mb-4">
        Revolutionizing Your Physiotherapy Journey
      </h1>
      <p className="text-black font-outfit text-base font-light leading-6 tracking-wider mb-6">
        Make your Physiotherapy experience seamless and simplified with PhysioSync.
      </p>
      <div className="flex flex-col justify-center mb-8 mx-8">
        <button className="px-6 py-3 mb-2 bg-blue-600 text-white rounded-lg">
          Get Started
        </button>
        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg">
          Learn More
        </button>
      </div>
      <div className="flex justify-center">
        <img src={image} alt="PhysioSync illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default HeroSection;

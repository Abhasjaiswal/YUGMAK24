import React from 'react';
import './pixcel_perfect.css';
import AboutEvent from './AboutEvent';

const PixelPerfect = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#900C3F] via-[#A3002E] via-[#DD3A03] to-[#F9E12F]">
      <div className="flex flex-col items-center font-Poppins text-white">
        {/* Logo and Header */}
        <div className="w-full max-w-sm m-10 mt-16 mb-6 flex flex-col items-center">
          <img
            src="https://pearl-bphc.in/_next/image?url=%2Flogo-h.png&w=1920&q=75"
            alt="logo"
            className="w-full h-auto"
          />
          <h1 className="font-bold text-4xl md:text-6xl text-center mb-1">
            Presents
          </h1>
          <h2 className="font-semibold text-xl md:text-2xl text-center">
            Pixel Perfect
          </h2>
        </div>

        {/* Event Description */}
        <div className="px-4 py-0">
          <p className="text-center mx-4 md:mx-20 lg:mx-40 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            repellat molestias exercitationem itaque unde repellendus
            consequatur distinctio quisquam quam saepe!
          </p>
        </div>

        {/* Register Button */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-gradient-to-r from-[#A3002E] to-[#DD3A03] hover:from-[#900C3F] hover:to-[#DD3A07] hover:scale-[0.95] transition-transform duration-200 rounded-xl text-white text-lg md:text-xl">
            Register Now
          </button>
        </div>
      </div>

      {/* About Event Section */}
      <div className="w-full h-auto mt-16">
        <AboutEvent />
      </div>
    </div>
  );
};

export default PixelPerfect;

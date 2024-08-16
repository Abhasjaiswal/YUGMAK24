import React, { useState } from 'react';
import './pixcel_perfect.css';
import AboutEvent from './AboutEvent';
import CurtainAnimation from './CurtainAnimation.js';
import i1 from './Yugmak_logo.png'
const PixelPerfect = () => {
  const [isCurtainComplete, setIsCurtainComplete] = useState(false);

  const handleCurtainComplete = () => {
    setIsCurtainComplete(true);
  };

  if (!isCurtainComplete) {
    // Render the curtain animation initially
    return <CurtainAnimation onComplete={handleCurtainComplete} />;
  }

  // Render the Pixel Perfect content after the curtain animation completes
  return (
    <div className=" transition-all ease-linear duration-100 w-full min-h-screen bg-gradient-to-t from-[#900C3F] via-[#A3002E] via-[#DD3A03] to-[#F9E12F]">
      <div className="flex flex-col items-center font-Poppins text-white">
        {/* Logo and Header */}
        <div className="w-full max-w-sm m-10 mt-8 mb-6 flex flex-col items-center relative ">
          <img
          
            src={i1}
            alt="logo"
            className="w-full h-auto  "
          />
          <h1 className="font-bold text-4xl md:text-6xl text-center mb-1 z-10  absolute top-[280px]">
            Presents
          </h1>
          <h2 className="font-semibold text-xl md:text-2xl text-center absolute top-[330px] md:top-[350px]">
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

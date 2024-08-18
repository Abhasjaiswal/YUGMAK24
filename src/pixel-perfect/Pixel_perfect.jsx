import React, { useState } from 'react';
import './pixcel_perfect.css';
import AboutEvent from './AboutEvent';
import CurtainAnimation from './CurtainAnimation.js';
import i1 from './Pixel_Perfect_Images/Yugmak_logo.png'
import Guideline from './Guideline.js';
import CarouselSlider from './CarouselSlider.js';
import Timeline from './Timeline.jsx';
const PixelPerfect = () => {
  const [isCurtainComplete, setIsCurtainComplete] = useState(false);

  const handleCurtainComplete = () => {
    setIsCurtainComplete(true);
  };

  if (!isCurtainComplete) {
    return <CurtainAnimation onComplete={handleCurtainComplete} />;
  }

  return (
    <div className=" w-screen h-screen ">
      <div className="flex flex-col items-center w-screen h-screen font-Poppins text-white bg-gradient-to-b from-[#F9E12F] from-[20%] to-[#DD3A03] to-[90%] ">
        <div className="w-full max-w-sm m-10   mb-6 flex flex-col items-center relative ">
          <img
            src={i1}
            alt="logo"
            className="w-full h-auto   "
          />
          <h1 className="font-clash-grotesk text-4xl md:text-6xl text-center mb-1 z-10  absolute top-[280px]">
            Presents
          </h1>
          <h2 className="font-semibold font-clash-grotesk text-2xl md:text-2xl text-center absolute top-[330px] md:top-[350px]">
          Drishय
          </h2>
        </div>
        <div className="px-4 py-0">
          <p className="text-center mx-4 md:mx-20 lg:mx-40 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            repellat molestias exercitationem itaque unde repellendus
            consequatur distinctio quisquam quam saepe!
          </p>
        </div>

        <div className="mt-6">
          <button className="px-6 py-3 mb-12 bg-gradient-to-r from-[#F9E12F] via-[#d1a336] to-[#DD3A03] hover:from-[#FBE34E] to-[#c04d1f] hover:scale-[0.95] transition-transform duration-200 rounded-xl text-white text-lg md:text-xl">
            Register Now
          </button>
        </div>
      </div>

      <div className="w-screen h-fit  bg-[#F2BBB6]">
        <AboutEvent />
      </div>

      <div>
        <CarouselSlider/>
      </div>

      <div className='w-screen h-fit bg-[#F299A0] '>
        <Guideline/>
      </div>
      <div className='w-screen h-screen  bg-[#F2BBB6]'>
        <Timeline/>
      </div>
    </div>
  );
};

export default PixelPerfect;

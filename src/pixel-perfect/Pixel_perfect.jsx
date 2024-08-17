import React, { useState } from 'react';
import './pixcel_perfect.css';
import AboutEvent from './AboutEvent';
import CurtainAnimation from './CurtainAnimation.js';
import i1 from './Pixel_Perfect_Images/Yugmak_logo.png'

import Guideline from './Guideline.js';
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
      <div className="flex flex-col items-center font-Poppins text-white bg-gradient-to-t from-[#be225e] from-[10%] via-[#A3002E]via-[20%] via-[#DD3A03] via-[30%] to-[#F9E12F] to-80%">
        <div className="w-full max-w-sm m-10 mt-4 mb-6 flex flex-col items-center relative ">
          <img
            src={i1}
            alt="logo"
            className="w-full h-auto  "
          />
          <h1 className="font-bold text-4xl md:text-6xl text-center mb-1  absolute top-[280px]">
            Presents
          </h1>
          <h2 className="font-semibold text-xl md:text-2xl text-center absolute top-[330px] md:top-[350px]">
            Pixel Perfect
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
          <button className="px-6 py-3 mb-12 bg-gradient-to-r from-[#be4164] to-[#ad5a3e] hover:from-[#902e53] hover:to-[#cd5f3d] hover:scale-[0.95] transition-transform duration-200 rounded-xl text-white text-lg md:text-xl">
            Register Now
          </button>
        </div>
      </div>

      <div className="w-screen h-screen  bg-[#F2BBB6]">
        <AboutEvent />
      </div>

      <div className='w-screen h-screen bg-[#F299A0] '>
        <Guideline/>
      </div>
    </div>
  );
};

export default PixelPerfect;

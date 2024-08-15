import React from 'react';
import './pixcel_perfect.css';
import AboutEvent from './AboutEvent';

const Pixel_perfect = () => {
  return (
    <div className="container w-screen h-screen bg-gradient-to-r from-[#900C3F] from-30% via-[#A3002E] via-50% via-[#DD3A03] via-70% to-[#F9E12F] to-7% ">
      <div className="flex flex-col items-center font-Poppins text-white">
        <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 m-10 mt-16 mb-6">
          <img 
            src="https://pearl-bphc.in/_next/image?url=%2Flogo-h.png&w=1920&q=75" 
            alt="logo" 
            className="w-full h-auto"
          />
          <h1 className='font-bold text-6xl text-center  mb-1'>Presents</h1>
          <h2 className=' font-semibold text-2xl text-center '>Pixel Perfect</h2>
        </div>
        <div className=" px-4 py-0">
          <p className="text-center mx-40 text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat molestias exercitationem itaque unde repellendus consequatur distinctio quisquam quam saepe!
          </p>
        </div>
        <div className='w-fit h-fit bg-[#A3002E] rounded-xl p-3 text-white m-auto mt-4 bg-gradient-to-r from-[#A3002E] to-[#DD3A03] hover:from-[#900C3F] hover:to-[#DD3A07] hover:scale-[0.9] text-xl hover:duration-100'>
          <button>Register Now</button>
        </div>
      </div>
      <div className='container w-screen h-screen bg-gradient-to-r from-[#900C3F] from-30% via-[#A3002E] via-50% via-[#DD3A03] via-70% to-[#F9E12F] to-7% '>
        <AboutEvent/>
      </div>
    </div>
  );
}

export default Pixel_perfect;

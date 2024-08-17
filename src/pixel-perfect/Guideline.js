import React from 'react';
import i2 from './Pixel_Perfect_Images/guideline1.webp';
import i3 from './Pixel_Perfect_Images/guideline2.webp';
import i4 from './Pixel_Perfect_Images/guideline3.webp';
import i5 from './Pixel_Perfect_Images/guideline4.webp'; 

function Guideline() {
  const guidelines = [
    {
      img: i2,
      text: 'Subtitles in English must be included in all dialogue, regardless of language.',
    },
    {
      img: i3,
      text: 'A suitable title, concept, and call to action are essential for films.',
    },
    {
      img: i4,
      text: "Every submission needs to be the participants' original work. Copyrighted content is not allowed.",
    },
    {
      img: i5,
      text: 'Ensure your content aligns with the given theme and guidelines.',
    },
  ];

  return (
    <div className='w-screen min-h-screen py-12 bg-[#F2BBB6]'> 
        <div className='text-6xl md:text-6xl font-bold text-center mb-10'>
        <h1>Guidelines</h1>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8'>
          {guidelines.map((guideline, index) => (
            <div
              key={index}
              className='guide relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-2xl overflow-hidden'
            >
              <img
                src={guideline.img}
                alt=''
                className='w-full h-full object-cover'
              />
              <div className='layer absolute  bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-sm sm:text-xl'>
                <h3 className='text-center p-2'>{guideline.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guideline;

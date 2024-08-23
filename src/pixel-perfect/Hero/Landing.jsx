import React from 'react';
import './Landing.css';
import yugmak from './Yugmak_logo.png';
import i1 from './png1.png';

const PixelPerfect = () => {
    return (
        <div className='w-full h-fit md:px-8 bg-orange-200 '>
            <div className='flex justify-center mb-2'>
                <img
                    src={yugmak}
                    alt='logo'
                    className=' w-32 md:w-[25vw] h-auto ' // Adjusts size of the logo
                />
            </div>
            <div className='flex flex-col md:flex-row md:justify-around items-center'>
                {/* Text Section */}
                <div className='flex flex-col md:w-[60%]'>
                    <h1 className='text-orange-600 text-6xl font-clash-grotesk'>Drishय</h1>
                    <h2 className='text-3xl font-clash-grotesk '>Presents</h2>
                    <h4 className='text-2xl pt-2'>Short Film Making</h4>
                    <p className='text-xl'>"Capturing Stories, One frame at a time - join our College short film-making showcase!" </p>
                </div>
                {/* Image Section */}
                <div className='md:w-[40%]'>
                    <img
                        src={i1}
                        alt='Film Making Showcase'
                        className='w-full h-auto'
                    />
                </div>
            </div>
        </div>
    );
};

export default PixelPerfect;

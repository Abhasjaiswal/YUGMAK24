// import React, { useState } from 'react';
import './pixcel_perfect.css';
import AboutEvent from './AboutEvent/AboutEvent.js';
import Guideline from './Guideline/Guideline.js';
import CarouselSlider from './Themes/CarouselSlider.js';
import Timeline from './Timeline/Timeline.jsx';
import Landing from './Hero/Landing.jsx';
const PixelPerfect = () => {
  // const [isCurtainComplete, setIsCurtainComplete] = useState(false);

  // const handleCurtainComplete = () => {
  //   setIsCurtainComplete(true);
  // };

  // if (!isCurtainComplete) {
  //   return <CurtainAnimation onComplete={handleCurtainComplete} />;
  // }

  return (
    <div className=''>
      <div className=''><Landing/></div>
      <div><AboutEvent/></div>
      <div><CarouselSlider/></div>
      <div><Guideline/></div>
      <div><Timeline/></div>
    </div>
  )
};

export default PixelPerfect;

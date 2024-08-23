import React from 'react';
import './Landing.css';
import logo from './Yugmak_logo.png';
import image from './png1.png';
import i2 from './abstract.png';

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Left Column */}
      <div className="left-column">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo animate-logo" />
        </div>

        {/* Description Section */}
        <div className="description-section">
          <div className="description-section">
  <h1 className='text-orange-600 text-5xl font-bold font-sans animate-heading1'>
    Drishय
  </h1>
  <h2 className='text-3xl font-semibold font-sans animate-heading2'>
    Presents
  </h2>
  <h4 className='text-2xl font-medium pt-2 font-sans animate-heading3'>
    Short Film Making
  </h4>
  <p className='text-base font-light font-sans animate-paragraph'>
    "Capturing Stories, One frame at a time - join our College short film-making showcase!"
  </p>
</div>

          {/* Button Section */}
          <div className="button-section animate-button">
            <button className="register-button">Register Now</button>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column animate-heading1">
        <img src={image} alt="Event" className="image" />
      </div>

      {/* Abstract Section */}
      <div className="abstract-section">
        <img src={i2} alt="Abstract Design" className="abstract-image" />
      </div>
    </div>
  );
};

export default Landing;

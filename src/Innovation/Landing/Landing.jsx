import React from 'react';
import './Landing.css'; 
import Pitch from './pitch img.png'
import Splash from './splash.svg'
const PitchPerfect = () => {
    return (
        <div className="main-container">
            {/* Left Content */}
            <div className="left-content">
                <img src={Pitch} alt="Pitch Image" className="pitch-image" />
                <h2>
                    THE ULTIMATE<br />INSTI PITCH WAR
                </h2>
                <a href="#" className="cta-button">Register</a>
            </div>
            <div className="right-content">
            <img src={Splash} alt="Splash Image" />
            </div>

            <div className="container">
      <div className="header"></div>
    
    </div>
        </div>
    );
};

export default PitchPerfect;

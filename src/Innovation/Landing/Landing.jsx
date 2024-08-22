import React from 'react';
import './Landing.css'; 
import Pitch from './pitch img.png'
import Splash from './splash.svg'
const PitchPerfect = () => {
    return (
        
        <div className="main-container2">
            {/* Left Content */}
            <div className="left-content2">
                <img src={Pitch} alt="Pitch Image" className="pitch-image" />
                <h2>
                    THE ULTIMATE<br />INSTI PITCH WAR
                </h2>
                <a href="#" className="cta-button2">Register</a>
            </div>
            <div className="right-content2">
            <img src={Splash} alt="Splash Image" />
            </div>

            <div className="container2">
      <div className="header2"></div>
    
    </div>
        </div>
        
    );
};

export default PitchPerfect;

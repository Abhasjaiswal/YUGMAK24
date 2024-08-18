import React from 'react';
import './Participate.css';
import  image1 from '../vcs.svg' 
import image2 from '../pitch.svg'
import image3 from '../funds.svg'
import image4 from '../insti.svg'
import image5 from '../promising.svg'
import image6 from '../startup-meetup.svg'

const WhyParticipate = () => {
  return (
    <div className="why-participate">
      <h2 className="heading">Why Participate?</h2>
      <div className="underline"></div>
      <div className="grid-container">
        <div className="grid-item">
          <img src={image1} alt="VC firms" className="item-image" />
          <h3>VC firms</h3>
          <p>Networking with various VCs and angel investors.</p>
        </div>
        <div className="grid-item">
          <img src={image2} alt="Judging panel" className="item-image" />
          <h3>Judging panel</h3>
          <p>Pitch in front of esteemed personalities from the startup ecosystem.</p>
        </div>
        <div className="grid-item">
          <img src={image3} alt="Innovation Funding" className="item-image" />
          <h3>Innovation Funding</h3>
          <p>Opportunity to receive idea funding up to ₹ 75K.</p>
        </div>
        <div className="grid-item">
          <img src={image4} alt="Recognition" className="item-image" />
          <h3>Recognition</h3>
          <p>Interview of the winner and article on the E-Cell blog.</p>
        </div>
        <div className="grid-item">
          <img src={image5} alt="The Winner" className="item-image" />
          <h3>The Winner</h3>
          <p>Earn the title of Most Promising startup in Insti & etch your name in the E-Cell Startup Hall of Fame.</p>
        </div>
        <div className="grid-item">
          <img src={image6} alt="Meetups" className="item-image" />
          <h3>Meetups</h3>
          <p>Meetup and Networking With the Prominent Startups in Chennai During the Startup Meet.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyParticipate;

import React from 'react';
import '../styles1.css';

const Registration = () => {
  return (
    <div className="registration-container">
      <h1 className="heading">APPLY RIGHT AWAY!</h1>
      <p className="subheading">
        Submit your registration now, pay later once you get selected as a participant!
        There’s no cost for just applying!
      </p>

      <div className="cards">
        <div className="card early-bird">
          <h2 className="card-title">Early Bird Registrations</h2>
          <p className="card-date">8 - 10th APRIL</p>
          <h3 className="card-price">INR <span className="price">699</span> per person</h3>
          <button className="closed-btn">REGISTRATION CLOSED!</button>
        </div>

        <div className="card regular">
          <h2 className="card-title">Regular Registrations</h2>
          <p className="card-date">11 - 14th APRIL</p>
          <h3 className="card-price">INR <span className="price">999</span> per person</h3>
          <button className="closed-btn">REGISTRATION CLOSED!</button>
        </div>

        {/* <div className="card early-bird">
          <h2 className="card-title">Early Bird Registrations</h2>
          <p className="card-date">8 - 10th APRIL</p>
          <h3 className="card-price">INR <span className="price">699</span> per person</h3>
          <button className="closed-btn">REGISTRATION CLOSED!</button>
        </div> */}
        
        
      </div>
    </div>
  );
};

export default Registration;

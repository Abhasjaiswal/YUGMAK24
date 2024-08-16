import React, { useEffect, useState } from 'react';
import './CurtainAnimation.css';

function CurtainAnimation({ onComplete }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        onComplete();
      }, 2000); // Duration curtain opening animation
    }, 1000); // Delay before animation
  }, [onComplete]);

  return (
    <div className={`curtain-container ${isOpen ? 'open' : ''} bg-gradient-to-r from-[#900C3F] via-[#A3002E] via-[#DD3A03] to-[#F9E12F]`}>
      <div className="curtain curtain-left"></div>
      <div className="curtain curtain-right"></div>
    </div>
  );
}

export default CurtainAnimation;

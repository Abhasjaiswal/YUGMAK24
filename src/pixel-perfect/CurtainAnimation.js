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
    <div className={`curtain-container ${isOpen ? 'open' : ''} bg-gradient-to-b from-[#F9E12F] to-[#DD3A03]`}>
      <div className="curtain curtain-left"></div>
      <div className="curtain curtain-right"></div>
    </div>
  );
}

export default CurtainAnimation;

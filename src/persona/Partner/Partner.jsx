import React from 'react';
import './Parnter.css';

const DesignathonMumbai = () => {
    return (
        <div className="designathon-container">
            <h1 className="designathon-title">DESIGNATHON </h1>
            <h2 className="designathon-subtitle">IN PARTNERSHIP WITH</h2>
            {/* <div className="partner-container">
                <img src="atlas-skilltech-university-logo.png" alt="Atlas SkillTech University" className="partner-logo" />
                <img src="isdi-logo.png" alt="ISDI" className="partner-logo" />
            </div> */}
            <p className="designathon-description">
                The School of Design UPES is revolutionizing education by embracing design and innovation as catalysts for societal change. 
                Located in Mumbai, a city known for its vibrant energy and rich cultural heritage, Schoof of Design provides an inspiring backdrop for creative exploration. 
                Students are encouraged to draw inspiration from their surroundings and engage with real-world challenges. By fostering collaboration and interdisciplinary exchange, 
                School of Design empowers individuals to make a meaningful impact on society through design.
            </p>
        </div>
    );
}

export default DesignathonMumbai;

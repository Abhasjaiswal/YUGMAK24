import React from 'react';
import './About.css';
import Image from './about.svg';

const BusinessPlanPage = () => {
  return (
    <div className="contain1">
      <div className="header1"></div>
      <div className="content1">
        <div className="image1">
          <img 
            src={Image}
            alt="Placeholder" 
            className="placeholder-img" 
          />
        </div>
        <div className="text-content1">
          <h2>A Business Plan pitching competition</h2>
          <p>
            A Business Plan pitching competition for institute startups,
            where the winner will be etched in E-Cell’s startup hall of fame.
          </p>
          <p>
            The shortlisted startups will pitch their business plan to a 
            panel of eminent VCs and incubators, along with the opportunity to 
            be a part of a closed room networking session with VC firms, incubators, 
            and successful entrepreneurs.
          </p>
          <p>
            The Winner will be Felicitated by the Inspirit Speaker coming for 
            the session that day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanPage;

import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import {faShuttleSpace} from '@fortawesome/free-solid-svg-icons';
import {faUserGroup} from '@fortawesome/free-solid-svg-icons';

const Eligibility = () => {
  return (
    <div className="eligibility-container">
      <h2 className="heading">Eligibility</h2>
      <div className="underline"></div>
      <div className="eligibility-grid">
        <div className="eligibility-item">
        <FontAwesomeIcon icon={faUserGraduate} className="icon" />
          <p>The startup founder should be a current IITM Student</p>
        </div>
        <div className="eligibility-item">
        <FontAwesomeIcon icon={faShuttleSpace}  className="icon" />
          <p>Startups should be Early/ MVP Stage</p>
        </div>
        <div className="eligibility-item">
        <FontAwesomeIcon icon={faUserGroup}  className="icon" />
          <p>Startups should have a customer base in a testing or active phase</p>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
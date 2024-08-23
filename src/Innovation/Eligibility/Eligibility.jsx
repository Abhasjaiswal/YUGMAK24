import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import {faShuttleSpace} from '@fortawesome/free-solid-svg-icons';
import {faUserGroup} from '@fortawesome/free-solid-svg-icons';

const Eligibility = () => {
  return (
    <div className="eligibility-container1">
      <h2 className="heading1">Eligibility</h2>
      <div className="underline1"></div>
      <div className="eligibility-grid1">
        <div className="eligibility-item1">
        <FontAwesomeIcon icon={faUserGraduate} className="icon1" />
          <p>The startup founder should be a current IITM Student</p>
        </div>
        <div className="eligibility-item1">
        <FontAwesomeIcon icon={faShuttleSpace}  className="icon1" />
          <p>Startups should be Early/ MVP Stage</p>
        </div>
        <div className="eligibility-item1">
        <FontAwesomeIcon icon={faUserGroup}  className="icon1" />
          <p>Startups should have a customer base in a testing or active phase</p>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing/Landing';
import Orange from './Orange/Orange';
import About from './About/About';
import Participate from './Participate/Participate';
import Eligibility from './Eligibility/Eligibility';
import Timeline from './Time-FAQ/time'
const Innovation = () => {
  return (
    <div>
      <div><Landing /></div>
      <div><Orange /></div>
        <div><About /></div>
        <div><Participate /></div>
        <div><Eligibility /></div>
        <div><Timeline /></div>
    </div>
  );
};

export default Innovation;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing/Landing';
import Events from './Events/Events';
import Participate from './Participate/Participate';
import Video from './VideoPart/Video';
import FAQ from './FAQ/Faq';
import Venue from './Venue/Venue';
import Registration from './Register/Register';
import Rules from './Rules/Rules';
import Partner from './Partner/Partner';
const Persona = () => {
  return (
    <div>
      <div><Landing /></div>
<div><Participate /></div>
      <div><Venue /></div>
      <div><Registration /></div>
      <div><Events /></div>
      <div><Rules /></div>
      <div><Video /></div>
      <div><Partner /></div>
      <div><FAQ /></div>
    </div>
  );
};

export default Persona;

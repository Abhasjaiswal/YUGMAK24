import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../Persona/Landing/Landing';
import Events from '../Persona/Events/Events';
import Participate from '../Persona/Participate/Participate';
import Video from '../Persona/VideoPart/Video';
import FAQ from '../Persona/FAQ/Faq';
import Venue from '../Persona/Venue/Venue';
import Registration from '../Persona/Register/Register';
import Rules from '../Persona/Rules/Rules';
import Partner from '../Persona/Partner/Partner';
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

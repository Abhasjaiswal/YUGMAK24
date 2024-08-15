import logo from './logo.svg';
import './App.css';
import Persona from './persona/Persona';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pixel_perfect from './pixel-perfect/Pixel_perfect';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/persona" element={<Persona />} />
    <Route path='/pixel-perfect' element={<Pixel_perfect />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

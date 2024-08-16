import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PixelPerfect from './pixel-perfect/Pixel_perfect'; 
import Persona from './persona/Persona'; 

function App() {
  
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/persona" element={<Persona />} />
            <Route path='/pixel-perfect' element={<PixelPerfect />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );

}

export default App;

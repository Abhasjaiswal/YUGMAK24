// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Home/Home';
import PixelPerfect from './pixel-perfect/Pixel_perfect'; 
import Persona from './persona/Persona'; 
// import Innovation from './Innovation/Innovation';
import Registration from './Registration/Registration';
import Sucess from './Registration/SuccessPage/Success'
function App() {
  
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/events" element={<Home />} /> */}
            <Route path="/persona" element={<Persona />} />
            {/* <Route path="/HOME" element={<Home />} /> */}
            <Route path='/pixel-perfect' element={<PixelPerfect />} />
            {/* <Route path='/innovation' element={<Innovation />} /> */}
            <Route path='/registration' element={<Registration />} />
            <Route path='/success' element={<Sucess/>}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );

}

export default App;

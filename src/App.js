import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurtainAnimation from './CurtainAnimation';
import PixelPerfect from './pixel-perfect/Pixel_perfect'; 
import Persona from './persona/Persona'; 
function App() {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);

  const handleCurtainComplete = () => {
    setIsCurtainOpen(true);
  };

  return (
    <div className="App">
      {!isCurtainOpen ? (
        <CurtainAnimation onComplete={handleCurtainComplete} />
      ) : (
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/persona" element={<Persona />} />
            <Route path='/pixel-perfect' element={<PixelPerfect />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

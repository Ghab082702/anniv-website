
import { useEffect } from 'react';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';




import { createRoot } from 'react-dom/client';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import MemoryLane from './components/MemoryLane';
import FirstDate from './components/FirstDate'; // ✅ Add FirstDate back
import SecondMemory from './components/SecondMemory';
import ThirdMemory from './components/ThirdMemory'; // ✅ Add ThirdMemory back
import FourthMemory from './components/FourthMemory'; // ✅ Add FourthMemory back
import FifthMemory from './components/FifthMemory';
import SixthMemory from './components/SixthMemory'; // ✅ Add SixthMemory back
import SeventhMemory from './components/SeventhMemory';
import EighthMemory from './components/EighthMemory';
import NinthMemory from './components/NinthMemory';
import TenthMemory from './components/TenthMemory';
import EleventhMemory from './components/EleventhMemory';
import TwelfthMemory from './components/TwelfthMemory';
import LoveLetters from './components/LoveLetters';
import LoveLetterPage from './components/LoveLetterPage';





function App() {

  useEffect(() => {
    const audio = new Audio('/sounds/blue.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    const playAudio = () => {
      audio.play().catch(error => console.error('Failed to play audio:', error));
      // ✅ Remove event listener after playing the audio
      window.removeEventListener('pointerdown', playAudio);
    };

    // ✅ Wait for user interaction before playing
    window.addEventListener('pointerdown', playAudio);

    return () => {
      audio.pause();
      window.removeEventListener('click', playAudio);
    };
  }, []);

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/memory-lane" element={<MemoryLane />} />
        <Route path="/first-date" element={<FirstDate />} /> {/* ✅ Add FirstDate route */}
        <Route path="/second-memory" element={<SecondMemory />} />
        <Route path="/third-memory" element={<ThirdMemory />} /> 
        <Route path="/fourth-memory" element={<FourthMemory />} /> 
        <Route path="/fifth-memory" element={<FifthMemory />} />
        <Route path="/sixth-memory" element={<SixthMemory />} />
        <Route path="/seventh-memory" element={<SeventhMemory />} />
        <Route path='/eighth-memory' element={<EighthMemory />} />
        <Route path='/ninth-memory' element={<NinthMemory />} />
        <Route path='/tenth-memory' element={<TenthMemory  />} />
        <Route path='/eleventh-memory' element={<EleventhMemory />} />
        <Route path='/twelfth-memory' element={<TwelfthMemory />} />
        <Route path="/love-letters" element={<LoveLetters />} />
        <Route path="/love-letter/:id" element={<LoveLetterPage />} />

        


      </Routes>
    </Router>
  );
}

export default App;

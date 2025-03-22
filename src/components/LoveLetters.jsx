import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import '../styles/LoveLetters.css';

const LoveLetters = () => {
  const [openEnvelope, setOpenEnvelope] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const createHeartBurst = (index) => {
    const heartsContainer = document.querySelector(`.envelope-wrapper[data-index="${index}"] .hearts-container`);

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';

      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 200;

      heart.style.setProperty('--x', `${randomX}px`);
      heart.style.setProperty('--y', `${randomY}px`);

      heartsContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 2000);
    }
  };

  const toggleEnvelope = (index) => {
    setOpenEnvelope(openEnvelope === index ? null : index);

    if (openEnvelope !== index) {
      createHeartBurst(index);
      setTimeout(() => {
        navigate(`/love-letter/${index}`);  // ✅ Corrected navigation for HashRouter
      }, 1000);
    }
  };

  return (
    <div className="love-container">
      {[1, 2, 3, 4].map((index) => (
        <div 
          key={index}
          data-index={index}
          className={`envelope-wrapper ${openEnvelope === index ? 'open' : ''}`}
          onClick={() => toggleEnvelope(index)}
        >
          <div className="envelope">
            <div className="envelope-flap" />
            <div className="envelope-body" />
            <div className="heart-seal">❤️</div>
            <div className="hearts-container"></div>
          </div>
          <div className={`paper ${openEnvelope === index ? 'slide-out' : ''}`} />
        </div>
      ))}
    </div>
  );
};

export default LoveLetters;

import '../styles/SecondMemory.css';

const SecondMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="second-date-polaroid">
        <img 
          src={`${process.env.PUBLIC_URL}/images/second.jpg`} 
          alt="Second Memory" 
          className="second-date-polaroid-img" 
        />
        <div className="second-date-caption">
          Us after watching The Boy and The Heron, ginawan ko talaga ng paraan to kasi alam ko na 
          gusto mo talga mapanuod yung movie na yun. I'm glad kasi nakahabol tayo. Kalito lang yung story 
          HAHAHAHA
        </div>
      </div>
    </div>
  );
};

export default SecondMemory;

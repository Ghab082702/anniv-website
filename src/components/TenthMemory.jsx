import '../styles/TenthMemory.css';

const TenthMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="tenth-date-polaroid">
        <img src={`${process.env.PUBLIC_URL}/images/tenth.jpg`} alt="First Date" className="tenth-date-polaroid-img" />
        <div className="tenth-date-caption">
          Our first Christmas as a couple and first visit mo rin sa family ko sa side ni papa. 
          I'm glad na nakaabot tayo and you were able to meet my family. I enjoyed every moment of it 
          dahil ininclude ka ng family ko sa lahat, inasikaso ka nila and nakatabi mo pa si momsy matulog 
          hehe 😊
        </div>
      </div>
    </div>
  );
};

export default TenthMemory;

import '../styles/NinthMemory.css';

const NinthMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="ninth-date-polaroid">
      <img src={`${process.env.PUBLIC_URL}/images/ninth.jpg`} alt="First Date" className="ninth-date-polaroid-img" />
      <div className="ninth-date-caption">
          Another Concordia Snapshot added to our collection! And many more to come with my sweetheart! 💕
        </div>
      </div>
    </div>
  );
};

export default NinthMemory;

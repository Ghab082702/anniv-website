import '../styles/EighthMemory.css';

const EighthMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="eighth-date-polaroid">
        <img src={`${process.env.PUBLIC_URL}/images/eighth.jpg`} alt="First Date" className="eighth-date-polaroid-img" />
        <div className="eighth-date-caption">
          Our Arcovia Date! Ito ay ang Pasig moments natin. Tumira ka na rito puhleaseeee!!! T__T
        </div>
      </div>
    </div>
  );
};

export default EighthMemory;

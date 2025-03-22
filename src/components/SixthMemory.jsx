import '../styles/SixthMemory.css';

const SixthMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="sixth-date-polaroid">
        <img src={`${process.env.PUBLIC_URL}/images/sixth.jpg`} alt="First Date" className="sixth-date-polaroid-img" />
        <div className="sixth-date-caption">
          Our first celebration for our first monthsary as a couple, pumunta tayong Manila Ocean Park 
          at nasulit lahat ng attractions lalo na yung oceanarium. Sobrang saya natin that day, and 
          this marks the start of our monthsaries and our future stories together. I love you! ❤️
        </div>
      </div>
    </div>
  );
};

export default SixthMemory;

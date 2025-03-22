import '../styles/FifthMemory.css';

const FifthMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="fifth-date-polaroid">
        <img src={`${process.env.PUBLIC_URL}/images/fifth.jpg`} alt="First Date" className="fifth-date-polaroid-img" />
        <div className="fifth-date-caption">
          Dito mo na ako sinagot! AAAAA shet I was not expecting na mangyayari yun through a book. 
          Akala ko talaga may ipapabasa ka lang, this marks the start of a new chapter in our lives. 
          One of the best days in my entire life, finally having you as my partner and bestfriend.
        </div>
      </div>
    </div>
  );
};

export default FifthMemory;

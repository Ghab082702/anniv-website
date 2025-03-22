import '../styles/FirstDate.css';

const FirstDate = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="first-date-polaroid">
        <img src={`${process.env.PUBLIC_URL}/images/first.jpg`} alt="First Date" className="first-date-polaroid-img" />
        <div className="first-date-caption">
          Remember our first time meeting sweetheart? We were both shy back then. Quiet and
           mysterious girlie ka pa nun hehe. But we enjoyed our date with some horror movies and a good coffee
        </div>
      </div>
    </div>
  );
};

export default FirstDate;

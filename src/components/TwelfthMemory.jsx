import '../styles/TwelfthMemory.css';

const TwelfthMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="twelfth-date-polaroid">
        <img src={`${process.env.PUBLIC_URL}/images/twelfth.jpg`} alt="First Date" className="twelfth-date-polaroid-img" />
        <div className="twelfth-date-caption">
          Celebration for your White Coat Ceremony! I just want to tell you love how much 
          I am proud of you and how much I love you! Ang layo na ng growth mo and andami mo na 
          naachieve and I'm sure na mas madami pa yan in the future. Remember my love, bad days are 
          temporary and I will always be here to support you. Onti na lang and you'll be a ND Grad na!
        </div>
      </div>
    </div>
  );
};

export default TwelfthMemory;

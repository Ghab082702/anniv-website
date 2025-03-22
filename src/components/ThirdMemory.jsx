import '../styles/ThirdMemory.css';


const ThirdMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="third-date-polaroid">
      <img src={`${process.env.PUBLIC_URL}/images/third.jpg`} alt="First Date" className="third-date-polaroid-img" />
      <div className="third-date-caption">
          Dulo to dulo natin na byahe, we went to see the Seventeen concept store. SM North Edsa dinayo natin
          HAHAHAHAH, pero we had fun, nagcoffee tayo tapos hinatid kita after. 
        </div>
      </div>
    </div>
  );
};

export default ThirdMemory;

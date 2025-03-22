import '../styles/SeventhMemory.css';

const SeventhMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="seventh-date-polaroid">
        <img src={`${process.env.PUBLIC_URL}/images/seventh.jpg`} alt="First Date" className="seventh-date-polaroid-img" />
        <div className="seventh-date-caption">
          Monthsary date natin tapos binigay mo sa akin yung dalawang funko pop na gawa mo which is 
          si Inosuke at Sakamoto Days! Sobrang happy ko rin niyan that time kasi kahit wala kang budget 
          for Funko Pop, nagawan mo pa rin siya ng paraan. For me taob lahat ng funko pop dito hihi 
        </div>
      </div>
    </div>
  );
};

export default SeventhMemory;

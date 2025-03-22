import '../styles/EleventhMemory.css';

const EleventhMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="eleventh-date-polaroid">
        <img src={`${process.env.PUBLIC_URL}/images/eleventh.jpg`} alt="First Date" className="eleventh-date-polaroid-img" />
        <div className="eleventh-date-caption">
          Our second valentines day together but this time as a couple na hihi, 
          ginawa natin special ang celebration natin dahil sa pound tayo nagceleb diyan. Sayang nga lang 
          di na ganon kasarap yung food hmp pero atleast we're together. I love you so much love! sobra. 
          Next time sa mas sosyal naman tayo 😘
        </div>
      </div>
    </div>
  );
};

export default EleventhMemory;

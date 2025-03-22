import '../styles/FourthMemory.css';

const FourthMemory = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="fourth-date-polaroid">
        <img src={`${process.env.PUBLIC_URL}/images/fourth.jpg`} alt="First Date" className="fourth-date-polaroid-img" />
        <div className="fourth-date-caption">
          Valentines date natin! Pero as ligawan stage pa hihi, this is a very special day kasi ramdam ko 
          na mas nagkaroon tayo ng connection sa isa't isa. We exchanged gifts and I will also never forget 
          that precious smile nung nareceive mo yung bigay ko. Tuwang tuwa rin ako dun sa crochet bunny hihi
        </div>
      </div>
    </div>
  );
};

export default FourthMemory;

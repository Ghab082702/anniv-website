import { Link } from 'react-router-dom';
import '../styles/MemoryLane.css';

const MemoryLane = () => {
  return (

    <div id="memory-lane" className="relative min-h-screen bg-pink-50 flex flex-col items-center justify-center overflow-hidden">
    

      {/* Petals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-8 text-center" style={{ fontFamily: `'Poppins', sans-serif` }}>
        A highlight of our memories shared together.
      </h2>

      {/* Flowers with responsive wrapping */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-[90%] mx-auto">
      {/* First Flower */}
        <Link to="/first-date" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
            🌼
          </div>
        </Link>

        {/* Second Flower */}
        <Link to="/second-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
            🌸
          </div>
        </Link>

        {/* Third Flower */}
        <Link to="/third-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
            🍓
          </div>
        </Link>

        {/* Fourth Flower */}
        <Link to="/fourth-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
            🌷
          </div>
        </Link>

        {/* Fifth Flower */}
        <Link to="/fifth-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
            🏵️
          </div>
        </Link>

        {/* Sixth Flower */}
        <Link to="/sixth-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
            🪻
          </div>
        </Link>

        {/* Seventh Flower (starts new row) */}
        <Link to="/seventh-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
           🍎
          </div>
        </Link>

        {/* Eighth Flower */}
        <Link to="/eighth-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
            🌻
          </div>
        </Link>

        {/* Ninth Flower */}
        <Link to="/ninth-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
            🌹
          </div>
        </Link>

        {/* Tenth Flower */}
        <Link to="/tenth-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
           🍑
          </div>
        </Link>

        {/* Eleventh Flower */}
        <Link to="/eleventh-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
            🌺
          </div>
        </Link>

        {/* Twelfth Flower */}
        <Link to="/twelfth-memory" className="group">
          <div className="flower text-2xl sm:text-4xl md:text-5xl cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
           🍒
          </div>
        </Link>
      </div>

  
      </div>
  );
};

export default MemoryLane;

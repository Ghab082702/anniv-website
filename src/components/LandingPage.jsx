import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="relative bg-pink-50 min-h-screen flex flex-col sm:flex-row items-center justify-between px-6 sm:px-16 gap-x-12 overflow-hidden">
      {/* Background Hearts Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-pink-200 to-pink-400 opacity-30 rounded-lg"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="floating-hearts">
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
        </div>
      </div>

      {/* Left Side - Image */}
      <div className="flex-shrink-0 bg-gray-200 rounded-[40px] border-4 border-pink-300 flex items-center justify-center mx-auto sm:ml-[100px]">
        <img 
          src={`${process.env.PUBLIC_URL}/images/us.jpg`}
          alt="Anniversary Image" 
          className="object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-[40px]" 
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col w-full sm:w-2/5 text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold text-pink-500 leading-tight" style={{ fontFamily: `'Poppins', sans-serif` }}>
          Happy Anniversary, <br /> My Love ❤️
        </h1>

       {/* Secret Trigger (Hidden Flower) */}
        <p className="text-gray-600 text-lg mt-4 relative group" style={{ fontFamily: `'Poppins', sans-serif` }}>
          Today marks our special day and a milestone of our relationship. <br />
          Let’s cherish the memories we've made.
        </p>

        <div className="mt-6 flex justify-center sm:justify-start">
          <Link 
            to="/memory-lane" 
            className="bg-pink-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-pink-600 transition cursor-pointer z-10"
            style={{ fontFamily: `'Poppins', sans-serif` }}
          >
            Take a Trip Down Memory Lane
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

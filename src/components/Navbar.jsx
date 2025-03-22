import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-gradient-to-r from-pink-100 to-pink-200 shadow-md rounded-b-2xl w-full">
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-pink-500 font-extrabold text-2xl tracking-wide"
            style={{ fontFamily: `'Poppins', sans-serif` }}
          >
            Our Love
          </Link>

          {/* Hamburger Icon */}
          <div className="sm:hidden">
            {isOpen ? (
              <FiX
                className="text-pink-500 w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={toggleMenu}
              />
            ) : (
              <FiMenu
                className="text-pink-500 w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={toggleMenu}
              />
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-pink-500 font-medium px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-pink-100"
              style={{ fontFamily: `'Poppins', sans-serif` }}
            >
              Home
            </Link>
            <Link
              to="/memory-lane"
              className="text-gray-600 hover:text-pink-500 font-medium px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-pink-100"
              style={{ fontFamily: `'Poppins', sans-serif` }}
            >
              Memory Lane
            </Link>
            <Link
              to="/love-letters"
              className="text-gray-600 hover:text-pink-500 font-medium px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-pink-100"
              style={{ fontFamily: `'Poppins', sans-serif` }}
            >
              Love Letters
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden bg-pink-100 rounded-b-2xl shadow-md overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <Link
            to="/"
            className="block text-gray-600 hover:text-pink-500 font-medium px-4 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-pink-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/memory-lane"
            className="block text-gray-600 hover:text-pink-500 font-medium px-4 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-pink-50"
            onClick={toggleMenu}
          >
            Memory Lane
          </Link>
          <Link
            to="/love-letters"
            className="block text-gray-600 hover:text-pink-500 font-medium px-4 py-3 rounded-full transition-all duration-300 ease-in-out hover:bg-pink-50"
            onClick={toggleMenu}
          >
            Love Letters
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

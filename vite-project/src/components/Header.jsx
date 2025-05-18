import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items || []); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        ShoppyGlobe
      </Link>

      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="sm:hidden text-white focus:outline-none"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Navigation Links */}
      <nav
        className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} space-x-4 text-lg flex`}
      >
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/cart" className="hover:underline flex items-center">
          Cart
          <span className="ml-1 bg-white text-blue-600 rounded-full px-2 text-sm font-semibold">
            {cartItems.length}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;




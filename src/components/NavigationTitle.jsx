import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';

function NavigationTitle() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement search functionality or navigation to search page
    console.log("Search clicked");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent text-black hover:bg-white hover:text-black transition duration-300">
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <Link to="/" className="flex items-center space-x-2">
          <h2>Zillion Solution</h2>
          <img src="/vite.svg" alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4">
        <Link to="/industries" className="hover:underline">Industries</Link>
        <Link to="/consulting-services" className="hover:underline">Consulting Services</Link>
        <Link to="/digital" className="hover:underline">Digital</Link>
        <Link to="/insights" className="hover:underline">Insights</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/careers" className="hover:underline">Careers</Link>
      </div>

      <div className="flex items-center space-x-4">
        <span onClick={handleSearch} className="cursor-pointer">Explore</span>
        <Search className="h-6 w-6 cursor-pointer" onClick={handleSearch} />
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 flex flex-col items-start bg-white text-black p-4 space-y-2">
          <Link to="/industries" className="hover:underline">Industries</Link>
          <Link to="/consulting-services" className="hover:underline">Consulting Services</Link>
          <Link to="/digital" className="hover:underline">Digital</Link>
          <Link to="/insights" className="hover:underline">Insights</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/careers" className="hover:underline">Careers</Link>
        </div>
      )}
    </nav>
  );
}

export default NavigationTitle;
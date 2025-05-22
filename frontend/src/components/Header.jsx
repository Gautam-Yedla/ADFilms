
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => { // Removed React.FC
  const navLinkClasses = ({ isActive }) => // Removed type annotations
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 ${
      isActive
        ? 'bg-rose-500 text-white shadow-md'
        : 'text-slate-600 hover:bg-rose-100 hover:text-rose-600'
    }`;

  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Link to="/" className="text-2xl sm:text-3xl font-bold tracking-tight">
          <span className="text-rose-600">AD</span>
          <span className="text-sky-600">FILMS</span>
        </Link>
        <div className="hidden sm:flex space-x-1 md:space-x-2">
          <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
          <NavLink to="/portfolio" className={navLinkClasses}>Portfolio</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </div>
        {/* Mobile menu button - can be implemented later */}
        <div className="sm:hidden">
           <button className="text-slate-600 hover:text-rose-600 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
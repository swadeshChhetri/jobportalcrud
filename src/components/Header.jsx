import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Job Portal
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-200'}>Home</NavLink>
          <NavLink to="/jobs" className={({ isActive }) => isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-200'}>Jobs</NavLink>
          <NavLink to="/jobs/add" className={({ isActive }) => isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-200'}>Post Job</NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path fillRule="evenodd" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-300">Home</NavLink>
          <NavLink to="/jobs" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-300">Jobs</NavLink>
          <NavLink to="/jobs/add" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-300">Post Job</NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;


import React from 'react';

const Header = () => {
  return (
  <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
  
        <div className="flex items-center gap-2">
          <div className="bg-[#6D28D9] text-white font-bold px-2 py-1 rounded">US</div>
          <span className="text-xl font-semibold text-[#4F46E5]">
            USA <span className="text-[#9333EA]">Services Hub</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Loans</a>
            <a href="#" className="hover:text-blue-600">Homes</a>
            <a href="#" className="hover:text-blue-600">Sweeps</a>
            <a href="#" className="hover:text-blue-600">Auto</a>
          </nav>

          <button className="text-sm font-medium border border-blue-500 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

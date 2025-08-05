import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          <div>
            <h4 className="font-semibold mb-4">Loans</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Personal Loans</a></li>
              <li><a href="#" className="hover:text-white">Business Loans</a></li>
              <li><a href="#" className="hover:text-white">Debt Consolidation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Real Estate</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Buy a Home</a></li>
              <li><a href="#" className="hover:text-white">Sell a Home</a></li>
              <li><a href="#" className="hover:text-white">Rent Properties</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sweepstakes</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Daily Drawings</a></li>
              <li><a href="#" className="hover:text-white">Cash Prizes</a></li>
              <li><a href="#" className="hover:text-white">Winner Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Auto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Auto Loans</a></li>
              <li><a href="#" className="hover:text-white">Car Insurance</a></li>
              <li><a href="#" className="hover:text-white">Vehicle History</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-6">
          © 2024 USA Services Hub. All rights reserved. Licensed in all 50 states.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const TrustedNationwide = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Trusted Nationwide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600 mb-2">2M+</p>
            <p className="text-gray-600 text-lg">Happy Customers</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-green-600 mb-2">$2B+</p>
            <p className="text-gray-600 text-lg">Loans Approved</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-purple-600 mb-2">$50K+</p>
            <p className="text-gray-600 text-lg">Winners Daily</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-orange-600 mb-2">$500K+</p>
            <p className="text-gray-600 text-lg">Cars Financed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedNationwide;

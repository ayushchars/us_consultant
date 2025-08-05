import React from 'react';
import { FaDollarSign, FaHome, FaGift, FaCar, FaShieldAlt, FaStar } from 'react-icons/fa';
import Card from './CardsSection';

const HeroSection = () => {
  return (
    <section className="bg-[#F8FBFF] py-12 px-4">

      <section className="text-center mb-16">
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-normal mb-6">
  Your Complete Financial & <br />
  <span className="block mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-normal">
    Lifestyle Solutions
  </span>
</h1>


        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          Discover the best loans, find your dream home, enter exciting sweepstakes,
          and get the perfect auto deal - all in one place.
        </p>

        <div className="flex justify-center items-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaShieldAlt className="text-gray-400" />
            Trusted by 2M+ Americans
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            4.8/5 Rating
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        <Card
          icon={<FaDollarSign />}
          iconBg="#2563EB"
          bgColor="#E6F0FF"
          title="Personal Loans"
          subtitle="Quick approval, competitive rates"
          points={["$1,000 - $100,000", "24-hour approval", "Rates from 3.49% APR"]}
          rate="3.49%"
          rateLabel="Starting APR"
          buttonLabel="Apply Now"
          buttonColor="#2563EB"
        />
        <Card
          icon={<FaHome />}
          iconBg="#059669"
          bgColor="#E6FAF1"
          title="Dream Homes"
          subtitle="Find your perfect home today"
          points={["2M+ listings nationwide", "Real-time updates", "Expert guidance"]}
          rate="$0"
          rateLabel="Service Fee"
          buttonLabel="Search Homes"
          buttonColor="#059669"
        />
      <Card
  icon={<FaGift />}
  iconBg="#9333EA"
  bgColor="#FCE7F3"
  title="Win Big!"
  subtitle="Enter daily sweepstakes"
  points={["Daily prize draws", "Instant results", "100% free to enter"]}
  rate="$50K"
  rateLabel="Grand Prize"
  buttonLabel="Enter Now"
  buttonColor="#9333EA" 
  gradient={true} 
/>
        <Card
          icon={<FaCar />}
          iconBg="#DC2626"
          bgColor="#FFEFE7"
          title="Auto Deals"
          subtitle="Best car loans & insurance"
          points={["Pre-approved loans", "60-second quotes", "Save up to $1,200/year"]}
          rate="2.9%"
          rateLabel="Auto Loan APR"
          buttonLabel="Get Quote"
          buttonColor="#DC2626"
        />
      </div>
    </section>
  );
};

export default HeroSection;

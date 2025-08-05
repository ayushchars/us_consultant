import React from 'react';
import { FaCheckCircle, FaClock, FaStar } from 'react-icons/fa';

const Card = ({
  icon,
  iconBg,
  bgColor,
  title,
  subtitle,
  points,
  rate,
  rateLabel,
  buttonLabel,
  buttonColor,
  gradient = false, 
}) => {
  return (
 <div
  className="rounded-2xl shadow-md p-6 w-full max-w-xs text-center flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
  style={{ backgroundColor: bgColor }}
>
     <div
  className="mx-auto w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mb-4 transform transition-transform duration-300 group-hover:rotate-6 group-hover:translate-x-1 group-hover:translate-y-1"
  style={{ backgroundColor: iconBg }}
>
  {icon}
</div>

      <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{subtitle}</p>

      <ul className="text-sm text-gray-700 text-left space-y-2 mb-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2">
            {index === 0 ? (
              <FaCheckCircle className="text-gray-500" />
            ) : index === 1 ? (
              <FaClock className="text-gray-500" />
            ) : (
              <FaStar className="text-gray-500" />
            )}
            {point}
          </li>
        ))}
      </ul>

      <div className="bg-white py-4 rounded-lg mb-4 shadow-inner">
        <p className="text-2xl font-bold text-gray-800">{rate}</p>
        <p className="text-sm text-gray-500">{rateLabel}</p>
      </div>

     <button
  className={`w-full text-white py-2 rounded-lg font-semibold transition duration-200 ${
    gradient
      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
      : ''
  }`}
  style={gradient ? {} : { backgroundColor: buttonColor }}
>
  {buttonLabel}
</button>
    </div>
  );
};

export default Card;

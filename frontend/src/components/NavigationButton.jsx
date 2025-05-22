
import React from 'react';
import { Link } from 'react-router-dom';

// Removed NavigationButtonProps interface

const NavigationButton = ({  // Removed React.FC and type annotation
  to, 
  label, 
  description,
  Icon, // Removed React.ElementType 
  className = '',
  iconColor = 'text-rose-500', 
  hoverBgColor = 'hover:bg-rose-500', 
  focusRingColor = 'focus:ring-rose-300' 
}) => {
  return (
    <Link
      to={to}
      aria-label={`Navigate to ${label} page`}
      className={`group block bg-white shadow-xl hover:shadow-2xl rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 ${focusRingColor} ${className}`}
    >
      <div className={`p-6 sm:p-8 flex flex-col items-center text-center ${hoverBgColor} group-hover:text-white transition-colors duration-300`}>
        <Icon className={`h-12 w-12 sm:h-16 sm:w-16 mb-4 ${iconColor} group-hover:text-white transition-colors duration-300`} aria-hidden="true" />
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 group-hover:text-white transition-colors duration-300">
          {label}
        </h3>
      </div>
      <div className="px-6 py-4 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </Link>
  );
};

export default NavigationButton;
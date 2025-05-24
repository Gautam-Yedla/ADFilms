
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButton = ({ 
  to, 
  label, 
  description,
  Icon, 
  className = '',
  iconColor = 'text-amber-500 dark:text-amber-400', 
  hoverBgColor = 'hover:bg-amber-500 dark:hover:bg-amber-600', 
  focusRingColor = 'focus:ring-amber-300 dark:focus:ring-amber-500' 
}) => {
  return (
    <Link
      to={to}
      aria-label={`Navigate to ${label} page`}
      className={`group block bg-white dark:bg-neutral-700 shadow-xl hover:shadow-2xl dark:hover:shadow-amber-900/30 rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50 ${focusRingColor} ${className}`}
    >
      <div className={`p-6 sm:p-8 flex flex-col items-center text-center ${hoverBgColor} group-hover:text-white dark:group-hover:text-white transition-colors duration-300`}>
        <Icon className={`h-12 w-12 sm:h-16 sm:w-16 mb-4 ${iconColor} group-hover:text-white dark:group-hover:text-white transition-colors duration-300`} aria-hidden="true" />
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-neutral-100 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
          {label}
        </h3>
      </div>
      <div className="px-6 py-4 bg-slate-50 dark:bg-neutral-800 group-hover:bg-slate-100 dark:group-hover:bg-neutral-700 transition-colors duration-300">
        <p className="text-sm text-slate-600 dark:text-neutral-300">{description}</p>
      </div>
    </Link>
  );
};

export default NavigationButton;
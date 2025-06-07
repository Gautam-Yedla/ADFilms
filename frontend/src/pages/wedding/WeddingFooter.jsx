
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const WeddingFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-neutral-800 py-8 text-center font-montserrat">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {currentYear} AD FILMS Wedding Cinematography. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
          Crafting beautiful memories, one frame at a time.
        </p>
        <div className="mt-4">
          <Link to="/about" className="text-xs text-pink-600 dark:text-pink-400 hover:underline mx-2">About AD FILMS</Link>
          <Link to="/wedding/contact" className="text-xs text-pink-600 dark:text-pink-400 hover:underline mx-2">Contact Us</Link>
          {/* Placeholder links, update as needed */}
          {/* <a href="#" className="text-xs text-pink-600 dark:text-pink-400 hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-xs text-pink-600 dark:text-pink-400 hover:underline mx-2">Terms of Service</a> */}
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;


import React from 'react';

const Footer = () => { 
  return (
    <footer className="bg-slate-100 dark:bg-neutral-800 text-slate-500 dark:text-neutral-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} AD FILMS. All rights reserved.</p>
        <p className="text-xs mt-1">Crafting Visual Stories</p>
      </div>
    </footer>
  );
};

export default Footer;
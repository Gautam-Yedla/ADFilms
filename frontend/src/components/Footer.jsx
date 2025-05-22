
import React from 'react';

const Footer = () => { // Removed React.FC
  return (
    <footer className="bg-slate-200 text-slate-600 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} AD FILMS. All rights reserved.</p>
        <p className="text-xs mt-1">Crafting Visual Stories</p>
      </div>
    </footer>
  );
};

export default Footer;
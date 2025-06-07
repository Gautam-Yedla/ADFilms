import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const WeddingHeroSection = () => {
  const heroBackgroundImage = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"; // Romantic wedding scene

  return (
    <section 
      id="wedding-hero" 
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <motion.div 
        className="relative z-10 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          Capturing Love & Joy
        </motion.h1>
        <motion.p 
          className="font-montserrat text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          Weddings | Pre-Wedding | Engagement | Sangeet | Haldi
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
          <Link
            to="/wedding/portfolio" 
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-lg transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
            aria-label="View our wedding films, navigates to portfolio page"
          >
            View Our Wedding Films
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WeddingHeroSection;

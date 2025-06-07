
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} title
 * @property {number} films
 * @property {string} imageUrl
 * @property {string} description
 */

const categoriesData = [
  { id: 1, title: 'Weddings', films: 4, imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80', description: 'Full cinematic coverage of your beautiful wedding day.' },
  { id: 2, title: 'Pre-Wedding Shoots', films: 2, imageUrl: 'https://images.unsplash.com/photo-1587899798970-b758faba00be?auto=format&fit=crop&w=600&q=80', description: 'Capture your love story before the big day.' },
  { id: 3, title: 'Engagements', films: 1, imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80', description: 'Celebrate your special announcement with a memorable film.' },
  { id: 4, title: 'Sangeet', films: 3, imageUrl: 'https://images.unsplash.com/photo-1596963558090-3b760711602c?auto=format&fit=crop&w=600&q=80', description: 'Joyful dances and vibrant celebrations, beautifully captured.' },
  { id: 5, title: 'Haldi', films: 3, imageUrl: 'https://images.unsplash.com/photo-1604238898016-f73359100505?auto=format&fit=crop&w=600&q=80', description: 'The vibrant colors and emotions of your Haldi ceremony.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const WeddingPortfolioSection = () => {
  return (
    <section id="wedding-portfolio" className="py-16 sm:py-24 bg-gray-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-3">Our Wedding Film Portfolio</h2>
          <p className="font-montserrat text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the diverse range of wedding events we passionately capture, each with its unique charm and story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-white dark:bg-neutral-700 rounded-lg shadow-xl overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="relative h-64">
                <img src={category.imageUrl} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4">
                   <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {category.films} Film{category.films !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-gray-800 dark:text-white mb-2">{category.title}</h3>
                <p className="font-montserrat text-sm text-gray-600 dark:text-gray-300 mb-4 h-16 overflow-hidden">{category.description}</p>
                <a
                  href="#" // Placeholder: This should ideally link to a page/modal showing films for this category
                  className="inline-block text-pink-500 dark:text-pink-400 font-semibold hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-200"
                  aria-label={`View films for ${category.title}`}
                >
                  Explore Category &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingPortfolioSection;

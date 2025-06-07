
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from 'react'; // Removed useCallback
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; 

// --- Helper Hook for Scroll Animations (adapted for Framer Motion) ---
const useIntersectionObserver = (options = { threshold: 0.1 }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // observer.unobserve(currentRef); // Optional: unobserve after first intersection
        } else {
          // setIsInView(false); // Optional: reset when out of view
        }
      },
      options
    );

    observer.observe(currentRef);
    return () => {
        if (currentRef) { // Check if currentRef exists before unobserving
            observer.unobserve(currentRef);
        }
    };
  }, [options]); // Add ref to dependency array if it could change, though usually it doesn't for simple cases.

  return [ref, isInView];
};

// --- SVG Icons ---
const CameraIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>);
const FilmIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75V3.75m3.75 0V20.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v.001c0 .621.504 1.125 1.125 1.125zM4.5 18.75h15a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25v6.75A2.25 2.25 0 004.5 18.75z" /></svg>);
const SparklesIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.875 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 12.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 12.75z" /></svg>);
const HeartIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>);
const CogIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15.036-7.126A18.75 18.75 0 004.5 12m0 0a18.75 18.75 0 01-2.036-7.126m19.072 0a18.75 18.75 0 00-2.036 7.126M12 14.25A2.25 2.25 0 1012 9.75a2.25 2.25 0 000 4.5z" /></svg>);
const UsersIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21C7.233 21 5.977 20.635 4.86 19.988a4.125 4.125 0 00-7.533-2.493M7.5 7.5h.008v.008H7.5V7.5zm7.5 0h.008v.008H15V7.5zM3 8.25A3.75 3.75 0 016.75 4.5h10.5A3.75 3.75 0 0121 8.25v7.5A3.75 3.75 0 0117.25 19.5H6.75A3.75 3.75 0 013 15.75v-7.5z" /></svg>);
const ChevronDownIconSvg = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>);


const ServiceCard = ({ icon: Icon, title, description, learnMoreLink = "/wedding/contact" }) => (
  <div className="bg-white dark:bg-neutral-700/70 p-6 rounded-xl shadow-lg hover:shadow-pink-500/20 dark:hover:shadow-pink-400/10 transition-all duration-300 transform hover:-translate-y-1.5 group">
    <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-pink-100 dark:bg-neutral-600 group-hover:bg-pink-500 dark:group-hover:bg-pink-500 transition-all duration-300">
      {Icon && <Icon className="w-8 h-8 text-pink-500 dark:text-pink-300 group-hover:text-white transition-colors duration-300" />}
    </div>
    <h3 className="font-playfair text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">{title}</h3>
    <p className="font-montserrat text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-center h-24 overflow-hidden">{description}</p>
    <div className="text-center mt-auto">
      <Link
        to={learnMoreLink} 
        className="font-montserrat text-sm font-medium text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-300 group-hover:underline"
      >
        Inquire Now &rarr;
      </Link>
    </div>
  </div>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 dark:border-neutral-700">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75"
      aria-expanded={isOpen}
    >
      <span className="font-montserrat text-md font-medium text-gray-700 dark:text-gray-200">{question}</span>
      <ChevronDownIconSvg className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0, height: 0, marginTop: 0 }}
        animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }} 
        exit={{ opacity: 0, height: 0, marginTop: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-5 pr-2 font-montserrat text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    )}
    </AnimatePresence>
  </div>
);

const weddingServicesData = [
    { icon: CameraIcon, title: "Full-Day Coverage", description: "Capturing every cherished moment, from bridal preparations to the final dance, ensuring no detail is missed.", learnMoreLink: "/wedding/contact?service=full-day" },
    { icon: FilmIcon, title: "Cinematic Highlight Reel", description: "A beautifully edited, movie-like summary of your wedding day, perfect for sharing with friends and family.", learnMoreLink: "/wedding/contact?service=highlight-reel" },
    { icon: HeartIcon, title: "Feature Wedding Film", description: "A comprehensive, artistic film telling the complete story of your day, including vows, speeches, and candid moments.", learnMoreLink: "/wedding/contact?service=feature-film" },
    { icon: SparklesIcon, title: "Engagement Story Film", description: "A pre-wedding film that tells your unique love story, perfect for sharing at your reception or online.", learnMoreLink: "/wedding/contact?service=engagement-film" },
    { icon: CameraIcon, title: "Drone Cinematography", description: "Breathtaking aerial shots of your venue and surroundings, adding a grand, cinematic scale to your film.", learnMoreLink: "/wedding/contact?service=drone" },
    { icon: CogIcon, title: "Custom Packages", description: "Tailored videography packages to perfectly suit your needs, vision, and budget for your special day.", learnMoreLink: "/wedding/contact?service=custom-package" },
    { icon: UsersIcon, title: "Guest Interviews", description: "Capture heartfelt messages and well wishes from your loved ones for an extra personal touch.", learnMoreLink: "/wedding/contact?service=guest-interviews" },
    { icon: FilmIcon, title: "Same-Day Edits", description: "A short, exciting edit of your wedding day shown during your reception for an unforgettable experience.", learnMoreLink: "/wedding/contact?service=same-day-edit" },
];

const filmmakingProcessSteps = [
  'Consultation & Vision Sharing', 
  'Pre-Wedding Planning & Coordination', 
  'The Wedding Day - Capturing Magic', 
  'Artistic Post-Production & Editing', 
  'Film Delivery & Cherished Memories'
];

const faqsData = [
    { question: "How far in advance should we book your services?", answer: "We recommend booking 9-18 months in advance, especially for popular wedding dates, to ensure our availability. However, don't hesitate to reach out for last-minute inquiries!" },
    { question: "What is your filmmaking style?", answer: "Our style is cinematic and story-driven, focusing on capturing genuine emotions and natural moments. We aim for a timeless, elegant aesthetic that truly reflects your personalities and the atmosphere of your day." },
    { question: "Can we choose the music for our film?", answer: "We work with licensed music libraries to ensure your film can be shared online without copyright issues. We'll collaborate with you to select music that matches the mood and style of your wedding film." },
    { question: "How long does it take to receive our wedding film?", answer: "Typically, highlight reels are delivered within 4-8 weeks, and feature films within 12-16 weeks, depending on the season and complexity of the edit. We prioritize quality and ensure each film receives the attention it deserves." },
    { question: "Do you travel for weddings?", answer: "Absolutely! We love capturing weddings in new and exciting locations. Travel fees may apply for weddings outside our local area, which we can discuss during your consultation." },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const WeddingApproachSection = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const [sectionRef, isSectionInView] = useIntersectionObserver({ threshold: 0.1 });

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <section id="wedding-approach" className="py-16 sm:py-24 bg-gray-50 dark:bg-neutral-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Section */}
        <motion.div
          ref={sectionRef} // Re-use ref or create new ones if independent animations are needed
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-3">Our Signature Wedding Services</h2>
            <p className="font-montserrat text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From intimate elopements to grand celebrations, we offer a range of services to preserve your memories beautifully.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {weddingServicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filmmaking Process Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-3">Our Wedding Filmmaking Process</h2>
            <p className="font-montserrat text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              A collaborative journey to create a film that's uniquely yours.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {filmmakingProcessSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {index + 1}
                </div>
                <h3 className="font-montserrat text-lg font-medium text-gray-700 dark:text-gray-200">{step}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-3">Wedding Film FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-6 sm:p-8 rounded-xl shadow-xl">
            <div className="space-y-2">
              {faqsData.map((faq, index) => (
                 <motion.div 
                    key={faq.question}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <FAQItem 
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFAQIndex === index}
                      onClick={() => toggleFAQ(index)}
                    />
                 </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WeddingApproachSection;


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- Helper Hook for Scroll Animations ---
// const useIntersectionObserver = (options = { threshold: 0.1 }) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const elementRef = useRef(null);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     // This effect mainly creates/recreates the observer when options change.
//     // It also attempts to observe the current element if it exists.
//     if (observerRef.current) {
//       observerRef.current.disconnect(); // Disconnect previous observer fully
//     }

//     observerRef.current = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsIntersecting(true);
//       } else {
//         // Optional: set to false if animation should reverse when out of view
//         // setIsIntersecting(false);
//       }
//     }, options);

//     // If element is already mounted when options change, re-observe with new observer.
//     if (elementRef.current) {
//       observerRef.current.observe(elementRef.current);
//     }

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [options]);

//   const callbackRef = (node) => {
//     // This is our ref callback. It's called when the element mounts/unmounts or changes.
//     if (observerRef.current) {
//       // Stop observing the old element, if any
//       if (elementRef.current) {
//         observerRef.current.unobserve(elementRef.current);
//       }
//       // Start observing the new element, if any
//       if (node) {
//         observerRef.current.observe(node);
//       }
//     }
//     // Update our ref to the new node
//     elementRef.current = node;
//   };

//   return [callbackRef, isIntersecting];
// };

const useIntersectionObserver = (options = { threshold: 0.1 }) => {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const current = elementRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [elementRef, options]);

  return [elementRef, isIntersecting];
};



// --- SVG Icons ---
const BreadcrumbHomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" {...props}>
    <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 10.707V17.5a1.5 1.5 0 01-1.5 1.5h-3.5a1.5 1.5 0 01-1.5-1.5v-3a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v3a1.5 1.5 0 01-1.5 1.5h-3.5A1.5 1.5 0 013 17.5V10.707a1 1 0 01.293-.707l7-7z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" {...props}>
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

const LightbulbIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311V21m-3.75-2.311V21m0 0a3 3 0 01-3-3V6.75A3 3 0 019 3.75h6a3 3 0 013 3v8.25a3 3 0 01-3 3z" /></svg>
);
const PenToolIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
);
const LayoutGridIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
);
const UsersIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.242-3.72a3 3 0 01.166.768A3 3 0 0118 15.75m-1.386-3.03A3.001 3.001 0 0015.75 12c-1.228 0-2.318.67-2.874 1.665m4.682-2.72A9.094 9.094 0 0118 18.72m0 0A9.093 9.093 0 0112.75 21a9.093 9.093 0 01-5.25-2.28m5.25-2.28A9.094 9.094 0 0012.75 15a9.094 9.094 0 00-5.25 2.28m10.5-4.56c0-1.281.698-2.424 1.739-3.03M12 3c2.044 0 3.75.806 3.75 1.875S14.044 6.75 12 6.75 8.25 5.894 8.25 4.875C8.25 3.806 9.956 3 12 3z" /></svg>
);
const VideoCameraIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" /></svg>
);
const SparklesIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.875 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 12.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 12.75z" /></svg>
);
const SpeakerWaveIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>
);
const ArrowUpOnSquareIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" /></svg>
);
const ChevronDownIconSvg = (props) => ( 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
);

// --- Reusable Components ---

const AnimatedSection = ({ children, options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } }) => {
  const [setElementAsRef, isVisible] = useIntersectionObserver(options);
  return (
    <div
      ref={setElementAsRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 sm:translate-x-0' : 'opacity-0 translate-y-10 sm:translate-y-0'
      }`}
    >
      {children}
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description, learnMoreLink = "#" }) => (
  <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-amber-500/20 dark:hover:shadow-amber-400/20 transition-all duration-300 transform hover:-translate-y-1 group">
    <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-amber-100 dark:bg-neutral-700 group-hover:bg-amber-500 dark:group-hover:bg-amber-600 transition-all duration-300">
      {Icon && <Icon className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:text-white transition-colors duration-300" />}
    </div>
    <h3 className="text-xl font-semibold text-slate-800 dark:text-neutral-100 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 dark:text-neutral-300 mb-4 leading-relaxed">{description}</p>
    <Link
        to={learnMoreLink} 
        className="text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-300 group-hover:underline"
    >
        Learn more &rarr;
    </Link>
  </div>
);

const TestimonialCard = ({ quote, image, name, role }) => (
  <div className="bg-slate-100 dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <p className="text-slate-600 dark:text-neutral-300 italic mb-4">"{quote}"</p>
    <div className="flex items-center">
      {image ? (
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
      ) : (
        <div className="w-12 h-12 rounded-full mr-4 bg-slate-300 dark:bg-neutral-700 flex items-center justify-center text-slate-500 dark:text-neutral-400 text-lg font-semibold">
          {name.charAt(0)}
        </div>
      )}
      <div>
        <p className="font-semibold text-slate-700 dark:text-neutral-100">{name}</p>
        <p className="text-sm text-slate-500 dark:text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-200 dark:border-neutral-700">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75"
      aria-expanded={isOpen}
    >
      <span className="text-md font-medium text-slate-700 dark:text-neutral-200">{question}</span>
      <ChevronDownIconSvg className={`w-5 h-5 text-slate-500 dark:text-neutral-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="pb-5 pr-2 text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
        {answer}
      </div>
    )}
  </div>
);

const services = [
    { icon: LightbulbIcon, title: "Concept Development", description: "Transforming your ideas into compelling commercial concepts tailored to your brand.", learnMoreLink: "/commercials/contact?service=concept" },
    { icon: PenToolIcon, title: "Scriptwriting & Storyboarding", description: "Crafting persuasive scripts and visual storyboards that engage your audience.", learnMoreLink: "/commercials/contact?service=script" },
    { icon: LayoutGridIcon, title: "Pre-Production Planning", description: "Meticulous planning, scheduling, and logistics to ensure a smooth shoot.", learnMoreLink: "/commercials/contact?service=preproduction" },
    { icon: UsersIcon, title: "Casting & Talent", description: "Finding the perfect faces and voices to represent your brand and connect with your audience.", learnMoreLink: "/commercials/contact?service=casting" },
    { icon: VideoCameraIcon, title: "Shooting & Direction", description: "Expertly managing on-set production with top-tier equipment and creative direction.", learnMoreLink: "/commercials/contact?service=shooting" },
    { icon: SparklesIcon, title: "Post-Production", description: "Refining footage with professional editing, color grading, and visual effects.", learnMoreLink: "/commercials/contact?service=postproduction" },
    { icon: SpeakerWaveIcon, title: "Sound Design & Voiceovers", description: "Creating immersive audio experiences with custom soundscapes and professional voice talent.", learnMoreLink: "/commercials/contact?service=sound" },
    { icon: ArrowUpOnSquareIcon, title: "Final Delivery", description: "Optimizing and delivering your commercial in various formats for all platforms.", learnMoreLink: "/commercials/contact?service=delivery" },
];

const CommercialsServicesPage = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const clientLogos = [
    { name: "Innovate Ltd.", src: "https://via.placeholder.com/150x60/CBD5E0/475569?text=Innovate+Ltd." },
    { name: "MarketMovers", src: "https://via.placeholder.com/150x60/CBD5E0/475569?text=MarketMovers" },
    { name: "Global Solutions", src: "https://via.placeholder.com/150x60/CBD5E0/475569?text=Global+Solutions" },
    { name: "Peak Performers", src: "https://via.placeholder.com/150x60/CBD5E0/475569?text=Peak+Performers" },
  ];

  const testimonials = [
    { quote: "AD FILMS transformed our vision into a stunning commercial that exceeded all expectations. Their creativity and professionalism are top-notch!", name: "Sarah L.", role: "Marketing Director, Innovate Ltd.", image: "https://via.placeholder.com/100/A0AEC0/FFFFFF?text=SL" },
    { quote: "The team at AD FILMS is incredibly talented and dedicated. They delivered a high-quality product on time and within budget.", name: "John B.", role: "CEO, BrandCorp", image: "https://via.placeholder.com/100/A0AEC0/FFFFFF?text=JB" },
    { quote: "Working with AD FILMS was a fantastic experience. They truly understand storytelling and how to connect with an audience.", name: "Emily K.", role: "Founder, MarketMovers", image: "https://via.placeholder.com/100/A0AEC0/FFFFFF?text=EK" },
  ];

  const faqs = [
    { question: "What types of commercials do you produce?", answer: "We produce a wide range of commercials, including brand films, product showcases, social media ads, corporate videos, TV spots, and more. We tailor our approach to your specific needs and target audience." },
    { question: "What is your production process like?", answer: "Our process is collaborative and transparent. It typically involves initial consultation, concept development, pre-production (scripting, storyboarding, casting, location scouting), production (filming), and post-production (editing, color grading, sound design, VFX). We keep you informed every step of the way." },
    { question: "How much does a commercial cost?", answer: "The cost of a commercial can vary significantly based on factors like complexity, length, talent, locations, crew size, and post-production requirements. We provide custom quotes after discussing your project details. Contact us for a free consultation!" },
    { question: "How long does it take to produce a commercial?", answer: "Production timelines can range from a few weeks to a few months, depending on the project's scope. We work efficiently to meet your deadlines while ensuring the highest quality." },
    { question: "Can you help with distribution?", answer: "While our primary focus is production, we can offer guidance on distribution strategies and ensure your commercial is optimized for various platforms (TV, web, social media)." },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="text-slate-700 dark:text-neutral-200">
      {/* Breadcrumbs */}
      {/* <nav aria-label="Breadcrumb" className="bg-slate-50 dark:bg-neutral-800 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-500 dark:text-neutral-400">
            <li>
              <Link to="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center">
                <BreadcrumbHomeIcon className="mr-1.5" /> Home
              </Link>
            </li>
            <li><ChevronRightIcon /></li>
            <li>
              <Link to="/commercials" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Commercials</Link>
            </li>
            <li><ChevronRightIcon /></li>
            <li className="font-medium text-slate-700 dark:text-neutral-200" aria-current="page">Services</li>
          </ol>
        </div>
      </nav> */}

      {/* Hero Section */}
      <AnimatedSection>
        <div className="pt-16 pb-20 text-center lg:pt-24 lg:pb-28">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 dark:text-neutral-100 sm:text-5xl md:text-6xl">
              Commercial Production Services
            </h1>
            <p className="mt-6 text-xl text-slate-600 dark:text-neutral-300">
              Elevate your brand with captivating, high-impact commercials crafted by AD FILMS. From concept to screen, we bring your vision to life.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <Link
                to="/commercials/contact?subject=Quote%20Request"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 md:py-4 md:text-lg md:px-10 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <AnimatedSection>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-neutral-100 sm:text-4xl">
              Our Comprehensive Services
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-neutral-300">
              We offer a full spectrum of commercial production services to ensure your project is a success from start to finish.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} options={{ threshold: 0.1, rootMargin: "0px 0px -20px 0px" }}>
               <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 sm:py-16">
        <AnimatedSection>
          <h2 className="text-center text-2xl font-semibold text-slate-600 dark:text-neutral-300 mb-8">
            Trusted By Brands Like Yours
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <AnimatedSection key={index} options={{ threshold: 0.1, rootMargin: "0px 0px -10px 0px" }}>
              <div className="flex justify-center">
                <img 
                  src={client.src} 
                  alt={client.name} 
                  className="max-h-12 lg:max-h-14 object-contain opacity-70 dark:opacity-60 hover:opacity-100 dark:hover:opacity-90 transition-opacity duration-300" 
                  style={{ filter: 'grayscale(100%)', mixBlendMode: 'luminosity' }} 
                  onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Video Showreel */}
      <section className="py-16 sm:py-20">
        <AnimatedSection>
          <div className="text-center mb-12 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-neutral-100 sm:text-4xl">
              See Our Work in Action
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-neutral-300">
              A glimpse into the impactful commercials we've produced for our clients.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-2xl overflow-hidden max-w-4xl mx-auto bg-slate-200 dark:bg-neutral-700">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder YouTube video
              title="AD FILMS Commercial Showreel Placeholder" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </AnimatedSection>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-neutral-100 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <TestimonialCard {...testimonial} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-neutral-100 sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* CTA Block */}
      <section className="py-16 sm:py-24">
        <div className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-slate-800 dark:text-neutral-100 sm:text-4xl">
              Ready to Shoot Your Next Commercial?
            </h2>
            <p className="mt-4 text-lg leading-6 text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Let's discuss your project and how AD FILMS can help you create a commercial that stands out and drives results.
            </p>
            <div className="mt-8">
              <Link
                to="/commercials/contact"
                className="inline-block px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Let's Talk
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CommercialsServicesPage;




// I don't want that service page to be like one page in other, I need it to be like a regular page
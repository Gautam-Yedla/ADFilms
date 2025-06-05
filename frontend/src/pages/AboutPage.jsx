
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Link } from 'react-router-dom';

// // --- Helper Hook for Scroll Animations ---
// const useIntersectionObserver = (options = { threshold: 0.1 }) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const observerRef = useRef(null);

//   const callbackRef = useCallback((node) => {
//     if (observerRef.current) {
//       observerRef.current.disconnect();
//     }
//     observerRef.current = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsIntersecting(true);
//         // Optional: unobserve if only animate once
//         // if (observerRef.current && entry.target) observerRef.current.unobserve(entry.target);
//       } else {
//         // setIsIntersecting(false); // To re-animate on scroll up
//       }
//     }, options);
//     if (node) {
//       observerRef.current.observe(node);
//     }
//   }, [options]);

//   return [callbackRef, isIntersecting];
// };

// const AnimatedSection = ({
//   children,
//   className = '',
//   animationClassName = 'opacity-0 translate-y-8',
//   threshold = 0.1,
//   delay = 'delay-0'
// }) => {
//   const [ref, isIntersecting] = useIntersectionObserver({ threshold });
//   const appliedAnimation = isIntersecting ? `opacity-100 translate-y-0 ${delay}` : `${animationClassName}`;
  
//   return (
//     <div ref={ref} className={`transition-all duration-700 ease-out ${appliedAnimation} ${className}`}>
//       {children}
//     </div>
//   );
// };


// // --- SVG Icons for Values Section ---
// const LightbulbIcon = (props) => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311V21m-3.75-2.311V21m0 0a3 3 0 01-3-3V6.75A3 3 0 019 3.75h6a3 3 0 013 3v8.25a3 3 0 01-3 3z" /></svg>
// );
// const StarIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
//     <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.502 2.872c-.997.608-2.23-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
//   </svg>
// );
// const UsersIcon = (props) => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.242-3.72a3 3 0 01.166.768A3 3 0 0118 15.75m-1.386-3.03A3.001 3.001 0 0015.75 12c-1.228 0-2.318.67-2.874 1.665m4.682-2.72A9.094 9.094 0 0118 18.72m0 0A9.093 9.093 0 0112.75 21a9.093 9.093 0 01-5.25-2.28m5.25-2.28A9.094 9.094 0 0012.75 15a9.094 9.094 0 00-5.25 2.28m10.5-4.56c0-1.281.698-2.424 1.739-3.03M12 3c2.044 0 3.75.806 3.75 1.875S14.044 6.75 12 6.75 8.25 5.894 8.25 4.875C8.25 3.806 9.956 3 12 3z" /></svg>
// );
// const BookOpenIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
//   </svg>
// );
// const CheckBadgeIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-.936 3.111l-4.267-4.267M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9c0 1.268-.63 2.39-.936 3.111M16.064 21.48A9.002 9.002 0 0021 12.044M4.012 8.586c0-.495.398-.893.893-.893h5.19c.495 0 .893.398.893.893v5.19c0 .495-.398.893-.893.893h-5.19c-.495 0-.893-.398-.893-.893v-5.19z" />
//   </svg>
// );
// const WrenchScrewdriverIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17L14.49 12.1M11.42 15.17l.017-.017L11.42 15.17zm0 0L21.75 4.93l-5.83 5.83M21.75 4.93l-5.83 5.83M21.75 4.93L14.49 12.1M14.49 12.1L11.42 15.17M14.49 12.1l5.83-5.83M11.42 15.17L2.19 24.44A2.652 2.652 0 012.19 21V3A2.652 2.652 0 013 2.19l12.27 9.27a.904.904 0 001.15.115 2.652 2.652 0 002.715-3.525L11.42 15.17z" />
//   </svg>
// );

// const ValueCard = ({ icon: Icon, title, description }) => (
//   <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-amber-500/10 dark:hover:shadow-amber-400/10 transition-all duration-300 transform hover:scale-105 group">
//     <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-amber-100 dark:bg-neutral-700 group-hover:bg-amber-500 dark:group-hover:bg-amber-600 transition-all duration-300 mx-auto">
//       <Icon className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:text-white transition-colors duration-300" />
//     </div>
//     <h3 className="text-xl font-semibold text-slate-800 dark:text-neutral-100 mb-2 text-center">{title}</h3>
//     <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed text-center">{description}</p>
//   </div>
// );

// const AboutPage = () => {
//   const coreValues = [
//     { icon: LightbulbIcon, title: "Creativity & Innovation", description: "Pushing creative boundaries to deliver unique and memorable visual experiences that captivate and inspire." },
//     { icon: StarIcon, title: "Uncompromising Quality", description: "Committing to the highest standards in every frame, from meticulous planning to flawless execution and final polish." },
//     { icon: UsersIcon, title: "Collaborative Partnership", description: "Working closely with our clients, fostering open communication to bring their vision to life, together." },
//     { icon: BookOpenIcon, title: "Storytelling Excellence", description: "Believing in the power of narrative to connect, evoke emotion, and drive impactful results for your brand." },
//   ];

//   const whyChooseUsPoints = [
//     { title: "Experienced & Passionate Team", description: "Our crew consists of dedicated professionals with years of experience in filmmaking and a shared passion for visual arts.", icon: UsersIcon },
//     { title: "Tailored Approach", description: "We understand that every project is unique. We customize our services to meet your specific goals, audience, and budget.", icon: WrenchScrewdriverIcon },
//     { title: "Cutting-Edge Technology", description: "Utilizing the latest filmmaking equipment and post-production techniques to ensure your content is visually stunning and technically sound.", icon: StarIcon },
//     { title: "Client-Centric Service", description: "Your satisfaction is our priority. We're committed to clear communication, transparency, and delivering results that exceed expectations.", icon: CheckBadgeIcon },
//   ];

//   return (
//     <div className="py-8 sm:py-12 text-slate-700 dark:text-neutral-200 space-y-16 sm:space-y-24">
//       {/* Hero Section */}
//       <AnimatedSection className="text-center">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-neutral-100 mb-5">
//           About <span className="text-amber-500 dark:text-amber-400">AD FILMS</span>
//         </h1>
//         <p className="text-xl sm:text-2xl text-slate-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
//           Crafting Visual Narratives That Inspire and Engage.
//         </p>
//         <p className="text-md text-slate-500 dark:text-neutral-400 max-w-2xl mx-auto">
//           At AD FILMS, we are more than just a production house; we are storytellers, artists, and technical wizards dedicated to bringing visions to life. We believe in the transformative power of film to connect with audiences, convey messages, and create lasting impressions.
//         </p>
//       </AnimatedSection>

//       {/* Our Story Section */}
//       <AnimatedSection className="max-w-4xl mx-auto" delay="delay-100">
//         <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-neutral-100 mb-6 text-center">
//           Our Story: The Journey of AD FILMS
//         </h2>
//         <div className="space-y-4 text-slate-600 dark:text-neutral-300 text-left sm:text-lg leading-relaxed bg-white dark:bg-neutral-800 p-6 sm:p-8 rounded-lg shadow-xl">
//           <p>
//             Founded on a deep-seated passion for cinematography and the art of storytelling, AD FILMS emerged from a desire to create visual content that truly resonates. Our journey began with a simple idea: to combine creative vision with technical expertise to produce films that are not only beautiful but also meaningful.
//           </p>
//           <p>
//             Over the years, we've grown into a dynamic team of creative professionals, each bringing unique skills and perspectives to the table. We've honed our craft across diverse projects, from captivating YouTube series and emotional wedding films to high-impact commercial productions. Our commitment to excellence and innovation has remained steadfast, driving us to constantly explore new techniques and push the boundaries of visual storytelling.
//           </p>
//           <p>
//             We believe that every project is an opportunity to create something extraordinary. Our collaborative approach ensures that we understand our clients' visions intimately, allowing us to translate their ideas into compelling visual narratives that achieve their goals and exceed their expectations.
//           </p>
//         </div>
//       </AnimatedSection>
      
//       {/* Our Mission Section */}
//       <AnimatedSection className="max-w-4xl mx-auto text-center" delay="delay-200">
//         <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-neutral-100 mb-6">
//           Our Mission
//         </h2>
//         <p className="text-lg sm:text-xl text-slate-600 dark:text-neutral-300 bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg shadow-md">
//           To empower brands and individuals by crafting exceptional visual stories that captivate audiences, inspire action, and achieve impactful results through creativity, quality, and collaboration.
//         </p>
//       </AnimatedSection>

//       {/* Core Values Section */}
//       <AnimatedSection className="max-w-5xl mx-auto" delay="delay-300">
//         <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-neutral-100 mb-10 text-center">
//           Core Values That Drive Us
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           {coreValues.map((value, index) => (
//             <AnimatedSection key={index} delay={`delay-${100 * (index % 2)}`}>
//               <ValueCard icon={value.icon} title={value.title} description={value.description} />
//             </AnimatedSection>
//           ))}
//         </div>
//       </AnimatedSection>

//       {/* Why Choose AD FILMS Section */}
//       <AnimatedSection className="max-w-4xl mx-auto" delay="delay-200">
//         <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-neutral-100 mb-10 text-center">
//           Why Partner With AD FILMS?
//         </h2>
//         <div className="space-y-8">
//           {whyChooseUsPoints.map((point, index) => (
//             <AnimatedSection key={index} delay={`delay-${100 * index}`}>
//               <div className="flex flex-col sm:flex-row items-start bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
//                   <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-neutral-700 text-amber-500 dark:text-amber-400">
//                     <point.icon className="w-6 h-6" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-slate-700 dark:text-neutral-100 mb-1">{point.title}</h3>
//                   <p className="text-slate-600 dark:text-neutral-300">{point.description}</p>
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </AnimatedSection>
      
//       {/* Call to Action Section */}
//       <AnimatedSection className="text-center py-10" delay="delay-300">
//         <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-neutral-100 mb-6">
//           Let's Tell Your Story
//         </h2>
//         <p className="text-lg text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
//           Ready to bring your vision to the screen? Whether it's a dynamic commercial, engaging YouTube content, or a timeless wedding film, we're excited to collaborate with you.
//         </p>
//         <div className="space-y-4 sm:space-y-0 sm:space-x-4">
//           <Link
//             to="/" // Link to portfolio or main page showcasing work
//             className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 focus:ring-opacity-75"
//           >
//             View Our Portfolio
//           </Link>
//           <Link
//             to="/contact"
//             className="inline-block bg-slate-600 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:ring-opacity-75 dark:bg-neutral-600 dark:hover:bg-neutral-500"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </AnimatedSection>
//     </div>
//   );
// };

// export default AboutPage;





import React from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpeg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const AboutUs = () => {
  return (
    <div className="overflow-x-hidden">
    
      <div className="relative w-screen h-[500px] left-0 right-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${image5})`,
          }}
        ></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center px-6 z-10">
          <h1 className="text-gray-100 text-4xl md:text-6xl font-extrabold">
            About <span style={{ color: '#d97706' }}>Us</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mt-4 px-4">
            We capture timeless wedding moments with heart and artistry — turning your most beautiful day into memories that last a lifetime.
          </p>
        </div>
      </div>

      <div className="mt-20"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-left px-4 md:pr-8">
            <h2 className="text-3xl font-bold" style={{ color: '#d97706' }}>Elegance in Every Frame.</h2>
            <p className="text-white mt-4">
              We believe capturing a wedding shouldn’t feel staged or stressful — it should flow as naturally as your love story.  
              At [Your Studio Name], we simplify the photography experience while preserving every emotion and detail.  
              From your first look to your final dance, our team works seamlessly in the background to turn genuine moments into timeless memories.  
              With a creative eye and a personal touch, we make every step feel effortless, beautiful, and truly you.
            </p>
          </div>
          <div className="relative flex justify-center">
            <img
              src={image1}
              alt="Houses"
              className="w-full max-w-[530px] h-auto object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
          <div className="relative flex justify-center">
            <img
              src={image2}
              alt="Customer Service"
              className="w-full max-w-[530px] h-auto object-cover shadow-lg rounded-lg"
            />
          </div>
          <div className="text-left px-4 md:pl-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold" style={{ color: '#d97706' }}>Unmatched Client Experience</h2>
            <p className="text-white mt-4">
              At ADFilms, we treat every couple like family. Whether it’s guiding you through your pre-wedding shoot,  
              helping plan the perfect ceremony timeline, or delivering beautifully edited memories right on time,  
              we’re here every step of the way.  
              Our commitment to clear communication, warmth, and professionalism sets us apart in the wedding photography world.  
              You focus on your love story — we’ll focus on capturing it perfectly.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
          <div className="text-left px-4 md:pr-8">
            <h2 className="text-3xl font-bold" style={{ color: '#d97706' }}>Honesty in Every Frame</h2>
            <p className="text-white mt-4">
              We believe that your wedding memories deserve complete transparency — no hidden costs, no surprises.  
              From package details and deliverables to timelines and expectations, we keep everything crystal clear from the start.  
              In an industry where couples are often overwhelmed by fine print and unclear promises,  
              we take pride in offering straightforward communication and dependable service.  
              You dream it, we’ll capture it — exactly as promised.
            </p>
          </div>
          <div className="relative flex justify-center">
            <img
              src={image4}
              alt="Glass Building"
              className="w-full max-w-[530px] h-auto object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-20"></div>
    </div>
  );
};

export default AboutUs;

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

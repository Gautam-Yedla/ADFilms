import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../assets/sangeet.mp4';
import img1 from '../../assets/image1.jpg';
import img2 from '../../assets/image2.jpeg';
import img3 from '../../assets/image3.jpg';
import img4 from '../../assets/image4.jpg';
import img5 from '../../assets/image5.jpg';
import img6 from '../../assets/image6.jpeg';
import img7 from '../../assets/image1.jpg';
import img8 from '../../assets/image2.jpeg';

const SangeetSection = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[100vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-purple-200/30 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
          <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-4">
            Sangeet Night Extravaganza
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl">
            Celebrate music, dance and laughter in a night to remember.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-md transition">
              View Gallery
            </button>
            <Link to="/contact" className="bg-white text-purple-600 hover:bg-purple-100 px-6 py-3 rounded-full shadow-md transition">
              Book Us
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-purple-50 py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Dance. Sing. Celebrate.</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          The Sangeet is where families bond, friends celebrate, and joy flows like music. Our team captures every rhythm, every twirl, and every heartfelt moment with cinematic flair.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-10">Our Sangeet Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[{
            title: "Full Sangeet Coverage",
            desc: "Complete event coverage with multiple camera angles and live sound capture."
          }, {
            title: "Choreographed Highlight Reels",
            desc: "Highlight the best performances in stunning cinematic style."
          }, {
            title: "Behind-the-Scenes Moments",
            desc: "Candid captures of all the fun, prep, and backstage energy."
          }].map((item, idx) => (
            <div
              key={idx}
              className="bg-purple-100 p-6 rounded-lg shadow hover:shadow-xl transition border-t-4 border-purple-500"
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">Sangeet Snapshots</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={`Sangeet Moment ${i + 1}`}
                className="object-cover w-full h-full transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-100 py-16 text-center px-6 md:px-24">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Let’s Make Your Sangeet Unforgettable</h2>
        <p className="text-purple-700 max-w-xl mx-auto mb-6">
          From dance rehearsals to the final beat, we capture it all in style.
        </p>
        <Link
          to="/contact"
          className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-700 transition shadow-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default SangeetSection;

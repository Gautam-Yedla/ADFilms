import React from 'react';
import image6 from '../../assets/image6.jpeg'
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image3.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import mainimage from '../../assets/mainimage.jpeg';
import weddingvideo from '../../assets/wedding.mp4';

import { Link } from 'react-router-dom';

const Weddingsection = () => {
  return (
    <div className="relative min-h-screen text-gray-900 font-sans overflow-x-hidden">

      {/* 🌸 Background Video Hero */}
      <div className="relative h-[90vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={weddingvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-pink-100/20 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair text-white font-bold drop-shadow-lg mb-4">
            Timeless Wedding Films
          </h1>
          <p className="text-lg sm:text-xl text-pink-100 drop-shadow-md max-w-2xl mb-6">
            Crafted with elegance. Captured with love. Preserved forever.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md transition">
              View Packages
            </button>
            <button className="bg-white text-pink-600 hover:bg-pink-100 px-6 py-3 rounded-full shadow-md transition">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* 💞 About the Experience */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Love Story Deserves More Than Just Photos</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We go beyond just filming. We create a cinematic experience that captures the emotion, the energy, and the soul of your big day.
          From the heartfelt vows to the stolen glances and joyous laughter — every frame tells a piece of your love story.
        </p>
      </section>

      {/* 🎥 Featured Services */}
      <section className="bg-pink-50 py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-10">Our Signature Offerings</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Cinematic Wedding Film",
              desc: "A full-day edit capturing every magical moment with elegance and narrative."
            },
            {
              title: "Teaser & Highlight Reel",
              desc: "Perfect for social sharing — a 2-4 minute recap of your wedding’s best moments."
            },
            {
              title: "Drone Cinematography",
              desc: "Stunning aerial shots of your venue and ceremonies, adding grandeur to your film."
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all border-t-4 border-pink-400"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

  <section className="bg-white py-20 px-6 md:px-24 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-10">Captured Moments</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={image6}
        alt="Bride entering venue"
        className="object-cover w-full h-full transform hover:scale-105 transition"
      />
    </div>


    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={image1}
        alt="Wedding couple ceremony"
        className="object-cover w-full h-full transform hover:scale-105 transition"
      />
    </div>

    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={image2}
        alt="Haldi ceremony"
        className="object-cover w-full h-full transform hover:scale-105 transition"
      />
    </div>


    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={image4}
        alt="Sangeet dance"
        className="object-cover w-full h-full transform hover:scale-105 transition"
      />
    </div>


    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={image5}
        alt="Couple first dance"
        className="object-cover w-full h-full transform hover:scale-105 transition"
      />
    </div>

  
    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={mainimage}
        alt="Bridal portrait"
        className="object-cover w-full h-full transform hover:scale-105 transition"
      />
    </div>

    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={image3}
        alt="Groom getting ready"
        className="object-cover w-full h-full transform hover:scale-105 transition"
      />
    </div>

  
    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={image1}
        alt="Wedding venue overview"
        className="object-cover w-full h-full transform hover:scale-105 transition"
      />
    </div>
  </div>
</section>

    
     <section className="bg-pink-100 py-16 text-center px-6 md:px-24">
  <h2 className="text-3xl font-bold text-pink-800 mb-4">Reserve Your Date Now</h2>
  <p className="text-pink-700 max-w-xl mx-auto mb-6">
    Limited slots per season to ensure personal attention. Let's create something extraordinary together.
  </p>
  <Link
    to="/contact"
    className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-700 transition shadow-lg"
  >
    Contact Us
  </Link>
</section>
    </div>
  );
};

export default Weddingsection;

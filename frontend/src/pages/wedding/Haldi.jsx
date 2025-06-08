import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../assets/Haldivideo.mp4';
import img1 from '../../assets/image1.jpg';
import img2 from '../../assets/image2.jpeg';
import img3 from '../../assets/image3.jpg';
import img4 from '../../assets/image4.jpg';
import img5 from '../../assets/image5.jpg';
import img6 from '../../assets/image8.jpg';
import img7 from '../../assets/image1.jpg';
import img8 from '../../assets/image6.jpeg';

const HaldiSection = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* 🌼 Hero Section */}
      <div className="relative h-[90vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-yellow-200/20 z-10" />

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-5xl font-playfair font-bold mb-4">
            Reviving Tradition with Joy
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl">
            Celebrate the golden ritual of Haldi, etched in happiness and heritage.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-md transition">
              View Gallery
            </button>
            <Link to="/contact" className="bg-white text-yellow-700 hover:bg-yellow-100 px-6 py-3 rounded-full shadow-md transition">
              Book Your Ceremony
            </Link>
          </div>
        </div>
      </div>

      {/* ✨ Intro */}
      <section className="bg-yellow-50 py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6">
          Where Memories Turn Golden
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Haldi is more than a pre-wedding ritual – it's a vibrant festivity filled with laughter,
          music and the auspicious glow of turmeric. We specialize in capturing radiant smiles,
          candid moments, and the blessings that start your beautiful wedding journey.
        </p>
      </section>

      {/* 🧡 Signature Services */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-10">Our Signature Haldi Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Haldi Ceremony Film',
              desc: 'Full coverage of all the playful rituals and candid laughter at the turmeric application.'
            },
            {
              title: 'Highlight Edit',
              desc: 'A 1–2 minute vibrant reel of the best moments from your joyous ceremony.'
            },
            {
              title: 'Guest Vibography',
              desc: 'Capturing the fun, emotions, and personal blessings from your loved ones.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-yellow-100 border-t-4 border-yellow-500 p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🖼️ Gallery */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-10">Haldi Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[img1, img2,img3, img4, img5, img6, img7, img8].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={`Haldi Moment ${i + 1}`}
                className="object-cover w-full h-full transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 📞 CTA */}
      <section className="bg-yellow-100 py-16 text-center px-6 md:px-24">
        <h2 className="text-3xl font-bold text-yellow-800 mb-4">Book Your Haldi Film</h2>
        <p className="text-yellow-700 max-w-xl mx-auto mb-6">
          Don’t miss capturing the fun, colors, and blessings of your Haldi celebration. Let’s preserve it in style!
        </p>
        <Link
          to="/contact"
          className="bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-700 transition shadow-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default HaldiSection;

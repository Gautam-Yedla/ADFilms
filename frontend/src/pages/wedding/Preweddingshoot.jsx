import React from 'react';
import { Link } from 'react-router-dom';
import preweddingVideo from '../../assets/video.mp4'
import img1 from '../../assets/image1.jpg';
import img2 from '../../assets/image2.jpeg';
import img3 from '../../assets/image3.jpg';
import img4 from '../../assets/image4.jpg';
import img5 from '../../assets/image5.jpg';
import img6 from '../../assets/image6.jpeg';
import img7 from '../../assets/image6.jpeg';
import img8 from '../../assets/image4.jpg';

const Preweddingshoot = () => {
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
          <source src={preweddingVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-pink-100/30 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
          <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-4">
            Pre-Wedding Magic Captured
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl">
            A celebration of love before the vows — cinematic, romantic, unforgettable.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-md transition">
              View Gallery
            </button>
            <Link to="/contact" className="bg-white text-pink-600 hover:bg-pink-100 px-6 py-3 rounded-full shadow-md transition">
              Book a Shoot
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-pink-50 py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Your Journey Starts Before "I Do"</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our pre-wedding shoots blend creativity, emotion, and storytelling to document your love before the big day.
          Whether it's a mountaintop embrace or a cityscape stroll, we turn every moment into visual poetry.
        </p>
      </section>

      {/* Signature Packages */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-pink-800 mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Cinematic Short Film",
              desc: "A beautifully directed 2-3 minute video capturing your unique love story."
            },
            {
              title: "Photo + Video Combo",
              desc: "Stylish portraits with matching reels shot across scenic backdrops."
            },
            {
              title: "Destination Shoot",
              desc: "Take your love to a romantic city, beach, or heritage fort — we’ll follow."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-pink-100 p-6 rounded-lg shadow hover:shadow-xl transition border-t-4 border-pink-500"
            >
              <h3 className="text-xl font-semibold text-pink-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-10">Captured Love</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={`Pre-Wedding Moment ${i + 1}`}
                className="object-cover w-full h-full transform hover:scale-105 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-pink-50 py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-pink-800 mb-6">Words from Happy Couples</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              quote: "The entire shoot felt like a dream. The team made us feel so natural and the outcome was breathtaking!",
              name: "Aarav & Meera"
            },
            {
              quote: "From locations to emotions — they captured it all. It still brings tears to our eyes!",
              name: "Ritika & Karan"
            }
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <p className="italic text-gray-700 mb-2">“{t.quote}”</p>
              <p className="font-semibold text-pink-700">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-pink-600 py-16 text-center px-6 md:px-24 text-white">
        <h2 className="text-3xl font-bold mb-4">Make Your Love Story Cinematic</h2>
        <p className="max-w-xl mx-auto mb-6">
          Let us help you create something magical before your big day. Reserve your shoot today and let love shine.
        </p>
        <Link
          to="/contact"
          className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-pink-100 transition shadow-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Preweddingshoot;
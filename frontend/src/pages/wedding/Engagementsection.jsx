import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../assets/video.mp4';
import img1 from '../../assets/image1.jpg';
import img2 from '../../assets/image2.jpeg';
import img3 from '../../assets/image3.jpg';
import img4 from '../../assets/image4.jpg';
import img5 from '../../assets/image5.jpg';
import img6 from '../../assets/image8.jpg';
import img7 from '../../assets/image1.jpg';
import img8 from '../../assets/image6.jpeg';

const EngagementSection = () => {
  return (
    <div className="text-gray-800 font-sans bg-white overflow-x-hidden">
      {/* 🎥 Hero Section */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-red-900/60 z-10" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-4">
            A New Chapter Begins
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-xl">
            Celebrate the moment you said “Yes” with a film as magical as your love.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition">
              View Gallery
            </button>
            <Link
              to="/contact"
              className="bg-white text-red-600 hover:bg-red-100 px-6 py-3 rounded-full font-medium transition"
            >
              Book Your Shoot
            </Link>
          </div>
        </div>
      </div>

      {/* ❤️ Intro Section */}
      <section className="bg-red-50 py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-800">
          Where Love is Sealed Forever
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Engagements are more than rings – they’re heartfelt promises, sweet surprises, and once-in-a-lifetime reactions.
          We specialize in capturing the joy, laughter, and love of that unforgettable “Yes!” moment.
        </p>
      </section>

      {/* 💍 Signature Services */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-10">Our Signature Engagement Experiences</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Cinematic Proposal Film",
              desc: "Whether planned or candid, we capture your proposal in breathtaking detail.",
            },
            {
              title: "Love Story Teaser",
              desc: "A creative 1/2 minute reel that showcases your journey leading up to the big day.",
            },
            {
              title: "Location Shoot",
              desc: "Stunning outdoor or indoor shoots with romantic direction and natural moments.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-red-50 p-6 rounded-lg shadow-md hover:shadow-lg transition border border-red-200"
            >
              <h3 className="text-xl font-semibold text-red-700 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🖼️ Gallery */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-10">Engagement Moments</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={`Engagement ${i + 1}`}
                className="object-cover w-full h-full transform hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 📞 CTA */}
      <section className="bg-red-100 py-16 text-center px-6 md:px-24">
        <h2 className="text-3xl font-bold text-red-800 mb-4">Capture Your “Yes!”</h2>
        <p className="text-red-700 max-w-xl mx-auto mb-6">
          Whether it's a surprise proposal or a planned shoot — let’s create a film that lasts forever.
        </p>
        <Link
          to="/contact"
          className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition shadow-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default EngagementSection;

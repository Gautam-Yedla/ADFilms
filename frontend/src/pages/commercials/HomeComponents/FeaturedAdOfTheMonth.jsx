import React from "react";

export default function FeaturedAdOfTheMonth() {
  return (
    <section className="py-20 bg-white px-6 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Featured Ad of the <span className="text-yellow-500">Month</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Spotlight on our most impactful campaign of the month — a perfect
          blend of creativity, strategy, and audience engagement.
        </p>

        {/* Video / Image */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-neutral-700 w-[75%] mx-auto">
          {/* Use a video or replace with an image */}
          <video
          className="w-full h-auto"
            controls
            poster="../../assets/nike.jpg"
          >
            <source src="../../assets/nikeAD.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Optional description or caption */}
        <p className="text-slate-700 mt-12 text-md italic">
          “This month’s campaign highlights our full-service capabilities — from
          storytelling to delivery.”
        </p>
      </div>
    </section>
  );
}

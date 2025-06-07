import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="w-full lg:w-[115%] max-w-6xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 mt-20">
          Ready to Bring Your Vision
          <span className="text-yellow-500"> to Life?</span>
        </h2>
        <p className="text-slate-600 dark:text-neutral-300 mb-8 text-lg">
          Let’s collaborate and create something unforgettable together. Reach
          out to start your next big project today.
        </p>
        <Link
          to="/commercials/contact?subject=Quote%20Request"
          className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

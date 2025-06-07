import React from "react";
import { CheckCircle } from "lucide-react";

const values = [
  {
    title: "Results-Driven",
    description: "Proven ROI, brand growth, and measurable performance.",
    icon: <CheckCircle className="text-yellow-400 w-6 h-6" />,
  },
  {
    title: "Creative Excellence",
    description: "Award-winning storytelling and impactful visuals.",
    icon: <CheckCircle className="text-yellow-400 w-6 h-6" />,
  },
  {
    title: "Client-Centric Approach",
    description:
      "Tailored strategies with full transparency and collaboration.",
    icon: <CheckCircle className="text-yellow-400 w-6 h-6" />,
  },
  {
    title: "Full-Service Studio",
    description: "From ideation to delivery – all under one roof.",
    icon: <CheckCircle className="text-yellow-400 w-6 h-6" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white px-6 w-full lg:w-[115%]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Why Brands <span className="text-yellow-500">Choose Us</span>
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto mb-12">
          We don’t just create commercials — we build brand success through
          strategy, creativity, and proven results.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="border-l-4 border-yellow-400 pl-6 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                {value.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

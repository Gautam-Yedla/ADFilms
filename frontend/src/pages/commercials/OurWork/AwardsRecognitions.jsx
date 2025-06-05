import React from "react";
import { Trophy } from "lucide-react"; // Optional icon for flair

const awards = [
  {
    id: 1,
    title: "Best Ad Campaign of the Year",
    year: 2023,
    awardedBy: "India AdFest",
    description:
      "Awarded for the Coca-Cola summer TVC, recognized for creativity, execution, and impact across national media.",
  },
  {
    id: 2,
    title: "Digital Excellence Award",
    year: 2022,
    awardedBy: "National Marketing Forum",
    description:
      "Nike 'Run Wild' campaign praised for innovation in social media storytelling and user engagement.",
  },
  {
    id: 3,
    title: "Top 10 Ad Agencies in India",
    year: 2021,
    awardedBy: "Creative India Weekly",
    description:
      "Recognized for consistent quality, client satisfaction, and breakthrough ad visuals across sectors.",
  },
  {
    id: 4,
    title: "Top 100 Ad Agencies in Asia",
    year: 2021,
    awardedBy: "Asian Marketing Awards",
    description:
      "Ranked among the top 100 agencies in Asia for excellence in advertising, creativity, and client service.",
  },
];

export default function AwardsRecognitions() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Awards & Recognitions
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {awards.map((award) => (
            <div
              key={award.id}
              className="border-l-4 border-yellow-400 pl-6 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="text-yellow-500 w-5 h-5" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {award.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-semibold text-gray-700">
                  {award.awardedBy}
                </span>{" "}
                • {award.year}
              </p>
              <p className="text-gray-600 text-sm">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Project Spotlight",
    description: "See our most impactful campaigns and commercial highlights.",
    path: "/commercials/our-work/spotlight",
  },
  {
    title: "Client Testimonials",
    description: "What our clients are saying about us.",
    path: "/commercials/our-work/testimonials",
  },
  {
    title: "Awards & Recognitions",
    description: "Our achievements across the advertising world.",
    path: "/commercials/our-work/awards",
  },
  {
    title: "Video Portfolio",
    description: "Browse our top commercial productions.",
    path: "/commercials/our-work/videos",
  },
  {
    title: "Performance Metrics",
    description: "See how we’ve delivered results for our clients.",
    path: "/commercials/our-work/performance",
  },
];

export default function InteractiveNavigationCards() {
  return (
    <section className="lg:w-[115%] w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-4xl font-bold text-neutral-100">
          Explore Our <span className="text-yellow-500"> Work </span> 
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group transition bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
          >
            <Link to={section.path} className="block h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 transition">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {section.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 group-hover:underline">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

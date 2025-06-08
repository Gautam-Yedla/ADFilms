import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Ideation",
    description: "We brainstorm bold concepts aligned with your brand vision.",
    icon: "💡",
  },
  {
    title: "Scriptwriting",
    description: "Crafting compelling narratives that capture attention.",
    icon: "✍️",
  },
  {
    title: "Storyboarding",
    description: "We visualize the flow through detailed scene planning.",
    icon: "🎞️",
  },
  {
    title: "Production",
    description: "Lights, camera, action – where creativity comes alive.",
    icon: "🎥",
  },
  {
    title: "Editing",
    description: "Our editors polish every second for emotional impact.",
    icon: "🎬",
  },
  {
    title: "Delivery",
    description: "Timely handover with formats for every platform.",
    icon: "🚀",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OurProcessTimeline = () => {
  return (
    <section className="pt-10 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-neutral-200">
          Our Creative <span className="text-yellow-500"> Workflow</span>
        </h2>

        {/* Desktop: Horizontal Timeline */}
        <motion.div
          className="hidden md:flex relative justify-between items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Animated line */}
          <motion.div
            className="absolute top-8 left-0 h-1 bg-amber-300 z-0"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center w-40 z-10"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 flex items-center justify-center text-2xl bg-white text-black rounded-full shadow-md"
              >
                {step.icon}
              </motion.div>
              <h3 className="mt-4 font-semibold text-lg text-white">
                {step.title}
              </h3>
              <p className="mt-0 text-sm text-neutral-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Vertical Timeline */}
        <motion.div
          className="md:hidden flex flex-col space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-xl bg-white text-black rounded-full shadow-md"
              >
                {step.icon}
              </motion.div>
              <div>
                <h3 className="font-semibold text-lg text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcessTimeline;

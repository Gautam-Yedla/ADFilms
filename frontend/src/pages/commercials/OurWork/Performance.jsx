import React, { useEffect, useState } from "react";
import { Users, Video, Award, Smile } from "lucide-react";

const metrics = [
  {
    id: 1,
    icon: <Video className="w-8 h-8 text-yellow-500" />,
    label: "Commercials Delivered",
    target: 120,
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    label: "Clients Served",
    target: 85,
  },
  {
    id: 3,
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    label: "Awards Won",
    target: 15,
  },
  {
    id: 4,
    icon: <Smile className="w-8 h-8 text-yellow-500" />,
    label: "Happy Brands",
    target: 95,
  },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 50));

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return <span className="text-4xl font-bold text-gray-800">{count}+</span>;
};

export default function PerformanceMetrics() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-neutral-200 mb-16">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <Counter target={metric.target} />
              <p className="mt-2 text-sm text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

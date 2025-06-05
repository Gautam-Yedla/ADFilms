import React from "react";

const spotlightProjects = [
  {
    id: 1,
    title: "Redefining Summer – Coca-Cola",
    description:
      "A vibrant 30-second TV commercial capturing the essence of summer, joy, and refreshment. Shot across 3 cities with over 50 extras.",
    image: "../../assets/coke.jpg",
    client: "Coca-Cola India",
    role: "Concept • Direction • Post-Production",
  },
  {
    id: 2,
    title: "Run Wild – Nike",
    description:
      "A high-energy digital ad promoting fitness among Gen Z. Used cinematic shots and social-first storytelling to drive engagement.",
    image: "../../assets/nike.jpg",
    client: "Nike South Asia",
    role: "Production • Editing • Campaign Strategy",
  },
  {
    id: 3,
    title: "Zara – Fall Collection",
    description:
      "A high-energy digital ad promoting fitness among Gen Z. Used cinematic shots and social-first storytelling to drive engagement.",
    image: "../../assets/zara.jpg",
    client: "Zara India",
    role: "Production • Editing • Campaign Strategy",
  },
];

export default function ProjectSpotlight() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {spotlightProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 h-72 object-cover rounded-2xl shadow-lg"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="text-sm text-gray-500">
                  <p>
                    <span className="font-semibold text-yellow-500">
                      Client:
                    </span>{" "}
                    {project.client}
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-500">Role:</span>{" "}
                    {project.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

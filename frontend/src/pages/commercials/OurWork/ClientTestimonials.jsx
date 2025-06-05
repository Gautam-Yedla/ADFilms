import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Anita Reddy",
    company: "Marketing Head, Coca-Cola India",
    feedback:
      "Working with this team was a game-changer. Their storytelling, attention to detail, and creative direction brought our vision to life flawlessly.",
    image: "../../assets/profile.jpg",
  },
  {
    id: 2,
    name: "Rajat Mehta",
    company: "Brand Manager, Nike South Asia",
    feedback:
      "From concept to post-production, they delivered excellence. The energy, professionalism, and creativity were unmatched.",
    image: "../../assets/profile.jpg",
  },
  {
    id: 3,
    name: "Neha Kapoor",
    company: "Creative Director, ZARA India",
    feedback:
      "Truly one of the finest ad agencies we've worked with. They understood our brand voice and translated it into stunning visuals.",
    image: "../../assets/profile.jpg",
  },
];

export default function ClientTestimonials() {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-neutral-200 mb-16">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((client) => (
            <div
              key={client.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                />
                <div>
                  <p className="font-semibold text-gray-800">{client.name}</p>
                  <p className="text-sm text-gray-500">{client.company}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">“{client.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

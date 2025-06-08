import React from "react";
import BrandLogoMarquee from "./BrandLogoMarquee";

// Sample logos — replace with your actual brand logos
const brandLogos = [
  { src: "../../assets/google.jpg", alt: "Google" },
  { src: "../../assets/sony.jpg", alt: "Sony" },
  { src: "../../assets/nikeLogo.jpg", alt: "Nike" },
  { src: "../../assets/amazon.jpg", alt: "Amazon" },
  { src: "../../assets/adobe.jpg", alt: "Adobe" },
  { src: "../../assets/pepsi.jpg", alt: "Pepsi" },
];

export default function BrandsWeWorkedWith() {
  return (
    <section className="py-28 pb-8 px-4 w-full lg:w-[115%] max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-neutral-100 mb-4">
        Brands We’ve <span className="text-yellow-500">Worked With</span>
      </h2>
      <BrandLogoMarquee />
    </section>
  );
}

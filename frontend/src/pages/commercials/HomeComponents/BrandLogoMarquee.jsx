// components/BrandLogoMarquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  { src: "../../assets/nikeLogo.svg", alt: "Nike" },
  {
    src: "../../assets/pepsi.svg",
    alt: "Pepsi",
  },
  {
    src: "https://www.vectorlogo.zone/logos/adobe_acrobat/adobe_acrobat-icon.svg",
    alt: "Adobe",
  },
  {
    src: "https://www.vectorlogo.zone/logos/google/google-ar21~bgwhite.svg",
    alt: "Google",
  },
  {
    src: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg",
    alt: "Amazon",
  },
  {
    src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21~bgwhite.svg",
    alt: "MongoDB",
  },
];

const BrandLogoMarquee = () => {
  return (
    <section className="py-16">
      
      <Marquee pauseOnHover gradient={false} speed={100}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-10">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-28 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default BrandLogoMarquee;

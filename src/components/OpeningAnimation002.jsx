
import React, { useState, useEffect } from 'react';

export const OpeningAnimation = ({ onAnimationComplete }) => {
  const [step, setStep] = useState(0);

  const timings = {
    aDelay: 200,
    dDelay: 300,
    lineDelay: 400,
    fDelay: 300,
    iDelay: 300,
    lDelay: 300,
    mDelay: 300,
    sDelay: 300,
    polishDelay: 500,
    endDelay: 1500,
  };

  useEffect(() => {
    let sequence = [
      () => setStep(1),
      () => setStep(2),
      () => setStep(3),
      () => setStep(4),
      () => setStep(5),
      () => setStep(6),
      () => setStep(7),
      () => setStep(8),
      () => setStep(9),
      () => setStep(10),
      () => setTimeout(onAnimationComplete, 300),
    ];

    let delays = [
      timings.aDelay,
      timings.dDelay,
      timings.lineDelay,
      timings.fDelay,
      timings.iDelay,
      timings.lDelay,
      timings.mDelay,
      timings.sDelay,
      timings.polishDelay,
      timings.endDelay,
    ];

    let total = 0;
    sequence.forEach((fn, i) => {
      total += delays[i] || 0;
      setTimeout(fn, total);
    });
  }, [onAnimationComplete]);

  const baseClass = "inline-block font-extrabold text-7xl md:text-9xl lg:text-[10rem] transition-all duration-700 ease-out";

  const slideIn = (stepNumber, index, from = "left") => {
    const active = step >= stepNumber;
    const translate = from === "left" ? "-translate-x-16" : "translate-x-16";
    return `
      ${baseClass}
      ${active ? "opacity-100 translate-x-0 scale-100" : `opacity-0 ${translate} scale-90`}
    `;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden select-none opening-animation-background">
      <div className="text-center">
        {/* AD */}
        <div className="inline-block">
          <span className={slideIn(1, 0, "left")} style={{ color: '#fbbf24' }}>A</span>
          <span className={slideIn(2, 1, "right")} style={{ color: '#fbbf24' }}>D</span>
        </div>

        {/* Line */}
        <div className="h-1 md:h-[6px] mx-auto my-4 bg-yellow-500/50 transition-all ease-out duration-700"
          style={{
            width: step >= 3 ? '160px' : '0px',
            opacity: step >= 3 ? 1 : 0,
          }}
        />

        {/* FILMS */}
        <div className="inline-block">
          <span className={slideIn(4, 0, "left")} style={{ color: '#fbbf24' }}>F</span>
          <span className={slideIn(5, 1, "right")} style={{ color: '#fbbf24' }}>I</span>
          <span className={slideIn(6, 2, "left")} style={{ color: '#fbbf24' }}>L</span>
          <span className={slideIn(7, 3, "right")} style={{ color: '#fbbf24' }}>M</span>
          <span className={slideIn(8, 4, "left")} style={{ color: '#fbbf24' }}>S</span>
        </div>

        {/* Polish Glow */}
        <div
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-out
            ${step >= 9 ? 'opacity-100 glow-pulse' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.2) 0%, rgba(0,0,0,0) 60%)',
            transform: 'scale(1.5)',
          }}
        />
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .opening-animation-background {
            background: linear-gradient(135deg, #111111, #222222);
          }

          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 30px rgba(251, 191, 36, 0.3);
            }
            50% {
              box-shadow: 0 0 60px rgba(251, 191, 36, 0.8);
            }
          }

          .glow-pulse {
            animation: glowPulse 2.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

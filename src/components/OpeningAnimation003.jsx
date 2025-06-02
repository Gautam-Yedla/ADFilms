
import React, { useState, useEffect } from 'react';

export const OpeningAnimation = ({ onAnimationComplete }) => {
  const [step, setStep] = useState(0);

  const timings = {
    aDelay: 300,
    dDelay: 300,
    lineDelay: 300,
    fDelay: 300,
    iDelay: 300,
    lDelay: 300,
    mDelay: 300,
    sDelay: 300,
    glowDelay: 500,
    endDelay: 1800,
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

    let total = 0;
    sequence.forEach((fn, i) => {
      total += Object.values(timings)[i] || 0;
      setTimeout(fn, total);
    });
  }, [onAnimationComplete]);

  const baseClass = `
    inline-block font-black text-7xl md:text-9xl lg:text-[10rem] 
    transition-all duration-700 ease-out transform
  `;

  const letterClass = (stepNumber, from = "left") => {
    const active = step >= stepNumber;
    const dir = from === "left" ? "-translate-x-12" : "translate-x-12";
    return `
      ${baseClass}
      ${active 
        ? "opacity-100 scale-100 translate-x-0 rotate-y-0 blur-0 glow-trail" 
        : `${dir} opacity-0 scale-90 rotate-y-12 blur-sm`
      }
    `;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-yellow-400 overflow-hidden select-none opening-animation">
      <div className="text-center animate-zoom-in">
        {/* AD */}
        <div>
          <span className={letterClass(1, "left")}>A</span>
          <span className={letterClass(2, "right")}>D</span>
        </div>

        {/* LINE */}
        <div
          className="h-1 md:h-[6px] mx-auto my-4 bg-yellow-500/50 transition-all duration-700 ease-out"
          style={{
            width: step >= 3 ? '160px' : '0px',
            opacity: step >= 3 ? 1 : 0,
          }}
        />

        {/* FILMS */}
        <div>
          <span className={letterClass(4, "left")}>F</span>
          <span className={letterClass(5, "right")}>I</span>
          <span className={letterClass(6, "left")}>L</span>
          <span className={letterClass(7, "right")}>M</span>
          <span className={letterClass(8, "left")}>S</span>
        </div>

        {/* Glow Pulse */}
        <div
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-out
            ${step >= 9 ? 'opacity-100 glow-pulse' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, rgba(0,0,0,0.7) 60%)',
            transform: 'scale(1.4)',
          }}
        />
      </div>

      {/* Fade Out */}
      {step >= 10 && (
        <div className="absolute inset-0 bg-black transition-opacity duration-1500 opacity-80 pointer-events-none"></div>
      )}

      <style>
        {`
          .opening-animation {
            background: linear-gradient(135deg, #2f2f2f, #121212, #505050);;
          }

          .glow-pulse {
            animation: glowPulse 2.5s ease-in-out infinite;
          }

          .glow-trail {
            text-shadow:
              0 0 10px rgba(251, 191, 36, 0.5),
              0 0 20px rgba(251, 191, 36, 0.3),
              0 0 30px rgba(251, 191, 36, 0.2);
          }

          .animate-zoom-in {
            animation: zoomInScreen 1.2s ease-out;
          }

          @keyframes zoomInScreen {
            0% {
              transform: scale(1.3);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 30px rgba(251, 191, 36, 0.2);
            }
            50% {
              box-shadow: 0 0 60px rgba(251, 191, 36, 0.6);
            }
          }
        `}
      </style>
    </div>
  );
};







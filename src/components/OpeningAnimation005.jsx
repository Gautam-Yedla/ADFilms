import React, { useState, useEffect } from 'react';

export const OpeningAnimation = ({ onAnimationComplete }) => {
  const [step, setStep] = useState(0);

  const timings = {
    a: 300, d: 300, line: 300, f: 300, i: 300, l: 300, m: 300, s: 300,
    pulse: 400, flicker: 1200, complete: 1000,
  };

  useEffect(() => {
    let sequence = [
      () => setStep(1), // A
      () => setStep(2), // D
      () => setStep(3), // line
      () => setStep(4), // F
      () => setStep(5), // I
      () => setStep(6), // L
      () => setStep(7), // M
      () => setStep(8), // S
      () => setStep(9), // Pulse Ring
      () => setStep(10), // Flicker
      () => setTimeout(onAnimationComplete, 300),
    ];

    let delay = 0;
    Object.values(timings).forEach((time, i) => {
      delay += time;
      setTimeout(sequence[i], delay);
    });
  }, [onAnimationComplete]);

  const baseClass = `inline-block font-black text-7xl md:text-9xl lg:text-[10rem] transition-all duration-700 ease-out`;

  const letterClass = (stepNumber, from = "left") => {
    const active = step >= stepNumber;
    const dir = from === "left" ? "-translate-x-16" : "translate-x-16";
    return `
      ${baseClass}
      ${active
        ? "opacity-100 scale-100 translate-x-0 rotate-y-0 blur-0 text-glow"
        : `${dir} opacity-0 scale-75 rotate-y-12 blur-md`
      }
    `;
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none opening-epic ${step >= 10 ? 'flicker' : ''}`}>
      {/* Light Pulse Ring */}
      {step >= 9 && (
        <div className="absolute w-[300px] h-[300px] rounded-full border-4 border-yellow-400 animate-pulse-ring z-0" />
      )}

      {/* Main Text */}
      <div className={`text-center z-10 ${step >= 9 ? 'shake' : ''}`}>
        <div>
          <span className={letterClass(1, "left")}>A</span>
          <span className={letterClass(2, "right")}>D</span>
        </div>
        <div
          className="h-1 md:h-[6px] mx-auto my-4 bg-yellow-400 transition-all duration-700"
          style={{
            width: step >= 3 ? '180px' : '0px',
            opacity: step >= 3 ? 1 : 0,
          }}
        />
        <div>
          <span className={letterClass(4, "left")}>F</span>
          <span className={letterClass(5, "right")}>I</span>
          <span className={letterClass(6, "left")}>L</span>
          <span className={letterClass(7, "right")}>M</span>
          <span className={letterClass(8, "left")}>S</span>
        </div>
      </div>

      {/* Fade to Black */}
      {step >= 10 && <div className="absolute inset-0 bg-black/90 pointer-events-none"></div>}

      {/* Film Grain */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-10 bg-noise" />

      {/* Styles */}
      <style>{`
        .text-glow {
          text-shadow:
            0 0 10px rgba(251,191,36,0.8),
            0 0 30px rgba(251,191,36,0.6),
            0 0 60px rgba(251,191,36,0.3);
        }

        .animate-pulse-ring {
          animation: pulseRing 1s ease-out forwards;
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .shake {
          animation: cameraShake 0.4s ease-in-out;
        }

        @keyframes cameraShake {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-4px, 2px); }
          50% { transform: translate(4px, -2px); }
          75% { transform: translate(-2px, 4px); }
          100% { transform: translate(0, 0); }
        }

        .flicker {
          animation: flickerOut 2s linear forwards;
        }

        @keyframes flickerOut {
          0%   { opacity: 1; }
          25%  { opacity: 0.4; }
          50%  { opacity: 1; }
          75%  { opacity: 0.1; }
          100% { opacity: 0; }
        }

        .bg-noise {
          background-image: url('https://grainy-gradients.vercel.app/noise.svg');
          background-size: cover;
          background-repeat: repeat;
        }
      `}</style>
    </div>
  );
};

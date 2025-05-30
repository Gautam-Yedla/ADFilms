import React, { useState, useEffect } from 'react';

export const OpeningAnimation = ({ onAnimationComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const seq = [
      () => setStep(1), // A
      () => setStep(2), // D
      () => setStep(3), // Line
      () => setStep(4), // F
      () => setStep(5), // I
      () => setStep(6), // L
      () => setStep(7), // M
      () => setStep(8), // S
      () => setStep(9), // Pulse + FX
      () => setStep(10), // Flicker
      () => setTimeout(onAnimationComplete, 600),
    ];
    let delay = 0;
    [300,300,200,300,200,200,200,200,500,1000].forEach((t,i) => {
      delay += t;
      setTimeout(seq[i], delay);
    });
  }, [onAnimationComplete]);

  const letterClass = (num, dir = "left") => {
    const active = step >= num;
    const rotate = dir === "left" ? "-rotate-y-[80deg]" : "rotate-y-[80deg]";
    const slide = dir === "left" ? "-translate-x-20" : "translate-x-20";

    return `
      inline-block text-8xl md:text-[10rem] font-extrabold mx-1
      transition-all duration-700 ease-out
      ${active ? "opacity-100 transform-none neon" : `opacity-0 blur-md scale-75 ${rotate} ${slide}`}
    `;
  };

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden ${step >= 10 ? "flicker-out" : ""}`}>
      {/* Stars / Parallax BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0">
        <div className="absolute inset-0 animate-float bg-[url('https://grainy-gradients.vercel.app/stars.svg')] opacity-40 mix-blend-screen"></div>
      </div>

      {/* Shockwave Pulse Ring */}
      {step >= 9 && (
        <div className="absolute w-[250px] h-[250px] rounded-full border-4 border-yellow-300 animate-shockwave z-10"></div>
      )}

      {/* Letter Text */}
      <div className={`text-center z-20 ${step >= 9 ? "shake-screen" : ""}`}>
        <div>
          <span className={letterClass(1, "left")}>A</span>
          <span className={letterClass(2, "right")}>D</span>
        </div>
        <div
          className="h-[6px] bg-yellow-400 my-6 mx-auto transition-all duration-700"
          style={{
            width: step >= 3 ? '200px' : '0px',
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

      {/* Film grain overlay */}
      <div className="absolute inset-0 pointer-events-none z-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-soft-light"></div>

      {/* Full blackout after flicker */}
      {step >= 10 && <div className="absolute inset-0 bg-black z-40 transition-opacity duration-1000"></div>}

      {/* Styles */}
      <style>{`
        .neon {
          text-shadow:
            0 0 6px #facc15,
            0 0 15px #facc15aa,
            0 0 30px #facc1588;
          color: #fff8e1;
        }

        .animate-shockwave {
          animation: shockwave 0.8s ease-out forwards;
        }

        @keyframes shockwave {
          0% {
            transform: scale(0.5);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .shake-screen {
          animation: screenShake 0.4s ease-in-out;
        }

        @keyframes screenShake {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-3px, 4px); }
          50% { transform: translate(4px, -3px); }
          75% { transform: translate(-2px, 2px); }
          100% { transform: translate(0, 0); }
        }

        .flicker-out {
          animation: flickFade 1s linear forwards;
        }

        @keyframes flickFade {
          0% { opacity: 1; }
          20% { opacity: 0.2; }
          40% { opacity: 1; }
          60% { opacity: 0.1; }
          80% { opacity: 0.8; }
          100% { opacity: 0; }
        }

        .animate-float {
          animation: floatStars 12s linear infinite;
        }

        @keyframes floatStars {
          0% { background-position: 0 0; }
          100% { background-position: 0 500px; }
        }
      `}</style>
    </div>
  );
};

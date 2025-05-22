
import React, { useState, useEffect } from 'react';

// Removed OpeningAnimationProps interface

// Changed to a named export, removed React.FC and type annotation
export const OpeningAnimation = ({ onAnimationComplete }) => {
  // 0: Initial Delay, 1: A appears, 2: D appears
  // 3: Line transition starts, 4: Line transition ends / F appears
  // 5: I appears, 6: L appears, 7: M appears, 8: S appears
  // 9: Polish (glow/settle), 10: Hold, 11: Notify Complete
  const [step, setStep] = useState(0);

  const timings = {
    initialDelay: 100, // Initial brief pause
    aAppearDuration: 400, // A fades/scales in
    dDelay: 150, // Delay before D starts after A
    dAppearDuration: 400, // D fades/scales in
    lineStartDelay: 300, // Delay for line after AD
    lineDuration: 400, // Line animation duration
    fDelay: 100, // Delay for F after line
    fAppearDuration: 400,
    iDelay: 150,
    iAppearDuration: 400,
    lDelay: 150,
    lAppearDuration: 400,
    mDelay: 150,
    mAppearDuration: 400,
    sDelay: 150,
    sAppearDuration: 400,
    polishDelay: 300, // Delay for polish after S
    polishDuration: 800, // Polish effect duration
    holdDuration: 1500, // Hold final logo
    notifyDelay: 200, // Short delay before notifying App
  };

  useEffect(() => {
    let timer; // Removed ReturnType<typeof setTimeout>
    switch (step) {
      case 0: timer = setTimeout(() => setStep(1), timings.initialDelay); break;
      case 1: timer = setTimeout(() => setStep(2), timings.aAppearDuration + timings.dDelay - 100); break; 
      case 2: timer = setTimeout(() => setStep(3), timings.dAppearDuration + timings.lineStartDelay - 150); break; 
      case 3: timer = setTimeout(() => setStep(4), timings.lineDuration + timings.fDelay); break;
      case 4: timer = setTimeout(() => setStep(5), timings.fAppearDuration + timings.iDelay - 100); break;
      case 5: timer = setTimeout(() => setStep(6), timings.iAppearDuration + timings.lDelay - 100); break;
      case 6: timer = setTimeout(() => setStep(7), timings.lAppearDuration + timings.mDelay - 100); break;
      case 7: timer = setTimeout(() => setStep(8), timings.mAppearDuration + timings.sDelay - 100); break;
      case 8: timer = setTimeout(() => setStep(9), timings.sAppearDuration + timings.polishDelay -100); break;
      case 9: timer = setTimeout(() => setStep(10), timings.polishDuration); break;
      case 10: timer = setTimeout(() => setStep(11), timings.holdDuration); break;
      case 11: timer = setTimeout(onAnimationComplete, timings.notifyDelay); break;
      default: break;
    }
    return () => clearTimeout(timer);
  }, [step, onAnimationComplete, timings]);

  const letterBaseClasses = "inline-block font-extrabold text-7xl md:text-9xl lg:text-[10rem] transition-all ease-out";
  const adLetterBaseClasses = `${letterBaseClasses} text-white`;
  const filmsLetterBaseClasses = `${letterBaseClasses} text-sky-400`;

  const getLetterClasses = (
    triggerStep,
    durationClass = 'duration-[500ms]',
    initialTranslate = 'translate-y-10 md:translate-y-16'
  ) => {
    return `${step >= triggerStep ? 'opacity-100 translate-y-0 scale-100' : `opacity-0 ${initialTranslate} scale-90`} ${durationClass}`;
  };
  
  const adContainerBase = "transform transition-all duration-500 ease-out";
  const adContainerTransform = step >= 9 ? 'scale-[0.97]' : 'scale-100';


  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50 overflow-hidden select-none">
      <div className="text-center">
        {/* AD Part */}
        <div className={`inline-block ${adContainerBase} ${adContainerTransform}`}>
          <span className={`${adLetterBaseClasses} ${getLetterClasses(1, 'duration-[600ms]', '-translate-x-6 md:-translate-x-10')}`}>A</span>
          <span className={`${adLetterBaseClasses} ${getLetterClasses(2, 'duration-[600ms]', 'translate-x-6 md:translate-x-10')}`}>D</span>
        </div>

        {/* Transition Line */}
        <div className="h-1 md:h-[6px] mx-auto my-2 md:my-4 bg-slate-500/50 transition-all ease-out duration-500 relative overflow-hidden"
             style={{ 
               width: step >= 3 ? '100%' : '0%',
               maxWidth: step >= 9 ? '180px' : '200px', // slightly shrink on polish
               opacity: step >= 3 && step < 9 ? 1 : 0,
               transitionDuration: step ===3 ? `${timings.lineDuration}ms` : '300ms',
               transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' // bouncy
             }}
        >
            <div className="absolute top-0 left-0 h-full bg-sky-300 animate-shine"
                 style={{
                    width: '50px',
                    animationDuration: '1.5s',
                    opacity: step >=3 && step < 9 ? 0.7 : 0,
                 }}
            />
        </div>


        {/* FILMS Part */}
        <div className={`inline-block ${adContainerBase} ${adContainerTransform}`}>
          <span className={`${filmsLetterBaseClasses} ${getLetterClasses(4, 'duration-[500ms]', '-translate-x-8')} `} style={{ transitionDelay: step === 3 ? `${timings.fDelay}ms`: '0ms'}}>F</span>
          <span className={`${filmsLetterBaseClasses} ${getLetterClasses(5, 'duration-[500ms]', '-translate-x-4')}`} style={{ transitionDelay: step === 4 ? `${timings.iDelay}ms`: '0ms'}}>I</span>
          <span className={`${filmsLetterBaseClasses} ${getLetterClasses(6, 'duration-[500ms]')}`} style={{ transitionDelay: step === 5 ? `${timings.lDelay}ms`: '0ms'}}>L</span>
          <span className={`${filmsLetterBaseClasses} ${getLetterClasses(7, 'duration-[500ms]', 'translate-x-4')}`} style={{ transitionDelay: step === 6 ? `${timings.mDelay}ms`: '0ms'}}>M</span>
          <span className={`${filmsLetterBaseClasses} ${getLetterClasses(8, 'duration-[500ms]', 'translate-x-8')}`} style={{ transitionDelay: step === 7 ? `${timings.sDelay}ms`: '0ms'}}>S</span>
        </div>

        {/* Polish Glow - more subtle */}
        <div
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-out
            ${step === 9 ? 'opacity-30' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(circle, rgba(186,230,253,0.5) 0%, rgba(14,116,144,0) 70%)',
            transform: 'scale(1.5)'
          }}
        />
      </div>
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%) skewX(-20deg); }
            100% { transform: translateX(calc(200px + 100%)) skewX(-20deg); } /* 200px is maxWidth of line */
          }
          .animate-shine {
            animation-name: shine;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </div>
  );
};

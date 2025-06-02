
import React from 'react';

// YouTube Icon - Using a more standard "play button" style for YouTube
// Removed React.FC<React.SVGProps<SVGSVGElement>>
export const YoutubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113A.375.375 0 019.75 15.113V8.887c0-.286.307-.466.557-.332l5.603 3.112z" />
  </svg>
);

// Wedding Icon - Heart shape
// Removed React.FC<React.SVGProps<SVGSVGElement>>
export const WeddingIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

// Commercials Icon - Film Clapperboard
// Removed React.FC<React.SVGProps<SVGSVGElement>>
export const CommercialsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.25L5.25 3.75V18a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V3.75L17.25 2.25H6.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 3.75H18.75m-13.5 0L1.5 2.25m17.25 1.5L22.5 2.25M1.5 2.25h21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5h10.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 10.5h10.5" />
  </svg>
);

import React from 'react';
import NavigationButton from '../components/NavigationButton.jsx';
import { YoutubeIcon, WeddingIcon, CommercialsIcon } from '../constants.jsx';

const HomePage = () => { 
  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-neutral-200 mb-4 text-center">
        Welcome to <span className="text-amber-500 dark:text-amber-400">AD</span><span className="text-amber-500 dark:text-amber-400">FILMS</span>
      </h1>
      <p className="text-lg text-slate-600 dark:text-neutral-300 mb-10 sm:mb-12 lg:mb-16 text-center max-w-2xl">
        We specialize in crafting compelling visual narratives. Explore our services:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-5xl px-4">
        <NavigationButton
          to="/youtube"
          label="YouTube"
          description="Engaging content, from vlogs to series, tailored for the YouTube audience."
          Icon={YoutubeIcon}
          iconColor="text-amber-500 dark:text-amber-400" 
          hoverBgColor="hover:bg-amber-500 dark:hover:bg-amber-500" 
          focusRingColor="focus:ring-amber-300 dark:focus:ring-amber-400" 
        />
        <NavigationButton
          to="/wedding"
          label="Wedding Films"
          description="Beautifully capturing the emotion and joy of your most special day."
          Icon={WeddingIcon}
          iconColor="text-amber-500 dark:text-amber-400"
          hoverBgColor="hover:bg-amber-500 dark:hover:bg-amber-500"
          focusRingColor="focus:ring-amber-300 dark:focus:ring-amber-400"
        />
        <NavigationButton
          to="/commercials"
          label="Ad Commercials"
          description="Creative and impactful commercials that tell your brand's story."
          Icon={CommercialsIcon}
          iconColor="text-amber-500 dark:text-amber-400"
          hoverBgColor="hover:bg-amber-500 dark:hover:bg-amber-500"
          focusRingColor="focus:ring-amber-300 dark:focus:ring-amber-400"
        />
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import NavigationButton from '../components/NavigationButton.jsx';
import { YoutubeIcon, WeddingIcon, CommercialsIcon } from '../constants.jsx';

const HomePage = () => { 
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">
        Welcome to <span className="homepage-title-highlight">AD</span><span className="homepage-title-highlight">FILMS</span>
      </h1>
      <p className="homepage-description">
        We specialize in crafting compelling visual narratives. Explore our services:
      </p>
      <div className="homepage-grid">
        <NavigationButton
          to="/youtube"
          label="YouTube"
          description="Engaging content, from vlogs to series, tailored for the YouTube audience."
          Icon={YoutubeIcon}
          iconColor="homepage-nav-icon" 
          hoverBgColor="homepage-nav-button" 
          focusRingColor="homepage-nav-button" 
        />
        <NavigationButton
          to="/wedding"
          label="Wedding Films"
          description="Beautifully capturing the emotion and joy of your most special day."
          Icon={WeddingIcon}
          iconColor="homepage-nav-icon"
          hoverBgColor="homepage-nav-button"
          focusRingColor="homepage-nav-button"
        />
        <NavigationButton
          to="/commercials"
          label="Ad Commercials"
          description="Creative and impactful commercials that tell your brand's story."
          Icon={CommercialsIcon}
          iconColor="homepage-nav-icon"
          hoverBgColor="homepage-nav-button"
          focusRingColor="homepage-nav-button"
        />
      </div>
    </div>
  );
};

export default HomePage;
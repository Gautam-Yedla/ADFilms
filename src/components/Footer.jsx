import React, { useState, useEffect } from 'react';

// Enhanced SVG Icons
const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.115 0-3.483.01-4.711.066-2.78.126-3.977 1.322-4.103 4.103-.056 1.227-.066 1.595-.066 4.711s.01 3.483.066 4.711c.126 2.78 1.323 3.977 4.103 4.103 1.228.056 1.596.066 4.711.066s3.483-.01 4.711-.066c2.78-.126 3.977-1.322 4.103-4.103.057-1.227.066-1.595.066-4.711s-.01-3.483-.066-4.711c-.126-2.78-1.322-3.977-4.103-4.103C15.483 3.799 15.115 3.789 12 3.789zm0 4.415c2.526 0 4.586 2.059 4.586 4.586s-2.06 4.586-4.586 4.586-4.586-2.059-4.586-4.586 2.06-4.586 4.586-4.586zm0 1.626c-1.631 0-2.96 1.329-2.96 2.96s1.329 2.96 2.96 2.96 2.96-1.329 2.96-2.96-1.329-2.96-2.96-2.96zm6.406-4.184c-.767 0-1.388.622-1.388 1.388s.621 1.388 1.388 1.388 1.388-.622 1.388-1.388-.621-1.388-1.388-1.388z"/>
  </svg>
);

const YouTubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const EmailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const CopyIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
  </svg>
);

const ChevronUpIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
  </svg>
);

const ChevronDownIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
);

const HeartIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const GlobeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [copiedItem, setCopiedItem] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setSubscribeMessage(''), 3000);
    }
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/adfilmsofficial', Icon: InstagramIcon, color: 'footer-social-instagram' },
    { name: 'YouTube', href: 'https://www.youtube.com/@adfilmsofficial', Icon: YouTubeIcon, color: 'footer-social-youtube' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/adfilms', Icon: LinkedInIcon, color: 'footer-social-linkedin' },
    { name: 'Twitter', href: 'https://www.twitter.com/adfilmsofficial', Icon: TwitterIcon, color: 'footer-social-twitter' },
    { name: 'Facebook', href: 'https://www.facebook.com/adfilmsofficial', Icon: FacebookIcon, color: 'footer-social-facebook' },
  ];

  const navigationLinks = [
    { name: 'Home', href: '#/' },
    { name: 'YouTube Content', href: '#/youtube' },
    { name: 'Wedding Films', href: '#/wedding' },
    { name: 'Ad Commercials', href: '#/commercials' },
    { name: 'About Us', href: '#/about' },
    { name: 'Contact Us', href: '#/contact' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#/about' },
    { name: 'Our Team', href: '#/about' }, 
    { name: 'Careers', href: '#/about' },
    { name: 'Press', href: '#/about' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#/contact' }, 
    { name: 'FAQ', href: '#/contact' },
    { name: 'Contact Support', href: '#/contact' },
    { name: 'Documentation', href: '#/contact' },
  ];

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          
          <div className="footer-grid">
            
            <div className="lg:col-span-2">
              <h3 className="footer-brand-title">AD FILMS</h3>
              <p className="footer-brand-subtitle">Crafting Visual Stories</p>
              <p className="footer-description">
                Creating compelling visual narratives that captivate audiences and bring brands to life through the art of cinematography.
              </p>

              <div className="mb-8">
                <h4 className="footer-section-title">Stay Updated</h4>
                <form onSubmit={handleSubscribe} className="footer-subscribe-form">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="footer-subscribe-input"
                    required
                    aria-label="Email for newsletter"
                  />
                  <button
                    type="submit"
                    className="footer-subscribe-button"
                  >
                    Subscribe
                  </button>
                </form>
                {subscribeMessage && (
                  <p className="footer-subscribe-message">{subscribeMessage}</p>
                )}
              </div>

              <div>
                <h4 className="footer-section-title">Quick Links</h4>
                <div className="footer-links">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href} 
                      className="footer-link"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="footer-section-title">Get In Touch</h4>
              <div className="space-y-4">
                <div className="footer-contact-item">
                  <EmailIcon className="footer-contact-icon" />
                  <div className="flex-1">
                    <a href="mailto:contact@adfilms.com" className="footer-contact-link">contact@adfilms.com</a>
                    <button
                      onClick={() => copyToClipboard('contact@adfilms.com', 'email')}
                      className="footer-copy-button"
                      title="Copy email"
                      aria-label="Copy email address"
                    >
                      <CopyIcon className="h-4 w-4" />
                    </button>
                    {copiedItem === 'email' && (
                      <span className="footer-copied-message">Copied!</span>
                    )}
                  </div>
                </div>
                
                <div className="footer-contact-item">
                  <PhoneIcon className="footer-contact-icon" />
                  <div className="flex-1">
                    <a href="tel:+12345678900" className="footer-contact-link">+1 (234) 567-8900</a>
                    <button
                      onClick={() => copyToClipboard('+1 (234) 567-8900', 'phone')}
                      className="footer-copy-button"
                      title="Copy phone"
                      aria-label="Copy phone number"
                    >
                      <CopyIcon className="h-4 w-4" />
                    </button>
                    {copiedItem === 'phone' && (
                      <span className="footer-copied-message">Copied!</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="footer-section-title">Language</h4>
                <div className="footer-language-selector">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="footer-language-button"
                    aria-haspopup="true"
                    aria-expanded={isLanguageOpen}
                    aria-controls="language-menu"
                  >
                    <GlobeIcon className="footer-language-icon" />
                    <span className="flex-1 text-left text-sm">{selectedLanguage}</span>
                    <ChevronDownIcon className={`footer-language-chevron ${isLanguageOpen ? 'footer-language-chevron-open' : ''}`} />
                  </button>
                  
                  {isLanguageOpen && (
                    <div 
                      id="language-menu"
                      className="footer-language-menu"
                      role="menu"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLanguage(lang);
                            setIsLanguageOpen(false);
                          }}
                          className="footer-language-option"
                          role="menuitem"
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h4 className="footer-section-title">Site Map</h4>
              <div className="mb-6">
                <h5 className="footer-brand-subtitle">Company</h5>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href} 
                      className="footer-link block"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="footer-brand-subtitle">Support</h5>
                <div className="space-y-2">
                  {supportLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href} 
                      className="footer-link block"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-social-section border-t footer-divider">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h4 className="footer-social-title">Follow Us</h4>
              <div className="footer-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    title={social.name}
                    className={`footer-social-link ${social.color}`}
                  >
                    <social.Icon className="footer-social-icon" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-divider">
            <div className="footer-bottom">
              <div className="text-center lg:text-left">
                <p className="footer-copyright">
                  © {currentYear} AD FILMS. All rights reserved.
                </p>
                <p className="footer-built-with">
                  Built with <HeartIcon className="footer-heart-icon" /> using React & Tailwind
                </p>
              </div>
              <div className="footer-bottom-links">
                <a href="#privacy" className="footer-bottom-link">
                  Privacy Policy
                </a>
                <a href="#terms" className="footer-bottom-link">
                  Terms of Service
                </a>
                <a href="#accessibility" className="footer-bottom-link">
                  Accessibility
                </a>
                <a href="#cookies" className="footer-bottom-link">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="footer-scroll-top"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="footer-scroll-top-icon" />
        </button>
      )}
    </>
  );
};

export default Footer;
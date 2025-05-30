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
    { name: 'Instagram', href: 'https://www.instagram.com/adfilmsofficial', Icon: InstagramIcon, color: 'hover:text-pink-500 dark:hover:text-pink-400' },
    { name: 'YouTube', href: 'https://www.youtube.com/@adfilmsofficial', Icon: YouTubeIcon, color: 'hover:text-red-600 dark:hover:text-red-500' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/adfilms', Icon: LinkedInIcon, color: 'hover:text-blue-600 dark:hover:text-blue-500' },
    { name: 'Twitter', href: 'https://www.twitter.com/adfilmsofficial', Icon: TwitterIcon, color: 'hover:text-sky-500 dark:hover:text-sky-400' },
    { name: 'Facebook', href: 'https://www.facebook.com/adfilmsofficial', Icon: FacebookIcon, color: 'hover:text-blue-500 dark:hover:text-blue-400' },
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
      <footer className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-lg text-slate-600 dark:text-slate-300 pt-16 pb-8 relative shadow-t-lg">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 tracking-wide">AD FILMS</h3>
              <p className="text-amber-600 dark:text-amber-400 font-medium mb-4">Crafting Visual Stories</p>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-8 max-w-md">
                Creating compelling visual narratives that captivate audiences and bring brands to life through the art of cinematography.
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-700 dark:text-white mb-4">Stay Updated</h4>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-neutral-700 text-slate-700 dark:text-white placeholder-slate-400 dark:placeholder-slate-400 border border-slate-300 dark:border-neutral-600 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    required
                    aria-label="Email for newsletter"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800"
                  >
                    Subscribe
                  </button>
                </form>
                {subscribeMessage && (
                  <p className="text-green-600 dark:text-green-400 text-sm mt-2">{subscribeMessage}</p>
                )}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-white mb-4">Quick Links</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href} 
                      className="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-700 dark:text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <EmailIcon className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                  <div className="flex-1">
                    <a href="mailto:contact@adfilms.com" className="text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 text-sm transition-colors">contact@adfilms.com</a>
                    <button
                      onClick={() => copyToClipboard('contact@adfilms.com', 'email')}
                      className="ml-2 p-1 text-slate-400 dark:text-neutral-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                      title="Copy email"
                      aria-label="Copy email address"
                    >
                      <CopyIcon className="h-4 w-4" />
                    </button>
                    {copiedItem === 'email' && (
                      <span className="text-green-600 dark:text-green-400 text-xs ml-2">Copied!</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <PhoneIcon className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                  <div className="flex-1">
                    <a href="tel:+12345678900" className="text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 text-sm transition-colors">+1 (234) 567-8900</a>
                    <button
                      onClick={() => copyToClipboard('+1 (234) 567-8900', 'phone')}
                      className="ml-2 p-1 text-slate-400 dark:text-neutral-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                      title="Copy phone"
                      aria-label="Copy phone number"
                    >
                      <CopyIcon className="h-4 w-4" />
                    </button>
                    {copiedItem === 'phone' && (
                      <span className="text-green-600 dark:text-green-400 text-xs ml-2">Copied!</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-slate-700 dark:text-white mb-4">Language</h4>
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="flex items-center justify-between space-x-2 px-4 py-2 bg-white dark:bg-neutral-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-300 dark:border-neutral-600 hover:border-slate-400 dark:hover:border-neutral-500 hover:bg-slate-50 dark:hover:bg-neutral-600 transition-colors duration-300 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                    aria-haspopup="true"
                    aria-expanded={isLanguageOpen}
                    aria-controls="language-menu"
                  >
                    <GlobeIcon className="h-4 w-4" />
                    <span className="flex-1 text-left text-sm">{selectedLanguage}</span>
                    <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isLanguageOpen && (
                    <div 
                      id="language-menu"
                      className="absolute bottom-full mb-2 left-0 right-0 bg-white dark:bg-neutral-700 border border-slate-300 dark:border-neutral-600 rounded-lg shadow-lg z-10 overflow-hidden"
                      role="menu"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLanguage(lang);
                            setIsLanguageOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-neutral-600 transition-colors"
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
              <h4 className="text-lg font-semibold text-slate-700 dark:text-white mb-6">Site Map</h4>
              <div className="mb-6">
                <h5 className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-3">Company</h5>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href} 
                      className="block text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-3">Support</h5>
                <div className="space-y-2">
                  {supportLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href} 
                      className="block text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-slate-300 dark:border-neutral-600">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h4 className="text-md font-semibold text-slate-700 dark:text-white mb-3">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    title={social.name}
                    className={`p-2.5 rounded-full bg-slate-200 dark:bg-neutral-700 text-slate-500 dark:text-neutral-400 ${social.color} hover:bg-slate-300 dark:hover:bg-neutral-600 transition-all duration-300 transform hover:scale-110`}
                  >
                    <social.Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-300 dark:border-neutral-600 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-sm text-slate-500 dark:text-neutral-500 mb-1">
                  &copy; {currentYear} AD FILMS. All rights reserved.
                </p>
                <p className="text-xs text-slate-400 dark:text-neutral-600 flex items-center justify-center lg:justify-start">
                  Built with <HeartIcon className="h-3 w-3 text-red-500 mx-1" /> using React & Tailwind
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
                <a href="#privacy" className="text-slate-500 dark:text-neutral-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-slate-500 dark:text-neutral-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#accessibility" className="text-slate-500 dark:text-neutral-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300">
                  Accessibility
                </a>
                <a href="#cookies" className="text-slate-500 dark:text-neutral-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300">
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
          className="fixed bottom-8 right-8 p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default Footer;
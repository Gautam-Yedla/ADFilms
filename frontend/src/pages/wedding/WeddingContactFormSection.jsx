
import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from 'react-router-dom'; // Keep for potential query param prefill

// --- Helper Hook for Scroll Animations (adapted for Framer Motion) ---
const useIntersectionObserver = (options = { threshold: 0.1 }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true); /* else setIsInView(false); */ }, options);
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, [options]);
  return [ref, isInView];
};

// --- SVG Icons (Copied from old WeddingContactPage) ---
const UserIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>);
const HeartIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>);
const MailIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>);
const PhoneIconSolid = (props) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.086.43l1.17 2.633c.078.151.25.223.404.165l2.148-.93a1.875 1.875 0 011.986.321l4.423 4.423c.808.808.917 2.047.321 2.958l-.93 2.147c-.058.155.014.327.165.405l2.633 1.17c.151.078.329.049.43-.086l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-1.372c-.86 0-1.61-.586-1.819-1.42l-1.105-4.423a1.875 1.875 0 01.694-1.955l1.293-.97c.135-.101.164.279.086-.43l-1.17-2.633a.404.404 0 00-.404-.165l-2.148.93a1.875 1.875 0 01-1.986-.321l-4.423-4.423a2.047 2.047 0 00-2.958-.321l-.93-2.147a.404.404 0 00-.405-.165L3.319 8.815A1.42 1.42 0 001.5 7.372V4.5z" clipRule="evenodd" /></svg>);
const CalendarDaysIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008z" /></svg>);
const MapPinIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>);
const UsersGroupIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.242-3.72a3 3 0 01.166.768A3 3 0 0118 15.75m-1.386-3.03A3.001 3.001 0 0015.75 12c-1.228 0-2.318.67-2.874 1.665m4.682-2.72A9.094 9.094 0 0118 18.72m0 0A9.093 9.093 0 0112.75 21a9.093 9.093 0 01-5.25-2.28m5.25-2.28A9.094 9.094 0 0012.75 15a9.094 9.094 0 00-5.25 2.28m10.5-4.56c0-1.281.698-2.424 1.739-3.03M12 3c2.044 0 3.75.806 3.75 1.875S14.044 6.75 12 6.75 8.25 5.894 8.25 4.875C8.25 3.806 9.956 3 12 3z" /></svg>);
const SparklesIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.875 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 12.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 12.75z" /></svg>);
const ChatBubbleLeftEllipsisIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-3.861 8.25-8.625 8.25C7.833 20.25 4.5 16.913 4.5 12.283c0-4.444 3.044-8.085 7.071-8.219a.75.75 0 01.508.188l3.075 3.075a.75.75 0 001.06.054c.929-.865 2.251-1.354 3.616-1.354a4.5 4.5 0 014.5 4.5v3.172c0 .53-.193 1.034-.545 1.42z" /></svg>);
const QuestionMarkCircleIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>);

// --- Form Data and Types (Copied and adapted from old WeddingContactPage) ---
const weddingServiceTypes = [ "Full-Day Coverage", "Cinematic Highlight Reel", "Feature Wedding Film", "Elopement Package", "Destination Wedding", "Engagement Story Film", "Drone Cinematography", "Same-Day Edit", "Other (Please specify)" ];
const guestCountRanges = [ "Intimate (Under 50 guests)", "Small (50-100 guests)", "Medium (101-150 guests)", "Large (151-250 guests)", "Grand (250+ guests)" ];
const referralSources = [ "Search Engine (Google, Bing, etc.)", "Social Media (Instagram, Pinterest, Facebook, etc.)", "Wedding Blog / Magazine", "Venue Recommendation", "Planner Recommendation", "Friend / Family Referral", "Previous Client", "Online Advertisement", "Other" ];

// Form data structure for initial state and validation
const initialFormData = { name: '', partnerName: '', email: '', phone: '', weddingDate: '', venue: '', guestCount: '', servicesInterested: [], eventDetails: '', referralSource: '' };

// --- InputField Component (Copied and adapted from old WeddingContactPage) ---
/*
const InputField: React.FC<InputFieldPropsUnion> = (props) => {
    const { name, label, placeholder, required = false, icon: IconProp, error } = props;
    const baseClasses = `w-full px-3 py-2.5 rounded-lg border text-sm font-montserrat text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-neutral-700/50 placeholder-gray-400 dark:placeholder-neutral-400 transition-colors duration-200 shadow-sm`;
    const focusClasses = `focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 dark:focus:border-pink-400 dark:focus:ring-pink-400/50`;
    const errorClasses = `border-red-500 dark:border-red-600 focus:border-red-500 focus:ring-red-500/50`;
    const iconPadding = IconProp ? 'pl-10' : '';
*/

const InputField = (props) => {
    const { name, label, placeholder, required = false, icon: IconProp, error } = props;
    const baseClasses = `w-full px-3 py-2.5 rounded-lg border text-sm font-montserrat text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-neutral-700/50 placeholder-gray-400 dark:placeholder-neutral-400 transition-colors duration-200 shadow-sm`;
    const focusClasses = `focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 dark:focus:border-pink-400 dark:focus:ring-pink-400/50`;
    const errorClasses = `border-red-500 dark:border-red-600 focus:border-red-500 focus:ring-red-500/50`;
    const iconPadding = IconProp ? 'pl-10' : '';

    const commonProps = { id: name, name: name, className: `${baseClasses} ${iconPadding} ${error ? errorClasses : focusClasses} focus:outline-none`, 'aria-required': required, 'aria-invalid': !!error, 'aria-describedby': error ? `${name}-error` : undefined };
    
    let fieldElement;

    if (props.as === 'checkbox-group') {
        fieldElement = React.createElement('div', { className: "space-y-2.5 max-h-48 overflow-y-auto p-3 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white/50 dark:bg-neutral-700/30 custom-scrollbar" },
            props.options?.map(opt =>
                React.createElement('label', { key: opt, className: "flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-neutral-600/50 p-2 rounded-md cursor-pointer transition-colors" },
                    React.createElement('input', { type: "checkbox", name: props.name, value: opt, checked: props.value.includes(opt),
                        onChange: (e) => {
                            const currentServices = [...props.value]; const serviceValue = e.target.value;
                            if (e.target.checked) { if (!currentServices.includes(serviceValue)) currentServices.push(serviceValue); } 
                            else { const index = currentServices.indexOf(serviceValue); if (index > -1) currentServices.splice(index, 1); }
                            props.onChange({ target: { name: props.name, value: currentServices, type: 'checkbox-group' } });
                        }, className: "form-checkbox h-4 w-4 text-pink-600 border-gray-300 dark:border-neutral-500 rounded focus:ring-pink-500 dark:focus:ring-pink-400 bg-transparent dark:bg-neutral-600"
                    }), React.createElement('span', null, opt)
                )
            )
        );
        return React.createElement('div', { className: "mb-6 relative" },
            React.createElement('label', { className: "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 font-montserrat" }, label, required && React.createElement('span', { className: "text-red-500" }, "*")),
            IconProp && React.createElement(IconProp, { className: "absolute left-3 top-10 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-neutral-400 pointer-events-none z-10" }),
            fieldElement, error && React.createElement('p', { id: `${name}-error`, className: "text-xs text-red-600 dark:text-red-400 mt-1.5 font-montserrat" }, error)
        );
    } else if (props.as === 'textarea') {
        fieldElement = React.createElement('textarea', { ...commonProps, value: props.value, onChange: props.onChange, placeholder: placeholder, rows: 4 });
    } else if (props.as === 'select') {
        fieldElement = React.createElement('select', { ...commonProps, value: props.value, onChange: props.onChange, className: `${commonProps.className} appearance-none` },
            React.createElement('option', { value: "", disabled: true }, placeholder || `Select ${label.toLowerCase()}`),
            props.options?.map(opt => React.createElement('option', { key: opt, value: opt }, opt))
        );
    } else {
        fieldElement = React.createElement('input', { ...commonProps, type: props.type || "text", value: props.value, onChange: props.onChange, placeholder: placeholder });
    }

    return React.createElement('div', { className: "mb-6 relative" },
        React.createElement('label', { htmlFor: name, className: "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5 font-montserrat" }, label, required && React.createElement('span', { className: "text-red-500" }, "*")),
        React.createElement('div', { className: "relative" },
            IconProp && React.createElement(IconProp, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-neutral-400 pointer-events-none" }),
            fieldElement
        ), error && React.createElement('p', { id: `${name}-error`, className: "text-xs text-red-600 dark:text-red-400 mt-1.5 font-montserrat" }, error)
    );
};

export default function WeddingContactFormSection() {
  const location = useLocation();
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle');
  const [sectionRef, isSectionInView] = useIntersectionObserver({ threshold: 0.1 });

  // Prefill servicesInterested from query param (if present)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      const matchedService = weddingServiceTypes.find(
        (type) => type.toLowerCase().replace(/[^a-z0-9]/g, '') === serviceParam.toLowerCase().replace(/[^a-z0-9]/g, '')
      );
      if (matchedService) {
        setFormData(prev => ({ ...prev, servicesInterested: [matchedService] }));
      } else if (serviceParam === 'custom-package' || serviceParam === 'other') {
        setFormData(prev => ({ ...prev, servicesInterested: [weddingServiceTypes[weddingServiceTypes.length - 1]] }));
      }
    }
  }, [location.search]);

  const handleChange = (event) => {
    const target = event.target;
  
    if ('type' in target && target.type === 'checkbox-group') {
      // Custom event for checkbox group
      const { name, value } = target; // name is 'servicesInterested', value is string[]
      setFormData(prev => ({ ...prev, [name]: value }));
      if (formErrors.servicesInterested) {
        setFormErrors(prev => ({ ...prev, servicesInterested: undefined }));
      }
    } else {
      // Standard React.ChangeEvent
      const { name, value } = target;
      setFormData(prev => ({ ...prev, [name]: value }));
      if (formErrors[name]) {
        setFormErrors(prev => ({ ...prev, [name]: undefined }));
      }
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Your full name is required.";
    if (!formData.email.trim()) errors.email = "Your email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email address is invalid.";
    if (!formData.weddingDate) errors.weddingDate = "Please select your wedding date.";
    if (!formData.venue.trim()) errors.venue = "Wedding venue or city is required.";
    if (formData.servicesInterested.length === 0) errors.servicesInterested = "Please select at least one service.";
    if (!formData.eventDetails.trim()) errors.eventDetails = "Please tell us a bit about your wedding.";
    else if (formData.eventDetails.trim().length < 20) errors.eventDetails = "Details should be at least 20 characters.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus('error');
      const firstErrorKey = Object.keys(formErrors).find(key => formErrors[key]);
      if (firstErrorKey) document.getElementsByName(firstErrorKey)[0]?.focus();
      return;
    }
    setFormStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (formData.email.includes('error@debug.com')) { setFormStatus('error'); } // Simulate server error
    else { setFormStatus('success'); setFormData(initialFormData); setFormErrors({}); }
    setTimeout(() => setFormStatus('idle'), 6000);
  };

  return (
    <section ref={sectionRef}>
      <div>
        <motion.div animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-800 dark:text-rose-100 mb-6">
              Let's Plan Your Dream Wedding Film
            </h2>
            <p className="font-montserrat text-lg text-gray-700 dark:text-rose-200">
              We're excited to hear about your special day! Fill out the form below to start the conversation.
            </p>
          </div>

          <div className="bg-white/90 dark:bg-neutral-800/80 p-6 sm:p-10 rounded-xl shadow-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <InputField name="name" label="Your Full Name" placeholder="e.g., Jamie Lee" required icon={UserIcon} value={formData.name} onChange={handleChange} error={formErrors.name} />
                <InputField name="partnerName" label="Partner's Name" placeholder="e.g., Alex Smith" icon={HeartIcon} value={formData.partnerName} onChange={handleChange} error={formErrors.partnerName} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <InputField name="email" label="Email Address" type="email" placeholder="you@example.com" required icon={MailIcon} value={formData.email} onChange={handleChange} error={formErrors.email} />
                <InputField name="phone" label="Phone Number" type="tel" placeholder="(555) 123-4567" icon={PhoneIconSolid} value={formData.phone} onChange={handleChange} error={formErrors.phone} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <InputField name="weddingDate" label="Wedding Date" type="date" required icon={CalendarDaysIcon} value={formData.weddingDate} onChange={handleChange} error={formErrors.weddingDate} />
                <InputField name="venue" label="Wedding Venue / City" placeholder="e.g., The Grand Ballroom, Anytown" required icon={MapPinIcon} value={formData.venue} onChange={handleChange} error={formErrors.venue} />
              </div>
              
              <InputField name="guestCount" label="Estimated Guest Count" as="select" options={guestCountRanges} placeholder="Select guest count" icon={UsersGroupIcon} value={formData.guestCount} onChange={handleChange} error={formErrors.guestCount} />
              <InputField name="servicesInterested" label="Services Interested In" as="checkbox-group" options={weddingServiceTypes} icon={SparklesIcon} value={formData.servicesInterested} onChange={handleChange} error={formErrors.servicesInterested} required />
              <InputField name="eventDetails" label="Tell Us About Your Day" as="textarea" placeholder="Describe your wedding vision, style, key moments you want captured, etc..." required icon={ChatBubbleLeftEllipsisIcon} value={formData.eventDetails} onChange={handleChange} error={formErrors.eventDetails} />
              <InputField name="referralSource" label="How Did You Hear About Us?" as="select" options={referralSources} placeholder="Select source" icon={QuestionMarkCircleIcon} value={formData.referralSource} onChange={handleChange} error={formErrors.referralSource} />

              {formStatus === 'success' && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="my-4 p-3 rounded-md bg-green-100 dark:bg-green-700/40 text-green-700 dark:text-green-200 text-sm font-montserrat">Thank you! We'll be in touch shortly to discuss your beautiful wedding.</motion.div>}
              {formStatus === 'error' && (!Object.keys(formErrors).length || formData.email.includes('error@debug.com')) && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="my-4 p-3 rounded-md bg-red-100 dark:bg-red-700/40 text-red-700 dark:text-red-300 text-sm font-montserrat">Sorry, there was an error. Please try again or email us directly.</motion.div>}
              {formStatus === 'error' && Object.keys(formErrors).length > 0 && !formData.email.includes('error@debug.com') && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="my-4 p-3 rounded-md bg-red-100 dark:bg-red-700/40 text-red-700 dark:text-red-300 text-sm font-montserrat">Please correct the highlighted errors.</motion.div>}

              <motion.button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full mt-4 bg-pink-600 hover:bg-pink-700 disabled:bg-pink-400 dark:disabled:bg-pink-800 text-white font-semibold py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-pink-500/50 dark:focus:ring-pink-400/50 font-montserrat"
                whileHover={{ scale: formStatus !== 'submitting' ? 1.03 : 1 }}
                whileTap={{ scale: formStatus !== 'submitting' ? 0.98 : 1 }}
              >
                {formStatus === 'submitting' ? 'Sending Inquiry...' : 'Send Your Inquiry'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

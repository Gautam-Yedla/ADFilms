
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// --- Helper Hook for Scroll Animations ---
const useIntersectionObserver = (options = { threshold: 0.1 }) => {
  const [element, setElement] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Optional: unobserve after first intersection if animation should only play once
        // if (observer.current && entry.target) {
        //   observer.current.unobserve(entry.target);
        // }
      } else {
         // setIsIntersecting(false); // Re-trigger animation when scrolling back up
      }
    }, options);
    if (element) observer.current.observe(element);
    return () => { if (observer.current) observer.current.disconnect(); };
  }, [element, options]);
  return [setElement, isIntersecting];
};

const AnimatedSection = ({
  children,
  className = '',
  animationClassName = 'opacity-0 translate-y-8',
  threshold = 0.1,
  delay = 'delay-0'
}) => {
  const [setElement, isIntersecting] = useIntersectionObserver({ threshold });
  const appliedAnimation = isIntersecting ? `opacity-100 translate-y-0 ${delay}` : `${animationClassName}`;
  return (
    <div ref={setElement} className={`transition-all duration-700 ease-out ${appliedAnimation} ${className}`}>
      {children}
    </div>
  );
};


// --- SVG Icons ---
const MailIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
);
const PhoneIconSolid = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.086.43l1.17 2.633c.078.151.25.223.404.165l2.148-.93a1.875 1.875 0 011.986.321l4.423 4.423c.808.808.917 2.047.321 2.958l-.93 2.147c-.058.155.014.327.165.405l2.633 1.17c.151.078.329.049.43-.086l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-1.372c-.86 0-1.61-.586-1.819-1.42l-1.105-4.423a1.875 1.875 0 01.694-1.955l1.293-.97c.135.101.164.279-.086-.43l-1.17-2.633a.404.404 0 00-.404-.165l-2.148.93a1.875 1.875 0 01-1.986-.321l-4.423-4.423a2.047 2.047 0 00-2.958-.321l-.93-2.147a.404.404 0 00-.405-.165l-2.633-1.17a.166.166 0 00-.43.086l-.97 1.293a1.875 1.875 0 01-1.955.694L3.319 8.815A1.42 1.42 0 001.5 7.372V4.5z" clipRule="evenodd" /></svg>
);
const MapPinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
);
const ClockIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const ClipboardIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
);
const CheckCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const XCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Form field icons
const UserIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
);
const BuildingOfficeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.75M9 12h6.75m-6.75 5.25h6.75M5.25 6h.008v.008H5.25V6zm0 5.25h.008v.008H5.25v-.008zm0 5.25h.008v.008H5.25v-.008zm13.5-5.25h.008v.008h-.008v-.008zm0 5.25h.008v.008h-.008v-.008zm0-10.5h.008v.008h-.008V6z" /></svg>
);
const BriefcaseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-10.5a2.25 2.25 0 01-2.25-2.25V6.573a2.25 2.25 0 012.25-2.25h10.5a2.25 2.25 0 012.25 2.25v4.073m-12.25-4.073L15.75 12M8.25 12l7.5 2.073" /></svg>
);
const ChatBubbleLeftEllipsisIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-3.861 8.25-8.625 8.25C7.833 20.25 4.5 16.913 4.5 12.283c0-4.444 3.044-8.085 7.071-8.219a.75.75 0 01.508.188l3.075 3.075a.75.75 0 001.06.054c.929-.865 2.251-1.354 3.616-1.354a4.5 4.5 0 014.5 4.5v3.172c0 .53-.193 1.034-.545 1.42z" /></svg>
);
const CurrencyDollarIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const QuestionMarkCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
);

const projectTypes = [
    "Brand Film / Anthem",
    "Product Showcase",
    "TV Commercial (TVC)",
    "Social Media Ad (Short Form)",
    "Corporate Video / Profile",
    "Testimonial Video",
    "Explainer / Animated Video",
    "Documentary Style Commercial",
    "Other (Please specify in details)"
];

const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "To be discussed"
];

const referralSources = [
    "Search Engine (Google, Bing, etc.)",
    "Social Media (Instagram, LinkedIn, etc.)",
    "Referral / Word of Mouth",
    "Online Advertisement",
    "Industry Event / Networking",
    "Existing Client",
    "Other"
];


const CommercialsContactPage = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        projectDetails: '',
        budget: '',
        referralSource: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [formStatus, setFormStatus] = useState('idle');
    const [copyStatus, setCopyStatus] = useState({ itemKey: null, status: null });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const service = params.get('service');
        if (service) {
            const matchedType = projectTypes.find(pt => pt.toLowerCase().includes(service.replace(/-/g, ' ').substring(0,10)));
            setFormData(prev => ({ ...prev, projectType: matchedType || projectTypes[projectTypes.length -1] }));
        }
    }, [location.search]);

    const copyToClipboard = async (text, itemKey) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyStatus({ itemKey, status: 'success' });
            setTimeout(() => setCopyStatus({ itemKey: null, status: null }), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            setCopyStatus({ itemKey, status: 'error' });
            setTimeout(() => setCopyStatus({ itemKey: null, status: null }), 2000);
        }
    };

    const contactInfo = [
        { key: 'email', icon: MailIcon, label: "Email Us", value: "contact@adfilmscommercials.com", href: "mailto:contact@adfilmscommercials.com", copyable: true },
        { key: 'phone', icon: PhoneIconSolid, label: "Call Us", value: "+1 (555) 123-4567", href: "tel:+15551234567", copyable: true },
        { key: 'address', icon: MapPinIcon, label: "Our Studio", value: "123 Film Row, Creative City, CA 90210", copyable: false },
        { key: 'hours', icon: ClockIcon, label: "Business Hours", value: "Mon - Fri: 9 AM - 6 PM PST", copyable: false },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Full name is required.";
        if (!formData.email.trim()) {
            errors.email = "Email address is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid.";
        }
        if (!formData.projectDetails.trim()) errors.projectDetails = "Please provide some details about your project.";
        else if (formData.projectDetails.trim().length < 20) errors.projectDetails = "Project details should be at least 20 characters.";
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setFormStatus('error'); // Indicate validation error
            // Find first error and focus
            const firstErrorKey = Object.keys(formErrors).find(key => formErrors[key]);
            if (firstErrorKey) {
                const element = document.getElementsByName(firstErrorKey)[0];
                element?.focus();
            }
            return;
        }
        setFormStatus('submitting');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Simulate success/error
        if (formData.email.includes('error')) { // Test error state
             setFormStatus('error');
        } else {
            setFormStatus('success');
            setFormData({ name: '', company: '', email: '', phone: '', projectType: '', projectDetails: '', budget: '', referralSource: '' });
        }
        setTimeout(() => setFormStatus('idle'), 5000); // Reset status after a while
    };

    const InputField = ({
        name,
        label,
        type = "text",
        placeholder,
        required = false,
        as = 'input',
        options,
        icon: Icon
    }) => (
        <div className="mb-5 relative">
            <label htmlFor={name} className="block text-sm font-medium text-slate-600 dark:text-neutral-300 mb-1.5">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-neutral-500 pointer-events-none" />}
                {as === 'textarea' ? (
                    <textarea
                        id={name}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        rows={4}
                        className={`w-full px-3 py-2.5 ${Icon ? 'pl-10' : ''} rounded-md border text-sm text-slate-700 dark:text-neutral-100 bg-white dark:bg-neutral-700/50 placeholder-slate-400 dark:placeholder-neutral-500 transition-colors duration-200 ${formErrors[name] ? 'border-red-500 dark:border-red-600 focus:border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-neutral-600 focus:border-amber-500 focus:ring-amber-500'} focus:outline-none focus:ring-2`}
                        aria-required={required}
                        aria-invalid={!!formErrors[name]}
                        aria-describedby={formErrors[name] ? `${name}-error` : undefined}
                    />
                ) : as === 'select' ? (
                    <select
                        id={name}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className={`w-full px-3 py-2.5 ${Icon ? 'pl-10' : ''} rounded-md border text-sm text-slate-700 dark:text-neutral-100 bg-white dark:bg-neutral-700/50 transition-colors duration-200 appearance-none ${formErrors[name] ? 'border-red-500 dark:border-red-600 focus:border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-neutral-600 focus:border-amber-500 focus:ring-amber-500'} focus:outline-none focus:ring-2`}
                        aria-required={required}
                        aria-invalid={!!formErrors[name]}
                        aria-describedby={formErrors[name] ? `${name}-error` : undefined}
                    >
                        <option value="" disabled>{placeholder || `Select ${label.toLowerCase()}`}</option>
                        {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                ) : (
                    <input
                        type={type}
                        id={name}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className={`w-full px-3 py-2.5 ${Icon ? 'pl-10' : ''} rounded-md border text-sm text-slate-700 dark:text-neutral-100 bg-white dark:bg-neutral-700/50 placeholder-slate-400 dark:placeholder-neutral-500 transition-colors duration-200 ${formErrors[name] ? 'border-red-500 dark:border-red-600 focus:border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-neutral-600 focus:border-amber-500 focus:ring-amber-500'} focus:outline-none focus:ring-2`}
                        aria-required={required}
                        aria-invalid={!!formErrors[name]}
                        aria-describedby={formErrors[name] ? `${name}-error` : undefined}
                    />
                )}
            </div>
            {formErrors[name] && <p id={`${name}-error`} className="text-xs text-red-600 dark:text-red-400 mt-1">{formErrors[name]}</p>}
        </div>
    );


    return (
        <div className="text-slate-700 dark:text-neutral-100">
            {/* Hero Section */}
            <AnimatedSection className="pb-16 sm:pb-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-neutral-100 mb-5">
                        Let's Create Something <span className="text-amber-500 dark:text-amber-400">Amazing Together</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-neutral-300 mb-8">
                        Have a project in mind, a question, or just want to say hi? We're here to help.
                    </p>
                </div>
            </AnimatedSection>

            {/* Main Content Area */}
            <div className="py-12 sm:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
                        {/* Left Column: Contact Info & Map */}
                        <div className="lg:col-span-2 space-y-10">
                            <AnimatedSection delay="delay-100">
                                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-neutral-100 mb-6">Get in Touch Directly</h2>
                                <div className="space-y-6">
                                    {contactInfo.map(item => (
                                        <div key={item.key} className="flex items-start p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <item.icon className="w-7 h-7 text-amber-500 dark:text-amber-400 mr-4 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-slate-700 dark:text-neutral-200 mb-0.5">{item.label}</h3>
                                                {item.href ? (
                                                    <a href={item.href} className="text-sm text-slate-500 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors break-all">{item.value}</a>
                                                ) : (
                                                    <p className="text-sm text-slate-500 dark:text-neutral-300 break-all">{item.value}</p>
                                                )}
                                                 {item.copyable && (
                                                    <button
                                                        onClick={() => copyToClipboard(item.value, item.key)}
                                                        className="ml-2 p-1 text-xs text-slate-400 dark:text-neutral-500 hover:text-amber-500 dark:hover:text-amber-400 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors inline-flex items-center"
                                                        title={`Copy ${item.label.toLowerCase()}`}
                                                        aria-label={`Copy ${item.label.toLowerCase()}`}
                                                    >
                                                        {copyStatus.itemKey === item.key && copyStatus.status === 'success' ? <CheckCircleIcon className="w-3.5 h-3.5 text-green-500" /> :
                                                         copyStatus.itemKey === item.key && copyStatus.status === 'error' ? <XCircleIcon className="w-3.5 h-3.5 text-red-500" /> :
                                                         <ClipboardIcon className="w-3.5 h-3.5" />}
                                                        <span className="ml-1">
                                                            {copyStatus.itemKey === item.key && copyStatus.status === 'success' ? 'Copied!' : 
                                                             copyStatus.itemKey === item.key && copyStatus.status === 'error' ? 'Error!' : 'Copy'}
                                                        </span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay="delay-200">
                                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-neutral-100 mb-6">Find Our Studio</h2>
                                <div className="aspect-video bg-slate-200 dark:bg-neutral-700 rounded-lg shadow-md flex items-center justify-center text-center p-4">
                                    <div>
                                        <MapPinIcon className="w-12 h-12 text-slate-400 dark:text-neutral-500 mx-auto mb-2" />
                                        <p className="text-sm text-slate-500 dark:text-neutral-400 font-medium">Interactive map coming soon!</p>
                                        <p className="text-xs text-slate-400 dark:text-neutral-500 mt-1">123 Film Row, Creative City, CA 90210</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-3">
                            <AnimatedSection delay="delay-300">
                                <div className="bg-white dark:bg-neutral-800 p-6 sm:p-8 rounded-xl shadow-xl">
                                    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-neutral-100 mb-1.5">Send Us a Message</h2>
                                    <p className="text-sm text-slate-500 dark:text-neutral-400 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
                                    
                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                                            <InputField name="name" label="Full Name" placeholder="e.g., Jane Doe" required icon={UserIcon} />
                                            <InputField name="company" label="Company (Optional)" placeholder="e.g., Acme Corp" icon={BuildingOfficeIcon}/>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                                            <InputField name="email" label="Email Address" type="email" placeholder="you@example.com" required icon={MailIcon} />
                                            <InputField name="phone" label="Phone Number (Optional)" type="tel" placeholder="(555) 123-4567" icon={PhoneIconSolid}/>
                                        </div>
                                        
                                        <InputField name="projectType" label="Project Type" as="select" options={projectTypes} placeholder="Select project type" icon={BriefcaseIcon}/>
                                        <InputField name="budget" label="Estimated Budget (Optional)" as="select" options={budgetRanges} placeholder="Select budget range" icon={CurrencyDollarIcon} />
                                        
                                        <InputField name="projectDetails" label="Project Details" as="textarea" placeholder="Tell us about your project, goals, and any specific requirements..." required icon={ChatBubbleLeftEllipsisIcon}/>
                                        <InputField name="referralSource" label="How did you hear about us? (Optional)" as="select" options={referralSources} placeholder="Select source" icon={QuestionMarkCircleIcon}/>

                                        {formStatus === 'success' && (
                                            <div className="my-4 p-3 rounded-md bg-green-50 dark:bg-green-700/30 text-green-700 dark:text-green-300 text-sm">
                                                Message sent successfully! We'll be in touch soon.
                                            </div>
                                        )}
                                        {formStatus === 'error' && !Object.keys(formErrors).length && ( // General submission error
                                            <div className="my-4 p-3 rounded-md bg-red-50 dark:bg-red-700/30 text-red-700 dark:text-red-400 text-sm">
                                                Sorry, there was an error submitting your message. Please try again.
                                            </div>
                                        )}
                                         {formStatus === 'error' && Object.keys(formErrors).length > 0 && ( // Validation error message
                                            <div className="my-4 p-3 rounded-md bg-red-50 dark:bg-red-700/30 text-red-700 dark:text-red-400 text-sm">
                                                Please correct the errors highlighted above.
                                            </div>
                                        )}


                                        <button 
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 dark:disabled:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-4 focus:ring-amber-500/50 dark:focus:ring-amber-400/50"
                                        >
                                            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommercialsContactPage;

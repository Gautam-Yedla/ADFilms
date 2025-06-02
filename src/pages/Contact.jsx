import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.service.trim()) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#d97706] mb-4">Get in Touch</h1>
      <p className="max-w-xl text-center mb-8 text-gray-300">
        Whether you have questions, want to book a session, or just want to say hello — we’d love to hear from you!
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white text-black rounded-xl shadow-lg p-8">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} px-4 py-2 rounded-lg focus:outline-none`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} px-4 py-2 rounded-lg focus:outline-none`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Phone number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} px-4 py-2 rounded-lg focus:outline-none`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full border ${errors.service ? "border-red-500" : "border-gray-300"} px-4 py-2 rounded-lg focus:outline-none`}
          >
            <option value="">Select a service</option>
            <option value="weddingPhotography">Wedding Photography</option>
            <option value="preWeddingShoot">Pre-Wedding Shoot</option>
            <option value="eventCoverage">Event Coverage</option>
            <option value="commercial">Commercial Shoot</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} px-4 py-2 rounded-lg focus:outline-none`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#d97706] text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

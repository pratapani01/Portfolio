import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const text = `Hello! You've received a new message from your portfolio:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phone = '919554117566';
    const whatsappURL = `https://wa.me/${phone}?text=${text}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-16"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Contact Me</h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/10"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full bg-black/30 text-white border border-white-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full bg-black/30 text-white border border-white-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full bg-black/30 text-white border border-white-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-200 font-semibold flex justify-center items-center w-full"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center space-y-2 text-gray-300 text-base">
          <p>
            Email:&nbsp;
            <a href="mailto:anipratap01@gmail.com" className="text-blue-400 hover:underline">
              anipratap01@gmail.com
            </a>
          </p>
          <p>Phone: <span className="text-blue-400">+91-9554117566</span></p>
          <p>
            LinkedIn:&nbsp;
            <a href="https://www.linkedin.com/in/animesh-pratap-singh-1977ba29a" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
              Animesh Pratap Singh
            </a>
          </p>
          <p>
            GitHub:&nbsp;
            <a href="https://github.com/pratapani01" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
              pratapani01
            </a>
            &nbsp;|&nbsp;
            <a href="https://github.com/anianiani1" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
              anianiani1
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

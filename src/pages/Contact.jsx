import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-white-400">Contact Me</h2>

        {/* Form */}
        <form className="space-y-6 bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black/30 text-white border border-white-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black/30 text-white border border-white-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-black/30 text-white border border-white-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="bg-white-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-200 font-semibold flex justify-center items-center w-full"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
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
    </section>
  );
};

export default Contact;

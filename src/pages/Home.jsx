import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import resumePDF from '../assets/Animesh_Pratap_Singh_Resume.pdf';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen w-full flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 pt-24"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-blue-400">Animesh Pratap Singh</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-300 mb-6 h-8">
          <Typewriter
            words={[
              'Full Stack Developer',
              'AI/ML Enthusiast',
              'Problem Solver',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Passionate about building scalable web applications and AI-powered
          solutions. Experienced with React, Node.js, MongoDB, and modern web
          technologies. Currently focused on creating impactful projects and
          continuously improving my development skills.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <button
            onClick={() => navigate('/projects')}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-700 transition-transform duration-300"
          >
            Explore Projects
          </button>

          <a
            href={resumePDF}
            download="Animesh_Pratap_Singh_Resume.pdf"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-700 transition-transform duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-white text-3xl">
          <a
            href="https://www.linkedin.com/in/pratapani01/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/pratapani01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:anipratap01@gmail.com"
            className="hover:text-red-400 hover:scale-110 transition-transform duration-200"
          >
            <HiOutlineMail />
          </a>
        </div>

        {/* Coding Profile */}
        <div className="mt-6">
          <a
            href="https://codolio.com/profile/pratapani01/card"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Explore My Coding Profile
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sarpanch Sahayak',
    description: 'Sarpanch Sahyak – A citizen grievance portal where villagers can raise complaints with photos, and the sarpanch can track and resolve them.',
    tech: ['React', 'Tailwind CSS', 'MongoDB', 'Cloudinary', 'API', 'Render'],
    github: 'https://github.com/pratapani01/Sarpanch-Sahayak',
    live: 'https://sarpanch-sahayak.vercel.app/',
  },
  {
    title: 'NCC RIT Portal',
    description: 'An NCC information and engagement portal where students can explore NCC details, view the college photo gallery, and send queries directly.',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/pratapani01/ncc-website',
    live: 'https://ncc-rit.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/pratapani01/Portfolio',
    live: 'https://pratapani01.github.io/Portfolio/',
  },
  {
    title: 'Postify | Social Media App',
    description: 'A social media application built with React, Tailwind CSS, Vite, Cloudinary, MongoDB',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Cloudinary', 'MongoDB'],
    github: 'https://github.com/pratapani01/Postify',
    live: 'https://postify-ani.vercel.app/',
  },
  {
    title: 'AI Rasoi (HackIndia 2025)',
    description: 'A smart recipe recommender app using image & voice input with Gemini API.',
    tech: ['Gradio', 'Streamlit','Python', 'SpeechRecognition', 'Gemini'],
    github: 'https://github.com/pratapani01/Ai_Rasoi',
    live: '#',
  },
  {
    title: 'Landing Page (Codsoft)',
    description: 'Internship project - elegant and responsive single page.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/anianiani1/CodSoft/tree/Codsoft/Landing%20Page',
    live: '#',
  },
  {
    title: 'Youtube Clone (Explorin Academy)',
    description: 'Internship project - Made using React, Vite, and Tailwind CSS.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/anianiani1/YoutubeClone',
    live: '#',
  },
  {
    title: 'Instagram Homepage Clone',
    description: 'Elegant and responsive clone of Instagram\'s homepage.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/anianiani1/Instagram-Homepage',
    live: '#',
  },
  {
    title: 'Registration Dashboard',
    description: 'A simple registration form and dashboard with user-friendly UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/pratapani01/Registration_Dashboard',
    live: '#',
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10 hover:shadow-green-700/30"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-black/40 text-white px-3 py-1 rounded-full border border-green-700 shadow hover:scale-105 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-auto">
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 transition"
                >
                  GitHub
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

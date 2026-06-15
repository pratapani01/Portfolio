import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
  title: 'GramConnect AI',
  description:
    'A full-stack AI-powered rural governance platform with both web and mobile application support. Features JWT authentication, role-based dashboards, grievance tracking, Cloudinary image uploads, real-time complaint management, and government scheme assistance for citizens and administrators.',
  tech: [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Cloudinary',
    'Tailwind CSS',
    'JWT',
    'Render',
    'Vercel',
  ],
  github: 'https://github.com/pratapani01/Gram_Connect-AI',
  live: 'https://gram-connect-ai.vercel.app/citizen',
},

  {
    title: 'Postify | Social Media App',
    description:
      'A MERN-based social networking platform with user authentication, post creation, image uploads, likes, comments, and real-time user engagement features.',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Cloudinary',
      'JWT',
      'Tailwind CSS',
      'Vite',
    ],
    github: 'https://github.com/pratapani01/Postify',
    live: 'https://postify-ani.vercel.app/',
  },

  {
    title: 'AI Rasoi (HackIndia 2025)',
    description:
      'An AI-powered recipe recommendation system using Gemini API with voice and image-based inputs, delivering personalized recipe suggestions through an interactive interface.',
    tech: [
      'Python',
      'Gemini API',
      'Gradio',
      'Streamlit',
      'SpeechRecognition',
    ],
    github: 'https://github.com/pratapani01/Ai_Rasoi',
    live: '#',
  },

  {
    title: 'NCC RIT Portal',
    description:
      'A responsive information portal for NCC cadets featuring activity updates, photo galleries, query management, and improved communication between students and coordinators.',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/pratapani01/ncc-website',
    live: 'https://ncc-rit.vercel.app/',
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

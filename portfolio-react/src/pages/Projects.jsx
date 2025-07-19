import React from 'react';

const projects = [
  {
    title: 'AI Rasoi',
    description: 'A smart recipe recommender app using image & voice input with Gemini API.',
    tech: ['React', 'Gradio', 'Tailwind', 'Python', 'Gemini'],
    github: 'https://github.com/anianiani1/ai-rasoi',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/anianiani1',
    live: '#',
  },
  {
    title: 'Landing Page (Codsoft)',
    description: 'Internship project - elegant and responsive single page.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10 hover:shadow-green-700/30 hover:scale-[1.03] transition-all duration-300"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

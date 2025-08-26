import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/animesh1.jpg';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-16 flex justify-center items-center"
    >
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-2xl border border-white/20">
        
        {/* About Me Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">About Me</h2>

        {/* Profile & Name */}
<div className="flex flex-col items-center mb-10 mt-4">
  <div className="relative group transition-transform duration-300 ease-in-out hover:scale-105">
    <div className="absolute -inset-1 rounded-full bg-blue-400 blur-md opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
    <img
      src={profilePic}
      alt="Animesh"
      className="relative z-10 rounded-full w-36 h-46 object-contain p-1 border-4 border-blue-400 shadow-xl"
    />
  </div>
  <h3 className="text-3xl font-semibold text-white mt-4">Animesh Pratap Singh</h3>
  <p className="text-gray-400 text-sm mt-1">B.Tech CSE (AI & ML) | RIT Roorkee</p>
</div>


        {/* Introduction */}
        <div className="text-center text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          <p>
            I’m a 3rd-year undergraduate passionate about transforming complex problems into elegant solutions.
            With a strong foundation in <span className="text-blue-400 font-semibold">AI/ML</span> and a knack for front-end development using <span className="text-blue-400 font-semibold">React</span> and <span className="text-blue-400 font-semibold">Tailwind CSS</span>,
            I enjoy building modern, user-friendly interfaces.
          </p>
          <br />
          <p>
            As a <span className="text-yellow-400 font-semibold">Senior Under Officer</span> in NCC, I’ve cultivated leadership and teamwork skills that help me excel in both academic and extracurricular pursuits.
          </p>
          <br />
          <p>
            I aim to contribute to tech-driven solutions that are creative, intelligent, and impactful.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center text-gray-300 mb-12 space-y-2 text-base">
          <p><strong>📍 Location:</strong> Roorkee, Uttarakhand</p>
          <p><strong>📧 Email:</strong> <a href="mailto:anipratap01@gmail.com" className="text-blue-400 hover:underline">anipratap01@gmail.com</a></p>
          <p><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/animesh-pratap-singh-1977ba29a/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Animesh Pratap Singh</a></p>
          <p><strong>💻 GitHub:</strong> <a href="https://github.com/pratapani01" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">pratapani01</a></p>
          <p><strong>🌐 Portfolio:</strong> <a href="https://pratapani01.github.io/Portfolio/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">pratapani01.github.io/Portfolio/</a></p>
          <p><strong>🦉 Codolio:</strong> <a href="https://codolio.com/profile/pratapani01/card" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">pratapani01</a></p>
        </div>

        {/* Technical Expertise */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-blue-400 mb-6">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
              'Python', 'C', 'C++', 'Java', 'Node.js',
              'MongoDB', 'MySQL', 'Git', 'AI/ML',
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-black/40 text-white border border-blue-700 
                shadow hover:shadow-blue-700/50 hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Co-curricular & Leadership */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-blue-400 mb-4">Experience & Co-curricular Activities</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-2 max-w-2xl mx-auto">
            <li>Senior Under Officer - NCC 3UKCTR: Leadership, discipline & communication.</li>
            <li>Web Development Intern at CodSoft (Nov 2023 – Dec 2023)</li>
            <li>Hackathon participant – AI Rasoi, HackIndia 2025</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

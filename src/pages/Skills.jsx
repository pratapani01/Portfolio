import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaStar, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiMysql, SiGit, SiC, SiMongodb, SiNodedotjs } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} color="#e44d26" />, level: 5 },
  { name: 'CSS', icon: <FaCss3Alt size={40} color="#264de4" />, level: 4 },
  { name: 'JavaScript', icon: <FaJs size={40} color="#f0db4f" />, level: 3 },
  { name: 'Python', icon: <FaPython size={40} color="#306998" />, level: 5 },
  { name: 'React', icon: <FaReact size={40} color="#61dbfb" />, level: 4 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#38bdf8" />, level: 4 },
  { name: 'C', icon: <SiC size={40} color="#A8B9CC" />, level: 5 },
  { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" />, level: 3 },
  { name: 'Java', icon: <FaJava size={40} color="#f89820" />, level: 4 },
  { name: 'Node.js', icon: <SiNodedotjs size={40} color="#3C873A" />, level: 3 },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#4DB33D" />, level: 3 },
  { name: 'MySQL', icon: <SiMysql size={40} color="#00758F" />, level: 3 },
  { name: 'Git', icon: <SiGit size={40} color="#f1502f" />, level: 4 },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 px-6 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center shadow-xl border border-white/10 hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="flex justify-center gap-1 group">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-2xl transition-transform duration-200 ${
                    i < skill.level ? 'text-yellow-400' : 'text-gray-600'
                  } group-hover:scale-[1.4] hover:scale-[2]`}
                  style={{
                    transitionDelay: `${Math.abs(skill.level - i) * 50}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;

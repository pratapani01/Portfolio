import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiGit,
  SiMongodb,
  SiNodedotjs,
} from 'react-icons/si';

const skills = [
  {
    name: 'HTML',
    icon: <FaHtml5 size={40} color="#e44d26" />,
    level: 'Advanced',
    width: '85%',
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={40} color="#264de4" />,
    level: 'Advanced',
    width: '85%',
  },
  {
    name: 'JavaScript',
    icon: <FaJs size={40} color="#f0db4f" />,
    level: 'Intermediate',
    width: '70%',
  },
  {
    name: 'React',
    icon: <FaReact size={40} color="#61dbfb" />,
    level: 'Intermediate',
    width: '85%',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={40} color="#38bdf8" />,
    level: 'Intermediate',
    width: '85%',
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs size={40} color="#3C873A" />,
    level: 'Intermediate',
    width: '70%',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={40} color="#4DB33D" />,
    level: 'Intermediate',
    width: '70%',
  },
  {
    name: 'MySQL',
    icon: <SiMysql size={40} color="#00758F" />,
    level: 'Intermediate',
    width: '65%',
  },
  {
    name: 'Python',
    icon: <FaPython size={40} color="#306998" />,
    level: 'Intermediate',
    width: '75%',
  },
  {
    name: 'C++',
    icon: <SiCplusplus size={40} color="#00599C" />,
    level: 'Intermediate',
    width: '65%',
  },
  {
    name: 'Git',
    icon: <SiGit size={40} color="#f1502f" />,
    level: 'Intermediate',
    width: '75%',
  },
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
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10"
          >
            <div className="flex justify-center mb-4">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold text-center mb-4">
              {skill.name}
            </h3>

            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.width }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
              />
            </div>

            <p className="text-center text-sm text-gray-300 mt-3 font-medium">
              {skill.level}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
import React from 'react';
import profilePic from '../assets/animesh.jpg'; // Replace with hosted link if needed

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
  'Python', 'C++', 'Git', 'MongoDB', 'AI/ML'
];

const About = () => {
  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-16 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-2xl border border-white/20">
        
        {/* Profile Info */}
        <div className="text-center">
          <img
            src={profilePic}
            alt="Animesh"
            className="mx-auto rounded-full w-32 h-32 object-center border-4 border-blue-400 shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold mb-2 text-blue-400">Animesh Pratap Singh</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I’m currently a 3rd-year B.Tech student specializing in Artificial Intelligence and Machine Learning.
            I have a passion for building intuitive, responsive web interfaces using modern frontend tools like React and Tailwind CSS.
            <br /><br />
            Alongside web development, I’m deeply interested in AI-powered projects that bridge real-world usability and smart automation.
            As an NCC Senior Under Officer, I’ve developed leadership, discipline, and communication skills that help me thrive in both individual and team-based environments.
            <br /><br />
            I’m continuously learning, building, and leveling up — aiming to contribute to impactful tech-driven solutions that blend creativity and intelligence.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-center mb-6 text-blue-400">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-black/40 text-white border border-blue-700 
                shadow-md hover:shadow-blue-700/50 hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

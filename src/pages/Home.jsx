import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // ✅ Correct place for hook

  return (
    <section className="min-h-screen w-full flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 pt-24">
      <div className="max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-blue-400">Animesh</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-300 mb-6 h-8">
          <Typewriter
            words={['Web Developer', 'AI/ML 3rd Year Student']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
  {/* View My Work Button */}
  <a
    onClick={() => navigate('/projects')}
    className="cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-700 transition-transform duration-300"
  >
    View My Work
  </a>

  {/* Download Resume Button */}
  <a
    href="/resume.pdf"
    download
    className="cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-700 transition-transform duration-300"
  >
    Download Resume
  </a>
</div>


      </div>
    </section>
  );
};

export default Home;

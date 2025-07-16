import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-20 animate-pulse transition-colors duration-200"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-100 dark:bg-orange-900/30 rounded-full opacity-20 animate-pulse delay-1000 transition-colors duration-200"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl transition-colors duration-200">
                <img
                  src="/profile.jpg"
                  alt="Gourav Agarwal - Engineering Student"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-700/20 dark:border-blue-400/20 animate-pulse transition-colors duration-200"></div>
              {/* Gradient ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-700 to-orange-500 opacity-20 blur-lg"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-orange-500">
              Gourav Agarwal
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light transition-colors duration-200">
            Engineering Student & Future Innovator
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-200">
            Passionate about creating solutions that make a difference. Currently pursuing Computer Science
            with a focus on sustainable technology and AI applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/Gourav-Agarwal-Resume.pdf"
              download
              className="px-8 py-4 bg-blue-700 dark:bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/Gour8777"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gouravbms/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:gouravagarwal014@gmail.com"
                className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-600 dark:text-gray-400 transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
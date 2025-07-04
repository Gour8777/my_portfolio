import React from 'react';
import { User, Heart, Target, Zap } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: highlightsRef, visibleItems } = useStaggeredAnimation(4, 150);

  const highlights = [
    {
      icon: <User className="text-blue-700 dark:text-blue-400" size={24} />,
      title: "Who I Am",
      description: "A dedicated engineering student with a passion for innovation and problem-solving."
    },
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: "What I Love",
      description: "Creating sustainable solutions, exploring AI applications, and collaborating on impactful projects."
    },
    {
      icon: <Target className="text-green-600 dark:text-green-400" size={24} />,
      title: "My Goal",
      description: "To become a technology leader who drives positive change in the world through engineering."
    },
    {
      icon: <Zap className="text-yellow-500" size={24} />,
      title: "What Drives Me",
      description: "The potential of technology to solve real-world problems and improve lives."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className={`space-y-6 scroll-animate-left ${contentVisible ? 'animate' : ''}`}
          >
            <div className="prose prose-lg text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed mb-6 transition-colors duration-200">
                I'm a third-year Computer Engineering student at UC Berkeley, driven by a passion for 
                creating technology that makes a meaningful impact. My journey in engineering began with 
                curiosity about how things work, and has evolved into a deep commitment to solving 
                complex problems through innovative solutions.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 transition-colors duration-200">
                With experience in software development, machine learning, and sustainable technology, 
                I'm always looking for opportunities to apply my skills to real-world challenges. 
                I believe that the best engineers are those who combine technical expertise with 
                empathy and creativity.
              </p>
              
              <p className="text-lg leading-relaxed transition-colors duration-200">
                When I'm not coding or studying, you'll find me playing cricket, participating in hackathons. I'm excited about the future of technology and eager 
                to contribute to meaningful projects that create positive change.
              </p>
            </div>
          </div>

          <div ref={highlightsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 scroll-animate-scale ${
                  visibleItems.has(index) ? 'animate' : ''
                }`}
                style={{ 
                  transitionDelay: visibleItems.has(index) ? `${index * 150}ms` : '0ms' 
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm transition-colors duration-200">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-200">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
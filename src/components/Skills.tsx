import React from 'react';
import { Code, Database, Brain, Wrench, Palette, Users } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, visibleItems } = useStaggeredAnimation(6, 200);

  const skillCategories = [
    {
      icon: <Code className="text-blue-700 dark:text-blue-400" size={28} />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript",, "Java", "C"]
    },
    {
      icon: <Database className="text-green-600 dark:text-green-400" size={28} />,
      title: "Technologies & Frameworks",
      skills: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Brain className="text-purple-600 dark:text-purple-400" size={28} />,
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision"]
    },
    {
      icon: <Wrench className="text-orange-500" size={28} />,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Postman"]
    },
    {
      icon: <Palette className="text-pink-500" size={28} />,
      title: "Design & UI/UX",
      skills: ["UI Design", "Prototyping", "User Research", "Wireframing", "Design Systems"]
    },
    {
      icon: <Users className="text-red-500" size={28} />,
      title: "Soft Skills",
      skills: ["Team Leadership", "Communication", "Problem Solving", "Project Management", "Mentoring"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-200">
            A comprehensive overview of my technical skills and areas of expertise, 
            developed through coursework, projects, and hands-on experience.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 dark:border-gray-700 scroll-animate-scale ${
                visibleItems.has(index) ? 'animate' : ''
              }`}
              style={{ 
                transitionDelay: visibleItems.has(index) ? `${index * 200}ms` : '0ms' 
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-200 transform hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-200 cursor-default transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
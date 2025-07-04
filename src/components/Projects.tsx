import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, visibleItems } = useStaggeredAnimation(6, 150);

  const projects = [
    {
      title: "Alumni Network Application",
      description: "Built an alumni network app using Kotlin and Firebase where users can join groups, share internships, chat in real-time, and connect with nearby alumni using the NearMe map feature.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Kotlin","Andriod SDK","Firebase", "Maps API"],
      githubUrl: "https://github.com/Gour8777/Alumni-Network",
      liveUrl: "https://ecotrack-demo.com",
      date: "2024"
    },
    {
      title: "Java 2048 Game",
      description: "Developed a fully functional 2048 game in Java, implementing tile movement, merging logic, and win/lose conditions using strong OOP principles and Java GUI frameworks.",
      image: "/java2048.png",
      technologies: ["Java","Swing","OOP Principles"],
      githubUrl: "https://github.com/Gour8777/2048game",
      liveUrl: "https://study-ai-demo.com",
      date: "2024"
    },
    {
      title: "ML Traffic Prediction",
      description: "Developed a traffic prediction system using Machine Learning, leveraging Random Forest Regressor, Isolation Forest, and ARIMA models to forecast traffic flow and detect anomalies with high accuracy.",
      image: "/mltraffic.png",
      technologies: ["Python","Scikit-learn","Statsmodels","Pandas & NumPy"],
      githubUrl: "https://github.com/Gour8777/Traffic-Prediction",
      liveUrl: "https://campus-nav-demo.com",
      date: "2023"
    },
    {
      title: "Salon Website",
      description: "Developed a user-friendly website that shows real-time nearby salons and enables seamless appointment booking. Implemented interactive features with an intuitive design to enhance user experience and engagement.",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB"]
,
      githubUrl: "https://github.com/Gour8777/SereneStyles",
      liveUrl: "https://blockchain-vote-demo.com",
      date: "2023"
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-200">
            A showcase of my recent work, including web applications, AI projects, 
            and innovative solutions to real-world problems.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First row: first two projects */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <div
                key={index}
                className={`flex-1 bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-500 overflow-hidden group flex flex-col h-full scroll-animate-scale ${
                  visibleItems.has(index) ? 'animate' : ''
                }`}
                style={{ 
                  transitionDelay: visibleItems.has(index) ? `${index * 150}ms` : '0ms' 
                }}
              >
                <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-xl"
                />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-2 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full transition-colors duration-200">
                      <Calendar size={12} />
                      {project.date}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3 flex-grow transition-colors duration-200">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-colors duration-200">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 mt-auto ml-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-900 dark:hover:bg-gray-500 transition-all duration-200 transform hover:scale-105"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 dark:bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row: next two projects */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-8 mt-8">
            {projects.slice(2, 4).map((project, index) => (
              <div
                key={index + 2}
                className={`flex-1 bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-500 overflow-hidden group flex flex-col h-full scroll-animate-scale ${
                  visibleItems.has(index + 2) ? 'animate' : ''
                }`}
                style={{ 
                  transitionDelay: visibleItems.has(index + 2) ? `${(index + 2) * 150}ms` : '0ms' 
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-xl"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-2 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full transition-colors duration-200">
                      <Calendar size={12} />
                      {project.date}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3 flex-grow transition-colors duration-200">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-colors duration-200">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 mt-auto ml-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-900 dark:hover:bg-gray-500 transition-all duration-200 transform hover:scale-105"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 dark:bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
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

export default Projects;
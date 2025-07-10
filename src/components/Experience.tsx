import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: timelineRef, visibleItems } = useStaggeredAnimation(5, 200);

  const experiences = [
    {
      type: 'work',
      title: 'Application Development Intern',
      company: 'KNPL Tech',
      location: 'HSR Layout, Bangalore, India',
      period: 'April 2025 - June 2025',
      description: 'Developed a retail delivery management app using Kotlin and Firebase to streamline product deliveries. Integrated real-time location tracking to assist delivery personnel and improve operational efficiency.',
      achievements: [
        "Enabled real-time tracking within a 50m radius, enhancing delivery accuracy",
    "Optimized database structure and queries, improving app performance by 30%",
    "Enhanced user interface for delivery personnel, resulting in faster task completion"
      ]
    }
    
   
  ];

  const education = [
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Engineering(Data Science)',
      company: 'B.M.S College of Engineering',
      location: 'Bangalore, India',
      period: '2022 - 2026',
      description: 'Relevant coursework: Data Structures, Algorithms, Machine Learning, Computer Architecture, Software Engineering, Database Systems',
      achievements: [
        'GPA: 9.6/10',
    
      ]
    },
    {
      type: 'education',
      title: 'High School ',
      company: 'ST. Mary\'s English High School',
      location: 'Jamshedpur, India',
      period: '2020 - 2022',
      description: 'Completed higher secondary education with a focus on Science stream (Physics, Chemistry, Mathematics, Computer Science). Actively participated in coding competitions and school events.',
      achievements: [ 
        'Percentage: 93%',
        
      ]
    }
  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    // Sort by start year (descending)
    const aYear = parseInt(a.period.split(' - ')[0].split(' ').pop() || '0');
    const bYear = parseInt(b.period.split(' - ')[0].split(' ').pop() || '0');
    return bYear - aYear;
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-200">
            My journey through education and professional experience, 
            building skills and making meaningful contributions along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block transition-colors duration-200"></div>

          <div ref={timelineRef} className="space-y-12">
            {allItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-start scroll-animate-left ${
                  visibleItems.has(index) ? 'animate' : ''
                }`}
                style={{ 
                  transitionDelay: visibleItems.has(index) ? `${index * 200}ms` : '0ms' 
                }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-700 dark:border-blue-400 rounded-full z-10 transition-colors duration-200 transform hover:scale-125 transition-transform"></div>

                {/* Content */}
                <div className="md:ml-16 w-full">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-200 transform hover:scale-110 transition-transform">
                          {item.type === 'work' ? (
                            <Briefcase className="text-blue-700 dark:text-blue-400" size={20} />
                          ) : (
                            <GraduationCap className="text-green-600 dark:text-green-400" size={20} />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                            {item.title}
                          </h3>
                          <p className="text-blue-700 dark:text-blue-400 font-medium transition-colors duration-200">
                            {item.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={14} />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-200">
                      {item.description}
                    </p>

                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-700 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0 transition-colors duration-200"></span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
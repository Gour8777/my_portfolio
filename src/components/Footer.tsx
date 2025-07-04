import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Gourav Agarwal</h3>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed transition-colors duration-200">
              Engineering student passionate about creating innovative solutions 
              and making a positive impact through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const section = document.getElementById(link.toLowerCase());
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400 dark:text-gray-500 transition-colors duration-200">
              <p>gouravagarwal014@gmail.com</p>
              <p>Bangalore ,India</p>
              <p>Available for internships and collaborations</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 transition-colors duration-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm transition-colors duration-200">
              © 2025 Gourav Agarwal. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm mt-4 md:mt-0 transition-colors duration-200">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>and</span>
              <Code className="text-blue-500" size={16} />
              <span>powered by</span>
              <Coffee className="text-orange-500" size={16} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
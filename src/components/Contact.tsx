import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mzzgwloq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was a problem submitting your form. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-700 dark:text-blue-400" size={24} />,
      title: "Email",
      content: "gouravagarwal014@gmail.com",
      href: "mailto:gouravagarwal014@gmail.com"
    },
    {
      icon: <Phone className="text-green-600 dark:text-green-400" size={24} />,
      title: "Phone",
      content: "9508827608",
      href: "tel:9508827608"
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      title: "Location",
      content: "Bangalore, India",
      target: "_blank",
      href: "https://maps.app.goo.gl/NVh3Z2q8NAWFcJVf8?g_st=aw"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      href: "https://github.com/Gour8777",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/gouravbms",
      color: "hover:text-blue-600"
    },
    
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-200">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            ref={contentRef}
            className={`space-y-8 scroll-animate-left ${contentVisible ? 'animate' : ''}`}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-200">
                Whether you're looking for a passionate engineering student to join your team, 
                want to collaborate on a project, or simply want to discuss the latest in tech, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
                >
                  <div className="p-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm transition-colors duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide transition-colors duration-200">
                      {info.title}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 transition-all duration-200 transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`bg-gray-50 dark:bg-gray-700 p-8 rounded-xl transition-colors duration-200 scroll-animate-right ${formVisible ? 'animate' : ''}`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-400 focus:border-blue-700 dark:focus:border-blue-400 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-400 focus:border-blue-700 dark:focus:border-blue-400 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-400 focus:border-blue-700 dark:focus:border-blue-400 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-700 dark:focus:ring-blue-400 focus:border-blue-700 dark:focus:border-blue-400 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-700 dark:bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-800 dark:hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
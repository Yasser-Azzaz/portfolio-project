import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

interface Props {
  isVisible: boolean;
}

const Contact: React.FC<Props> = ({ isVisible }) => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "yasserazzaz0103@gmail.com",
      href: "mailto:yasserazzaz0103@gmail.com",
      color: "hover:text-red-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Yasser-Azzaz",
      href: "https://github.com/Yasser-Azzaz",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yasser-azzaz",
      href: "https://www.linkedin.com/in/yasser-azzaz-1b2428368/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          id="contact-content"
          data-animate
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
            <p className="text-lg mb-8 text-gray-300">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-3 px-6 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 ${link.color}`}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Props {
  isVisible: boolean;
}

const Projects: React.FC<Props> = ({ isVisible }) => {
  const projects = [
    {
      title: "To-Do List Manager",
      tech: "C",
      description: "CLI task manager with advanced file I/O operations and data persistence",
      icon: "📝",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "UNO Card Game",
      tech: "Java",
      description: "Object-oriented UNO game with complete game logic and player management",
      icon: "🎮",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Portfolio Website",
      tech: "React, TypeScript",
      description: "Responsive portfolio site with modern animations and dark mode",
      icon: "🌐",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "Weather Application",
      tech: "JavaScript",
      description: "Real-time weather app using Fetch API with location-based forecasts",
      icon: "☁️",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Markdown Previewer",
      tech: "JavaScript",
      description: "Real-time markdown parser with syntax highlighting and live preview",
      icon: "📝",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          id="projects-content"
          data-animate
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 text-2xl`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-blue-400 text-sm mb-3 font-medium">{project.tech}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                <button className="flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  <span>View Project</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
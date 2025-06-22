import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  scrollToSection: (id: string) => void;
  isVisible: boolean;
}

const Hero: React.FC<Props> = ({ scrollToSection, isVisible }) => (
  <section id="hero" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-6">
      <div
        id="hero-content"
        data-animate
        className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Hi, I'm Yasser
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          2nd Year IT Student | Developer in Progress
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <span className="px-4 py-2 bg-blue-500/20 rounded-full text-sm border border-blue-500/30">
            Full-Stack Developer
          </span>
          <span className="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">
            Problem Solver
          </span>
          <span className="px-4 py-2 bg-pink-500/20 rounded-full text-sm border border-pink-500/30">
            Tech Enthusiast
          </span>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="group flex items-center space-x-2 mx-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          <span>Discover More</span>
          <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
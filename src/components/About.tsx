import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

interface Props {
  isVisible: boolean;
}

const About: React.FC<Props> = ({ isVisible }) => (
  <section id="about" className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <div
        id="about-content"
        data-animate
        className={`transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate IT student in my second year, constantly exploring the fascinating world of technology 
            and building innovative solutions. My journey in programming started with curiosity and has evolved 
            into a deep love for creating meaningful digital experiences.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            From crafting efficient algorithms in C to building interactive web applications, I enjoy the challenge 
            of turning complex problems into elegant solutions. Every project is an opportunity to learn something new 
            and push the boundaries of what's possible.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
              <Code className="w-4 h-4" />
              <span>Clean Code</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
              <Palette className="w-4 h-4" />
              <span>UI/UX Design</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30">
              <Zap className="w-4 h-4" />
              <span>Performance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
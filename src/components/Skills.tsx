import React from 'react';

interface Props {
  isVisible: boolean;
}

const Skills: React.FC<Props> = ({ isVisible }) => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "C", "Java", "Python"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Tailwind CSS", "Bootstrap"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Figma", "Linux"],
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Concepts",
      skills: ["Responsive Design", "Accessibility", "SEO", "OOP", "Data Structures", "Algorithms"],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          id="skills-content"
          data-animate
          className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
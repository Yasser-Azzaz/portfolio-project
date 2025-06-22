import React from 'react';

interface Props {
  scrollToSection: (id: string) => void;
}

const Navigation: React.FC<Props> = ({ scrollToSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
      <ul className="flex space-x-6">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 px-3 py-1 rounded-full hover:bg-white/10"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
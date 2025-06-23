import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
    aria-label="Toggle theme"
  >
    {isDark ? (
      <Sun className="w-5 h-5 text-yellow-400" />
    ) : (
      <Moon className="w-5 h-5 text-blue-600" />
    )}
  </button>
);

export default ThemeToggle;

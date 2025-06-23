import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const { isVisible } = useIntersectionObserver();

  const toggleTheme = () => setIsDark((prev) => !prev);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    // Scroll to top on refresh
    window.scrollTo(0, 0);

    // Restore theme preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') setIsDark(false);

    // Smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
      }`}
    >
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Navigation scrollToSection={scrollToSection} />

      <main>
        <Hero scrollToSection={scrollToSection} isVisible={isVisible('hero-content')} />
        <About isVisible={isVisible('about-content')} />
        <Projects isVisible={isVisible('projects-content')} />
        <Skills isVisible={isVisible('skills-content')} />
        <Contact isVisible={isVisible('contact-content')} />
      </main>

      <footer className="text-center py-8 border-t border-white/10">
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 Yasser Azzaz. Built with React, TypeScript, and lots of ☕
        </p>
      </footer>
    </div>
  );
};

export default App;

import React, { useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const App: React.FC = () => {
  const { isVisible } = useIntersectionObserver();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    // Always scroll to top on page load
    window.scrollTo(0, 0);

    // Restore saved DaisyUI theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
    }

    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen transition-all duration-500 bg-base-100 text-base-content">
      <ThemeToggle />
      <Navigation scrollToSection={scrollToSection} />

      <main>
        <Hero scrollToSection={scrollToSection} isVisible={isVisible('hero-content')} />
        <About isVisible={isVisible('about-content')} />
        <Projects isVisible={isVisible('projects-content')} />
        <Skills isVisible={isVisible('skills-content')} />
        <Contact isVisible={isVisible('contact-content')} />
      </main>

      <footer className="text-center py-8 border-t border-base-300">
        <p className="text-base-content/70">
          © 2025 Yasser Azzaz. Built with React, TypeScript, and lots of ☕
        </p>
      </footer>
    </div>
  );
};

export default App;

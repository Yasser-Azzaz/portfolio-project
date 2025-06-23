import React, { useEffect, useState } from 'react';

interface Props {
  isVisible: boolean;
}

const About: React.FC<Props> = ({ isVisible }) => {
  const fullText = `I'm Yasser Azzaz, a passionate web developer who loves crafting responsive and visually engaging websites using React, TypeScript, and Tailwind CSS. I enjoy solving problems and turning ideas into beautiful digital products.`;

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setDisplayedText('');
      setIndex(0);
      setHasStarted(true);
    }
  }, [isVisible, hasStarted]);

  useEffect(() => {
    if (!hasStarted || index >= fullText.length) return;
    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      setIndex((prev) => prev + 1);
    }, 25);
    return () => clearTimeout(timeout);
  }, [index, fullText, hasStarted]);

  const getHighlightedText = (text: string) => {
    const parts = text.split(/(Yasser Azzaz|React|TypeScript|Tailwind CSS)/g);
    return parts.map((part, i) => {
      if (part === 'Yasser Azzaz') {
        return <span key={i} className="font-bold text-blue-500 dark:text-yellow-300">{part}</span>;
      } else if (['React', 'TypeScript', 'Tailwind CSS'].includes(part)) {
        return <span key={i} className="text-purple-500 dark:text-pink-400 font-medium">{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-20">
      <div
        id="about-content"
        data-animate
        className="max-w-3xl mx-auto text-lg leading-7 transition-opacity duration-500"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="whitespace-pre-line font-medium tracking-wide">
          {getHighlightedText(displayedText)}
        </p>
      </div>
    </section>
  );
};

export default About;

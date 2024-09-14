"use client";

import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md'; // Import icons

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('dark-mode', newMode.toString());
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded bg-black-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center justify-center"
    >
      {isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
}

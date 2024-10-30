import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Add or remove the dark mode class on the body element
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav
      className={`flex justify-between items-center p-4 ${
        darkMode ? 'bg-gray-900' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"></div>
        <span className={`${darkMode ? 'text-gray-200' : 'text-white'} text-xl font-semibold`}>
          TextZen
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-pink-500 to-orange-500">
          Get started
        </button>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'}`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

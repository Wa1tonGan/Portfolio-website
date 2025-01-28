import React from 'react';

const Header = () => {
  // Function to handle smooth scrolling to sections
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white flex flex-col items-center py-8">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
        <img
          src="https://via.placeholder.com/150" // Replace with your profile image URL
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Your Name */}
      <h1 className="text-xl font-bold mb-8">Gan</h1>

      {/* Navigation Links */}
      <nav className="w-full">
        <ul className="space-y-4 text-center">
          <li>
            <button
              onClick={() => handleScroll('about')}
              className="w-full  px-6 py-2 hover:bg-gray-700 transition duration-300"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll('technical-skills')}
              className="w-full px-6 py-2 hover:bg-gray-700 transition duration-300"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll('Journey')}
              className="w-full px-6 py-2 hover:bg-gray-700 transition duration-300"
            >
              Journey
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll('projects')}
              className="w-full px-6 py-2 hover:bg-gray-700 transition duration-300"
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>

      {/* Social Links */}
      <div className="mt-auto flex space-x-4">
        <a
          href="https://www.linkedin.com/in/walton-gan-312241349/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
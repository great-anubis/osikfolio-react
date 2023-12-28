import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function smoothScrollTo(event, targetId) {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`dark:text-dark text-med dark:bg-light bg-dark w-full px-5 py-3 text-center flex justify-center items-center ${isSticky ? 'fixed top-0 z-50 shadow' : ''}`} id='home'>
      <a href="#home" onClick={(e) => smoothScrollTo(e, '#home')} className="mx-5 text-white no-underline block my-2.5 text-lg hover:text-med hover:rounded hover:px-2">
        Home
      </a>
      <a href="#about" onClick={(e) => smoothScrollTo(e, '#about')} className="mx-5 text-white no-underline block my-2.5 text-lg hover:text-med hover:rounded hover:px-2">
        About
      </a>
      <a href="#technologies" onClick={(e) => smoothScrollTo(e, '#technologies')} className="mx-5 text-white no-underline block my-2.5 text-lg hover:text-med hover:rounded hover:px-2">
        Skills
      </a>
      <a href="#projects" onClick={(e) => smoothScrollTo(e, '#projects')} className="mx-5 text-white no-underline block my-2.5 text-lg hover:text-med hover:rounded hover:px-2">
        Projects
      </a>
      <button onClick={() => setDarkMode(!darkMode)}>
        <img className='w-5 h-5' src='/images/darkmode.png' alt='DarkMode'></img>
      </button>
    </nav>
  );
}

export default Navbar;
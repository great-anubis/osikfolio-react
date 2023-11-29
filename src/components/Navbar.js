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

  return (
    <nav className={`text-dark w-full bg-light px-5 py-3 text-center flex justify-center items-center ${isSticky ? 'fixed top-0 z-50 shadow' : ''}`} id='home'>
      <a href="#home" onClick={(e) => smoothScrollTo(e, '#home')} className="mx-5 text-white no-underline block my-2.5 text-lg hover:text-med hover:rounded hover:px-2">
        Home
      </a>
      <a href="#about" onClick={(e) => smoothScrollTo(e, '#about')} className="mx-5 text-white no-underline block my-2.5 text-lg hover:text-med hover:rounded hover:px-2">
        About
      </a>
      <a href="#technologies" onClick={(e) => smoothScrollTo(e, '#technologies')} className="mx-5 text-white no-underline block my-2.5 text-lg hover:text-med hover:rounded hover:px-2">
        Technologies
      </a>
      <a href="#projects" onClick={(e) => smoothScrollTo(e, '#projects')} className="mx-5 text-white no-underline block my-2.5 text-lg hover:text-med hover:rounded hover:px-2">
        Projects
      </a>
      <a href="#links" onClick={(e) => smoothScrollTo(e, '#links')} className="mx-5 text-white no-underline block my-2.5 text-lg hover:text-med hover:rounded hover:px-2">
        Links
      </a>
    </nav>
  );
}

export default Navbar;
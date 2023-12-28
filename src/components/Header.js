import React from 'react';

function Header() {
  return (
    <header className="dark:text-dark text-med dark:bg-light bg-dark mx-12 py-5 my-5 text-center" id='home'>
      <img 
        src="/images/IMG_2020.jpeg" 
        alt="Great Osikhueme" 
        className="max-w-xs mb-5 mx-auto shadow-lg rounded-tl-lg rounded-tr-[50px] rounded-bl-[50px] rounded-br-lg"
      />
      <h1 className="text-4xl font-bold mb-4">Great Osikhueme</h1>
      <p className="text-lg">Software Developer</p>
      
      <nav className="flex flex-wrap justify-evenly mx-20 text-center">
        <a href="mailto:greatosik@gmail.com" aria-label="Contact me via Email">
          <img className="m-5 rounded w-12 h-12" src="/images/email.png" alt="Email" />
        </a>
        <a href="https://github.com/great-anubis" target="_blank" rel="noreferrer" aria-label="Visit my GitHub Profile" >
          <img className="m-5 rounded w-12 h-12" src="/images/github.png" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/great-osikhueme" target="_blank" rel="noreferrer" aria-label="Connect on LinkedIn">
          <img className="m-5 rounded w-12 h-12" src="/images/linkedin.png" alt="Linkedin" />
        </a>
        <a href="resume.pdf" target="_blank" rel="noreferrer" aria-label="View my Resume">
          <img className="m-5 rounded w-12 h-12" src="/images/resume.png" alt="Resume" />
        </a>
      </nav>
    </header>

    
  );
}

export default Header;
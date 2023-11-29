import React from 'react';

function Links() {
  return (
    <div className="text-dark mx-12 py-5 my-5 text-center" id='links'>
      <h2 className="text-3xl font-semibold mb-3 text-center">Links</h2>
      <nav className="flex flex-wrap justify-evenly mx-20 my-5 text-center">
        <a href="mailto:greatosik@gmail.com" aria-label="Contact me via Email" className="hover:text-gray-300">
          <button className="w-24 h-12 border-none rounded bg-gray-800 m-5 text-white cursor-pointer hover:bg-gray-700">Contact me</button>
        </a>
        <a href="resume.pdf" target="_blank" rel="noreferrer" aria-label="View my Resume" className="hover:text-gray-300">
          <button className="w-24 h-12 border-none rounded bg-gray-800 m-5 text-white cursor-pointer hover:bg-gray-700">My Resume</button>
        </a>
        <a href="https://github.com/great-anubis" target="_blank" rel="noreferrer" aria-label="Visit my GitHub Profile" className="text-gray-400 no-underline hover:text-gray-300">
          <button className="w-24 h-12 border-none rounded bg-gray-800 m-5 text-white cursor-pointer hover:bg-gray-700">Github</button>
        </a>
        <a href="https://www.linkedin.com/in/great-osikhueme" target="_blank" rel="noreferrer" aria-label="Connect on LinkedIn" className="text-gray-400 no-underline hover:text-gray-300">
          <button className="w-24 h-12 border-none rounded bg-gray-800 m-5 text-white cursor-pointer hover:bg-gray-700">Linkedin</button>
        </a>
      </nav>
    </div>

  );
}

export default Links;
import React from 'react';

function Header() {
  return (
    <header className="text-dark mx-12 py-5 my-5 text-center" id='home'>
      <img 
        src="/images/IMG_2020.jpeg" 
        alt="Great Osikhueme" 
        className="max-w-xs mb-5 mx-auto shadow-lg rounded-tl-lg rounded-tr-[50px] rounded-bl-[50px] rounded-br-lg"
      />
      <h1 className="text-4xl font-bold mb-4">Great Osikhueme</h1>
      <p className="text-lg">Software Developer</p>
    </header>
  );
}

export default Header;
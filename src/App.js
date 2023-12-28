import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=" dark:bg-light bg-dark m-auto py-5 flex flex-col items-center w-full" id="content">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
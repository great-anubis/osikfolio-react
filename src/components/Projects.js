import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './projects.css';


function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const projects = [
    {
        id: "osikfolio",
        title: "Osikfolio: a personal portfolio",
        description: "Developing a dynamic personal portfolio using react.js and tailwind.css",
        link: "#",
        imageUrl: "/images/portfolio.png",
        techStack: ['/images/react.png', '/images/tailwind.png', '/images/github.png', '/images/node.png']
    },
    {
        id: "bloomingMachine",
        title: "Blooming Machine",
        description: "Developed a machine learning model to classify iris flowers into three species using Python and Scikit-learn.",
        link: "#",
        imageUrl: "/images/blooming.png",
        techStack: ['/images/python.png', '/images/scikit.png', '/images/github.png', '/images/matplotlib.png', '/images/pandas.png', '/images/numpy.png', '/images/machine.png']
    },
    {
        id: "hangryB",
        title: "Hangry Boids",
        description: "Collaborated in a team of 4, playing a pivotal role in the development and enhancement of the game's core mechanics. Implemented intricate behaviors for unique game.",
        link: "#",
        imageUrl: "/images/boid.png",
        techStack: ['/images/csharp.png', '/images/unity.png', '/images/github.png', '/images/vscode.webp']
    },
    {
        id: "autoVehicle",
        title: "Autonomous Vehicle Algorithm",
        description: "Lead a team of 3 in the creation of a Java program to resolve moral dilemmas in autonomous vehicles.",
        link: "#",
        imageUrl: "/images/vehicle.png",
        techStack: ['/images/java-logo.png', '/images/github.png']
    },

  ];
  
  return (
        <div className="text-dark m-auto py-5 my-5 flex flex-col items-center w-full" id="projects">
            <h2 className="text-3xl font-semibold mb-3 text-center">My Projects</h2>
            <div className="w-full max-w-lg mx-auto" id="projectCarousel">
            <Slider {...settings}>
                {projects.map((project) => (
                    <div key={project.id} className="w-[500px] h-[700px] p-2.5 rounded-lg m-auto relative">
                        <div style={{ backgroundImage: `url(${project.imageUrl})` }} className="w-full h-full bg-cover bg-center rounded-lg">
                            <div className="w-full h-full absolute top-0 left-0 bg-light bg-opacity-50 rounded-lg"></div>
                            
                            {/* Project Description */}
                            <div className="absolute top-0 left-0 p-4">
                                <div className="projects-description p-4 rounded-lg">
                                    <h3 className='text-center text-2xl font-medium mb-2'>{project.title}</h3>
                                    <p className='text-center'>{project.description}</p>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="absolute bottom-5 left-0 right-0 p-4">
                                <div className="tech-stack flex justify-center items-center">
                                    {project.techStack.map((tech, index) => (
                                        <img key={index} src={tech} alt="Tech" className="h-6 w-6 mx-1" /> // Adjust size as needed
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            </div>
        </div>
    );
}  

export default Projects;

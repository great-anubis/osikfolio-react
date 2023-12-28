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
        id: "database",
        title: "Database for E-commerce Platform",
        description: " Designed and developed a MySQL database for e-commerce operations, focusing on requirements analysis, database structure design, and performance optimization. Collaborated in integrating the database with the application's frontend and backend.",
        link: "#",
        imageUrl: "/images/database.png",
        techStack: ['/images/html.png', '/images/css.png', '/images/JavaScript-logo.png', '/images/mySql.png']
    },
    {
        id: "osikfolio",
        title: "Osikfolio: a personal portfolio",
        description: "Created a personal portfolio website showcasing web development skills. Implemented a responsive and visually appealing user interface using React and Tailwind CSS, ensuring a seamless user experience.",
        link: "#",
        imageUrl: "/images/portfolio.png",
        techStack: ['/images/react.png', '/images/tailwind.png', '/images/git.png', '/images/node.png']
    },
    {
        id: "bloomingMachine",
        title: "Blooming Machine",
        description: "Developed a machine learning model using Python and Scikit-learn to classify iris species, achieving 90% accuracy on the test dataset. The project involved data visualization, model documentation, and emphasized the machine learning pipeline process.",
        link: "#",
        imageUrl: "/images/blooming.png",
        techStack: ['/images/python.png', '/images/scikit.png', '/images/git.png', '/images/matplotlib.png', '/images/pandas.png', '/images/numpy.png', '/images/machine.png']
    },
    {
        id: "hangryB",
        title: "Hangry Boids",
        description: "Contributed to a team project for a self-sustaining ecosystem simulation game. Focused on game core mechanics, script creation, and realistic entity behavior simulation using C# and Unity Engine. Demonstrated dedication and consistent contribution over 60+ days of development.",
        link: "#",
        imageUrl: "/images/boid.png",
        techStack: ['/images/c-sharp.png', '/images/unity.png', '/images/git.png', '/images/vscode.webp']
    },
    {
        id: "autoVehicle",
        title: "Autonomous Vehicle Algorithm",
        description: "Led a team in developing a Java utility class for a moral decision-making simulation in autonomous vehicles. The project involved creating diverse scenarios, ensuring code quality, and contributing to the simulation's successful execution.",
        link: "#",
        imageUrl: "/images/vehicle.png",
        techStack: ['/images/java-logo.png', '/images/git.png']
    },

  ];
  
  return (
        <div className="dark:text-dark text-med dark:bg-light bg-dark m-auto py-5 my-5 flex flex-col items-center" id="projects">
            <h2 className="text-3xl font-semibold mb-3 text-center">My Projects</h2>
            <div className="w-full max-w-lg mx-auto" id="projectCarousel">
            <Slider {...settings}>
                {projects.map((project) => (
                    <div key={project.id} className="h-[400px] w-[200px] p-2.5 rounded-lg m-auto relative">
                        <div style={{ backgroundImage: `url(${project.imageUrl})` }} className="w-full h-full bg-cover bg-center rounded-lg ">
                            <div className="w-full h-full absolute top-0 left-0 dark:bg-light bg-dark  bg-opacity-70 dark:bg-opacity-50 rounded-lg"></div>
                            
                            {/* Project Description */}
                            <div className="absolute top-0 left-0 p-4">
                                <div className="projects-description p-4 rounded-lg  mt-10">
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

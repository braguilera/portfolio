import React, { useState, useEffect } from 'react';
import Magnet from "../ui/Magnet";
import FlowingMenu from "../ui/FlowingMenu";
import { motion, AnimatePresence } from 'framer-motion';
import CardProjects from "../ui/CardProjects";
import SectionTitle from '../ui/SectionTitle';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size for responsive layout
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const projectsData = [
    {
      title: "Frontend Project",
      description: "Advanced web application with responsive design and modern UI components, providing an excellent user experience across all devices.",
      technologies: [
        { name: "React", icon: "react-icon" },
        { name: "Tailwind", icon: "tailwind-icon" },
      ],
      githubLink: "https://github.com/username/project",
      websiteLink: "https://project-demo.com",
      image: 'https://picsum.photos/600/400?random=1'
    },
    {
      title: "Backend Project",
      description: "Scalable server infrastructure built with performance in mind, supporting high traffic and complex data operations.",
      technologies: [
        { name: "Node.js", icon: "nodejs-icon" },
        { name: "Express", icon: "express-icon" },
      ],
      githubLink: "https://github.com/username/backend-project",
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      title: "Full Stack App",
      description: "Complete web solution integrating frontend and backend technologies for a seamless application experience.",
      technologies: [
        { name: "React", icon: "react-icon" },
        { name: "MongoDB", icon: "mongodb-icon" },
      ],
      githubLink: "https://github.com/username/fullstack-project",
      websiteLink: "https://fullstack-demo.com",
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application designed for both iOS and Android, with native-like performance and beautiful UI.",
      technologies: [
        { name: "React Native", icon: "react-native-icon" },
        { name: "Firebase", icon: "firebase-icon" },
      ],
      githubLink: "https://github.com/username/mobile-app",
      image: 'https://picsum.photos/600/400?random=4'
    },
        {
      title: "Frontend Project",
      description: "Advanced web application with responsive design and modern UI components, providing an excellent user experience across all devices.",
      technologies: [
        { name: "React", icon: "react-icon" },
        { name: "Tailwind", icon: "tailwind-icon" },
      ],
      githubLink: "https://github.com/username/project",
      websiteLink: "https://project-demo.com",
      image: 'https://picsum.photos/600/400?random=1'
    },
    {
      title: "Backend Project",
      description: "Scalable server infrastructure built with performance in mind, supporting high traffic and complex data operations.",
      technologies: [
        { name: "Node.js", icon: "nodejs-icon" },
        { name: "Express", icon: "express-icon" },
      ],
      githubLink: "https://github.com/username/backend-project",
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      title: "Full Stack App",
      description: "Complete web solution integrating frontend and backend technologies for a seamless application experience.",
      technologies: [
        { name: "React", icon: "react-icon" },
        { name: "MongoDB", icon: "mongodb-icon" },
      ],
      githubLink: "https://github.com/username/fullstack-project",
      websiteLink: "https://fullstack-demo.com",
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application designed for both iOS and Android, with native-like performance and beautiful UI.",
      technologies: [
        { name: "React Native", icon: "react-native-icon" },
        { name: "Firebase", icon: "firebase-icon" },
      ],
      githubLink: "https://github.com/username/mobile-app",
      image: 'https://picsum.photos/600/400?random=4'
    },
  ];

  const demoItems = projectsData.map(project => ({
    text: project.title,
    image: project.image
  }));

  const handleProjectSelect = (projectTitle) => {
    const project = projectsData.find(p => p.title === projectTitle);
    
    setSelectedProject(null);
    
    setTimeout(() => {
      setSelectedProject(project);
    }, 300);
  };

  return (
    <section id="projects" className="min-h-screen w-full px-4 md:px-8 py-12 flex flex-col justify-center items-center">
      <SectionTitle title={'Proyectos'}></SectionTitle>

      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        className="text-slate-600 max-w-5xl mb-8 md:mb-12"
      >
        Selecciona un proyecto del menú interactivo para ver más detalles sobre las tecnologías utilizadas y acceder a demos o código fuente.
      </motion.p>
      
      <main className="flex flex-col xl:flex-row justify-between items-center gap-4 w-7xl h-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          className="relative w-1/3 sm:w-2/3 xl:w-full bg-purple-50 p4 overflow-hidden rounded-xl shadow-md"
          style={{ height: '500px' }}
        >
          <FlowingMenu 
            items={demoItems} 
            onSelect={handleProjectSelect}
          />
        </motion.div>
        
        <div className="w-1/4 sm:w-2/3 xl:w-full h-full flex justify-center items-center">
            <AnimatePresence mode="wait">
              {selectedProject ? (
                <CardProjects 
                  key={selectedProject.title}
                  project={selectedProject}
                  isVisible={true}
                />
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: 100,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  className="bg-purple-50/50 rounded-xl p-8 h-full border-2 border-dashed border-purple-200 flex flex-col items-center justify-center"
                  style={{ height: '500px', width: '100%' }}
                >
                  <div 
                    className="text-center"
                  >
                    <i className="bx bx-code-block text-4xl text-purple-400 mb-4"></i>
                    <p className="text-purple-600 font-medium">Selecciona un proyecto para ver los detalles</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      </main>
    </section>
  );
};

export default Projects;
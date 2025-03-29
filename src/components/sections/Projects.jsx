import React, { useState, useEffect } from 'react';
import Magnet from "../ui/Magnet";
import FlowingMenu from "../ui/FlowingMenu";
import { motion, AnimatePresence } from 'framer-motion';
import CardProjects from "../ui/CardProjects";

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
    
    // Using the exit animation properly
    setSelectedProject(null);
    
    // Adding a small delay for the new project to enter after the previous one exits
    setTimeout(() => {
      setSelectedProject(project);
    }, 300);
  };

  return (
    <section className="min-h-screen w-full px-4 md:px-8 py-12 bg-gradient-to-br from-white to-purple-50/50">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-4xl font-bold text-slate-800 mb-4 md:mb-8"
      >
        Proyectos
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        className="text-slate-600 max-w-2xl mb-8 md:mb-12"
      >
        Selecciona un proyecto del menú interactivo para ver más detalles sobre las tecnologías utilizadas y acceder a demos o código fuente.
      </motion.p>
      
      <main className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-1 lg:grid-cols-5 gap-6'} h-full`}>
        {/* Project List - Fixed Height */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          className={`relative ${isMobile ? '' : 'lg:col-span-2'} overflow-hidden rounded-xl shadow-md`}
          style={{ height: '500px' }}
        >
          <FlowingMenu 
            items={demoItems} 
            onSelect={handleProjectSelect}
          />
        </motion.div>
        
        {/* Project Card - Fixed Height */}
        <div className={`${isMobile ? '' : 'lg:col-span-3'}`} style={{ height: '500px' }}>
          <Magnet 
            padding={40} 
            magnetStrength={40} 
            wrapperClassName="h-full flex items-center justify-center" 
            innerClassName="h-full w-full flex items-center justify-center"
          >
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
                  <motion.div 
                    animate={{ 
                      x: [-5, 5, -5],
                      transition: {
                        x: {
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut"
                        }
                      }
                    }}
                    className="text-center"
                  >
                    <i className="bx bx-code-block text-4xl text-purple-400 mb-4"></i>
                    <p className="text-purple-600 font-medium">Selecciona un proyecto para ver los detalles</p>
                    <motion.div 
                      className="mt-4 flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <i className="bx bx-chevrons-left text-2xl text-purple-400 animate-pulse"></i>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </Magnet>
        </div>
      </main>
    </section>
  );
};

export default Projects;
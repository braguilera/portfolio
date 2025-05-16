import React, { useState, useEffect } from 'react';
import Magnet from "../ui/Magnet";
import FlowingMenu from "../ui/FlowingMenu";
import { motion, AnimatePresence } from 'framer-motion';
import CardProjects from "../ui/CardProjects";
import SectionTitle from '../ui/SectionTitle';
import projectsJson from '../../assets/translations/projects.json'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const projectsData = projectsJson;

  const demoItems = projectsData.map(project => ({
    text: project.title,
    image: project.backgroundImage
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
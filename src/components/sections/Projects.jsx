import React, { useState } from 'react'
import Magnet from "../ui/Magnet"
import FlowingMenu from "../ui/FlowingMenu"
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  
  const projectsData = [
    {
      title: "Frontend Project",
      description: " web application  web application  web application  web application  web application",
      technologies: [
        { name: "React", icon: "react-icon" },
        { name: "Tailwind", icon: "tailwind-icon" },
      ],
      githubLink: "https://github.com/username/project",
      websiteLink: "https://project-demo.com",
    },
    {
      title: "Backend Project",
      description: "Scalable server infrastructure",
      technologies: [
        { name: "Node.js", icon: "nodejs-icon" },
        { name: "Express", icon: "express-icon" },
      ],
      githubLink: "https://github.com/username/backend-project",
    },
    {
      title: "Full Stack App",
      description: "Complete web solution",
      technologies: [
        { name: "React", icon: "react-icon" },
        { name: "MongoDB", icon: "mongodb-icon" },
      ],
      githubLink: "https://github.com/username/fullstack-project",
      websiteLink: "https://fullstack-demo.com",
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application",
      technologies: [
        { name: "React Native", icon: "react-native-icon" },
        { name: "Firebase", icon: "firebase-icon" },
      ],
      githubLink: "https://github.com/username/mobile-app",
    },
  ]

  const demoItems = [
    {text: 'Frontend Project', image: 'https://picsum.photos/600/400?random=1' },
    {text: 'Backend Project', image: 'https://picsum.photos/600/400?random=2' },
    {text: 'Full Stack App', image: 'https://picsum.photos/600/400?random=3' },
    {text: 'Mobile App', image: 'https://picsum.photos/600/400?random=4' }
  ];
  

  const getTechIcon = (techName) => {
    const iconMap = {
      React: <i className='bx bxl-react text-purple-600 text-lg'></i>,
      Tailwind: <i className='bx bx-palette text-purple-600 text-lg'></i>,
      'Node.js': <i className='bx bxl-nodejs text-purple-600 text-lg'></i>,
      Express: <i className='bx bx-network-chart text-purple-600 text-lg'></i>,
      MongoDB: <i className='bx bxl-mongodb text-purple-600 text-lg'></i>,
      'React Native': <i className='bx bxl-react text-purple-600 text-lg'></i>,
      Firebase: <i className='bx bxl-firebase text-purple-600 text-lg'></i>
    }
    return iconMap[techName] || <i className='bx bx-code text-purple-600 text-lg'></i>
  }

  const handleProjectSelect = (projectTitle) => {
    const project = projectsData.find(p => p.title === projectTitle)
    setSelectedProject(project)
  }

  return (
    <section className='h-screen w-full px-8 py-12'>
      <h1 className='text-4xl font-bold text-slate-800 mb-12'>Proyectos</h1>
      
      <main className='grid grid-cols-1 lg:grid-cols-2 h-full gap-8'>
        <div className='relative h-[600px] overflow-hidden'>
          <FlowingMenu 
            items={demoItems} 
            onSelect={handleProjectSelect}
          />
        </div>
        
        <Magnet padding={50} magnetStrength={50} wrapperClassName={'h-full flex items-center justify-center'} innerClassName={'h-90 w-90 flex items-center justify-center'}>
          <AnimatePresence mode='wait'>
            {selectedProject ? (
              <motion.aside
                key={selectedProject.title}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.5
                  }
                }}
                exit={{
                  opacity: 0,
                  x: 50,
                  transition: { 
                    type: "spring", 
                    stiffness: 250,
                    damping: 25
                  }
                }}
                className='bg-white rounded-2xl shadow-lg border border-purple-100 p-8 h-fit'
              >
                <div className='relative z-10'>
                  <div className='flex flex-col gap-4 mb-6'>
                    <h3 className='text-2xl font-bold text-slate-800'>{selectedProject.title}</h3>
                    <p className='text-slate-600 leading-relaxed'>{selectedProject.description}</p>
                  </div>

                  {selectedProject.technologies?.length > 0 && (
                    <div className='mb-8'>
                      <div className='flex items-center gap-2 mb-4'>
                        <i className='bx bx-code-alt text-purple-500 text-xl'></i>
                        <span className='font-medium text-slate-600'>Tecnologías utilizadas</span>
                      </div>
                      <div className='flex flex-wrap gap-3'>
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ 
                            scale: 1, 
                            opacity: 1,
                            transition: {
                              type: "spring",
                              delay: index * 0.05,
                              stiffness: 350,
                              damping: 12
                            }
                          }}
                          className='flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-200'
                        >
                          {getTechIcon(tech.name)}
                          <span className='text-sm text-purple-800'>{tech.name}</span>
                        </motion.div>
                      ))}
                      </div>
                    </div>
                  )}

                  <div className='flex gap-4 mt-6'>
                    {selectedProject.githubLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={selectedProject.githubLink}
                        target='_blank'
                        className='flex items-center gap-2 px-5 py-2.5 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors'
                      >
                        <Github size={20} className='text-purple-600' />
                        <span className='text-purple-800 font-medium'>Código</span>
                      </motion.a>
                    )}
                    {selectedProject.websiteLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={selectedProject.websiteLink}
                        target='_blank'
                        className='flex items-center gap-2 px-5 py-2.5 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors'
                      >
                        <ExternalLink size={20} className='text-purple-600' />
                        <span className='text-purple-800 font-medium'>Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.aside>
            ) : (
              <motion.div
  key='placeholder'
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 15
    }
  }}
  className='bg-purple-50/50 rounded-2xl p-8 h-full border-2 border-dashed border-purple-200'
>
                <div className='flex flex-col items-center justify-center h-full text-center'>
                  <i className='bx bx-code-block text-4xl text-purple-400 mb-4'></i>
                  <p className='text-purple-600 font-medium'>Selecciona un proyecto para ver los detalles</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Magnet>
      </main>
    </section>
  )
}

export default Projects
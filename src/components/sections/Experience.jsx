import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CardExperience from '../ui/CardExperience';
import SectionTitle from '../ui/SectionTitle';

const TimelinePoint = ({ isInView }) => {
  return (
    <div className="relative z-10 flex items-center justify-center">
      <motion.div 
        className="w-6 h-6 rounded-full bg-white border-2 border-purple-600 z-20 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { 
          scale: 1,
          opacity: 1,
          transition: { 
            type: "spring",
            stiffness: 260,
            damping: 20
          }
        } : {}}
      >
        <motion.div 
          className="w-3 h-3 rounded-full bg-purple-600"
          initial={{ scale: 0 }}
          animate={isInView ? { 
            scale: 1,
            transition: { 
              delay: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          } : {}}
        />
      </motion.div>
    </div>
  );
};

// Timeline item component
const TimelineItem = ({ data, index }) => {
  const isRight = index % 2 === 0;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px',
  });

  return (
    <div ref={ref} className="relative w-full flex flex-col md:h-auto md:my-12">
      {/* Mobile view (vertical timeline) */}
      <div className="block md:hidden relative mb-6">
        <div className="flex items-start relative pl-16 pr-4 pb-6">
          <div className="absolute left-1 top-1/2 -translate-y-1/2 z-10">
            <TimelinePoint isInView={inView} />
          </div>
          
          <motion.div 
            className="w-full"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardExperience {...data} />
          </motion.div>
        </div>
      </div>

      {/* Desktop view (alternating timeline) */}
      <div className="hidden md:block relative">
        <div className="relative flex items-center py-10">
          <div className="absolute left-1/2 -translate-x-1/2 z-10">
            <TimelinePoint isInView={inView} />
          </div>

          <div className="container mx-auto px-4">
            <div className="flex justify-between items-stretch">
              {!isRight ? (
                <>
                  <motion.div 
                    className="w-5/12"
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CardExperience {...data} />
                  </motion.div>
                  <div className="w-2/12" />
                  <div className="w-5/12" />
                </>
              ) : (
                <>
                  <div className="w-5/12" />
                  <div className="w-2/12" />
                  <motion.div 
                    className="w-5/12"
                    initial={{ x: 100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CardExperience {...data} />
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Experience component
const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["5% 80%", "end end"]
  });

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      date: "2023 - Presente",
      description: "Desarrollo de aplicaciones web modernas con React y NextJS. Implementación de arquitecturas escalables y optimización de rendimiento. Liderazgo técnico de un equipo de 5 desarrolladores.",
      technologies: ["React", "NextJS", "TypeScript", "Tailwind CSS", "GraphQL"],
      githubUrl: "https://github.com/user/project1",
      demoUrl: "https://demo-project1.com",
      backgroundImage: "/api/placeholder/400/250"
    },
    {
      title: "Desarrollador Full Stack",
      company: "Digital Innovations",
      date: "2021 - 2023",
      description: "Desarrollo y mantenimiento de aplicaciones web empresariales. Creación de APIs RESTful y optimización de bases de datos. Implementación de sistemas de autenticación y autorización.",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Docker"],
      githubUrl: "https://github.com/user/project2",
      backgroundImage: "/api/placeholder/400/250"
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      date: "2019 - 2021",
      description: "Desarrollo de sitios web interactivos para clientes de diversos sectores. Implementación de diseños responsive y optimización para SEO. Colaboración con diseñadores UX/UI.",
      technologies: ["JavaScript", "SASS", "Webpack", "jQuery", "WordPress"],
      demoUrl: "https://demo-project3.com",
      backgroundImage: "/api/placeholder/400/250"
    },
    {
      title: "Desarrollador Jr.",
      company: "Startup Technologies",
      date: "2018 - 2019",
      description: "Desarrollo de prototipos y MVPs para startups tecnológicas. Implementación de funcionalidades frontend y backend básicas. Participación en reuniones de planificación y revisión.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      backgroundImage: "/api/placeholder/400/250"
    }
  ];

  return (
    <section ref={containerRef} className='w-full min-h-screen py-12 md:py-24 flex flex-col items-center justify-start relative bg-violet-100'>
      <div className="container mx-auto px-4">
        <SectionTitle title={'Experiencia'} />
        
        <div className="relative">
          {/* Mobile timeline line - animated as you scroll */}
          <div className="block md:hidden absolute left-4 top-0 h-full w-0.5 bg-purple-300">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-purple-600 origin-top"
              style={{ 
                height: '100%',
                scaleY: scrollYProgress,
                transformOrigin: 'top'
              }}
            />
          </div>
          
          {/* Desktop timeline line - animated as you scroll */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-purple-200">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-purple-600 origin-top"
              style={{ 
                height: '100%',
                scaleY: scrollYProgress,
                transformOrigin: 'top'
              }}
            />
          </div>
          
          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={index} 
                data={exp} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
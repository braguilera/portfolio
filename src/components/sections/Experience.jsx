import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CardExperience from '../ui/CardExperience';
import GradientText from '../ui/GradientText';
import SectionTitle from '../ui/SectionTitle';

const TimelinePoint = ({ isRight, isInView }) => {
  return (
    <div className="relative z-10 w-full h-6 flex items-center justify-center">
      <motion.div 
        className={`absolute h-0.5 bg-purple-600 ${isRight ? 'left-1/2' : 'right-1/2'}`}
        style={{
          width: '5%',
          transformOrigin: isRight ? 'left' : 'right'
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { 
          scaleX: 1,
          transition: { 
            duration: 0.6,
            ease: [0.65, 0, 0.35, 1] 
          }
        } : { scaleX: 0 }}
      />
      
      <motion.div 
        className="w-6 h-6 rounded-full bg-white border-2 border-purple-600 z-20 flex items-center justify-center absolute"
        style={{
          left: '49.3%',
          transform: 'translateX(-50%)'
        }}
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
              delay: 0.3,
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

const TimelineItem = ({ data, index }) => {
  const isRight = index % 2 === 0;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
    rootMargin: '-50px 0px',
  });

  return (
    <div ref={ref} className="relative w-full h-56 flex items-center justify-center my-12">
      <div className="absolute left-1/2 -translate-x-1/2 w-full">
        <TimelinePoint isRight={isRight} isInView={inView} />
      </div>

      <div className="container mx-auto relative">
        <div className="flex justify-between">
          {!isRight && (
            <motion.div 
              className="w-[45%]"
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CardExperience {...data} />
            </motion.div>
          )}

          <div className="w-[10%]" />

          {isRight && (
            <motion.div 
              className="w-[45%]"
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CardExperience {...data} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { scrollYProgress } = useScroll();

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
    <section className='w-full min-h-screen py-24 flex flex-col items-center justify-start relative bg-violet-100'>
      <SectionTitle title={'Experiencia'}></SectionTitle>

      <div className="container mx-auto relative px-4">
        <motion.div 
          className="absolute left-1/2 h-full w-0.5 bg-purple-300 origin-top z-0"
          style={{ 
            scaleY: scrollYProgress,
            transform: 'translateX(-50%)'
          }}
        />
        
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
    </section>
  );
};

export default Experience;
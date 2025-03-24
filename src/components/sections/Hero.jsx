import React from 'react'
import { motion } from 'framer-motion'
import ButtonSocial from '../ui/ButtonSocial'
import GradientText from '../ui/GradientText'
import CardExperienceFloating from '../ui/CardExperienceFloating'

const Hero = () => {

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
    <section className='w-full h-[90vh] flex items-center justify-center relative overflow-hidden'>

      <main className='flex flex-col w-3/4 text-center justify-center items-center gap-8 z-10'>
        <h1 className='text-5xl'>Soy <span className='text-purple-800 font-bold '>Braian Alejandro Aguilera</span>, un fullstack enfocado en el desarrollo</h1>
        <GradientText/>
        <button className='bg-purple-600 text-white font-bold px-4 py-2 rounded-3xl'>Descargar CV</button>
      </main>

      {/* Mapeo de experiencias */}
      {experiences.map((experience, index) => (
        <CardExperienceFloating
          key={index}
          index={index}
          totalItems={experiences.length}
          date={experience.date}
          title={experience.title}
          company={experience.company}
          description={experience.description}
        />
      ))}

      <ButtonSocial/>
    </section>
  )
}

export default Hero
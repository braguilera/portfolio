import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import GeometricShapes from "../ui/GeometricShapes"
import CardExperienceFloating from "../ui/CardExperienceFloating"
import BraianImg from "../../assets/images/Braian.png"

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  const projectsData = [
    {
      title: "Frontend Project",
      description: "Responsive web application",
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

  // Definir posiciones para las tarjetas con mayor inclinación hacia la imagen
  const cardPositions = [
    {
      initialX: -120,
      initialY: -120,
      expandedX: -200,
      expandedY: -180,
      position: "topLeft",
    },
    {
      initialX: 120,
      initialY: -120,
      expandedX: 200,
      expandedY: -180,
      position: "topRight",
    },
    {
      initialX: -120,
      initialY: 120,
      expandedX: -200,
      expandedY: 180,
      position: "bottomLeft",
    },
    {
      initialX: 120,
      initialY: 120,
      expandedX: 200,
      expandedY: 180,
      position: "bottomRight",
    },
  ]

  return (
    <div className="h-[90vh] w-screen flex justify-center relative px-8 py-4 text-slate-700">
      <GeometricShapes />

      <div className="w-4xl mb-12 flex flex-col">
        <div className="mb-8 flex items-center space-x-2">
          <div className="h-px w-12 bg-purple-800/50"></div>
          <span className="text-sm font-light tracking-wider">2021</span>
        </div>

        <motion.h1
          className="text-4xl text-center md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Soy <span className="text-purple-900">Braian Alejandro Aguilera</span>,<br />
          <span className="text-3xl md:text-4xl">un fullstack enfocado en el desarrollo</span>
        </motion.h1>

        <motion.h2
          className="text-8xl text-center md:text-7xl font-bold mb-8 text-purple-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          FRONTEND
        </motion.h2>

        <motion.p
          className="mb-8 text-lg font-light leading-relaxed max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          A wonderful serenity has taken possession of my entire.
        </motion.p>

        <motion.button
          className="group flex w-fit cursor-pointer items-center space-x-2 rounded-full border border-purple-800/20 bg-purple-800/10 px-6 py-3 backdrop-blur-sm transition-all hover:bg-purple-800/20"
          whileHover={{ scale: 1.05 }}
        >
          <span>Descargar CV</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>

      <div className="flex-1 absolute -bottom-10 z-10 flex items-center justify-center h-96">
        <motion.div
          className="relative cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Contenedor para las tarjetas y la imagen */}
          <div className="relative flex items-center justify-center">
            {/* Tarjetas posicionadas alrededor de la imagen */}
            {projectsData.slice(0, 4).map((project, index) => (
              <CardExperienceFloating
                key={index}
                project={project}
                position={cardPositions[index]}
                isExpanded={isHovered}
                index={index}
              />
            ))}

            {/* Imagen de perfil encima de las tarjetas */}
            <motion.div
              className="relative z-30 w-[300px] h-[400px] flex items-center justify-center"
              animate={{
                scale: isHovered ? 1.1 : 1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Borde azul como en la imagen de referencia */}
              <div className="absolute w-full h-full transform rotate-3"></div>

              <img
                src={BraianImg}
                alt="Braian Alejandro Aguilera"
                className="w-full h-full object-cover object-center"
              />

              {/* Texto flotante que sale desde detrás de la imagen */}
              <motion.div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-40 w-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: isHovered ? -30 : 100,
                  opacity: isHovered ? 1 : 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
              >
                <div className="bg-gradient-to-r from-purple-600/90 to-indigo-600/90 text-white px-6 py-3 rounded-full backdrop-blur-sm shadow-lg text-center font-medium">
                  Descubre mis proyectos
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero


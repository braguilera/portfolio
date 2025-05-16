import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, File } from "lucide-react"
import GeometricShapes from "../ui/GeometricShapes"
import CardExperienceFloating from "../ui/CardExperienceFloating"
import BraianImg from "../../assets/images/Braian.png"
import ButtonSocial from "../ui/ButtonSocial"
import RotatingText from "../ui/RotatingText"
import projectsJson from '../../assets/translations/projects.json'
import cvRuta from '../../../public/CV-Aguilera-Braian-Alejandro.pdf'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  const projectsData = projectsJson;

  const cardPositions = [
    {
      initialX: -100,
      initialY: -200,
      expandedX: -200,
      expandedY: -180,
      position: "topLeft",
    },
    {
      initialX: 100,
      initialY: -200,
      expandedX: 200,
      expandedY: -180,
      position: "topRight",
    },
    {
      initialX: -160,
      initialY: 10,
      expandedX: -300,
      expandedY: 10,
      position: "bottomLeft",
    },
    {
      initialX: 160,
      initialY: 10,
      expandedX: 300,
      expandedY: 10,
      position: "bottomRight",
    },
  ]
  
  return (
    <div id="hero" className="h-[90vh] w-screen flex justify-center relative px-8 py-4 text-slate-700">
      <GeometricShapes />
      <ButtonSocial/>

      <div className="w-mdp-4 md:w-4xl xl:w-7xl my-12 flex flex-col">
        <div className="mb-8 flex items-center space-x-2">
          <div className="h-px w-4 xl:w-12 bg-purple-800/50"></div>
          <span className=" xl:text-2xl font-light tracking-wider">Braian Alejandro Aguilera</span>
        </div>

        <motion.h2
          className="w-full text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-bold xl:mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Desarrollador <span className="text-purple-800">Front-End</span>
        </motion.h2>

        <article className="w-fit flex flex-col md:text-4xl gap-2 md:gap-4 text-xl sm:text-2xl xl:text-5xl font-bold items-start">
          <h1> dedicado a la construcción de </h1>
          <RotatingText
            texts={['interfaces modernas', 'aplicaciones interactivas', 'soluciones digitales']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-purple-800 text-purple-100 overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </article>

        <motion.p
          className="mb-8 mt-2 text-sm md:text-xl w-72 md:w-xl font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Especializado en crear aplicaciones web modernas y soluciones digitales eficientes.
        </motion.p>

        <a
          href={cvRuta}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            className="group flex w-fit cursor-pointer text-sm md:text-lg items-center space-x-2 rounded-full border border-purple-800/20 bg-purple-600 px-4 py-2 backdrop-blur-sm transition-all hover:bg-purple-700 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <File className="h-4 w-4" />
            <span>Descargar CV</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </a>
      </div>

      <div className="hidden md:flex-1 absolute -bottom-10 right-60 lg:right-80 z-10 md:flex items-center justify-center h-96">
        <motion.div
          className="relative cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="relative flex items-center justify-center">
            {projectsData.slice(0, 4).map((project, index) => (
              <CardExperienceFloating
                key={index}
                project={project}
                position={cardPositions[index]}
                isExpanded={isHovered}
                index={index}
              />
            ))}

            <motion.div
              className="relative z-10 md:w-[300px] md:h-[400px] flex items-center justify-center"
              animate={{
                scale: isHovered ? 1.1 : 1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >

              <img
                src={BraianImg}
                alt="Braian Alejandro Aguilera"
                className="w-full h-full object-cover object-center"
              />

              <motion.div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-40 w-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: isHovered ? -10 : 100,
                  opacity: isHovered ? 1 : 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
              >
                <div className="text-purple-900 text-center text-2xl font-bold">
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


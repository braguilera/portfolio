"use client"

import { useEffect } from "react"
import { motion, useMotionValue, animate } from "framer-motion"
import { bxCode, bxGlobe, bxServer, bxData, bxMobile, bxLayer, bxGitRepoForked } from "boxicons"
import { Github, ExternalLink, Code2, Server, Database, Smartphone, Layers, Globe } from "lucide-react"

const CardExperienceFloating = ({ project, position, isExpanded, index }) => {
  const x = useMotionValue(position.initialX)
  const y = useMotionValue(position.initialY)
  const opacity = useMotionValue(0.7)

  useEffect(() => {
    // Calculamos el retraso basado en el índice para la animación en cascada
    const delay = index * 0.1

    // Animación de posición
    const animations = [
      animate(x, isExpanded ? position.expandedX : position.initialX, {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }),
      animate(y, isExpanded ? position.expandedY : position.initialY, {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }),
      animate(opacity, isExpanded ? 1 : 0.7, {
        duration: 0.3,
        delay: delay,
      }),
    ]

    return () => animations.forEach((animation) => animation.stop())
  }, [isExpanded, position, index])

  // Variantes para la animación de las skills en cascada
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  // Función para obtener el icono correspondiente a cada tecnología
  const getTechIcon = (techName) => {
    const iconMap = {
      React: <i className='bx bxl-react text-purple-100 text-lg'></i>,
      Tailwind: <i className='bx bxl-tailwind-css text-purple-100 text-lg' ></i>,
      "Node.js": <i className='bx bx-server text-purple-100 text-lg'></i>,
      Express: <i className='bx bx-network-chart text-purple-100 text-lg'></i>,
      MongoDB: <i className='bx bx-data text-purple-100 text-lg'></i>,
      "React Native": <i className='bx bx-mobile-alt text-purple-100 text-lg'></i>,
      Firebase: <i className='bx bx-cloud text-purple-100 text-lg'></i>,
      GraphQL: <i className='bx bx-shape-circle text-purple-100 text-lg'></i>,
      TypeScript: <i className='bx bx-code-curly text-purple-100 text-lg'></i>
    }

    return iconMap[techName] || <i className='bx bx-code text-purple-100 text-lg'></i>
  }

  // Determinar la rotación basada en la posición
  const getCardStyle = () => {
    if (position.position.includes("Left")) {
      return "transform -rotate-12 perspective-200"
    } else {
      return "transform rotate-12 perspective-200"
    }
  }

  return (
    <motion.div
      style={{
        x,
        y,
        opacity,
        zIndex: isExpanded ? 10 : 0,
        position: "absolute",
      }}
      className={`w-64 bg-white rounded-2xl shadow-xl p-4 border-2 border-purple-100 ${getCardStyle()}`}
      whileHover={{
        scale: isExpanded ? 1.05 : 1,
        zIndex: 20,
        transition: { type: "spring" },
      }}
    >
      <h3 className="text-lg font-bold text-purple-800 truncate">{project.title}</h3>

      <motion.div
        className="overflow-hidden"
        initial={{ height: 0 }}
        animate={{
          height: isExpanded ? "auto" : 0,
          transition: { delay: index * 0.05 },
        }}
      >
        <p className="text-sm text-purple-600 mt-2">{project.description}</p>

        <div className="flex gap-3">
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              className="p-2 hover:bg-purple-100 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                transition: { delay: 0.3 + index * 0.1 },
              }}
            >
              <i className='bx bxl-github text-purple-600 text-xl'></i>
            </motion.a>
          )}
          {project.websiteLink && (
            <motion.a
              href={project.websiteLink}
              className="p-2 hover:bg-purple-100 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                transition: { delay: 0.4 + index * 0.1 },
              }}
            >
              <i className='bx bx-link-external text-purple-600 text-xl'></i>
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* Iconos de Skills */}
      {isExpanded && (
        <motion.div
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.2 + index * 0.1 },
          }}
        >
          {project.technologies.slice(0, 3).map((tech, i) => (
            <motion.div
              key={i}
              className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  delay: 0.3 + index * 0.1 + i * 0.1,
                  type: "spring",
                },
              }}
            >
              {getTechIcon(tech.name)}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

export default CardExperienceFloating


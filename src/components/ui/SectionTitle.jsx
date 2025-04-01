"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  colorScheme = "purpleHarmony", // Cambiado a un esquema que armoniza mejor
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  // Esquemas de color
  const colorSchemes = {
    purple: {
      primary: "from-purple-600 to-indigo-700",
      secondary: "text-purple-600",
      accent: "bg-purple-200",
      decoration: "from-purple-500 via-indigo-500 to-purple-500",
    },
    blue: {
      primary: "from-blue-600 to-indigo-700",
      secondary: "text-blue-600",
      accent: "bg-blue-200",
      decoration: "from-blue-500 via-indigo-500 to-blue-500",
    },
    gradient: {
      primary: "from-purple-600 via-pink-500 to-amber-500",
      secondary: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500",
      accent: "bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200",
      decoration: "from-purple-500 via-pink-500 to-amber-500",
    },
    // Nuevo esquema que armoniza mejor con la página
    purpleHarmony: {
      primary: "from-purple-700 to-indigo-600",
      secondary: "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600",
      accent: "bg-purple-200",
      decoration: "from-purple-700 via-indigo-600 to-purple-500",
    },
  }

  const colors = colorSchemes[colorScheme]

  // Clases de alineación
  const alignClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  }

  // Efecto para iniciar animación cuando está en vista
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Dividir el título en caracteres para animación
  const titleChars = title.split("")

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  }

  const charVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      rotateY: 90,
      scale: 1.2,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  const decorationVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.5,
      },
    },
  }

  const subtitleVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.7,
      },
    },
  }

  const hexagonVariants = {
    hidden: {
      scale: 0,
      rotate: -30,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  }

  return (
    <div ref={ref} className={`relative flex flex-col ${alignClasses[align]} mb-16 w-full overflow-hidden`}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <motion.div
          className={`absolute top-1/2 left-0 h-px w-full bg-gradient-to-r ${colors.decoration}`}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={controls}
          variants={decorationVariants}
          style={{ originX: align === "right" ? 1 : 0 }}
        />

        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 0.5,
              transition: { delay: 0.3, duration: 0.8 },
            },
          }}
        />

        <motion.div
          className="absolute -bottom-20 -right-10 w-60 h-60 rounded-full bg-indigo-500/10 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 0.5,
              transition: { delay: 0.5, duration: 0.8 },
            },
          }}
        />
      </div>

      {/* Hexágono decorativo */}
      <motion.div
        className="absolute -z-10"
        style={{
          left: align === "center" ? "50%" : align === "left" ? "0" : "auto",
          right: align === "right" ? "0" : "auto",
          top: "50%",
          x: align === "center" ? "-50%" : "0",
          y: "-50%",
        }}
        initial="hidden"
        animate={controls}
        variants={hexagonVariants}
      >
        <div className="w-40 h-40 opacity-10">
          <div className="w-full h-full clip-hexagon bg-gradient-to-br from-purple-500 to-indigo-600"></div>
        </div>
      </motion.div>

      {/* Contenedor del título con efecto 3D */}
      <div className="perspective-1000 mb-6">
        <motion.div className="relative" initial="hidden" animate={controls} variants={containerVariants}>
          {/* Título con animación por carácter */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black flex flex-wrap justify-center md:justify-start gap-x-3 tracking-tight">
            {titleChars.map((char, index) => (
              <motion.span
                key={index}
                className={`inline-block ${char === " " ? "mr-2" : ""} ${colors.secondary}`}
                variants={charVariants}
                style={{
                  textShadow: "0 4px 8px rgba(91, 33, 182, 0.2), 0 2px 4px rgba(91, 33, 182, 0.1)",
                  display: char === " " ? "inline" : "inline-block",
                  WebkitTextStroke: "0.5px rgba(91, 33, 182, 0.1)", // Ajustado para tonos púrpura
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          {/* Efecto de subrayado animado */}
          <motion.div
            className={`h-1 bg-gradient-to-r ${colors.decoration} rounded-full mt-4`}
            initial={{ width: 0, opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: "100%",
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          />
        </motion.div>
      </div>

      {/* Elemento decorativo inferior */}
      <motion.div
        className="mt-8 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.5 },
          },
        }}
      >
        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.primary}`}></div>
        <div className={`w-4 h-4 clip-hexagon bg-gradient-to-r ${colors.primary}`}></div>
        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.primary}`}></div>
      </motion.div>
    </div>
  )
}

export default SectionTitle


"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

const SectionTitle = ({ title, align = "center", colorScheme = "purpleHarmony" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  const lineControls = useAnimation()
  const hexagonControls = useAnimation()

  // Esquemas de color
  const colorSchemes = {
    purpleHarmony: {
      title: "text-purple-800",
      decoration: "from-purple-500 via-purple-600 to-purple-900",
    }
  }

  const colors = colorSchemes[colorScheme] || colorSchemes.purpleHarmony

  // Clases de alineación
  const alignClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  }

  // Iniciar animación cuando está en vista
  useEffect(() => {
    if (isInView) {
      // Iniciar la animación del título
      controls.start("visible")

      // Iniciar la animación de la línea
      lineControls
        .start({
          width: "90%",
          transition: {
            duration: 0.8,
            ease: "easeOut",
          },
        })
        .then(() => {
          // Cuando la línea termina, iniciar la animación del hexágono
          hexagonControls.start({
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          })
        })
    }
  }, [isInView, controls, lineControls, hexagonControls])

  // Resaltar cada segunda palabra
  const titleWithHighlights = title.split(" ").map((word, index) => {
    return index % 2 === 1 ? (
      <span key={index} className={colors.highlight}>
        {word}{" "}
      </span>
    ) : (
      <span key={index}>{word} </span>
    )
  })

  return (
    <div ref={ref} className={`flex flex-col ${alignClasses[align]} mb-12 w-full`}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
      >
        <h2 className={`text-4xl md:text-5xl font-bold ${colors.title} mb-3`}>{titleWithHighlights}</h2>

        <div className="flex items-center gap-2 my-4 relative w-full">
          {/* Contenedor para la línea con ancho fijo */}
          <div className="relative w-full h-0.5 overflow-hidden">
            {/* Línea con animación de izquierda a derecha */}
            <motion.div
              className={`h-full bg-gradient-to-r ${colors.decoration} rounded-full absolute top-0 left-0`}
              initial={{ width: 0 }}
              animate={lineControls}
              style={{
                originX: 0,
                transformOrigin: "left",
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          </div>

          {/* Hexágono que aparece al final de la línea */}
          <motion.div
            className={`w-4 h-4 clip-hexagon bg-gradient-to-l ${colors.decoration} absolute`}
            initial={{ scale: 0, rotate: 90, opacity: 0 }}
            animate={hexagonControls}
            style={{
              right: 0,
            }}
          />
        </div>

      </motion.div>
    </div>
  )
}

export default SectionTitle


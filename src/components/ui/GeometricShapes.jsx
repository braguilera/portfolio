"use client"
import { motion } from "framer-motion"

export default function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Hexágono grande */}
      <motion.div
        className="absolute right-[15%] top-[25%]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.6,
          y: [0, -30, 0],
          rotateY: [0, 180, 360],
          rotateX: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="relative transform-style-3d">
          <HexagonPrism size={80} primaryColor="rgba(124, 58, 237, 0.1)" secondaryColor="rgba(124, 58, 237, 0.15)" />
        </div>
      </motion.div>

      {/* Hexágono flotante amarillo */}
      <motion.div
        className="absolute left-[10%] bottom-[20%]"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{
          opacity: 0.5,
          y: [0, 40, 0],
          x: [0, 20, 0],
          rotate: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div
          className="backdrop-blur-sm"
          style={{
            width: "110px",
            height: "95.26px", 
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            border: "1px solid rgba(245, 158, 11, 0.2)",
          }}
        />
      </motion.div>

      {/* Pequeños hexagonos */}

      <motion.div
        className="absolute right-[25%] bottom-[30%]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.7,
          y: [0, -15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <HexGrid />
      </motion.div>
    </div>
  )
}

{/* Creador de Hexagono giratorio */}
function HexagonPrism({ size, primaryColor, secondaryColor }) {
  const height = size * 0.2 

  const hexPoints = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i
    hexPoints.push({
      x: (size / 2) * Math.cos(angle),
      y: (size / 2) * Math.sin(angle),
    })
  }

  return (
    <div className="relative transform-style-3d">
      <div
        className="absolute transform-style-3d"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `translateZ(${height / 2}px)`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            backgroundColor: primaryColor,
            border: `1px solid ${secondaryColor}`,
          }}
        />
      </div>

      <div
        className="absolute transform-style-3d"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `translateZ(-${height / 2}px)`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            backgroundColor: primaryColor,
            border: `1px solid ${secondaryColor}`,
          }}
        />
      </div>

      {hexPoints.map((point, i) => {
        const nextI = (i + 1) % 6
        const nextPoint = hexPoints[nextI]

        const width = Math.sqrt(Math.pow(nextPoint.x - point.x, 2) + Math.pow(nextPoint.y - point.y, 2))

        const centerX = (point.x + nextPoint.x) / 2
        const centerY = (point.y + nextPoint.y) / 2

        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x)

        return (
          <div
            key={i}
            className="absolute transform-style-3d"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              transformOrigin: "center center",
              transform: `
                translate(${centerX}px, ${centerY}px) 
                rotateZ(${(angle * 180) / Math.PI}deg) 
                rotateY(90deg)
              `,
              backgroundColor: secondaryColor,
            }}
          />
        )
      })}
    </div>
  )

  
}

// Crear pequeño grid de hexágonos
function HexGrid() {
  return (
    <div className="relative">
      <div
        className="absolute"
        style={{
          width: "40px",
          height: "34.64px", 
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          backgroundColor: "rgba(124, 58, 237, 0.2)",
          border: "1px solid rgba(124, 58, 237, 0.4)",
          backdropFilter: "blur(5px)",
          left: "20px",
          top: "17.32px", 
        }}
      />

      <div
        className="absolute"
        style={{
          width: "40px",
          height: "34.64px",
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          backgroundColor: "rgba(124, 58, 237, 0.15)",
          border: "1px solid rgba(124, 58, 237, 0.3)",
          backdropFilter: "blur(5px)",
          left: "20px",
          top: "0px",
        }}
      />

      <div
        className="absolute"
        style={{
          width: "40px",
          height: "34.64px",
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          backgroundColor: "rgba(139, 92, 246, 0.15)",
          border: "1px solid rgba(139, 92, 246, 0.3)",
          backdropFilter: "blur(5px)",
          left: "50px",
          top: "17.32px",
        }}
      />

      <div
        className="absolute"
        style={{
          width: "40px",
          height: "34.64px",
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          backgroundColor: "rgba(245, 158, 11, 0.15)",
          border: "1px solid rgba(245, 158, 11, 0.3)",
          backdropFilter: "blur(5px)",
          left: "0px",
          top: "34.64px",
        }}
      />
    </div>
  )
}




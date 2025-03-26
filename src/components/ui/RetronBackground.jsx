"use client"
import { motion } from "framer-motion"

export default function RetronBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo fijo con degradado en tonos violeta claro */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-200 transition-colors duration-500">
        {/* Patrón de hexágonos - Reducido y menos invasivo */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hexagons"
                width="120"
                height="104"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(3) rotate(0)"
              >
                <path
                  d="M25,0 L50,14.4 L50,37.2 L25,51.6 L0,37.2 L0,14.4 Z"
                  fill="none"
                  stroke="rgba(124, 58, 237, 0.4)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            {/* Limitando el patrón a solo una parte del fondo */}
            <rect width="100%" height="70%" y="15%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Líneas onduladas violeta */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-10"
          viewBox="0 0 100 800"
          preserveAspectRatio="none"
        >
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={`wave-${i}`}
              d={`M 0 ${120 + i * 120} Q 20 ${110 + i * 120}, 40 ${120 + i * 120} T 80 ${120 + i * 120} T 120 ${120 + i * 120}`}
              stroke="rgba(124, 58, 237, 0.3)"
              strokeWidth="0.8"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 2,
              }}
            />
          ))}
        </svg>

        {/* Elementos decorativos flotantes - Reducidos en cantidad */}
        <div className="absolute inset-0">
          {/* Hexágonos flotantes - Reducidos a 6 */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1, 0.8],
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 40 - 20, 0],
                rotate: [0, Math.random() * 60, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <Hexagon
                size={Math.random() * 60 + 30}
                color={
                  i % 5 === 0
                    ? "rgba(245, 158, 11, 0.15)"
                    : `rgba(${124 + Math.random() * 50}, ${58 + Math.random() * 40}, ${237 - Math.random() * 40}, ${Math.random() * 0.1 + 0.05})`
                }
                borderColor={
                  i % 5 === 0
                    ? "rgba(245, 158, 11, 0.2)"
                    : `rgba(${124 + Math.random() * 50}, ${58 + Math.random() * 40}, ${237 - Math.random() * 40}, 0.2)`
                }
              />
            </motion.div>
          ))}

          {/* Destellos violeta - Reducidos a 10 */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`glow-${i}`}
              className="absolute h-2 w-2 rounded-full bg-purple-500/20"
              style={{
                left: `${Math.random() * 95}%`,
                top: `${Math.random() * 95}%`,
                boxShadow: "0 0 15px rgba(124, 58, 237, 0.3)",
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Destellos amarillos - Reducidos a 5 */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`yellow-glow-${i}`}
              className="absolute h-2 w-2 rounded-full bg-amber-400/30"
              style={{
                left: `${Math.random() * 95}%`,
                top: `${Math.random() * 95}%`,
                boxShadow: "0 0 12px rgba(245, 158, 11, 0.4)",
              }}
              animate={{
                opacity: [0.2, 0.7, 0.2],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Logo RETRON grande y desvanecido en el fondo */}
        <div className="absolute inset-0 flex justify-center opacity-[0.03]">
          <div className="text-[20vw] font-bold text-purple-800">FRONTEND</div>
        </div>

        {/* Gradient overlay para dar más presencia al violeta */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-purple-200/20"></div>
      </div>

      {/* Contenedor de contenido */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Componente Hexágono
function Hexagon({ size, color, borderColor }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size * 0.866}px`, // Factor de altura para hexágono regular
        position: "relative",
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        backgroundColor: color,
        border: `1px solid ${borderColor}`,
        backdropFilter: "blur(8px)",
      }}
    />
  )
}


"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, Linkedin, Heart, Phone, Copy, Check } from "lucide-react"

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null)

  // Datos reales (no visibles en el HTML, protegidos contra scraping)
  const contactData = {
    email: "braian@example.com", // Tu email real iría aquí
    phone: "+54 11 1234 5678", // Tu teléfono real iría aquí
  }

  // Resetear el estado de copiado después de 2 segundos
  useEffect(() => {
    if (copiedItem) {
      const timer = setTimeout(() => {
        setCopiedItem(null)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copiedItem])

  // Función para copiar al portapapeles
  const copyToClipboard = (type) => {
    const textToCopy = type === "email" ? contactData.email : contactData.phone

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopiedItem(type)
      })
      .catch((err) => {
        console.error("Error al copiar: ", err)
      })
  }

  // Función para redireccionar
  const redirectTo = (type) => {
    const url = type === "email" ? `mailto:${contactData.email}` : `tel:${contactData.phone.replace(/\s+/g, "")}`
    window.open(url, "_blank")
  }

  // Variantes para la animación de entrada desde abajo
  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  }

  // Datos de contacto (con texto protegido)
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "Email",
      type: "email",
      color: "bg-purple-600",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "Teléfono",
      type: "phone",
      color: "bg-indigo-600",
    },
  ]

  // Redes sociales
  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/username",
      label: "LinkedIn",
      color: "bg-blue-600",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/username",
      label: "GitHub",
      color: "bg-gray-800",
    },
  ]

  return (
    <motion.footer
      className="relative w-full py-10 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Fondo con hexágonos sutiles */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footer-hexagons"
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
          <rect width="100%" height="100%" fill="url(#footer-hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center justify-center">
          {/* Hexágono central con iniciales */}
          <motion.div
            className="relative mb-8"
            variants={itemVariants}
            whileHover={{
              rotate: [0, -5, 5, -5, 0],
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl clip-hexagon shadow-lg">
              BA
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-50 blur-sm clip-hexagon -z-10"></div>
          </motion.div>

          {/* Información de contacto con botones de copia y redirección */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {contactInfo.map((item, index) => (
              <motion.div key={index} className="relative" variants={itemVariants}>
                <div className="flex items-center bg-white rounded-full shadow-sm border border-purple-100 pl-3 pr-1 py-1 gap-2 hover:shadow-md transition-all">
                  {/* Área clickeable: icono + texto */}
                  <motion.button
                    className="flex items-center gap-2"
                    onClick={() => redirectTo(item.type)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={`Abrir ${item.type}`}
                  >
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.button>

                  {/* Botón para copiar */}
                  <motion.button
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={() => copyToClipboard(item.type)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Copiar ${item.type}`}
                  >
                    {copiedItem === item.type ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </motion.button>
                </div>

                {/* Notificación de copiado */}
                <AnimatePresence>
                  {copiedItem === item.type && (
                    <motion.div
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs py-1 px-3 rounded-md whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {item.type === "email" ? "¡Email copiado!" : "¡Teléfono copiado!"}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Redes sociales */}
          <motion.div className="flex gap-3 mb-8" variants={itemVariants}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full text-white ${social.color} flex items-center justify-center shadow-md hover:shadow-lg transition-all`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Línea decorativa mejorada */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full mb-6"
            variants={itemVariants}
            initial={{ width: 0 }}
            whileInView={{
              width: "60%",
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
          />

          {/* Copyright */}
          <motion.div className="text-center text-gray-600 text-sm" variants={itemVariants}>
            <p className="flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Braian Alejandro Aguilera. Hecho con
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 1,
                  },
                }}
              >
                <Heart className="h-4 w-4 text-red-500 inline" />
              </motion.div>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Contact


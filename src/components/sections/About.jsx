"use client"

import { motion } from "framer-motion"
import { Pen, Layout, Code, Smartphone, ChevronRight } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"

const About = () => {
  // Variantes para animaciones con efecto spring
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        stiffness: 260,
        damping: 20,
      },
    },
  }

  const serviceVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200 - custom * 20,
        damping: 20,
        delay: 0.1 * custom,
      },
    }),
  }

  // Icono para cada servicio
  const serviceIcons = {
    prototipado: <Pen className="h-5 w-5 text-purple-500" />,
    uxui: <Layout className="h-5 w-5 text-purple-500" />,
    desarrollo: <Code className="h-5 w-5 text-purple-500" />,
    responsive: <Smartphone className="h-5 w-5 text-purple-500" />,
  }

  // Datos de servicios
  const services = [
    {
      id: "prototipado",
      title: "Prototipado Inspirado",
      description:
        "Desarrollo prototipos a mano alzada para visualizar las ideas y mejorar la comunicación con el cliente.",
      icon: serviceIcons.prototipado,
    },
    {
      id: "uxui",
      title: "Diseño UX/UI",
      description:
        "Diseño interfaces de usuario intuitivas y atractivas en Figma, garantizando una experiencia de usuario fluida.",
      icon: serviceIcons.uxui,
    },
    {
      id: "desarrollo",
      title: "Desarrollo web",
      description:
        "Transformo prototipos en sitios web funcionales utilizando las tecnologías con las que mejor me desempeño.",
      icon: serviceIcons.desarrollo,
    },
    {
      id: "responsive",
      title: "Diseño responsive",
      description: "Aseguro que los sitios web se adapten efectivamente a diversos dispositivos.",
      icon: serviceIcons.responsive,
    },
  ]

  return (
    <section className="w-full py-24 px-6">
      <SectionTitle title={'Sobre Mí'}></SectionTitle>

      <div className="mx-auto max-w-5xl">
        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Columna izquierda con título y descripción */}
          <motion.div className="flex-1" variants={itemVariants}>
            <motion.div
              className="inline-block mb-6 bg-purple-100 px-4 py-2 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
            >
              <span className="text-purple-800 font-medium text-sm">Descubre quién soy</span>
            </motion.div>

            <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-900" variants={itemVariants}>
              Sobre mí
            </motion.h2>

            <motion.p className="text-lg text-gray-700 mb-6 leading-relaxed" variants={itemVariants}>
              Soy un desarrollador frontend al cual le impulsa ver cómo un sitio web cobra vida, desde su estructura
              eficiente hasta una estética que genera impacto. Cada proyecto es una oportunidad para aprender algo nuevo
              y mejorar mis habilidades.
            </motion.p>

            <motion.p className="text-lg text-gray-700 mb-10 leading-relaxed" variants={itemVariants}>
              Además, priorizo siempre la accesibilidad y una experiencia de usuario agradable, porque sé que un buen
              diseño es clave para el éxito de cualquier producto.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contáctame
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Columna derecha con servicios */}
          <motion.div className="flex-1" variants={itemVariants}>
            <motion.h3 className="text-2xl font-bold mb-8 text-purple-900" variants={itemVariants}>
              Servicios
            </motion.h3>

            <div className="space-y-5">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-xl border border-purple-100 p-5 shadow-sm hover:shadow-md transition-shadow group"
                  variants={serviceVariants}
                  custom={index}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0 group-hover:bg-purple-200 transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-purple-900 mb-1">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


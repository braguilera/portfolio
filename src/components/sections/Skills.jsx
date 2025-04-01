"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tab } from "@headlessui/react"
import SectionTitle from "../ui/SectionTitle"

const Skills = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const categories = [
    { name: "Frontend", id: "frontend" },
    { name: "Backend", id: "backend" },
    { name: "Herramientas", id: "tools" },
  ]

  const skills = {
    frontend: [
      { name: "HTML5", icon: "bx bxl-html5", color: "#E44D26" },
      { name: "CSS3", icon: "bx bxl-css3", color: "#264DE4" },
      { name: "JavaScript", icon: "bx bxl-javascript", color: "#F7DF1E" },
      { name: "React", icon: "bx bxl-react", color: "#61DAFB" },
      { name: "Vue", icon: "bx bxl-vuejs", color: "#4FC08D" },
      { name: "Tailwind", icon: "bx bxl-tailwind-css", color: "#06B6D4" },
      { name: "TypeScript", icon: "bx bxl-typescript", color: "#3178C6" },
    ],
    backend: [
      { name: "Node.js", icon: "bx bxl-nodejs", color: "#339933" },
      { name: "Express", icon: "bx bx-server", color: "#000000" },
      { name: "MongoDB", icon: "bx bxl-mongodb", color: "#47A248" },
      { name: "PostgreSQL", icon: "bx bxl-postgresql", color: "#336791" },
      { name: "MongoDB", icon: "bx bxl-mongodb", color: "#47A248" },
      { name: "PostgreSQL", icon: "bx bxl-postgresql", color: "#336791" },
      { name: "MongoDB", icon: "bx bxl-mongodb", color: "#47A248" },
      { name: "PostgreSQL", icon: "bx bxl-postgresql", color: "#336791" },
      { name: "Firebase", icon: "bx bxl-firebase", color: "#FFCA28" },
    ],
    tools: [
      { name: "Git", icon: "bx bxl-git", color: "#F05032" },
      { name: "GitHub", icon: "bx bxl-github", color: "#181717" },
      { name: "VS Code", icon: "bx bxl-visual-studio", color: "#007ACC" },
      { name: "Figma", icon: "bx bxl-figma", color: "#F24E1E" },
      { name: "Docker", icon: "bx bxl-docker", color: "#2496ED" },
    ],
  }

  const generateHoneycombLayout = (skillsArray) => {
    const positions = [
      // Centro
      { row: 2, col: 2 },
      // Primera capa (6 posiciones alrededor del centro)
      { row: 1, col: 1 },
      { row: 1, col: 2 },
      { row: 1, col: 3 },
      { row: 2, col: 1 },
      { row: 2, col: 3 },
      { row: 3, col: 2 },
      // Segunda capa (12 posiciones)
      { row: 0, col: 1 },
      { row: 0, col: 2 },
      { row: 0, col: 3 },
      { row: 1, col: 0 },
      { row: 1, col: 4 },
      { row: 2, col: 0 },
      { row: 2, col: 4 },
      { row: 3, col: 0 },
      { row: 3, col: 1 },
      { row: 3, col: 3 },
      { row: 3, col: 4 },
      { row: 4, col: 2 },
    ]

    // Crear celdas para el panal
    const honeycomb = []

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        const distance = Math.sqrt(Math.pow(row - 2, 2) + Math.pow(col - 2, 2))

        const posIndex = positions.findIndex((pos) => pos.row === row && pos.col === col)

        let cellType = "empty"
        let skillIndex = -1
        let opacity = 1 - distance / 4 

        opacity = Math.max(0.2, opacity)

        if (posIndex !== -1 && posIndex < skillsArray.length) {
          cellType = "skill"
          skillIndex = posIndex
        }

        honeycomb.push({
          row,
          col,
          type: cellType,
          skillIndex,
          opacity,
          distance,
        })
      }
    }

    honeycomb.sort((a, b) => a.distance - b.distance)

    return honeycomb.map((cell, index) => {
      const xOffset = cell.row % 2 === 0 ? 0 : 65 
      const x = cell.col * 130 + xOffset 
      const y = cell.row * 100

      const cellVariants = {
        hidden: {
          scale: 0,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: cell.type === "empty" ? cell.opacity : 1,
          transition: {
            type: "spring",
            stiffness: 260 - cell.distance * 30, 
            damping: 15,
            mass: 1 + cell.distance * 0.3,
            delay: cell.distance * 0.08, 
          },
        },
      }

      if (cell.type === "skill" && skillsArray[cell.skillIndex]) {
        const skill = skillsArray[cell.skillIndex]
        return (
          <motion.div
            key={`cell-${index}`}
            className="absolute"
            style={{ left: `${x}px`, top: `${y}px` }}
            variants={cellVariants}
          >
            <div className="hexagon-container">
            <div className="hexagon bg-white shadow-sm flex flex-col items-center justify-center gap-2 p-2">
                <i className={`${skill.icon} text-4xl text-purple-600`}></i>
                <span className="text-sm font-medium text-purple-400 text-center leading-tight">{skill.name}</span>
              </div>
            </div>
          </motion.div>
        )
      } else {
        // Hexágono vacío
        return (
          <motion.div
            key={`cell-${index}`}
            className="absolute"
            style={{ left: `${x}px`, top: `${y}px` }}
            variants={cellVariants}
          >
            <div className="hexagon-container">
              <div className="hexagon bg-white shadow-sm" style={{ opacity: cell.opacity }}></div>
            </div>
          </motion.div>
        )
      }
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-20 px-6 w-full  h-screen bg-violet-100">
      <div className="justify-center items-center">
        <SectionTitle title={'Habilidades'}></SectionTitle>


        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex rounded-xl gap-4 bg-white p-1 shadow-sm mb-12 max-w-md mx-auto">
            {categories.map((category) => (
              <Tab
                key={category.id}
                className={({ selected }) =>
                  `w-full rounded-lg py-2 text-sm cursor-pointer font-medium leading-5 transition-all duration-300
                  ${selected ? "bg-purple-600 text-white shadow-sm" : "text-purple-800 hover:bg-purple-100"}`
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {Object.keys(skills).map((category, idx) => (
              <Tab.Panel key={idx}>
                <div className="flex justify-center mr-64">
                  <motion.div
                    className="relative h-[500px] w-[500px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={`panel-${category}`}
                  >
                    {generateHoneycombLayout(skills[category])}
                  </motion.div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}

export default Skills


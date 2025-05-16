"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Tab } from "@headlessui/react"
import SectionTitle from "../ui/SectionTitle"

const Skills = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  const [honeycombSize, setHoneycombSize] = useState({
    hexSize: 120,
    hexSpacingX: 130,
    hexSpacingY: 100,
    containerHeight: 500,
    containerWidth: 650
  })

  const containerRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (windowWidth < 640) {
      setHoneycombSize({
        hexSize: 70, 
        hexSpacingX: 80,
        hexSpacingY: 60,
        containerHeight: 300,
        containerWidth: 300
      })
    } else if (windowWidth < 768) {
      setHoneycombSize({
        hexSize: 70,
        hexSpacingX: 80,
        hexSpacingY: 65,
        containerHeight: 350,
        containerWidth: 350
      })
    } else if (windowWidth < 1024) {
      setHoneycombSize({
        hexSize: 90,
        hexSpacingX: 100,
        hexSpacingY: 80,
        containerHeight: 425,
        containerWidth: 425
      })
    } else {
      setHoneycombSize({
        hexSize: 120,
        hexSpacingX: 130,
        hexSpacingY: 100,
        containerHeight: 500,
        containerWidth: 650
      })
    }
  }, [windowWidth])

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
      { row: 2, col: 2 },
      { row: 1, col: 1 },
      { row: 1, col: 2 },
      { row: 1, col: 3 },
      { row: 2, col: 1 },
      { row: 2, col: 3 },
      { row: 3, col: 2 },
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

    let maxSkills = skillsArray.length;
    if (windowWidth < 640) {
      maxSkills = Math.min(7, skillsArray.length); 
    } else if (windowWidth < 768) {
      maxSkills = Math.min(10, skillsArray.length); 
    }

    const honeycomb = []

    const skillPositions = new Map();
    for (let i = 0; i < Math.min(maxSkills, positions.length); i++) {
      if (i < skillsArray.length) {
        const pos = positions[i];
        skillPositions.set(`${pos.row}-${pos.col}`, i);
      }
    }

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        const distance = Math.sqrt(Math.pow(row - 2, 2) + Math.pow(col - 2, 2));
        const key = `${row}-${col}`;
        
        let cellType = "empty";
        let skillIndex = -1;
        let opacity = 1 - distance / 4;
        
        opacity = Math.max(0.2, opacity);
        
        if (skillPositions.has(key)) {
          cellType = "skill";
          skillIndex = skillPositions.get(key);
        }

        const isPositionInArray = positions.some(pos => pos.row === row && pos.col === col);
        const isAdjacentToSkill = isPositionInArray && !skillPositions.has(key);
        
        let shouldShowEmpty = true;
        if (windowWidth < 640) {
          const adjacentToSkill = [...skillPositions.keys()].some(skillPos => {
            const [skillRow, skillCol] = skillPos.split('-').map(Number);
            const directDistance = Math.max(
              Math.abs(row - skillRow),
              Math.abs(col - skillCol)
            );
            return directDistance <= 1;
          });
          shouldShowEmpty = adjacentToSkill && isAdjacentToSkill;
        } else {
          shouldShowEmpty = isAdjacentToSkill;
        }

        honeycomb.push({
          row,
          col,
          type: cellType,
          skillIndex,
          opacity,
          distance,
          shouldShow: cellType === "skill" || shouldShowEmpty
        });
      }
    }

    honeycomb.sort((a, b) => a.distance - b.distance);

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    honeycomb.forEach(cell => {
      if (cell.shouldShow) {
        const xOffset = cell.row % 2 === 0 ? 0 : honeycombSize.hexSpacingX/2;
        const x = cell.col * honeycombSize.hexSpacingX + xOffset;
        const y = cell.row * honeycombSize.hexSpacingY;
        
        if (x < minX) minX = x;
        if (x + honeycombSize.hexSize > maxX) maxX = x + honeycombSize.hexSize;
        if (y < minY) minY = y;
        if (y + honeycombSize.hexSize > maxY) maxY = y + honeycombSize.hexSize;
      }
    });
    
    const width = maxX - minX;
    const height = maxY - minY;
    const offsetX = (honeycombSize.containerWidth - width) / 2 - minX;
    const offsetY = (honeycombSize.containerHeight - height) / 2 - minY;

    return honeycomb.map((cell, index) => {
      if (!cell.shouldShow) {
        return null;
      }

      const xOffset = cell.row % 2 === 0 ? 0 : honeycombSize.hexSpacingX/2;
      const x = cell.col * honeycombSize.hexSpacingX + xOffset + offsetX;
      const y = cell.row * honeycombSize.hexSpacingY + offsetY;

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
        const skill = skillsArray[cell.skillIndex];
        return (
          <motion.div
            key={`cell-${index}`}
            className="absolute"
            style={{ left: `${x}px`, top: `${y}px` }}
            variants={cellVariants}
          >
            <div className="hexagon-container" style={{ width: `${honeycombSize.hexSize}px`, height: `${honeycombSize.hexSize}px` }}>
              <div className="hexagon bg-white shadow-sm flex flex-col items-center justify-center gap-1 p-1">
                <i className={`${skill.icon} ${windowWidth < 640 ? 'text-lg' : windowWidth < 768 ? 'text-xl' : 'text-3xl'} text-purple-600`}></i>
                <span className={`text-sm lg:text-lg font-medium text-purple-400 text-center ${windowWidth < 640 ? 'leading-none' : 'leading-tight'}`}>
                  {skill.name}
                </span>
              </div>
            </div>
          </motion.div>
        );
      } else if (cell.type === "empty" && cell.shouldShow) {
        return (
          <motion.div
            key={`cell-${index}`}
            className="absolute"
            style={{ left: `${x}px`, top: `${y}px` }}
            variants={cellVariants}
          >
            <div className="hexagon-container" style={{ width: `${honeycombSize.hexSize}px`, height: `${honeycombSize.hexSize}px` }}>
              <div className="hexagon bg-white shadow-sm" style={{ opacity: cell.opacity }}></div>
            </div>
          </motion.div>
        );
      }
      
      return null;
    }).filter(Boolean);
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
    <section id="skills" className="py-12 md:py-20 px-3 md:px-6 w-full min-h-screen bg-violet-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <SectionTitle title={'Habilidades'}></SectionTitle>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex rounded-xl gap-2 md:gap-4 bg-white p-1 shadow-sm mb-8 md:mb-12 max-w-xs md:max-w-md mx-auto">
            {categories.map((category) => (
              <Tab
                key={category.id}
                className={({ selected }) =>
                  `w-full rounded-lg py-1 md:py-2 text-xs md:text-sm cursor-pointer font-medium leading-5 transition-all duration-300
                  ${selected ? "bg-purple-600 text-white shadow-sm" : "text-purple-800 hover:bg-purple-100"}`
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="flex justify-center items-center">
            {Object.keys(skills).map((category, idx) => (
              <Tab.Panel key={idx} className="w-full flex justify-center items-center">
                <div 
                  ref={containerRef}
                  className="flex justify-center items-center"
                >
                  <motion.div
                    className="relative overflow-visible"
                    style={{ 
                      height: `${honeycombSize.containerHeight}px`, 
                      width: `${honeycombSize.containerWidth}px`,
                    }}
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
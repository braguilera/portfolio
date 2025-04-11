import React from "react";
import { motion } from 'framer-motion';

const SocialIconButton = ({ icon: Icon, position, url, index, radius, isMobile, colorPalette }) => {
  // Calculamos posiciones ajustadas según si es móvil o no
  const getPositions = () => {
    // Reducimos la distancia en dispositivos móviles
    const adjustedRadius = isMobile ? radius * 0.85 : radius;
    
    return {
      top: { y: -adjustedRadius },
      right: { x: adjustedRadius },
      bottom: { y: adjustedRadius },
      left: { x: -adjustedRadius }
    };
  };

  const positions = getPositions();

  const variants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.1
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      ...positions[position],
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.06
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.03
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 8px 15px -3px rgba(147, 51, 234, 0.3)",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600 hover:text-purple-800 border border-purple-100"
      style={{
        background: colorPalette?.background || "white",
        borderColor: colorPalette?.border || "rgba(210, 190, 230, 0.5)",
        color: colorPalette?.text || "rgb(101, 62, 148)"
      }}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
    </motion.a>
  );
};

export default SocialIconButton;
import React from "react";
import { motion } from 'framer-motion';

const SocialIconButton = ({ icon: Icon, position, index, url }) => {
  // Configuración de las variantes de animación según la posición
  const positionVariants = {
    top: { y: -80, x: 0 },
    right: { x: 80, y: 0 },
    bottom: { y: 80, x: 0 },
    left: { x: -80, y: 0 }
  };

  // Variantes de animación para los iconos
  const iconVariants = {
    initial: { opacity: 0, scale: 0.5, x: 0, y: 0 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      ...positionVariants[position],
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20, 
        delay: index * 0.1 
      } 
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      x: 0,
      y: 0,
      transition: { duration: 0.2 }
    },
    hover: { 
      scale: 1.15, 
      boxShadow: "0px 10px 25px rgba(147, 51, 234, 0.5)",
      transition: { type: "spring", stiffness: 400, damping: 10 } 
    }
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 p-3 rounded-full text-white z-10 flex items-center justify-center shadow-md"
      variants={iconVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
};

export default SocialIconButton;
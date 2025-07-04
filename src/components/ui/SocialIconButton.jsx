// src/components/SocialIconButton.js

import React from "react";
import { motion } from 'framer-motion';

const SocialIconButton = ({ icon: Icon, position, url, index, radius }) => {
  const getPositions = () => ({
    top: { y: -radius },
    right: { x: radius },
    bottom: { y: radius },
    left: { x: -radius }
  });

  const positions = getPositions();

  const variants = {
    hidden: { opacity: 0, scale: 0.5, x: 0, y: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      ...positions[position],
      transition: { type: "spring", stiffness: 220, damping: 18, delay: index * 0.05 }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 220, damping: 18, delay: index * 0.03 }
    }
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      // TAMAÑOS RESTAURADOS + NUEVO ESTILO:
      className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer flex items-center justify-center text-purple-700 bg-white/80 backdrop-blur-lg border-2 border-purple-200/80 shadow-md shadow-purple-200/50"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{
        scale: 1.15,
        backgroundColor: "rgb(250, 250, 250)",
        borderColor: "rgba(192, 132, 252, 0.9)",
        boxShadow: "0px 5px 20px -5px rgba(160, 100, 220, 0.5)",
        transition: { type: 'spring', stiffness: 350 }
      }}
      whileTap={{
        scale: 0.9,
        backgroundColor: "rgb(230, 220, 240)",
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
    >
      {/* TAMAÑO DE ICONO RESTAURADO */}
      <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth="2.3" />
    </motion.a>
  );
};

export default SocialIconButton;
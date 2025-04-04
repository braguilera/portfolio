import React from "react";
import { motion } from 'framer-motion';

const SocialIconButton = ({ icon: Icon, position, url, index, radius }) => {
  const positions = {
    top: { y: -radius },
    right: { x: radius },
    bottom: { y: radius },
    left: { x: -radius }
  };

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
      ...positions[position]
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
      className="absolute w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600 hover:text-purple-800 border border-purple-100"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
};

export default SocialIconButton;
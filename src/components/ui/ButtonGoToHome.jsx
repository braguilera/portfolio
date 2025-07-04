// src/components/ui/ButtonGoToHome.js

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// LA CORRECCIÓN: Eliminamos la prop 'show' de los parámetros.
// El componente ya no necesita saber si debe mostrarse, solo cómo animarse.
const ButtonGoToHome = ({ isOpen, isMobile }) => {

  const handleScrollToTop = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: isMobile ? 100 : -100,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    open: {
      y: -85,
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };
  
  // LA CORRECCIÓN: Se eliminó el bloque 'if (!show) { return null }'.
  // Ahora el componente siempre se renderiza y deja que AnimatePresence maneje la animación.

  return (
    <motion.div
      className="mb-4"
      variants={buttonVariants}
      initial="hidden"
      animate={isOpen ? 'open' : 'visible'}
      exit="hidden"
      // Las props de arriba (initial, animate, exit) son todo lo que AnimatePresence necesita.
    >
      <motion.a
        href="#hero"
        onClick={handleScrollToTop}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full cursor-pointer flex items-center justify-center text-purple-700 bg-white/80 backdrop-blur-lg border-2 border-purple-200/80 shadow-md shadow-purple-200/50"
        whileHover={{
          scale: 1.1,
          borderColor: "rgba(192, 132, 252, 0.9)",
          boxShadow: "0px 5px 20px -5px rgba(160, 100, 220, 0.5)",
          transition: { type: 'spring', stiffness: 350 }
        }}
        whileTap={{
          scale: 0.9,
          backgroundColor: "rgb(230, 220, 240)",
          transition: { type: 'spring', stiffness: 400, damping: 15 }
        }}
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth="2.3" />
      </motion.a>
    </motion.div>
  );
};

export default ButtonGoToHome;
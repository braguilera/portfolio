// src/components/ui/ButtonSocial.js

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Share2 } from 'lucide-react';
import SocialIconButton from "./SocialIconButton";
import ButtonGoToHome from './ButtonGoToHome'; // Asegúrate que la ruta sea correcta

const ButtonSocial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Estado para controlar la visibilidad del botón GoToHome
  const [showGoToHome, setShowGoToHome] = useState(false);
  
  // Radio original para la expansión de los íconos
  const radius = isMobile ? 55 : 65;

  useEffect(() => {
    // Detecta si es un dispositivo móvil
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Listener para detectar el scroll y mostrar el botón
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowGoToHome(true);
      } else {
        setShowGoToHome(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Limpieza de los listeners al desmontar el componente
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialButtons = [
    { icon: Phone, position: 'top', url: 'tel:+541137763097' },
    { icon: Mail, position: 'right', url: 'mailto:braaguileraa@gmail.com' },
    { icon: Linkedin, position: 'bottom', url: 'https://www.linkedin.com/in/braianalejandroaguilera1/' },
    { icon: Github, position: 'left', url: 'https://github.com/braguilera' }
  ];

  // Variantes para el botón principal (con el nuevo estilo)
  const mainButtonVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderColor: "rgba(221, 214, 254, 0.8)",
      boxShadow: "0 4px 6px -1px rgba(221, 214, 254, 0.5), 0 2px 4px -2px rgba(221, 214, 254, 0.5)"
    },
    open: {
      rotate: -45,
      backgroundColor: "rgb(230, 220, 240)",
      borderColor: "rgba(192, 132, 252, 0.9)",
      boxShadow: "0px 5px 20px -5px rgba(160, 100, 220, 0.5)",
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };
  
  // Variantes para la animación de pulso
  const pulseVariants = {
    closed: { scale: 0.95, opacity: 0 },
    open: (custom) => ({
      scale: 1.1 + custom * 0.1,
      opacity: 0.2 - custom * 0.015,
      transition: {
        type: "spring",
        stiffness: 130,
        damping: 2,
        delay: custom * 0.07
      }
    })
  };

  return (
    <div className={`fixed z-30 flex flex-col items-center ${isMobile ? 'right-14 bottom-14' : 'left-8 sm:left-18 bottom-20'}`}>
      
      <AnimatePresence>
        {showGoToHome && (
          <ButtonGoToHome 
            isOpen={isOpen} 
            isMobile={isMobile}
          />
        )}
      </AnimatePresence>

      <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full bg-violet-300 pointer-events-none"
            variants={pulseVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            custom={i}
          />
        ))}

        <motion.button
          className="absolute inset-0 rounded-full cursor-pointer flex items-center justify-center text-purple-700 z-20 backdrop-blur-lg border-2"
          onClick={() => setIsOpen(!isOpen)}
          variants={mainButtonVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 350 } }}
          whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 400, damping: 15 } }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 350 }}
          >
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth="2.3" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && socialButtons.map((button, index) => (
            <SocialIconButton
              key={index}
              icon={button.icon}
              position={button.position}
              url={button.url}
              index={index}
              radius={radius}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ButtonSocial;
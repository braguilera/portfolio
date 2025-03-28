import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Share2 } from 'lucide-react';
import SocialIconButton from "./SocialIconButton"

const ButtonSocial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const radius = 75;

  const socialButtons = [
    { icon: Phone, position: 'top', url: 'tel:+123456789' },
    { icon: Mail, position: 'right', url: 'mailto:contact@example.com' },
    { icon: Linkedin, position: 'bottom', url: 'https://linkedin.com' },
    { icon: Github, position: 'left', url: 'https://github.com' }
  ];

  const mainButtonVariants = {
    closed: {
      rotate: 0,
      scale: 1,
      background: "rgb(232, 216, 247)", // Color base principal
      boxShadow: "0 4px 15px -2px rgba(200, 180, 220, 0.2)",
      border: "2px solid rgba(232, 216, 247, 0.5)" // Borde sutil
    },
    open: {
      rotate: 45,
      scale: 0.92,
      background: "rgb(215, 195, 255)", // Color más intenso al abrir
      boxShadow: "0 8px 25px -3px rgba(180, 160, 210, 0.25)",
      border: "2px solid rgba(232, 216, 247, 0.7)", // Borde más visible
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 15
      }
    }
  };

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
    <div className="fixed left-28 bottom-28 z-50">
      <div className="w-14 h-14 relative">
        {/* Efectos de onda en tonos coordinados */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full bg-violet-300"
            variants={pulseVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            custom={i}
          />
        ))}

        {/* Botón principal con nueva paleta */}
        <motion.button
          className="absolute inset-0 rounded-full cursor-pointer flex items-center justify-center text-purple-700 z-20 backdrop-blur-lg border-2 border-purple-300"
          onClick={() => setIsOpen(!isOpen)}
          variants={mainButtonVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          whileHover={{ 
            scale: 1.08,
            background: "rgb(240, 230, 250)",
            transition: { type: "spring", stiffness: 300 } 
          }}
          whileTap={{ 
            scale: 0.9,
            background: "rgb(200, 180, 220)",
            transition: { type: "spring", stiffness: 400 } 
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 350 }}
          >
            <Share2 className="w-6 h-6" strokeWidth="2.3" stroke="rgb(101,62,148)" />
          </motion.div>
        </motion.button>

        {/* Botones sociales con colores coordinados */}
        <AnimatePresence>
          {isOpen && socialButtons.map((button, index) => (
            <SocialIconButton
              key={index}
              icon={button.icon}
              position={button.position}
              url={button.url}
              index={index}
              radius={radius}
              colorPalette={{
                background: "rgb(245, 235, 255)",
                border: "rgba(210, 190, 230, 0.5)",
                text: "rgb(101, 62, 148)"
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ButtonSocial;
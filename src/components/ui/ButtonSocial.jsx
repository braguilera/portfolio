import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Share2 } from 'lucide-react';
import SocialIconButton from './SocialIconButton';

// Componente principal
const ButtonSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Configuración de las redes sociales
  const socialButtons = [
    { icon: Phone, position: 'top', url: 'tel:+123456789' },
    { icon: Mail, position: 'right', url: 'mailto:contact@example.com' },
    { icon: Linkedin, position: 'bottom', url: 'https://linkedin.com' },
    { icon: Github, position: 'left', url: 'https://github.com' }
  ];

  // Variantes para el botón principal
  const mainButtonVariants = {
    closed: { 
      rotate: 0,
      background: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)" 
    },
    open: { 
      rotate: 0, 
      background: "linear-gradient(135deg, #F472B6 0%, #A78BFA 100%)",
      transition: { duration: 0.4 } 
    }
  };

  // Variantes para los efectos de onda
  const pulseVariants = {
    closed: { scale: 1, opacity: 0 },
    open: (custom) => ({
      scale: 1.5 + custom * 0.2,
      opacity: 0.3 - custom * 0.1,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 1.5 + custom * 0.5 
      }
    })
  };

  return (
    <div className="fixed right-20 bottom-20 z-50">
      <div className="w-16 h-16 relative">
        {/* Efectos de onda animada */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-purple-500/20"
          variants={pulseVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          custom={0}
        />
        <motion.div 
          className="absolute inset-0 rounded-full bg-purple-500/30"
          variants={pulseVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          custom={1}
        />
        
        {/* Botón principal con icono de compartir */}
        <motion.button 
          className="absolute inset-0 rounded-full shadow-lg cursor-pointer flex items-center justify-center text-white z-20"
          onClick={() => setIsOpen(!isOpen)}
          variants={mainButtonVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Share2 className="w-6 h-6" />
          </motion.div>
        </motion.button>
        
        {/* Botones sociales con AnimatePresence para controlar las animaciones de entrada/salida */}
        <AnimatePresence>
          {isOpen && socialButtons.map((button, index) => (
            <SocialIconButton 
              key={index}
              icon={button.icon} 
              position={button.position}
              url={button.url}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ButtonSocial;
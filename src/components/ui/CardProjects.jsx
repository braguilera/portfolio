import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const CardProjects = ({ project, isVisible = true }) => {
  const {
    title,
    description,
    technologies = [],
    githubLink,
    websiteLink,
    image
  } = project;

  // Spring animation configuration for smoother transitions
  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 0.8
  };

  const getTechIcon = (techName) => {
    const iconMap = {
      React: <i className='bx bxl-react text-purple-600 text-lg'></i>,
      Tailwind: <i className='bx bx-palette text-purple-600 text-lg'></i>,
      'Node.js': <i className='bx bxl-nodejs text-purple-600 text-lg'></i>,
      Express: <i className='bx bx-network-chart text-purple-600 text-lg'></i>,
      MongoDB: <i className='bx bxl-mongodb text-purple-600 text-lg'></i>,
      'React Native': <i className='bx bxl-react text-purple-600 text-lg'></i>,
      Firebase: <i className='bx bxl-firebase text-purple-600 text-lg'></i>,
      NextJS: <i className='bx bx-code-alt text-purple-600 text-lg'></i>,
      TypeScript: <i className='bx bxl-typescript text-purple-600 text-lg'></i>,
      'Tailwind CSS': <i className='bx bx-palette text-purple-600 text-lg'></i>,
      GraphQL: <i className='bx bx-data text-purple-600 text-lg'></i>,
      'Vue.js': <i className='bx bxl-vuejs text-purple-600 text-lg'></i>,
      Docker: <i className='bx bxl-docker text-purple-600 text-lg'></i>,
      JavaScript: <i className='bx bxl-javascript text-purple-600 text-lg'></i>,
      SASS: <i className='bx bxl-sass text-purple-600 text-lg'></i>,
      Webpack: <i className='bx bx-package text-purple-600 text-lg'></i>,
      jQuery: <i className='bx bx-code-curly text-purple-600 text-lg'></i>,
      WordPress: <i className='bx bxl-wordpress text-purple-600 text-lg'></i>,
      HTML: <i className='bx bxl-html5 text-purple-600 text-lg'></i>,
      CSS: <i className='bx bxl-css3 text-purple-600 text-lg'></i>,
      PHP: <i className='bx bxl-php text-purple-600 text-lg'></i>,
      MySQL: <i className='bx bx-data text-purple-600 text-lg'></i>
    };

    return iconMap[techName] || <i className='bx bx-code text-purple-600 text-lg'></i>;
  };

  return (
    <motion.article
      initial={{ opacity: 0, x: -100 }}
      animate={isVisible ? 
        { 
          opacity: 1, 
          x: 0,
          transition: springConfig
        } : 
        { 
          opacity: 0, 
          x: 100,
          transition: {
            ...springConfig,
            damping: 25
          }
        }
      }
      exit={{ 
        opacity: 0, 
        x: 100,
        transition: {
          ...springConfig,
          damping: 25
        }
      }}
      className="relative bg-white rounded-xl shadow-md h-full w-8/9 lg:w-full flex flex-col overflow-hidden"
      style={{ height: '500px', maxHeight: '500px' }}
    >
      {/* Project Image - Left Side */}
      {image && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...springConfig, delay: 0.1 }}
          className="w-full h-1/3 overflow-hidden"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      )}

      {/* Content - Right Side */}
      <div className="p-6 flex flex-col flex-grow w-full overflow-y-auto">
        <div className="flex items-center mb-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ...springConfig, delay: 0.2 }}
            className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3"
          >
            <i className='bx bx-code-alt text-purple-500 text-xl'></i>
          </motion.div>
          
          {/* Header with Title */}
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          </motion.div>
        </div>

        {/* Purple line divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="w-full h-0.5 bg-purple-100 mb-4 origin-left"
        ></motion.div>

        {/* Description */}
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="text-slate-600 leading-relaxed mb-2 h-32"
        >
          {description}
        </motion.p>

        {/* Technologies */}
        {technologies?.length > 0 && (
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springConfig, delay: 0.4 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <i className='bx bx-code-alt text-purple-500 text-xl'></i>
              <span className="font-medium text-slate-600">Tecnologías</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: {
                      ...springConfig,
                      delay: 0.4 + index * 0.05
                    }
                  }}
                  className="flex items-center gap-2 bg-purple-50 px-2 py-1 rounded-full border border-purple-100"
                >
                  {getTechIcon(tech.name)}
                  <span className="text-sm text-purple-800">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Links */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...springConfig, delay: 0.5 }}
          className="mt-auto flex gap-4"
        >
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm text-slate-500 hover:text-purple-600 transition-colors group"
            >
              <Github size={18} className="text-slate-400 group-hover:text-purple-600" />
              <span>Código</span>
            </a>
          )}
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm text-slate-500 hover:text-purple-600 transition-colors group"
            >
              <ExternalLink size={18} className="text-slate-400 group-hover:text-purple-600" />
              <span>Demo</span>
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
};

export default CardProjects;
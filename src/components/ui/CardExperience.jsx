import React from 'react';
import { Calendar, Building2, Github, ExternalLink, Code } from 'lucide-react';

const CardExperience = ({ title, company, date, description, technologies = [], githubUrl, demoUrl, backgroundImage }) => {
  const getTechIcon = (techName) => {
    const iconMap = {
      React: <i className='bx bxl-react text-purple-600 text-lg'></i>,
      NextJS: <i className='bx bx-code-alt text-purple-600 text-lg'></i>,
      TypeScript: <i className='bx bxl-typescript text-purple-600 text-lg'></i>,
      Tailwind: <i className='bx bxl-tailwind-css text-purple-600 text-lg'></i>,
      GraphQL: <i className='bx bx-data text-purple-600 text-lg'></i>,
      'Vue.js': <i className='bx bxl-vuejs text-purple-600 text-lg'></i>,
      'Node.js': <i className='bx bxl-nodejs text-purple-600 text-lg'></i>,
      Express: <i className='bx bx-network-chart text-purple-600 text-lg'></i>,
      MongoDB: <i className='bx bxl-mongodb text-purple-600 text-lg'></i>,
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

  const image = backgroundImage; 

  return (
    <article className="relative overflow-hidden rounded-xl shadow-lg border border-purple-100 transition-all duration-300 bg-white h-full">
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <div className="w-full h-full">
            <img 
              src={image} 
              alt={`${title} at ${company}`} 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/80 to-white/70" />
      </div>

      <div className="relative z-10 p-4 md:p-6 flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-3 md:mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-slate-600 mb-2">
              <Building2 size={16} className="text-purple-500 flex-shrink-0" />
              <span className="font-medium">{company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-purple-100/60 px-3 py-1 rounded-full self-start">
            <Calendar size={14} className="text-purple-500 flex-shrink-0" />
            <span className="text-sm font-medium text-slate-600">{date}</span>
          </div>
        </div>

        <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 h-20 overflow-y-scroll sm:h-40 lg:h-auto lg:overflow-auto">{description}</p>

        {technologies.length > 0 && (
          <div className="mb-4 md:mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Code size={16} className="text-purple-500 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-600">Tecnologías</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full border border-purple-200 flex items-center gap-1"
                >
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex gap-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm text-slate-500 hover:text-purple-600 transition-colors group"
            >
              <Github size={16} className="text-slate-400 group-hover:text-purple-600 flex-shrink-0" />
              <span>GitHub</span>
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm text-slate-500 hover:text-purple-600 transition-colors group"
            >
              <ExternalLink size={16} className="text-slate-400 group-hover:text-purple-600 flex-shrink-0" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default CardExperience;
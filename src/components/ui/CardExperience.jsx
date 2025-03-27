import React from 'react';
import { Calendar, Building2, Code2, Github, ExternalLink, ChevronRight } from 'lucide-react';

const CardExperience = ({ title, company, date, description, technologies = [], githubUrl,demoUrl, backgroundImage}) => {
  return (
    <article className="relative overflow-hidden rounded-xl shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-xl group">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <div className="w-full h-full">
            <img 
              src={backgroundImage} 
              alt={`${title} at ${company}`} 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/70" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-slate-300 mb-2">
              <Building2 size={16} className="text-purple-400" />
              <span className="font-medium">{company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/60 px-3 py-1 rounded-full self-start">
            <Calendar size={14} className="text-purple-400" />
            <span className="text-sm font-medium text-slate-200">{date}</span>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-slate-300 mb-6 line-clamp-3">{description}</p>

        {/* Tecnologías */}
        {technologies.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Code2 size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-slate-200">Tecnologías</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-slate-700/60 text-slate-200 px-3 py-1 rounded-full border border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Enlaces */}
        <div className="mt-auto flex gap-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-purple-400 transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-purple-400 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
          
          <button className="ml-auto flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-sm transition-colors group-hover:bg-purple-500">
            <span>Detalles</span>
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardExperience;
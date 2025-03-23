import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, BadgeInfo } from 'lucide-react';

const CardExperienceFloating = ({ date, title, company, description }) => {
  return (
    <motion.article 
      className='w-full max-w-md bg-white shadow-lg p-6 rounded-xl border border-slate-100'
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -10, 0],
        boxShadow: [
          '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        ]
      }}
      transition={{ 
        duration: 4, 
        ease: "easeInOut", 
        repeat: Infinity 
      }}
    >
      <div className='flex items-center gap-2 mb-4'>
        <Calendar size={18} className='text-purple-600' />
        <span className='bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium'>{date}</span>
      </div>
      
      <h3 className='text-xl font-bold text-slate-800 mb-2'>{title}</h3>
      
      <div className='flex items-center gap-2 mb-3 text-slate-600'>
        <Building2 size={18} className='text-purple-600' />
        <h4 className='font-medium'>{company}</h4>
      </div>
      
      <div className='flex gap-2 text-slate-600 mt-4'>
        <BadgeInfo size={18} className='text-purple-600 flex-shrink-0 mt-1' />
        <p className='text-slate-500 leading-relaxed line-clamp-2'>{description}</p>
      </div>
    </motion.article>
  );
};

export default CardExperienceFloating;
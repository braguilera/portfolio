import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Building2, Calendar, BadgeInfo } from 'lucide-react'

const CardExperienceFloating = ({ date, title, company, description, index, totalItems }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Animaciones
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [16, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Posicionamiento dinámico
  const x = useTransform(scrollYProgress, 
    [0, 1], 
    [`${(Math.random() - 0.5) * 100}%`, `${(index % 2 === 0 ? 1 : -1) * 40}%`]
  )
  
  const y = useTransform(scrollYProgress, 
    [0, 1], 
    [`${(Math.random() - 0.5) * 100}%`, `${index * (100 / totalItems)}%`]
  )

  return (
    <motion.article 
      ref={ref}
      className='w-full max-w-md bg-white shadow-lg p-6 rounded-xl border border-slate-100 absolute'
      style={{ scale, borderRadius, opacity, x, y }}
      transition={{ type: "spring", stiffness: 100 }}
      layoutId={`experience-${index}`}
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
      
      {description && (
        <div className='flex gap-2 text-slate-600 mt-4'>
          <BadgeInfo size={18} className='text-purple-600 flex-shrink-0 mt-1' />
          <p className='text-slate-500 leading-relaxed line-clamp-2'>{description}</p>
        </div>
      )}
    </motion.article>
  )
}

export default CardExperienceFloating
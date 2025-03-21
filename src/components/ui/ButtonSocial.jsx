import React from 'react'
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const ButtonSocial = () => {
  return (
    <article className='w-20 h-20 bg-linear-105 from-pink-200 to-purple-400 rounded-full group absolute cursor-pointer'>
      <button className=' absolute left-1/2 -translate-1/2 top-1/2 group-hover:-top-8 bg-purple-400 p-4 rounded-full text-purple-100 transition-all duration-300 cursor-pointer hover:brightness-110 z-10'><Phone/></button>
      <button className=' absolute left-1/2 translate-y-1/2 -translate-x-1/2 bottom-1/2 group-hover:-bottom-8 bg-purple-400 p-4 rounded-full text-purple-100 transition-all duration-300 cursor-pointer z-10'><Mail/></button>
      <button className=' absolute left-1/2 -translate-1/2 top-1/2 group-hover:-left-8 bg-purple-400 p-4 rounded-full text-purple-100 transition-all duration-300 cursor-pointer z-10'><Linkedin/></button>
      <button className=' absolute right-1/2 -translate-y-1/2 translate-x-1/2 top-1/2 group-hover:-right-8 bg-purple-400 p-4 rounded-full text-purple-100 transition-all duration-300 cursor-pointer z-10'><Github/></button>
    </article>
  )
}

export default ButtonSocial

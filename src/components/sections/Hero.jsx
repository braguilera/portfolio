import React from 'react'
import ButtonSocial from '../ui/ButtonSocial'
import GradientText from '../ui/GradientText'

const Hero = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center'>

      <main className='flex flex-col justify-center items-center gap-8'>
        <h1 className='text-3xl'>Soy <span className='text-purple-700 font-bold'>Braian Alejandro Aguilera</span>, un fullstack enfocado en el desarrollo</h1>
        <GradientText/>
        <button className='bg-purple-400 text-white font-bold px-4 py-2 rounded-3xl'>Descargar CV</button>
      </main>

      <ButtonSocial/>

    </section>

  )
}

export default Hero

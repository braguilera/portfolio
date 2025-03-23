import React from 'react'
import ButtonSocial from '../ui/ButtonSocial'
import GradientText from '../ui/GradientText'
import CardExperienceFloating from '../ui/CardExperienceFloating'

const Hero = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center relative'>

      <main className='flex flex-col w-3/4 text-center justify-center items-center gap-8'>
        <h1 className='text-5xl'>Soy <span className='text-purple-800 font-bold '>Braian Alejandro Aguilera</span>, un fullstack enfocado en el desarrollo</h1>
        <GradientText/>
        <button className='bg-purple-00 text-white font-bold px-4 py-2 rounded-3xl'>Descargar CV</button>
      </main>

      <article>
        <CardExperienceFloating
          date={"Diciembre 2024 - Enero 2025"}
          title={"Portafolio Backend"}
          company={"Freelance"}
          description={"Desarrollo de un portafolio minimalista y responsivo para un desarrollador backend universitario, diseñado para atraer reclutadores. Incluye un CV descargable, secciones de proyectos, experiencia y habilidades con modales interactivos. Implementado en React y Tailwind CSS, con soporte multilenguaje gracias a i18next."}
        />
      </article>

      <ButtonSocial/>

    </section>

  )
}

export default Hero

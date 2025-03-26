import './App.css'
import Nav from './components/header/Nav'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import RetronBackground from './components/ui/RetronBackground'

function App() {
  return (
    <main className='bg-zinc-50 w-full h-auto relative overflow-x-hidden'>
      <Nav/>
      <RetronBackground>
        <Hero/>
        <Experience/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>
      </RetronBackground>
    </main>
    
  )
}

export default App

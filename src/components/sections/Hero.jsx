import { ArrowRight } from "lucide-react"
import GeometricShapes from "../ui/GeometricShapes"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 text-center text-slate-600">
      <GeometricShapes />

      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 flex items-center space-x-2">
          <div className="h-px w-12 bg-purple-800/50"></div>
          <span className="text-sm font-light tracking-wider">2021</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tighter">Soy <span className="text-purple-900">Braian Alejandro Aguilera</span>, un fullstack enfocado en el desarrollo</h1>

        <h2 className="mb-12 text-9xl font-bold tracking-tighter text-purple-900">FRONTEND</h2>

        <p className="mb-8 max-w-md text-lg font-light leading-relaxed">
          A wonderful serenity has taken possession of my entire.
        </p>

        <button className="group cursor-pointer flex items-center space-x-2 rounded-full border border-purple-800/20 bg-purple-800/10 px-6 py-3 backdrop-blur-sm transition-all hover:bg-purple-800/20">
          <span>Descargar CV</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

      </div>
    </main>
  )
}


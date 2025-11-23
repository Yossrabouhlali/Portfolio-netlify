import { Scene3D } from "@/components/scene-3d"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Nav } from "@/components/nav"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/20">
      <Nav />
      <div className="relative">
        <Scene3D />
        <Hero />
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2025 Yossra Bouhlali. Tous droits réservés. Créé avec ❤️</p>
        </div>
      </footer>
    </main>
  )
}

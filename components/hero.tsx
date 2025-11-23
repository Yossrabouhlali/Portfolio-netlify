"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto flex flex-col items-center gap-8"
      >
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl ring-4 ring-primary/20 md:h-56 md:w-56">
          <Image src="/images/yossra-profile.jpg" alt="Yossra Bouhlali" fill className="object-cover" priority />
        </div>

        <div className="space-y-4">
          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Yossra <span className="text-primary">Bouhlali</span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Étudiante en Technologies de l’Informatique 🌸
            <br />
            Spécialisée en Systèmes Embarqués et Mobiles
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button asChild className="rounded-full bg-primary px-8 py-6 text-lg hover:bg-primary/90">
            <a href="#contact">Me Contacter</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 py-6 text-lg hover:bg-secondary bg-transparent"
          >
            <a href="#projects">Voir mes Projets</a>
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-6 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <a
            href="https://linkedin.com/in/yossra-bouhlali-129bb82b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Yossrabouhlali"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="mailto:yossrabouhlali@gmail.com" className="transition-colors hover:text-primary">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowDown className="h-8 w-8 text-muted-foreground/50" />
      </motion.div>
    </section>
  )
}

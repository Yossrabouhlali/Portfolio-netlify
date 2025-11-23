"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FolderGit2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Système de Mesure Environnementale",
      description: "Conception d'un système embarqué complet mesurant température, humidité et rythme cardiaque.",
      details:
        "Basé sur Arduino avec contrôle IR et feedback visuel LED. Validation par simulation et implémentation physique.",
      tags: ["Arduino", "C++", "IoT", "Sensors"],
      year: "2025",
      link: "#",
    },
    {
      title: "Système d'Alerte Datacenter",
      description: "Solution IoT pour la surveillance des conditions environnementales critiques des serveurs.",
      details: "Détection des pannes de climatisation avec ESP32, alertes email et dashboard Node-RED en temps réel.",
      tags: ["ESP32", "Node-RED", "WiFi", "Embedded"],
      year: "2025",
      link: "#",
    },
    {
      title: "Site E-commerce & Vitrine",
      description: "Développement de solutions web professionnelles pour des clients réels.",
      details: "Création d'un site e-commerce complet via WordPress et d'un site vitrine sur mesure en HTML/CSS.",
      tags: ["WordPress", "HTML", "CSS", "E-commerce"],
      year: "2024",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mes <span className="text-primary">Projets</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Une sélection de mes réalisations académiques et professionnelles
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col overflow-hidden border-none bg-white/60 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary">
                  <FolderGit2 className="h-16 w-16 text-primary/60" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.year}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/5 hover:bg-primary/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 border-t border-border/50 bg-white/40 p-4">
                  <Button variant="ghost" size="sm" className="flex-1 gap-2 hover:text-primary">
                    <Github className="h-4 w-4" /> Code
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 gap-2 hover:text-primary">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      name: "Langages & Programmation",
      skills: ["Python", "C / C++", "Java", "PHP", "JavaScript", "MATLAB"],
    },
    {
      name: "Embarqué & IoT",
      skills: ["Arduino", "ESP32", "Sensors Integration", "ThingSpeak", "Node-RED"],
    },
    {
      name: "Web & Mobile",
      skills: ["HTML5", "CSS3", "Flutter", "Android Studio", "React"],
    },
    {
      name: "Base de Données & Outils",
      skills: ["SQL", "SQLite", "Linux", "Git", "UML", "Visual Paradigm"],
    },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Compétences <span className="text-primary">Techniques</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Les outils et technologies que je maîtrise</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border bg-card p-8 shadow-sm"
            >
              <h3 className="mb-6 text-xl font-bold text-foreground">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Badge className="px-4 py-2 text-sm font-normal hover:bg-primary hover:text-primary-foreground">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

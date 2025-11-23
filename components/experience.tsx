"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building2 } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Stage de Perfectionnement",
      company: "Centre de Calcul EL KHAWARIZMI",
      date: "Janvier 2025 – Février 2025",
      description:
        "Conception et mise en œuvre d’un système d’alerte automatisé pour la surveillance des salles de datacenter.",
      tasks: [
        "Développement d’une solution fiable pour détecter les pannes de climatisation.",
        "Développement d’une solution embarquée avec ESP32 + capteur DHT11.",
        "Affichage local sur LCD et envoi d’alertes email via Wi-Fi.",
        "Intégration d’un tableau de bord Node-RED pour la visualisation.",
      ],
      tags: ["ESP32", "IoT", "Node-RED", "C++"],
    },
    {
      title: "Stage Ouvrier",
      company: "INNOVUP, Ariana",
      date: "Janvier 2024 - Février 2024",
      description: "Développement de solutions web (site e-commerce et site vitrine).",
      tasks: [
        "Participation à des projets web au sein d’une startup tunisienne.",
        "Création d’un site e-commerce avec WordPress (CMS).",
        "Développement d’un site vitrine d’entreprise en HTML/CSS.",
      ],
      tags: ["WordPress", "HTML", "CSS", "Web Dev"],
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mon <span className="text-primary">Parcours</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Expériences professionnelles et stages</p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl space-y-8 before:absolute before:left-[15px] before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary/50 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col gap-4 md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute left-0 top-0 flex h-8 w-8 -translate-x-[2px] items-center justify-center rounded-full bg-background ring-4 ring-primary/20 md:left-1/2 md:-translate-x-1/2">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <div className="ml-12 flex-1 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md md:ml-0">
                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="w-fit gap-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    <Calendar className="h-3 w-3" />
                    {exp.date}
                  </Badge>
                </div>

                <p className="mb-4 text-sm text-muted-foreground">{exp.description}</p>

                <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full border-primary/20 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex-1 md:hidden" /> {/* Spacer for mobile layout alignment */}
              <div className="hidden flex-1 md:block" /> {/* Spacer for desktop layout alignment */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

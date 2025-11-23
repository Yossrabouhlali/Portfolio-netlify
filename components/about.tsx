"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, GraduationCap, MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            À Propos de <span className="text-primary">Moi</span>
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
            Étudiante en troisième année de technologies de l’informatique, spécialisée en systèmes embarqués et
            mobiles. Passionnée par le développement logiciel et la création de solutions innovantes, je souhaite
            intégrer une entreprise dynamique dans le cadre de mon projet de fin d’études afin de mettre en pratique mes
            compétences techniques et contribuer activement à des projets à forte valeur ajoutée.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="h-full border-none bg-white/50 shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Formation</h3>
                <p className="text-sm text-muted-foreground">
                  Licence en technologie de l’informatique (2023 - présent)
                  <br />
                  <span className="font-medium text-primary">ISETR Radés</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="h-full border-none bg-white/50 shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Passion</h3>
                <p className="text-sm text-muted-foreground">
                  Systèmes embarqués, Développement Mobile et Solutions Web Innovantes.
                  <br />
                  Membre active dans plusieurs clubs robotiques.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Card className="h-full border-none bg-white/50 shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Localisation</h3>
                <p className="text-sm text-muted-foreground">
                  Ezzahra Ben Arous, Tunisie
                  <br />
                  Disponible pour des opportunités de stage PFE.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

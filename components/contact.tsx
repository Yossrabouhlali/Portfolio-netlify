"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        'service_m0yii1k',
        'template_2429fqr',
        form,
        'I_2oB9HrwTFG76q-X'
      )

      toast({
        title: "Message envoyé! ✉️",
        description: "Merci pour votre message. Je vous répondrai bientôt.",
      })
      form.reset()
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast({
        title: "Erreur ❌",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      {/* Decorative background elements */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Restons en <span className="text-primary">Contact</span>
          </h2>
          <p className="mt-4 text-muted-foreground">N'hésitez pas à me contacter pour toute opportunité</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-none bg-primary/5 shadow-none">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Téléphone</p>
                  <p className="text-lg font-semibold">+216 28 586 923</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-primary/5 shadow-none">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold">yossrabouhlali@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-primary/5 shadow-none">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Adresse</p>
                  <p className="text-lg font-semibold">Ezzahra Ben Arous, Tunisie</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border bg-white p-8 shadow-lg">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom
                  </label>
                  <Input 
                    id="name" 
                    name="user_name"
                    placeholder="Votre nom" 
                    className="bg-secondary/30" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="user_email"
                    type="email" 
                    placeholder="votre@email.com" 
                    className="bg-secondary/30" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet
                </label>
                <Input 
                  id="subject" 
                  name="subject"
                  placeholder="Proposition de stage..." 
                  className="bg-secondary/30" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Votre message..." 
                  className="min-h-[120px] bg-secondary/30" 
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full rounded-full bg-primary text-lg hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Envoi..." : "Envoyer"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

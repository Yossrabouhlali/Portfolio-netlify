"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Expérience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  // Convert Google Drive link to direct download
  const cvDownloadLink = "https://drive.google.com/uc?export=download&id=1Z_XyZ8LwjbnwaEFoYC2TWBF5jJIrSy4S"

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          Yossra<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
            <a href={cvDownloadLink} target="_blank" rel="noreferrer">
              CV
            </a>
          </Button>
        </nav>

        {/* Mobile Nav - Only render after mount to avoid hydration mismatch */}
        {isMounted && (
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-8 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href={cvDownloadLink} target="_blank" rel="noreferrer">
                    Télécharger CV
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </motion.header>
  )
}

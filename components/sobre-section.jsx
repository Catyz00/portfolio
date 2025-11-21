import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-square max-w-md mx-auto w-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image src="/professional-portrait.png" alt="Foto de perfil" fill className="object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Olá, sou [Seu Nome]</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Desenvolvedor full-stack apaixonado por criar experiências digitais únicas e funcionais. Com mais de
                    5 anos de experiência, transformo ideias em realidade através de código limpo e design intuitivo.
                  </p>
                  <p>
                    Especializado em React, Next.js e tecnologias modernas da web, também ofereço serviços de
                    consultoria espiritual através do tarô, combinando intuição e sabedoria ancestral.
                  </p>
                  <p>
                    Acredito no poder da tecnologia para transformar negócios e na espiritualidade para transformar
                    vidas.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-foreground">Conecte-se comigo</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <a href="https://github.com/usuario" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <a href="https://linkedin.com/in/usuario" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <a href="mailto:seu@email.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <a href="https://instagram.com/usuario" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2 h-4 w-4" />
                        Instagram
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

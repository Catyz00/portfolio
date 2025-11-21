"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Loja online completa com carrinho, pagamentos e painel administrativo",
    image: "/modern-ecommerce-website.png",
    link: "https://exemplo.com",
    github: "https://github.com/usuario/projeto",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Painel de controle com gráficos interativos e dados em tempo real",
    image: "/analytics-dashboard.png",
    link: "https://exemplo.com",
    github: "https://github.com/usuario/projeto",
    tags: ["React", "Chart.js", "API"],
  },
  {
    id: 3,
    title: "App de Tarefas",
    description: "Aplicativo de produtividade com sincronização em nuvem",
    image: "/task-management-app-interface.png",
    link: "https://exemplo.com",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 4,
    title: "Landing Page Corporativa",
    description: "Website institucional responsivo com animações suaves",
    image: "/corporate-landing-page.jpg",
    link: "https://exemplo.com",
    github: "https://github.com/usuario/projeto",
    tags: ["HTML", "CSS", "JavaScript"],
  },
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative aspect-video md:aspect-square bg-muted">
              <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-balance mb-2">{currentProject.title}</h3>
                  <p className="text-muted-foreground text-pretty">{currentProject.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button asChild className="flex-1">
                  <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Projeto
                  </a>
                </Button>
                {currentProject.github && (
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button variant="outline" size="icon" onClick={prevProject} className="h-10 w-10 bg-transparent">
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextProject} className="h-10 w-10 bg-transparent">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

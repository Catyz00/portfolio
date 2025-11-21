"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "WebSite seguradora Prime Secure",
    description: "WebSite corretora de seguros de automóveis, residenciais e empresariais",
    image: "/primesecure.jpeg",
    link: "https://primesecure.com.br",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "App de Produtividade",
    description: "Aplicativo para gerenciar tarefas e projetos com colaboração em tempo real",
    image: "/task-management-app.png",
    link: "https://example.com",
    technologies: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Dashboard Analítico",
    description: "Dashboard com gráficos em tempo real para análise de dados e métricas",
    image: "/analytics-dashboard.png",
    link: "https://example.com",
    technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Rede Social",
    description: "Plataforma social com feed, perfis de usuário e sistema de mensagens",
    image: "/social-media-platform.png",
    link: "https://example.com",
    technologies: ["Next.js", "Supabase", "Real-time", "Tailwind CSS"],
  },
]

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[current]

  return (
    <div className="space-y-6">
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
        {/* Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden bg-muted">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-foreground/80 text-lg">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition flex-shrink-0 ml-4"
            >
              <span>Visualizar</span>
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${index === current ? "bg-primary w-8" : "bg-muted"}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Counter */}
      <div className="text-center text-sm text-muted-foreground">
        {current + 1} / {projects.length}
      </div>
    </div>
  )
}

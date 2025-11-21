"use client"

import { Download } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">Sobre Mim</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis. Com mais de 5 anos de
              experiência em desenvolvimento full-stack, especializo-me em React, Next.js e tecnologias modernas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Expertise</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Desenvolvimento Frontend (React, Next.js, Tailwind CSS)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Desenvolvimento Backend (Node.js, Express, PostgreSQL)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Design Responsivo e UX/UI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Integração com APIs e Serviços
              </li>
            </ul>
          </div>

          {/* Download CV Button */}
          <div>
            <a
              href="/curriculo.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-semibold"
            >
              <Download size={20} />
              Download Currículo
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Conecte-se</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden bg-muted aspect-square">
              <img src="/professional-portrait-developer.png" alt="Profissional" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-muted aspect-square">
              <img src="/developer-workspace-coding.jpg" alt="Workspace" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-muted aspect-square">
              <img src="/team-collaboration.png" alt="Colaboração" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-muted aspect-square">
              <img src="/design-and-development.jpg" alt="Design" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

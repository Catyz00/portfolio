"use client"
import ProjectCarousel from "@/components/project-carousel"
import AboutSection from "@/components/about-section"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Bem-vindo ao Portfólio</h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Conheça meus projetos, serviços e desenvolvimento web e design.
        </p>
      </section>

      {/* Projects Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary mb-8">Projetos em Destaque</h2>
        <ProjectCarousel />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Entre em Contato</h2>
        <ContactForm />
      </section>
    </div>
  )
}

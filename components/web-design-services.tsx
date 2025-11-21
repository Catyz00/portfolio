"use client"

import { useState } from "react"
import { Check, Code, Palette, Smartphone } from "lucide-react"

export default function WebDesignServices() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      id: "landing",
      name: "Landing Page",
      price: "A partir de R$ 1.500",
      icon: Smartphone,
      description: "Página otimizada para conversão",
      details: [
        "Design responsivo moderno",
        "Otimização para SEO básico",
        "Formulário de contato",
        "Analytics integrado",
        "Até 5 revisões",
        "Suporte por 30 dias",
      ],
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      price: "A partir de R$ 5.000",
      icon: Code,
      description: "Loja online completa e funcional",
      details: [
        "Catálogo de produtos",
        "Carrinho de compras",
        "Integração com pagamento",
        "Gestão de pedidos",
        "Área administrativa",
        "Suporte por 60 dias",
      ],
      popular: true,
    },
    {
      id: "corporate",
      name: "Site Corporativo",
      price: "A partir de R$ 3.000",
      icon: Palette,
      description: "Presença profissional online",
      details: [
        "Design personalizado",
        "Blog integrado",
        "Portfolio de trabalhos",
        "Seção de serviços",
        "Otimização de performance",
        "Suporte por 90 dias",
      ],
    },
    {
      id: "app",
      name: "Aplicação Web",
      price: "A partir de R$ 8.000",
      icon: Code,
      description: "Aplicação robusta e escalável",
      details: [
        "Funcionalidades avançadas",
        "Banco de dados",
        "Sistema de usuários",
        "API personalizada",
        "Dashboard administrativo",
        "Suporte contínuo",
      ],
    },
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-4xl font-bold text-primary">Desenvolvimento Web</h2>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Criamos sites e aplicações web profissionais que transformam sua presença digital e impulsionam seu negócio.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => {
          const IconComponent = service.icon
          return (
            <div
              key={service.id}
              className={`rounded-lg border transition cursor-pointer ${
                service.popular ? "border-secondary bg-card shadow-lg" : "border-border bg-card hover:border-primary"
              } ${selectedService === service.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelectedService(service.id)}
            >
              {service.popular && (
                <div className="bg-secondary text-secondary-foreground px-4 py-2 text-center font-semibold text-sm">
                  Mais Procurado
                </div>
              )}

              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.name}</h3>
                    <p className="text-foreground/70">{service.description}</p>
                  </div>
                  <IconComponent className="text-secondary flex-shrink-0" size={32} />
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-primary">{service.price}</div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <Check size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    service.popular
                      ? "bg-secondary text-secondary-foreground hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Process Section */}
      <div className="grid md:grid-cols-4 gap-6 py-8">
        {[
          { step: "1", title: "Briefing", desc: "Entendemos seus objetivos" },
          { step: "2", title: "Design", desc: "Criamos o layout ideal" },
          { step: "3", title: "Desenvolvimento", desc: "Construímos seu site" },
          { step: "4", title: "Entrega", desc: "Lançamos com suporte" },
        ].map((item) => (
          <div key={item.step} className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-3">
              {item.step}
            </div>
            <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
            <p className="text-sm text-foreground/70">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="bg-card border border-border rounded-lg p-8 space-y-6">
        <h3 className="text-2xl font-bold text-primary">Por que nos escolher?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Experiência",
              desc: "Mais de 50 projetos entregues com sucesso",
            },
            {
              title: "Tecnologia Moderna",
              desc: "Utilizamos as melhores ferramentas e práticas",
            },
            {
              title: "Suporte Contínuo",
              desc: "Estamos aqui para ajudar sempre que precisar",
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
              <p className="text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center space-y-4">
        <h3 className="text-3xl font-bold">Pronto para começar?</h3>
        <p className="text-lg opacity-90">Vamos transformar sua ideia em um site incrível</p>
        <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold">
          Solicitar Proposta
        </button>
      </div>
    </div>
  )
}

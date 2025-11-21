import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Clock, Star, Heart, Briefcase, DollarSign, ArrowLeft, MessageCircle } from "lucide-react"

const tarotServices = [
  {
    id: 1,
    name: "Consulta Rápida",
    description: "Resposta objetiva para uma pergunta específica",
    duration: "15 minutos",
    price: "R$ 50",
    cards: "3 cartas",
    icon: Clock,
    features: ["Uma pergunta específica", "Interpretação direta", "Orientação prática", "Atendimento online"],
  },
  {
    id: 2,
    name: "Leitura do Amor",
    description: "Insights profundos sobre relacionamentos e vida afetiva",
    duration: "30 minutos",
    price: "R$ 100",
    cards: "7 cartas",
    icon: Heart,
    popular: true,
    features: ["Relacionamentos atuais", "Perspectivas futuras", "Conselhos amorosos", "Autoconhecimento emocional"],
  },
  {
    id: 3,
    name: "Leitura de Carreira",
    description: "Orientação para decisões profissionais e crescimento",
    duration: "30 minutos",
    price: "R$ 100",
    cards: "7 cartas",
    icon: Briefcase,
    features: [
      "Situação profissional atual",
      "Oportunidades futuras",
      "Decisões de carreira",
      "Desenvolvimento pessoal",
    ],
  },
  {
    id: 4,
    name: "Leitura Financeira",
    description: "Compreenda sua relação com dinheiro e prosperidade",
    duration: "30 minutos",
    price: "R$ 100",
    cards: "7 cartas",
    icon: DollarSign,
    features: [
      "Situação financeira atual",
      "Bloqueios de abundância",
      "Oportunidades de crescimento",
      "Mindset de prosperidade",
    ],
  },
  {
    id: 5,
    name: "Consulta Completa",
    description: "Análise detalhada de múltiplas áreas da sua vida",
    duration: "60 minutos",
    price: "R$ 180",
    cards: "12+ cartas",
    icon: Star,
    premium: true,
    features: [
      "Múltiplas áreas da vida",
      "Análise profunda e detalhada",
      "Orientações personalizadas",
      "Registro por áudio/escrito",
    ],
  },
]

export default function TarotServicesPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/servicos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar aos Serviços
              </Link>
            </Button>
          </div>

          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Consultas de Tarô
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Descubra Seu Caminho Através das Cartas</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                O tarô é uma ferramenta poderosa de autoconhecimento e orientação espiritual. Através das cartas,
                podemos acessar insights profundos sobre o presente e possibilidades futuras, ajudando você a tomar
                decisões mais conscientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#consultas">Ver Consultas</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#contato">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Agendar Agora
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?key=dkbg7" alt="Cartas de Tarô" fill className="object-cover" />
            </div>
          </div>

          {/* Services Grid */}
          <div id="consultas" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Tipos de Consulta</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                Escolha a consulta ideal para suas necessidades
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tarotServices.map((service) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.id}
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                      service.premium ? "border-accent border-2" : ""
                    } ${service.popular ? "border-primary border-2" : ""}`}
                  >
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Mais Popular</Badge>
                    )}
                    {service.premium && (
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Premium</Badge>
                    )}
                    <CardHeader>
                      <div className="mb-4">
                        <div
                          className={`inline-flex p-3 rounded-lg ${
                            service.premium
                              ? "bg-accent/10 text-accent"
                              : service.popular
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-foreground"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">{service.price}</span>
                        <span className="text-sm text-muted-foreground">/ {service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="h-4 w-4" />
                        <span>{service.cards}</span>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/#contato">Agendar Consulta</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* How it Works */}
          <div className="mt-20">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="py-12 px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-balance">Como Funciona</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-2">
                      1
                    </div>
                    <h3 className="font-semibold text-lg">Agende sua Consulta</h3>
                    <p className="text-sm text-muted-foreground">
                      Entre em contato e escolha o melhor horário para você
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-2">
                      2
                    </div>
                    <h3 className="font-semibold text-lg">Prepare suas Perguntas</h3>
                    <p className="text-sm text-muted-foreground">Reflita sobre o que deseja descobrir ou resolver</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-2">
                      3
                    </div>
                    <h3 className="font-semibold text-lg">Receba Orientação</h3>
                    <p className="text-sm text-muted-foreground">Interpretação detalhada e conselhos personalizados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

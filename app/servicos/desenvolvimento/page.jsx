import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Palette,
  ShoppingCart,
  Layers,
  Rocket,
  BarChart,
  ArrowLeft,
  MessageCircle,
  Check,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react"

const webServices = [
  {
    id: 1,
    name: "Landing Page",
    description: "Página única otimizada para conversão e captação de leads",
    startingPrice: "A partir de R$ 1.500",
    icon: Rocket,
    features: [
      "Design responsivo moderno",
      "SEO otimizado",
      "Formulário de contato",
      "Integração com Google Analytics",
      "Hospedagem por 1 ano incluída",
      "Entrega em 7 dias",
    ],
    popular: true,
  },
  {
    id: 2,
    name: "Site Institucional",
    description: "Website completo para apresentar sua empresa e serviços",
    startingPrice: "A partir de R$ 3.000",
    icon: Globe,
    features: [
      "Até 10 páginas",
      "Design personalizado",
      "Painel administrativo",
      "Blog integrado",
      "Otimização SEO avançada",
      "Suporte por 3 meses",
    ],
  },
  {
    id: 3,
    name: "E-commerce",
    description: "Loja online completa com sistema de pagamentos",
    startingPrice: "A partir de R$ 5.000",
    icon: ShoppingCart,
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Integração com gateways de pagamento",
      "Painel administrativo completo",
      "Gestão de estoque",
      "Relatórios de vendas",
    ],
    premium: true,
  },
  {
    id: 4,
    name: "Aplicativo Web",
    description: "Sistema web personalizado para seu negócio",
    startingPrice: "A partir de R$ 8.000",
    icon: Layers,
    features: [
      "Desenvolvimento sob medida",
      "Interface intuitiva",
      "Banco de dados robusto",
      "Sistema de autenticação",
      "API REST completa",
      "Escalabilidade garantida",
    ],
    premium: true,
  },
]

const technologies = [
  { name: "React", icon: "/placeholder.svg?key=8v0ct" },
  { name: "Next.js", icon: "/placeholder.svg?key=p61ab" },
  { name: "TypeScript", icon: "/placeholder.svg?key=i6obt" },
  { name: "Tailwind CSS", icon: "/placeholder.svg?key=wl7es" },
  { name: "Node.js", icon: "/placeholder.svg?key=8r94l" },
  { name: "PostgreSQL", icon: "/placeholder.svg?key=3d4s6" },
]

const process = [
  {
    step: "1",
    title: "Briefing",
    description: "Entendemos suas necessidades e objetivos do projeto",
    icon: MessageCircle,
  },
  {
    step: "2",
    title: "Planejamento",
    description: "Criamos a estrutura, wireframes e cronograma",
    icon: BarChart,
  },
  {
    step: "3",
    title: "Design",
    description: "Desenvolvemos o design visual e protótipo interativo",
    icon: Palette,
  },
  {
    step: "4",
    title: "Desenvolvimento",
    description: "Codificamos sua solução com as melhores práticas",
    icon: Code,
  },
  {
    step: "5",
    title: "Testes",
    description: "Testamos em múltiplos dispositivos e navegadores",
    icon: Check,
  },
  {
    step: "6",
    title: "Lançamento",
    description: "Publicamos seu projeto e oferecemos treinamento",
    icon: Rocket,
  },
]

export default function WebDevelopmentPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <Code className="h-4 w-4" />
                Desenvolvimento Web
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Transforme Suas Ideias em Realidade Digital
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Desenvolvimento de sites, aplicativos e sistemas web modernos, rápidos e escaláveis. Utilizando as
                tecnologias mais avançadas do mercado para garantir o sucesso do seu negócio online.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <span>100% Responsivo</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Zap className="h-4 w-4" />
                  </div>
                  <span>Alta Performance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>SEO Otimizado</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#servicos">Ver Serviços</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#contato">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?key=f9v0o" alt="Desenvolvimento Web" fill className="object-cover" />
            </div>
          </div>

          {/* Services Grid */}
          <div id="servicos" className="space-y-8 mb-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Serviços de Desenvolvimento</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                Soluções completas para todas as necessidades do seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {webServices.map((service) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.id}
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                      service.premium ? "border-accent border-2" : ""
                    } ${service.popular ? "border-primary border-2" : ""}`}
                  >
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Mais Vendido</Badge>
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
                      <div className="text-2xl font-bold text-accent">{service.startingPrice}</div>
                      <div className="space-y-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/#contato">Solicitar Orçamento</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <CardContent className="py-12 px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-balance">
                  Tecnologias que Utilizo
                </h2>
                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                  As ferramentas mais modernas e confiáveis do mercado
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                  {technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                    >
                      <div className="relative w-12 h-12">
                        <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                      </div>
                      <span className="text-xs font-medium text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Processo de Desenvolvimento</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                Do primeiro contato até o lançamento do seu projeto
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.step} className="relative overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-accent/10 text-accent">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="text-4xl font-bold text-muted-foreground/20">{item.step}</div>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-accent/10 via-accent/5 to-primary/10 border-accent/30">
            <CardContent className="py-12 px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Pronto para Começar Seu Projeto?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-pretty">
                Entre em contato agora e receba um orçamento personalizado sem compromisso. Vamos transformar sua visão
                em realidade!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/#contato">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicitar Orçamento
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/">Ver Portfólio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

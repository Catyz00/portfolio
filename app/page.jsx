import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Code, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Meus Serviços</h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Escolha o serviço ideal para transformar sua jornada
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tarot Services */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Consultas de Tarô</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Orientação espiritual e autoconhecimento através das cartas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Descubra insights profundos sobre amor, carreira, finanças e propósito de vida através da sabedoria
                  ancestral do tarô.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Leituras personalizadas e detalhadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Múltiplos métodos de tiragem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Orientação para decisões importantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Atendimento online ou presencial</span>
                  </li>
                </ul>
                <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  <Link href="/servicos/taro">
                    Ver Consultas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Web Development Services */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Code className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Desenvolvimento Web</CardTitle>
                </div>
                <CardDescription className="text-base">Sites e aplicativos modernos para o seu negócio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Transforme suas ideias em realidade digital com soluções web profissionais, rápidas e escaláveis.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Sites institucionais e landing pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>E-commerce completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Sistemas web personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Manutenção e suporte técnico</span>
                  </li>
                </ul>
                <Button asChild className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                  <Link href="/servicos/desenvolvimento">
                    Ver Serviços
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="py-12 px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Pronto para começar?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-pretty">
                  Entre em contato para agendar uma consulta ou solicitar um orçamento para seu projeto
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/#contato">Fale Comigo</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/">Voltar ao Portfólio</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

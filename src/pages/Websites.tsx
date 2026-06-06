import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ShoppingCart,
  FileText,
  Search,
  Smartphone,
  Rocket,
  Code2,
  Palette,
  Gauge,
  Shield,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import websitesHeroBg from "@/assets/websites-hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/553899484217";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Presença online profissional que transmite credibilidade e fortalece a identidade da sua marca.",
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais",
    description:
      "E-commerces completos com integração de pagamento, gestão de estoque e checkout otimizado.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão focadas em capturar leads e maximizar seus resultados de marketing.",
  },
  {
    icon: Search,
    title: "SEO Otimizado",
    description:
      "Sites desenvolvidos com as melhores práticas de SEO para ranquear no Google e atrair tráfego orgânico.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description:
      "Experiência perfeita em qualquer dispositivo: desktop, tablet e mobile. Seu site sempre impecável.",
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    description:
      "Aplicações web personalizadas: painéis administrativos, dashboards, SaaS e soluções sob medida.",
  },
];

const benefits = [
  {
    icon: Palette,
    title: "Design Exclusivo",
    description: "Layout sob medida para sua marca, sem templates genéricos.",
  },
  {
    icon: Gauge,
    title: "Alta Performance",
    description: "Carregamento rápido com otimização de imagens e código.",
  },
  {
    icon: Shield,
    title: "Segurança SSL",
    description: "Certificado de segurança incluso para proteger seus dados e dos seus clientes.",
  },
  {
    icon: Rocket,
    title: "Entrega Rápida",
    description: "Prazos curtos e bem definidos, com acompanhamento em tempo real.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Briefing",
    description: "Entendemos seu negócio, público-alvo e objetivos.",
  },
  {
    step: "02",
    title: "Protótipo",
    description: "Criamos o design visual aprovado antes de codificar.",
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description: "Codificação com tecnologias modernas e boas práticas.",
  },
  {
    step: "04",
    title: "Entrega",
    description: "Publicação, testes e treinamento para você gerenciar.",
  },
];

const Websites = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={websitesHeroBg}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 gradient-navy opacity-85" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/10 opacity-0 animate-fade-in">
              <span className="text-sm font-body text-primary">
                🎨 Design & Desenvolvimento Web
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="text-primary-foreground">Criação de Sites </span>
              <span className="text-gradient-cyan">Profissionais</span>
              <span className="text-primary-foreground"> que Convertem Visitantes em Clientes.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 font-body max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Da landing page à loja virtual completa: entregamos sites rápidos, bonitos e otimizados para resultados reais no seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button
                asChild
                size="lg"
                className="gradient-cyan text-secondary-foreground font-heading font-semibold text-base px-8 py-6 rounded-xl animate-pulse-glow hover:opacity-90 transition-opacity"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento Grátis
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground font-heading font-medium text-base px-8 py-6 rounded-xl bg-transparent hover:bg-primary-foreground/5 hover:text-primary-foreground"
              >
                <a href="#servicos-sites">
                  Ver Nossos Serviços
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos-sites" className="py-20 lg:py-28 gradient-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Soluções Web para Cada Necessidade
            </h2>
            <p className="text-lg font-body text-primary-foreground/60">
              Desenvolvemos sites e sistemas com foco em performance, design e conversão.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative rounded-2xl p-8 border border-cyan/10 bg-navy-deep/50 backdrop-blur-sm hover:border-cyan/30 transition-all duration-300 group opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-5 group-hover:bg-cyan/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-body text-primary-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Por que escolher a{" "}
              <span className="text-gradient-cyan">OptiFlow Digital</span>?
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Qualidade técnica e atenção ao detalhe em cada projeto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center gap-4 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-cyan flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 gradient-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Nosso Processo de <span className="text-gradient-cyan">Desenvolvimento</span>
            </h2>
            <p className="text-lg font-body text-primary-foreground/60">
              Metodologia clara e transparente do primeiro contato à entrega final.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative rounded-2xl p-6 border border-cyan/10 bg-navy-deep/50 backdrop-blur-sm opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <span className="text-4xl font-heading font-bold text-cyan/20">
                  {step.step}
                </span>
                <h3 className="text-lg font-heading font-bold text-primary-foreground mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-body text-primary-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 opacity-0 animate-fade-in">
              Vamos criar o seu <span className="text-gradient-cyan">site</span>?
            </h2>
            <p className="text-lg font-body text-muted-foreground mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Entre em contato agora e receba um orçamento personalizado sem compromisso.
            </p>
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="gradient-cyan text-secondary-foreground font-heading font-semibold text-base px-8 py-6 rounded-xl animate-pulse-glow hover:opacity-90 transition-opacity"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Websites;

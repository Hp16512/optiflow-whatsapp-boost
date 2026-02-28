import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/553899484217";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-navy opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan/30 bg-cyan/10 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-sm font-body text-primary">🚀 Automação Inteligente para seu Negócio</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="text-primary-foreground">Liberte Sua Empresa: </span>
            <span className="text-gradient-cyan">Automação de WhatsApp</span>
            <span className="text-primary-foreground"> para Vendas e Atendimento.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 font-body max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Transforme seu atendimento e impulsione suas vendas com soluções inteligentes da OptiFlow Digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <Button asChild size="lg" className="gradient-cyan text-secondary-foreground font-heading font-semibold text-base px-8 py-6 rounded-xl animate-pulse-glow hover:opacity-90 transition-opacity">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Agende Sua Consultoria Gratuita
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground font-heading font-medium text-base px-8 py-6 rounded-xl bg-transparent hover:bg-primary-foreground/5 hover:text-primary-foreground">
              <a href="#services">
                Conheça Nossos Serviços
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-5 h-5 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

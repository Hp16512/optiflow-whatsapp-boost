import { TrendingUp, Heart, Zap, BarChart3, Repeat, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/553899484217";

const benefits = [
  { icon: TrendingUp, title: "Mais Vendas", description: "Aumente sua taxa de conversão com atendimento rápido e automatizado." },
  { icon: Heart, title: "Clientes Satisfeitos", description: "Ofereça uma experiência de atendimento excepcional e personalizada." },
  { icon: Zap, title: "Equipe Produtiva", description: "Libere sua equipe para focar em tarefas estratégicas e de alto valor." },
  { icon: BarChart3, title: "Escalabilidade", description: "Cresça sem limites, com automação que acompanha sua expansão." },
  { icon: Repeat, title: "Previsibilidade", description: "Processos padronizados que garantem consistência e resultados mensuráveis." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Resultados que <span className="text-gradient-cyan">Você Pode Ver</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground">
            Benefícios reais que impactam diretamente o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex items-start gap-4 opacity-0 animate-fade-in ${
                index >= 3 ? "lg:col-start-1 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-cyan flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gradient-cyan text-secondary-foreground font-heading font-semibold text-base px-8 py-6 rounded-xl hover:opacity-90 transition-opacity">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Quero Otimizar Meu WhatsApp Agora!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

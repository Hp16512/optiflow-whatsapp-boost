import { Target, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Missão",
    description: "Libertar empresas de processos manuais e repetitivos, permitindo que foquem no que realmente importa: crescer.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Utilizamos as mais modernas tecnologias de automação para criar soluções personalizadas que se adaptam ao seu negócio.",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Mais do que fornecedores, somos parceiros estratégicos comprometidos com o sucesso de cada cliente.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Quem Somos: <span className="text-gradient-cyan">OptiFlow Digital</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground">
            Sua Automação, Nosso Fluxo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed text-center">
            A OptiFlow Digital nasceu com um propósito claro: libertar empresas de processos manuais e repetitivos que consomem tempo e recursos valiosos. Somos especialistas em automação de processos, com foco inicial em soluções inteligentes para WhatsApp. Acreditamos que a tecnologia deve simplificar, não complicar. Por isso, criamos fluxos de trabalho personalizados que se integram perfeitamente à realidade de cada cliente, otimizando atendimento, vendas e comunicação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-cyan flex items-center justify-center mb-6 group-hover:animate-float">
                <feature.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-base font-body text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

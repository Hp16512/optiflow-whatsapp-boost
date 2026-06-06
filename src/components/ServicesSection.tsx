import { Clock, UserCheck, CalendarCheck, MessageSquare, PiggyBank, Globe } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Respostas instantâneas e suporte contínuo para seus clientes, a qualquer hora do dia.",
  },
  {
    icon: UserCheck,
    title: "Qualificação de Leads",
    description: "Identifique e direcione clientes potenciais de forma automática e eficiente.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento Inteligente",
    description: "Reuniões e consultorias agendadas automaticamente, sem esforço manual.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Personalizada",
    description: "Mensagens segmentadas para maior engajamento e taxa de conversão.",
  },
  {
    icon: PiggyBank,
    title: "Redução de Custos",
    description: "Otimize sua equipe e recursos, fazendo mais com menos investimento.",
  },
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites profissionais, landing pages e lojas virtuais otimizados para converter visitantes em clientes.",
    link: "/sites",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 gradient-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Nossos Serviços: <span className="text-gradient-cyan">Automação + Presença Digital</span>
          </h2>
          <p className="text-lg font-body text-primary-foreground/60">
            Da automação de WhatsApp à criação de sites profissionais, a OptiFlow Digital potencializa todos os pontos de contato do seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const className = `relative rounded-2xl p-8 border border-cyan/10 bg-navy-deep/50 backdrop-blur-sm hover:border-cyan/30 transition-all duration-300 group opacity-0 animate-fade-in ${
              service.link ? "cursor-pointer" : ""
            }`;
            const style = { animationDelay: `${0.15 * (index + 1)}s` };
            const content = (
              <>
                <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-5 group-hover:bg-cyan/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">{service.title}</h3>
                <p className="text-sm font-body text-primary-foreground/60 leading-relaxed">{service.description}</p>
                {service.link && (
                  <span className="inline-block mt-3 text-sm font-body text-primary hover:underline">
                    Saiba mais →
                  </span>
                )}
              </>
            );
            if (service.link) {
              return (
                <a key={service.title} href={service.link} className={className} style={style}>
                  {content}
                </a>
              );
            }
            return (
              <div key={service.title} className={className} style={style}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

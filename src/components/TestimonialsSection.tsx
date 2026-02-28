import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula S.",
    role: "CEO, Loja Virtual",
    text: "A OptiFlow transformou nosso atendimento no WhatsApp. Nossas vendas aumentaram 40% no primeiro mês!",
  },
  {
    name: "Carlos M.",
    role: "Diretor Comercial",
    text: "O agendamento automático economizou horas da minha equipe. Agora focamos no que realmente importa.",
  },
  {
    name: "Fernanda L.",
    role: "Gerente de Marketing",
    text: "A qualificação de leads via WhatsApp foi um divisor de águas para nossa estratégia de vendas.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            O que Nossos Clientes <span className="text-gradient-cyan">Dizem</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-2xl p-8 border border-cyan/10 bg-navy-deep/50 backdrop-blur-sm opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm font-body text-primary-foreground/70 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-heading font-bold text-primary-foreground text-sm">{testimonial.name}</p>
              <p className="text-xs font-body text-primary-foreground/50">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

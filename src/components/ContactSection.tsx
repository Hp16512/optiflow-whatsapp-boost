import { useState } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_LINK = "https://wa.me/553899484217";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}. Email: ${form.email}. Telefone: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/553899484217?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp!", description: "Aguarde enquanto abrimos o WhatsApp." });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Pronto para <span className="text-gradient-cyan">Transformar Seu Negócio?</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground">
            Entre em contato e descubra como podemos ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-2xl p-8 shadow-card">
            <Input
              placeholder="Seu Nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-muted border-border font-body"
            />
            <Input
              type="email"
              placeholder="Seu E-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-muted border-border font-body"
            />
            <Input
              type="tel"
              placeholder="Seu Telefone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-muted border-border font-body"
            />
            <Textarea
              placeholder="Sua Mensagem (opcional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="bg-muted border-border font-body"
            />
            <Button type="submit" size="lg" className="w-full gradient-cyan text-secondary-foreground font-heading font-semibold text-base py-6 rounded-xl hover:opacity-90 transition-opacity">
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar via WhatsApp
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Fale Conosco Diretamente</h3>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                Estamos prontos para ouvir suas necessidades e criar a solução perfeita para o seu negócio.
              </p>
            </div>

            <div className="space-y-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl gradient-cyan flex items-center justify-center group-hover:animate-float">
                  <MessageCircle className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-body text-muted-foreground">WhatsApp</p>
                  <p className="font-heading font-semibold text-foreground">+55 38 9948-4217</p>
                </div>
              </a>

              <a href="tel:+553899484217" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:animate-float">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-body text-muted-foreground">Telefone</p>
                  <p className="font-heading font-semibold text-foreground">+55 38 9948-4217</p>
                </div>
              </a>
            </div>

            <Button asChild size="lg" className="gradient-cyan text-secondary-foreground font-heading font-semibold text-base px-8 py-6 rounded-xl hover:opacity-90 transition-opacity w-fit">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Conosco via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

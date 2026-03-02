import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import optiflowLogo from "@/assets/optiflow-logo.png";

const WHATSAPP_LINK = "https://wa.me/553899484217";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Quem Somos", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-navy border-b border-cyan/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2">
            <img src={optiflowLogo} alt="OptiFlow Digital" className="w-8 h-8 rounded-lg object-contain" />
            <span className="font-heading font-bold text-lg text-primary-foreground">
              Opti<span className="text-primary">Flow</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body text-primary-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="gradient-cyan text-secondary-foreground font-heading font-semibold hover:opacity-90 transition-opacity">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-body text-primary-foreground/70 hover:text-primary transition-colors px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="sm" className="gradient-cyan text-secondary-foreground font-heading font-semibold mt-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

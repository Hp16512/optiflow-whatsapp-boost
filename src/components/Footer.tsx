import { MessageCircle } from "lucide-react";
import optiflowLogo from "@/assets/optiflow-logo.png";

const Footer = () => {
  return (
    <footer className="gradient-navy py-12 border-t border-cyan/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={optiflowLogo} alt="OptiFlow Digital" className="w-8 h-8 rounded-lg object-contain" />
            <span className="font-heading font-bold text-lg text-primary-foreground">
              Opti<span className="text-primary">Flow</span> Digital
            </span>
          </div>

          <p className="text-sm font-body text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} OptiFlow Digital. Todos os direitos reservados.
          </p>

          <a
            href="https://wa.me/553899484217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-body text-primary hover:text-cyan-glow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            +55 38 9948-4217
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

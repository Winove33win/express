import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">LogiPro</p>
          <p className="footer-subtitle">
            Operações logísticas inteligentes, com rastreabilidade em tempo real e atendimento consultivo para todo o Brasil.
          </p>
        </div>
        <nav aria-label="Rodapé" className="footer-nav">
          <span>Navegue</span>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
        <div className="footer-contact">
          <span>Fale conosco</span>
          <a href="mailto:contato@logipro.com.br">
            <Mail size={18} /> contato@logipro.com.br
          </a>
          <a href="tel:+551130000000">
            <Phone size={18} /> +55 (11) 3000-0000
          </a>
          <p>
            <MapPin size={18} /> Av. das Operações, 450 - São Paulo/SP
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} LogiPro. Todos os direitos reservados.</p>
        <div className="footer-legal">
          <NavLink to="/politica-de-privacidade">Política de privacidade</NavLink>
          <NavLink to="/termos-de-uso">Termos de uso</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

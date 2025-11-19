import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#institucional", label: "Institucional" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#rastreamento", label: "Rastreamento" },
  { href: "#servicos", label: "Serviços" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#contato", label: "Contato" },
  { href: "#blog", label: "Blog" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-slate-900/90 shadow-lg" : "bg-slate-900/40"
      } backdrop-blur-md`}
      data-aos="fade-down"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          <span className="text-yellow-400">Atento</span> Logística
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-yellow-300">
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-yellow-400 px-5 py-2 text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Solicitar Cotação
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="md:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm md:hidden">
          <div className="absolute inset-0 scale-105 bg-gradient-to-b from-slate-900/60 to-slate-950/90 transition" />
          <div className="relative z-50 flex h-full flex-col items-center justify-center gap-6 px-8 text-center text-white">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute right-6 top-6 rounded-full border border-white/20 p-2"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" />
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-xl"
              onClick={() => setMenuOpen(false)}
            >
              Solicitar Cotação
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

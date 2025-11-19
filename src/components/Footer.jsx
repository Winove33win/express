function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <section id="blog" className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-slate-900 p-8" data-aos="fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Blog</p>
          <h3 className="mt-2 text-2xl font-semibold">Insights estratégicos em logística</h3>
          <p className="mt-2 text-slate-100">
            Conteúdos exclusivos sobre tendências, compliance e tecnologia para transporte, armazenagem e supply chain.
          </p>
        </div>
      </section>
      <div className="border-t border-white/10">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold"><span className="text-yellow-400">Atento</span> Logística</p>
            <p className="mt-3 text-sm text-slate-300">
              Transporte, armazenagem e tecnologia em uma plataforma completa com cobertura nacional.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#institucional">Sobre</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Serviços</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Rodo</li>
              <li>Modal Aéreo</li>
              <li>Health</li>
              <li>Biolog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>contato@atentologistica.com.br</li>
              <li>+55 (11) 4000-2025</li>
              <li>Av. das Conexões, 750 - São Paulo/SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-slate-400">© 2025 Atento Logística. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

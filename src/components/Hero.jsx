function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-900 pt-24 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
      >
        <source src="https://cdn.coverr.co/videos/coverr-logistics-center-3988/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      <div className="relative mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col items-start justify-center gap-8 px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-yellow-300" data-aos="fade-up">
          Liderança em logística integrada
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl" data-aos="fade-up" data-aos-delay="100">
          Conectando Negócios com Eficiência e Tecnologia
        </h1>
        <p className="max-w-2xl text-lg text-slate-100" data-aos="fade-up" data-aos-delay="200">
          Soluções logísticas completas para todos os setores — segurança, inovação e confiabilidade.
          Operações inteligentes que acompanham o ritmo do seu crescimento.
        </p>
        <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="300">
          <a
            href="#contato"
            className="rounded-full bg-yellow-400 px-8 py-3 text-base font-semibold text-slate-900 shadow-xl transition hover:-translate-y-0.5"
          >
            Solicitar Cotação
          </a>
          <a
            href="#institucional"
            className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white backdrop-blur"
          >
            Saiba Mais
          </a>
        </div>
        <div className="grid w-full gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay="400">
          {["+1.200 cidades atendidas", "98% de SLA garantido", "24/7 monitoramento ativo"].map((metric) => (
            <div
              key={metric}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur"
            >
              <p className="text-lg font-semibold">{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

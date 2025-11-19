function Institucional() {
  const stats = [
    { value: "+650", label: "clientes ativos" },
    { value: "20 anos", label: "de experiência" },
    { value: "+40", label: "hubs estrategicamente posicionados" },
  ];

  return (
    <section id="institucional" className="bg-slate-50 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Quem Somos</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Atento Logística</h2>
          <p className="text-lg text-slate-600">
            Somos especialistas em transporte, armazenagem e tecnologia aplicada à logística. Entregamos operações de alta
            performance com cobertura nacional, centro de controle próprio e especialistas dedicados em cada etapa da
            cadeia.
          </p>
          <p className="text-lg text-slate-600">
            Nossa infraestrutura foi desenhada para atender o Brasil de ponta a ponta, conectando indústrias, varejo e e-commerce
            com inteligência, segurança e transparência em tempo real.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-4 text-center shadow-lg" data-aos="fade-up">
                <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
                <p className="text-sm uppercase tracking-wide text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Equipe de logística conectada em centro de operações"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Institucional;

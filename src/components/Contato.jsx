function Contato() {
  return (
    <section id="contato" className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div data-aos="fade-right" className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Contato</p>
          <h2 className="text-3xl font-semibold text-slate-900">Converse com nossos especialistas</h2>
          <p className="text-lg text-slate-600">
            Compartilhe seus desafios de transporte, armazenagem ou distribuição. Criamos planos completos para operações de
            qualquer porte, com atendimento consultivo e foco em resultados.
          </p>
          <div className="space-y-2 text-sm text-slate-600">
            <p><strong>Email:</strong> atendimento@atentologistica.com.br</p>
            <p><strong>Telefone:</strong> +55 (11) 4000-2025</p>
            <p><strong>Endereço:</strong> Av. das Conexões, 750 - São Paulo/SP</p>
          </div>
        </div>
        <form
          data-aos="fade-left"
          className="grid gap-4 rounded-3xl bg-slate-50 p-6 shadow-xl"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-slate-600">
              Nome
              <input type="text" className="mt-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" required />
            </label>
            <label className="flex flex-col text-sm font-medium text-slate-600">
              E-mail
              <input type="email" className="mt-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" required />
            </label>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-slate-600">
              Telefone
              <input type="tel" className="mt-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" />
            </label>
            <label className="flex flex-col text-sm font-medium text-slate-600">
              Assunto
              <input type="text" className="mt-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" />
            </label>
          </div>
          <label className="flex flex-col text-sm font-medium text-slate-600">
            Mensagem
            <textarea className="mt-1 h-32 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" />
          </label>
          <button
            type="submit"
            className="rounded-full bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;

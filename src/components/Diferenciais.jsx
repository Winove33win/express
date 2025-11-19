import { Clock, Cpu, Globe2, Layers, ShieldCheck, Users } from "lucide-react";

const FEATURES = [
  { icon: Cpu, title: "Tecnologia em tempo real", description: "Painéis e torre de controle com dados atualizados segundo a segundo." },
  { icon: Users, title: "Equipe Especializada", description: "Consultores e operadores certificados em cada vertical de negócio." },
  { icon: ShieldCheck, title: "Segurança e Confiabilidade", description: "Protocolos rigorosos, escoltas e seguro completo para cargas sensíveis." },
  { icon: Clock, title: "Operação 24h", description: "Monitoramento contínuo com redundância energética e equipes em turnos." },
  { icon: Layers, title: "Atendimento Multimodal", description: "Integração entre modal rodoviário, aéreo, dedicado e logística reversa." },
  { icon: Globe2, title: "Cobertura Nacional", description: "Rede de filiais e parceiros homologados cobrindo todo o território brasileiro." },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 space-y-4 text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Diferenciais</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Excelência que gera confiança</h2>
          <p className="text-lg text-slate-600">
            Cada operação é desenhada para garantir previsibilidade, controle absoluto e experiências memoráveis para os seus clientes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-lg shadow-blue-900/5"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900/10 text-yellow-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-base text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;

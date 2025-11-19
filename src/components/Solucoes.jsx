import { Factory, Leaf, Package, Pill, Sparkles, Truck } from "lucide-react";

const CATEGORIES = [
  { title: "Consumo e Varejo", icon: Package, items: ["Bebidas e Alimentos", "Calçados e Vestuário", "E-commerce"] },
  { title: "Saúde e Beleza", icon: Pill, items: ["Farmacêutico", "Cosmético"] },
  {
    title: "Indústria e Produção",
    icon: Factory,
    items: ["Industrial", "Automotivo", "Eletrodomésticos", "Engenharia e Construção"],
  },
  { title: "Agronegócio e Energia", icon: Leaf, items: ["Agronegócio", "Energia e Mineração"] },
  { title: "Tecnologia e Comunicação", icon: Sparkles, items: ["Tecnologia", "Publicidade e Comunicação"] },
  { title: "Cultura e Esportes", icon: Truck, items: ["Editorial", "Esportivo"] },
];

function Solucoes() {
  return (
    <section id="solucoes" className="bg-slate-100 py-20">
      <span id="servicos" className="sr-only">
        Serviços e soluções
      </span>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Setores atendidos</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Soluções sob medida para cada segmento</h2>
          <p className="mt-3 text-lg text-slate-600">
            Operações modulares e escaláveis para consumo, indústria, saúde, tecnologia e mais.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CATEGORIES.map(({ title, icon: Icon, items }, index) => (
            <div
              key={title}
              className={`${index % 2 === 0 ? "bg-white" : "bg-blue-900/90 text-white"} rounded-3xl p-6 shadow-xl transition hover:-translate-y-1`}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${index % 2 === 0 ? "bg-blue-900/10 text-yellow-400" : "bg-white/10 text-yellow-200"}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <ul className="space-y-2 text-base">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solucoes;

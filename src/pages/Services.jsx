import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { Truck, PackageSearch, ShieldCheck, Gauge, BarChart2, Cog } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function Services() {
  const { open } = useQuoteModal();

  return (
    <div className="page">
      <section className="page-hero services-hero">
        <div className="container page-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="badge">Portfólio LogiPro</span>
            <h1>Serviços logísticos modulares para acompanhar o ritmo do seu negócio</h1>
            <p>
              Da coleta à entrega final, coordenamos cada etapa com dados integrados, acompanhamento em tempo real e uma rede de parceiros certificada.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn-primary" onClick={open}>
                Solicitar proposta
              </button>
              <Link to="/contato" className="hero__secondary">
                Falar com especialista
              </Link>
            </div>
          </motion.div>
          <motion.figure
            className="page-hero__media"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <img src="/um-camiao-conduzir-numa-auto-estrada-ensolarada.jpg" alt="Caminhão em autoestrada ensolarada" />
          </motion.figure>
        </div>
      </section>

      <section className="section">
        <div className="container services-grid">
          <motion.div className="card" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.span className="section__kicker" variants={item}>
              Transporte inteligente
            </motion.span>
            <motion.h2 variants={item}>Transporte fracionado premium</motion.h2>
            <motion.p variants={item}>
              Coletas rápidas, roteirização dinâmica, rastreamento full time e equipe de prontidão para tratativas especiais.
            </motion.p>
            <motion.ul className="list" variants={container}>
              <motion.li variants={item}>
                <Truck size={18} /> Rede de hubs regionais com cross-docking otimizado
              </motion.li>
              <motion.li variants={item}>
                <Gauge size={18} /> SLA sob medida com gestão proativa de ocorrências
              </motion.li>
              <motion.li variants={item}>
                <ShieldCheck size={18} /> Monitoramento 24/7 com dupla autenticação e sensores IoT
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.figure
            className="services-media"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/camiao-na-rodovia-ao-por-sol.jpg" alt="Caminhão na rodovia ao pôr do sol" />
          </motion.figure>
        </div>
      </section>

      <section className="section section--highlight">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.span className="section__kicker" variants={item}>
              Logística integrada
            </motion.span>
            <motion.h2 variants={item}>Integração ponta a ponta</motion.h2>
            <motion.p variants={item}>
              Combinamos armazenagem, fulfillment, transporte e inteligência de dados em uma operação única, com indicadores compartilhados.
            </motion.p>
          </motion.div>
          <motion.div className="grid grid-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.article className="card" variants={item}>
              <PackageSearch size={26} className="card__icon" />
              <h3>Fulfillment sob demanda</h3>
              <p>Picking e packing escalável com integração nativa aos principais ERPs e plataformas de e-commerce.</p>
            </motion.article>
            <motion.article className="card" variants={item}>
              <BarChart2 size={26} className="card__icon" />
              <h3>Gestão orientada a dados</h3>
              <p>Dashboards de performance e previsões apoiadas por machine learning para antecipar demandas.</p>
            </motion.article>
            <motion.article className="card" variants={item}>
              <Cog size={26} className="card__icon" />
              <h3>Projetos sob medida</h3>
              <p>Desenho de operações dedicadas com squads ágeis acompanhando KPIs semanais.</p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <section className="section services-matrix">
        <div className="container">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.span className="section__kicker" variants={item}>
              Diferenciais
            </motion.span>
            <motion.h2 variants={item}>Por que líderes confiam na LogiPro</motion.h2>
          </motion.div>
          <motion.div className="matrix" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {[
              { title: "Visibilidade total", description: "Portal com rastreamento em tempo real e alertas inteligentes." },
              { title: "Governança e compliance", description: "Processos auditados, certificações e gestão de risco dedicada." },
              { title: "Escalabilidade", description: "Estrutura modular para acompanhar picos e expansão geográfica." },
              { title: "Equipe consultiva", description: "Profissionais que atuam como extensão do seu time interno." },
            ].map((feature) => (
              <motion.div className="matrix__item" key={feature.title} variants={item}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container section__cta-wrapper">
          <motion.div
            className="section__cta-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Pronto para desenhar a solução ideal?</h2>
            <p>Conte com a LogiPro para projetar uma operação resiliente e escalável.</p>
            <div className="section__cta">
              <button type="button" className="btn btn-primary" onClick={open}>
                Solicitar proposta
              </button>
              <Link to="/contato" className="section__cta-secondary">
                Vamos conversar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;

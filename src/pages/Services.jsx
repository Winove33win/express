import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  Truck,
  PackageSearch,
  ShieldCheck,
  Gauge,
  BarChart2,
  Cog,
  Plane,
  Warehouse,
  Route,
  Globe,
  Boxes,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

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

const serviceProfiles = [
  {
    id: "rodo",
    label: "Rodo Expresso",
    summary: "Cobertura nacional com janelas fixas, cross-docking inteligente e monitoração em tempo real.",
    heroKicker: "Rodo Expresso",
    heroTitle: "Rede rodoviária orquestrada por dados",
    description:
      "Coordenamos coletas diárias, rotas interestaduais e distribuição last mile com monitoramento 24/7, integração TMS/WMS e squads de prontidão para qualquer ocorrência.",
    stats: [
      { label: "Prazo médio", value: "24-72h" },
      { label: "Cobertura", value: "5.400+ cidades" },
      { label: "Nível de serviço", value: "99,1%" },
    ],
    features: [
      {
        title: "Roteirização inteligente",
        description: "Engine proprietário combina OTIF, custos e restrições de janela para definir as melhores rotas.",
        icon: Route,
      },
      {
        title: "SLA proativo",
        description: "Time de gestão de risco acompanha cada viagem com alertas acionáveis e planos de contingência.",
        icon: Gauge,
      },
      {
        title: "Segurança embarcada",
        description: "Sensores IoT, dupla autenticação e parceiros homologados por padrão ISO 28000.",
        icon: ShieldCheck,
      },
    ],
    media: "/camiao-na-rodovia-ao-por-sol.jpg",
    mediaAlt: "Operação rodoviária da LogiPro",
    icon: Truck,
    ctaLabel: "Quero cotar Rodo Expresso",
  },
  {
    id: "aereo",
    label: "Air Priority",
    summary: "Envios urgentes e sensíveis com bloqueio de capacidade e acompanhamento minuto a minuto.",
    heroKicker: "Air Priority",
    heroTitle: "Voos prioritários para cargas críticas",
    description:
      "Integramos companhias aéreas, handlers e malha rodoviária de apoio em um único painel. SLA dedicado, dupla checagem documental e rastreamento por milestones automatizados.",
    stats: [
      { label: "Lead time", value: "6-48h" },
      { label: "Rotas ativas", value: "120+" },
      { label: "Suporte", value: "24/7" },
    ],
    features: [
      {
        title: "Capacidade garantida",
        description: "Bloqueamos espaços em voos comerciais e cargueiros para picos e operações contínuas.",
        icon: Plane,
      },
      {
        title: "Compliance regulatório",
        description: "Time dedicado à gestão de ANAC/ANVISA com checklist digital e expedição ágil.",
        icon: ShieldCheck,
      },
      {
        title: "Visibilidade internacional",
        description: "Integramos parceiros LATAM e USA com atualizações automáticas em seu TMS.",
        icon: Globe,
      },
    ],
    media: "/Background.jpg",
    mediaAlt: "Aeronave pronta para embarque",
    icon: Plane,
    ctaLabel: "Contratar Air Priority",
  },
  {
    id: "armazenagem",
    label: "Fulfillment & Armazenagem",
    summary: "Operação modular para D2C/B2B com WMS próprio, squads de implantação e inventário em tempo real.",
    heroKicker: "Fulfillment",
    heroTitle: "Centros logísticos hiperconectados",
    description:
      "Executamos recebimento, armazenagem, picking, packing e despacho com integrações nativas aos principais ERPs e marketplaces, além de projetos VMI e consolidação internacional.",
    stats: [
      { label: "Precisão inventário", value: "99,3%" },
      { label: "Implantação", value: "Go-live em 30 dias" },
      { label: "SKUs ativos", value: "60k+" },
    ],
    features: [
      {
        title: "WMS nativo",
        description: "Portal único para slotting dinâmico, ondas de picking e rastreio unitário.",
        icon: PackageSearch,
      },
      {
        title: "Especialistas em D2C",
        description: "Células dedicadas cuidam de personalização, kits e omnichannel.",
        icon: Boxes,
      },
      {
        title: "Governança ESG",
        description: "Processos auditáveis, indicadores energéticos e relatórios de sustentabilidade.",
        icon: ClipboardCheck,
      },
    ],
    media: "/mulher-de-tiro-medio-segurando-o-pacote.jpg",
    mediaAlt: "Profissional conferindo pedido no fulfillment",
    icon: Warehouse,
    ctaLabel: "Planejar fulfillment",
  },
  {
    id: "projetos",
    label: "Projetos dedicados",
    summary: "Soluções turnkey para operações complexas com PMO, células ágeis e indicadores compartilhados.",
    heroKicker: "Projetos sob medida",
    heroTitle: "Squads consultivos para implantações críticas",
    description:
      "Desenhamos operações greenfield, migrações e programas de eficiência combinando engenharia logística, analytics e change management. Seu time ganha uma extensão com ownership total.",
    stats: [
      { label: "Payback médio", value: "12 meses" },
      { label: "Especialistas", value: "40+" },
      { label: "Workshops", value: "Sprint quinzenal" },
    ],
    features: [
      {
        title: "Design orientado a dados",
        description: "Modelagem de cenários, simulações e definição de KPIs com dashboards em tempo real.",
        icon: BarChart2,
      },
      {
        title: "Arquitetura integrada",
        description: "Integrações API-first entre TMS, WMS e ERPs para garantir fluxo único de informação.",
        icon: Cog,
      },
      {
        title: "Entrega contínua",
        description: "Squads ágeis com cerimônias semanais e gestão de mudanças acompanhada por especialistas.",
        icon: Sparkles,
      },
    ],
    media: "/retrato-de-entregador-distribuindo-encomendas.jpg",
    mediaAlt: "Equipe dedicada planejando operação",
    icon: Cog,
    ctaLabel: "Conversar sobre projetos dedicados",
  },
];

function Services() {
  const { open } = useQuoteModal();
  const [activeService, setActiveService] = useState(serviceProfiles[0].id);

  const currentService = serviceProfiles.find((service) => service.id === activeService) ?? serviceProfiles[0];

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
              Da coleta à entrega final, coordenamos cada etapa com dados integrados, acompanhamento em tempo real e uma rede de
              parceiros certificada.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn-primary" onClick={open}>
                Solicitar proposta
              </button>
              <Link to="/contato" className="btn hero__secondary">
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

      <section className="section services-summary">
        <div className="container">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.span className="section__kicker" variants={item}>
              Visão geral
            </motion.span>
            <motion.h2 variants={item}>Escolha o módulo ideal ou combine todos</motion.h2>
            <motion.p variants={item}>
              Cada serviço pode operar de forma independente ou integrada, permitindo que você monte uma operação sob medida com indicadores
              compartilhados e squads dedicados.
            </motion.p>
          </motion.div>
          <motion.div
            className="services-summary__grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {serviceProfiles.map((service) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.id}
                  type="button"
                  className={`services-summary__card services-summary__button ${activeService === service.id ? "is-active" : ""}`}
                  variants={item}
                  onClick={() => setActiveService(service.id)}
                >
                  <span className="services-summary__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{service.label}</h3>
                  <p>{service.summary}</p>
                  <span>Lead time: {service.stats[0].value}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section services-tabs">
        <div className="container">
          <motion.div
            className="section__header"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span className="section__kicker" variants={item}>
              Detalhamento dos serviços
            </motion.span>
            <motion.h2 variants={item}>Tabs inteligentes para navegar entre os módulos</motion.h2>
            <motion.p variants={item}>
              Explore cada solução, visualize benefícios e abra a cotação já com o serviço pré-selecionado.
            </motion.p>
          </motion.div>
          <div className="services-tabs__list" role="tablist">
            {serviceProfiles.map((service) => (
              <button
                key={service.id}
                type="button"
                role="tab"
                id={`tab-${service.id}`}
                className={`services-tabs__button ${activeService === service.id ? "is-active" : ""}`}
                aria-selected={activeService === service.id}
                aria-controls={`panel-${service.id}`}
                onClick={() => setActiveService(service.id)}
              >
                {service.label}
              </button>
            ))}
          </div>
          <motion.div
            key={currentService.id}
            className="services-tabpanel"
            role="tabpanel"
            id={`panel-${currentService.id}`}
            aria-labelledby={`tab-${currentService.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="services-tabpanel__grid">
              <div>
                <div className="services-tabpanel__hero">
                  <span>{currentService.heroKicker}</span>
                  <h3>{currentService.heroTitle}</h3>
                </div>
                <p className="services-tabpanel__description">{currentService.description}</p>
                <div className="services-tabpanel__stats">
                  {currentService.stats.map((stat) => (
                    <div className="services-tabpanel__stat" key={stat.label}>
                      <span>{stat.label}</span>
                      <strong>{stat.value}</strong>
                    </div>
                  ))}
                </div>
                <ul className="services-tabpanel__features">
                  {currentService.features.map((feature) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <li key={feature.title} className="services-tabpanel__feature">
                        <span className="services-tabpanel__feature-icon">
                          <FeatureIcon size={20} />
                        </span>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="services-tabpanel__ctas">
                  <button type="button" className="btn btn-primary" onClick={() => open(currentService.id)}>
                    {currentService.ctaLabel}
                  </button>
                  <Link to="/contato" className="hero__secondary">
                    Conversar com um especialista
                  </Link>
                </div>
              </div>
              <figure className="services-tabpanel__media">
                <img src={currentService.media} alt={currentService.mediaAlt} />
              </figure>
            </div>
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

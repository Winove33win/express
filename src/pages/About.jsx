import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Target, Award, Compass } from "lucide-react";

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

function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="badge">Sobre a LogiPro</span>
            <h1>Parceria logística que transforma sua cadeia de ponta a ponta</h1>
            <p>
              Somos uma equipe multidisciplinar apaixonada por logística. Ao longo de duas décadas, conectamos pessoas, cidades e
              negócios com uma abordagem humana, tecnologia proprietária e foco em resultados mensuráveis.
            </p>
            <div className="hero__actions">
              <Link to="/servicos" className="btn btn-primary">
                Nossos serviços
              </Link>
              <Link to="/contato" className="hero__secondary">
                Converse com especialistas
              </Link>
            </div>
          </motion.div>
          <motion.figure
            className="page-hero__media"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src="/mulher-de-tiro-medio-segurando-o-pacote.jpg" alt="Profissional de logística segurando pacote" />
          </motion.figure>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <motion.div className="card" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.h2 variants={item}>Nossa história</motion.h2>
            <motion.p variants={item}>
              Começamos em 2003 atendendo o interior de São Paulo com uma frota enxuta. Investimos em tecnologia própria, abrimos
              centros de distribuição regionais e hoje estamos presentes em todo o território nacional.
            </motion.p>
            <motion.p variants={item}>
              Em cada etapa, reforçamos a cultura de proximidade com os clientes e eficiência operacional — pilares que nos
              diferenciam no mercado.
            </motion.p>
          </motion.div>
          <motion.div className="timeline" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            {[
              { year: "2003", text: "Fundação com foco em rotas fracionadas no estado de SP" },
              { year: "2010", text: "Primeiro centro de distribuição automatizado" },
              { year: "2016", text: "Lançamento da torre de controle LogiPro Vision" },
              { year: "2022", text: "Cobertura nacional e início da operação internacional" },
            ].map((milestone) => (
              <motion.div className="timeline__item" key={milestone.year} variants={item}>
                <span>{milestone.year}</span>
                <p>{milestone.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--highlight">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.span className="section__kicker" variants={item}>
              Como atuamos
            </motion.span>
            <motion.h2 variants={item}>Valores que guiam cada entrega</motion.h2>
          </motion.div>
          <motion.div className="grid grid-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.article className="card" variants={item}>
              <Target size={28} className="card__icon" />
              <h3>Foco no cliente</h3>
              <p>Construímos soluções personalizadas para cada operação, com squads dedicados e KPIs compartilhados.</p>
            </motion.article>
            <motion.article className="card" variants={item}>
              <Award size={28} className="card__icon" />
              <h3>Excelência operacional</h3>
              <p>Protocolos robustos, compliance rigoroso e melhoria contínua guiada por dados.</p>
            </motion.article>
            <motion.article className="card" variants={item}>
              <Compass size={28} className="card__icon" />
              <h3>Inovação constante</h3>
              <p>Investimos em automação, IA e sustentabilidade para antecipar desafios logísticos do amanhã.</p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container team-section">
          <motion.div className="team-section__intro" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.span className="section__kicker" variants={item}>
              Nosso time
            </motion.span>
            <motion.h2 variants={item}>Especialistas dedicados ao sucesso da sua operação</motion.h2>
            <motion.p variants={item}>
              Contamos com especialistas em engenharia logística, tecnologia, atendimento e gestão de risco trabalhando de forma
              integrada para desbloquear o crescimento do seu negócio.
            </motion.p>
          </motion.div>
          <motion.div className="team-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            {["Estratégia", "Operações", "Tecnologia", "Atendimento"].map((area) => (
              <motion.div className="team-card" key={area} variants={item}>
                <Users size={26} />
                <h3>{area}</h3>
                <p>
                  Squads multidisciplinares que acompanham indicadores diariamente e tomam decisões com base em dados.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;

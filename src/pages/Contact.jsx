import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Upload, Building2 } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

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

function Contact() {
  const { open } = useQuoteModal();
  const [activeTab, setActiveTab] = useState("cotacao");

  const renderTabContent = () => {
    switch (activeTab) {
      case "trabalhe":
        return (
          <motion.form
            className="contact-tab__form"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={item}>
              Envie seu currículo e conte como podemos evoluir juntos. Nossa área de Gente & Gestão retorna em até 5 dias úteis.
            </motion.p>
            <motion.label variants={item}>
              Nome completo
              <input type="text" name="talent-name" placeholder="Seu nome" required />
            </motion.label>
            <motion.label variants={item}>
              E-mail
              <input type="email" name="talent-email" placeholder="voce@email.com" required />
            </motion.label>
            <motion.label variants={item}>
              Área de interesse
              <input type="text" name="talent-role" placeholder="Operações, Tecnologia, etc." />
            </motion.label>
            <motion.label variants={item} className="file-input">
              Currículo (PDF)
              <input type="file" name="talent-resume" accept="application/pdf" />
            </motion.label>
            <motion.label variants={item}>
              Mensagem
              <textarea name="talent-message" rows="3" placeholder="Fale sobre suas experiências"></textarea>
            </motion.label>
            <motion.button type="submit" className="btn btn-primary" variants={item}>
              <Upload size={18} /> Enviar candidatura
            </motion.button>
          </motion.form>
        );
      case "parceria":
        return (
          <motion.div
            className="contact-tab__form"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={item}>
              Torne-se parte do ecossistema LogiPro e tenha acesso ao nosso stack tecnológico, compliance e rede nacional.
            </motion.p>
            <motion.ul className="partner-benefits" variants={container}>
              {["Onboarding guiado em 48h", "Integração com TMS/ERP", "SLAs claros e indicadores compartilhados"].map(
                (benefit) => (
                  <motion.li key={benefit} variants={item}>
                    <Building2 size={18} /> {benefit}
                  </motion.li>
                )
              )}
            </motion.ul>
            <motion.label variants={item}>
              Empresa
              <input type="text" name="partner-company" placeholder="Nome da transportadora" required />
            </motion.label>
            <motion.label variants={item}>
              Segmento / frota
              <input type="text" name="partner-segment" placeholder="Ex: frigorificados, dedicado" />
            </motion.label>
            <motion.label variants={item}>
              Cobertura
              <input type="text" name="partner-coverage" placeholder="Regiões de atuação" />
            </motion.label>
            <motion.label variants={item}>
              Volume mensal estimado
              <input type="number" name="partner-volume" placeholder="Ex: 1.500 entregas" />
            </motion.label>
            <motion.div className="contact-tab__actions" variants={item}>
              <button type="button" className="btn btn-outline" onClick={open}>
                Iniciar onboarding com especialista
              </button>
            </motion.div>
          </motion.div>
        );
      default:
        return (
          <motion.form
            className="contact-tab__form"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={item}>
              Conte sobre a demanda, volumes e prazos. Nosso time comercial envia a proposta detalhada rapidamente.
            </motion.p>
            <motion.label variants={item}>
              Nome
              <input type="text" name="quote-name" placeholder="Seu nome" required />
            </motion.label>
            <motion.label variants={item}>
              Empresa
              <input type="text" name="quote-company" placeholder="Nome da empresa" />
            </motion.label>
            <motion.label variants={item}>
              E-mail corporativo
              <input type="email" name="quote-email" placeholder="email@empresa.com" required />
            </motion.label>
            <motion.label variants={item}>
              Volume mensal
              <input type="text" name="quote-volume" placeholder="Ex: 5.000 pedidos" />
            </motion.label>
            <motion.label variants={item}>
              Prazo desejado
              <input type="text" name="quote-sla" placeholder="Ex: 24h SP capital" />
            </motion.label>
            <motion.label variants={item}>
              Detalhes
              <textarea name="quote-message" rows="4" placeholder="Modalidades, origens, destinos"></textarea>
            </motion.label>
            <motion.div className="contact-tab__actions" variants={item}>
              <motion.button type="submit" className="btn btn-primary">
                <Send size={18} /> Enviar briefing
              </motion.button>
              <button type="button" className="btn btn-outline" onClick={open}>
                Abrir QuoteModal
              </button>
            </motion.div>
          </motion.form>
        );
    }
  };

  return (
    <div className="page">
      <section className="page-hero contact-hero">
        <div className="container page-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="badge">Contato</span>
            <h1>Estamos prontos para acelerar sua operação</h1>
            <p>
              Escolha o canal ideal para falar com a LogiPro. Nossa equipe responde com agilidade e acompanha toda a jornada.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn-primary" onClick={open}>
                Solicitar cotação
              </button>
              <a className="btn hero__secondary" href="mailto:contato@logipro.com.br">
                Enviar e-mail direto
              </a>
            </div>
          </motion.div>
          <motion.figure
            className="page-hero__media"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <img src="/retrato-de-entregador-distribuindo-encomendas.jpg" alt="Profissional de logística trabalhando" />
          </motion.figure>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <motion.div
            className="card contact-flows"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
          >
            <motion.h2 variants={item}>Escolha a jornada certa</motion.h2>
            <motion.p variants={item}>
              Temos times dedicados para propostas comerciais, talentos e parcerias estratégicas. Escolha abaixo.
            </motion.p>
            <motion.div className="contact-tabs" variants={item}>
              {["cotacao", "trabalhe", "parceria"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`contact-tab ${activeTab === tab ? "is-active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "cotacao" && "Cotação"}
                  {tab === "trabalhe" && "Trabalhe conosco"}
                  {tab === "parceria" && "Seja um parceiro"}
                </button>
              ))}
            </motion.div>
            <div className="contact-tab__content">{renderTabContent()}</div>
          </motion.div>
          <motion.div
            className="card contact-info"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={item}>Outros canais</motion.h2>
            <motion.ul className="contact-list" variants={container}>
              <motion.li variants={item}>
                <Mail size={20} /> contato@logipro.com.br
              </motion.li>
              <motion.li variants={item}>
                <Phone size={20} /> +55 (11) 3000-0000
              </motion.li>
              <motion.li variants={item}>
                <MapPin size={20} /> Av. das Operações, 450 - São Paulo/SP
              </motion.li>
              <motion.li variants={item}>
                <Clock size={20} /> Atendimento: segunda a sexta, 8h às 18h
              </motion.li>
            </motion.ul>
            <motion.div className="contact-cta" variants={item}>
              <h3>Precisa de atendimento imediato?</h3>
              <p>Nossa torre de controle funciona 24/7 e prioriza ocorrências críticas em minutos.</p>
              <button type="button" className="btn btn-outline btn-outline--dark" onClick={open}>
                Abrir chamado urgente
              </button>
            </motion.div>
            <motion.div className="contact-secondary" variants={item}>
              <h3>Preferir falar agora?</h3>
              <p>
                Use nossa linha direta <strong>+55 (11) 3000-0000</strong> ou visite o hub em <strong>Av. das Operações, 450</strong>.
              </p>
              <p>Temos recepção preparada para reuniões presenciais com estacionamento no local.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section section--map">
        <div className="container section__cta-wrapper">
          <motion.div
            className="section__cta-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Visite nosso centro de operações</h2>
            <p>Agende uma visita guiada e conheça nossa infraestrutura de rastreamento e cross-docking.</p>
            <div className="section__cta">
              <a className="btn btn-primary" href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer">
                Ver no mapa
              </a>
              <button type="button" className="section__cta-secondary" onClick={open}>
                Agendar visita
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

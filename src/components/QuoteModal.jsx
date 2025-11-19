import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const modalVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const serviceOptions = [
  { value: "rodo", label: "Rodo Expresso" },
  { value: "aereo", label: "Air Priority" },
  { value: "armazenagem", label: "Fulfillment & Armazenagem" },
  { value: "projetos", label: "Projetos dedicados" },
];

export function QuoteModal({ isOpen, selectedService, onClose }) {
  const [service, setService] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setService(selectedService ?? "");
  }, [isOpen, selectedService]);

  const selectedLabel = serviceOptions.find((option) => option.value === service)?.label;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="modal-header">
              <div>
                <p className="modal-kicker">Solicite uma proposta</p>
                <h2>Nos conte sobre a sua operação</h2>
                {selectedLabel && (
                  <p className="modal-selection">
                    Serviço selecionado: <strong>{selectedLabel}</strong>
                  </p>
                )}
              </div>
              <button type="button" aria-label="Fechar modal" onClick={onClose} className="modal-close">
                <X size={20} />
              </button>
            </header>
            <form className="modal-form">
              <label>
                Nome completo
                <input type="text" name="name" placeholder="Como devemos te chamar?" required />
              </label>
              <label>
                Empresa
                <input type="text" name="company" placeholder="Nome da sua empresa" />
              </label>
              <label>
                E-mail corporativo
                <input type="email" name="email" placeholder="email@empresa.com" required />
              </label>
              <label>
                Telefone
                <input type="tel" name="phone" placeholder="(00) 00000-0000" />
              </label>
              <label>
                Tipo de serviço
                <select name="service" value={service} onChange={(event) => setService(event.target.value)}>
                  <option value="">Selecione o serviço desejado</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Como podemos ajudar?
                <textarea rows="4" name="message" placeholder="Descreva sua operação e desafios."></textarea>
              </label>
              <button type="submit" className="btn btn-primary">
                Enviar solicitação
              </button>
            </form>
            <p className="modal-footnote">
              Nosso time responde em até 1 dia útil. Seus dados são tratados conforme nossa política de privacidade.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default QuoteModal;

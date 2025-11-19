import { createContext, useContext } from "react";

export const QuoteModalContext = createContext({
  isOpen: false,
  selectedService: null,
  open: () => {},
  close: () => {},
});

export const useQuoteModal = () => useContext(QuoteModalContext);

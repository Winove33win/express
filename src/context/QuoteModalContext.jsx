import { createContext, useContext } from "react";

export const QuoteModalContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export const useQuoteModal = () => useContext(QuoteModalContext);

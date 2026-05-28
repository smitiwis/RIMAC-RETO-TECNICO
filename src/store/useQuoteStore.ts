import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types";

interface QuoteState {
  dni: string;
  docType: string;
  celular: string;
  user: User | null;
  setDni: (dni: string) => void;
  setDocType: (docType: string) => void;
  setCelular: (celular: string) => void;
  setUser: (user: User | null) => void;
  reset: () => void;
}

const initialState = { dni: "", docType: "DNI", celular: "", user: null };

export const useQuoteStore = create<QuoteState>()(
  persist(
    (set) => ({
      ...initialState,
      setDni: (dni) => set({ dni }),
      setDocType: (docType) => set({ docType }),
      setCelular: (celular) => set({ celular }),
      setUser: (user) => set({ user }),
      reset: () => set(initialState),
    }),
    {
      name: "quote-store",
    }
  )
);

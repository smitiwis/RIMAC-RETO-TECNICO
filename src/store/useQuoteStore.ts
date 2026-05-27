import { create } from 'zustand'

interface QuoteState {
  dni: string
  celular: string
  nombre: string
  setDni: (dni: string) => void
  setCelular: (celular: string) => void
  setNombre: (nombre: string) => void
  reset: () => void
}

const initialState = { dni: '', celular: '', nombre: '' }

export const useQuoteStore = create<QuoteState>((set) => ({
  ...initialState,
  setDni: (dni) => set({ dni }),
  setCelular: (celular) => set({ celular }),
  setNombre: (nombre) => set({ nombre }),
  reset: () => set(initialState),
}))

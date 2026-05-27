import { create } from 'zustand'

interface PlanState {
  planId: string | null
  tipoCotizante: string | null
  setPlanId: (id: string) => void
  setTipoCotizante: (tipo: string) => void
  reset: () => void
}

const initialState = { planId: null, tipoCotizante: null }

export const usePlanStore = create<PlanState>((set) => ({
  ...initialState,
  setPlanId: (planId) => set({ planId }),
  setTipoCotizante: (tipoCotizante) => set({ tipoCotizante }),
  reset: () => set(initialState),
}))

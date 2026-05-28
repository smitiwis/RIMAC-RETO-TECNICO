import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PlanState {
  planId: string | null
  tipoCotizante: string | null
  selectedPlanPrice: number | null
  selectedPlanName: string | null
  setPlanId: (id: string | null) => void
  setTipoCotizante: (tipo: string | null) => void
  setSelectedPlanPrice: (price: number | null) => void
  setSelectedPlanName: (name: string | null) => void
  reset: () => void
}

const initialState = {
  planId: null,
  tipoCotizante: null,
  selectedPlanPrice: null,
  selectedPlanName: null,
}

export const usePlanStore = create<PlanState>()(
  persist(
    (set) => ({
      ...initialState,
      setPlanId: (planId) => set({ planId }),
      setTipoCotizante: (tipoCotizante) => set({ tipoCotizante }),
      setSelectedPlanPrice: (selectedPlanPrice) => set({ selectedPlanPrice }),
      setSelectedPlanName: (selectedPlanName) => set({ selectedPlanName }),
      reset: () => set(initialState),
    }),
    {
      name: 'plan-store',
    }
  )
)

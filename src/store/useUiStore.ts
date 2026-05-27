import { create } from 'zustand'

type Step = 'landing' | 'plans' | 'summary'

interface UiState {
  step: Step
  loading: boolean
  setStep: (step: Step) => void
  setLoading: (loading: boolean) => void
}

export const useUiStore = create<UiState>((set) => ({
  step: 'landing',
  loading: false,
  setStep: (step) => set({ step }),
  setLoading: (loading) => set({ loading }),
}))

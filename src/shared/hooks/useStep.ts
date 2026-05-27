import { useUiStore } from '../../store/useUiStore'
import type { Step } from '../../store/useUiStore'

export function useStep() {
  const { step, setStep } = useUiStore()

  const next = (nextStep: Step) => setStep(nextStep)

  return { step, next }
}

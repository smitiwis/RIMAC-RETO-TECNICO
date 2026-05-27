import { useQuoteStore } from '../../store/useQuoteStore'
import { usePlanStore } from '../../store/usePlanStore'

export function useSummary() {
  const { dni, celular, nombre } = useQuoteStore()
  const { planId, tipoCotizante } = usePlanStore()

  return {
    user: { dni, celular, nombre },
    planId,
    tipoCotizante,
  }
}

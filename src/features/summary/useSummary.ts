import { useQuoteStore } from "@/store/useQuoteStore";
import { usePlanStore } from "@/store/usePlanStore";

export function useSummary() {
  const { dni, celular, user } = useQuoteStore();
  const { planId, tipoCotizante } = usePlanStore();

  return {
    dni,
    celular,
    user,
    planId,
    tipoCotizante,
  };
}

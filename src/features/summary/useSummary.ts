import { useQuoteStore } from "@/store/useQuoteStore";
import { usePlanStore } from "@/store/usePlanStore";

export function useSummary() {
  const { dni, docType, celular, user } = useQuoteStore();
  const { planId, tipoCotizante } = usePlanStore();

  return {
    dni,
    docType,
    celular,
    user,
    planId,
    tipoCotizante,
  };
}

import { useEffect } from "react";
import { Badge } from "../shared/components/ui";
import { QuoteForm } from "../features/quote/components/QuoteForm";
import ContainerMain from "@/shared/components/layouts/ContainerMain";
import { useQuoteStore } from "../store/useQuoteStore";
import { usePlanStore } from "../store/usePlanStore";

export function HomePage() {
  const resetQuote = useQuoteStore((state) => state.reset);
  const resetPlan = usePlanStore((state) => state.reset);

  useEffect(() => {
    resetQuote();
    resetPlan();
  }, [resetQuote, resetPlan]);

  return (
    <ContainerMain className="md:py-8">
      <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
        <div className="hidden md:block md:col-span-6 relative">
          <div className="w-fit rounded-[40px] overflow-hidden shadow-2xl shadow-brand-dark/5 bg-white border border-brand-border/20">
            <img
              src="/images/image220.png"
              alt="Familia Rimac Protegida"
              className="h-auto object-cover rounded-4xl"
            />
          </div>
        </div>

        <div className="flex flex-col text-left col-span-4 md:col-span-6 space-y-6 pl-0 md:pl-8">
          <div className="space-y-5 w-full md:max-w-88">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-6">
                <div className="pl-2 md:pl-0">
                  <Badge className="mb-3">Seguro Salud Flexible</Badge>
                  <h1 className="text-[28px] md:text-[32px] font-bold text-brand-dark leading-tight">
                    Creado para ti y tu familia
                  </h1>
                </div>

                <div className="md:hidden w-34 h-45 rounded-2xl overflow-hidden border border-brand-border/30 shadow-md shrink-0 flex justify-end">
                  <img
                    src="/images/Mask group.png"
                    alt="Familia Rimac"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <span className="block w-full h-2 border-b border-brand-divider my-4 md:hidden" />

              <p className="text-sm font-semibold text-brand-dark leading-relaxed">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>
            </div>

            <QuoteForm />
          </div>
        </div>
      </div>
    </ContainerMain>
  );
}

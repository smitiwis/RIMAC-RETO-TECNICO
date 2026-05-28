import { Badge } from "../shared/components/ui";
import { QuoteForm } from "../features/quote/components/QuoteForm";

export function HomePage() {
  return (
    <div className="py-4 md:py-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-33 items-center justify-self-center">
      <div className="hidden md:block relative">
        <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-brand-dark/5 bg-white border border-brand-border/20">
          <img
            src="/images/image220.png"
            alt="Familia Rimac Protegida"
            className="w-full h-auto object-cover rounded-4xl"
          />
        </div>
      </div>

      <div className="flex flex-col text-left max-w-87.5 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <div className="pl-2 md:pl-0">
              <Badge className="mb-3">Seguro Salud Flexible</Badge>
              <h1 className="text-[28px] md:text-[32px] font-bold text-brand-dark leading-tight">
                Creado para ti y tu familia
              </h1>
            </div>

            <div className="md:hidden w-35 h-40 rounded-2xl overflow-hidden border border-brand-border/30 shadow-md shrink-0">
              <img
                src="/images/Mask group.png"
                alt="Familia Rimac"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <span className="block w-full h-2 border-b border-brand-divider my-4 md:hidden" />

          <p className="text-sm font-semibold text-brand-dark leading-relaxed">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>
        </div>

        <QuoteForm />
      </div>
    </div>
  );
}

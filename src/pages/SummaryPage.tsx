import { useNavigate } from "react-router-dom";
import { useSummary } from "../features/summary/useSummary";
import { ProgressStepper } from "../shared/components/ui";
import ContainerMain from "../shared/components/layouts/ContainerMain";
import { usePlanStore } from "../store/usePlanStore";

export function SummaryPage() {
  const navigate = useNavigate();
  const { dni, docType, celular, user } = useSummary();
  const { selectedPlanName, selectedPlanPrice } = usePlanStore();

  const clientName = user
    ? `${user.name} ${user.lastName}`
    : "Rocío Miranda Díaz";
  const clientDni = dni;
  const clientDocType = docType || "DNI";
  const clientCelular = celular;

  const selectedPlan = {
    name: selectedPlanName || "Plan en Casa y Clínica",
    price: selectedPlanPrice !== null ? selectedPlanPrice : 99,
  };

  const handleBack = () => {
    navigate("/planes");
  };

  return (
    <div className="pb-12 min-h-screen">
      <ProgressStepper
        currentStep={2}
        onBack={handleBack}
        className="hidden md:block"
      />

      <ContainerMain className="py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-6">
          <div className="col-span-4 md:col-start-2 md:col-span-10 w-full overflow-visible">
            <div className="mb-6 hidden md:block">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 group text-xs font-bold text-brand-blue hover:text-brand-red transition-all duration-200 cursor-pointer"
              >
                <img
                  src="/icons/Icon-button.png"
                  alt="Volver"
                  className="w-6 h-6 object-contain"
                />
                <span className="tracking-wide font-extrabold">Volver</span>
              </button>
            </div>

            <div className="mb-8 text-left">
              <h1 className="text-center md:text-left text-3xl md:text-[40px] font-bold text-brand-navy tracking-tight leading-tight">
                Resumen del seguro
              </h1>
            </div>

            <div className="w-full  bg-white rounded-3xl border border-brand-border-light p-6 md:p-10 shadow-[0px_1px_32px_0px_rgba(174,172,243,0.2)]">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-navy uppercase block mb-2">
                    Precios calculados para:
                  </span>

                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-brand-navy shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12a4 4 0 100-8 4 4 0 000 8zm5.88-3.08a4.996 4.996 0 000-5.84A4 4 0 0118 8a4 4 0 01-3.12.92zM9 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.25.07c1.33.9 2.75 2.11 2.75 3.93v2H23v-2c0-2.29-3.92-3.72-6.75-3.93z" />
                    </svg>
                    <span className="text-xl md:text-xl font-extrabold text-brand-navy">
                      {clientName}
                    </span>
                  </div>
                </div>

                <div className="w-full border-t border-brand-border-light my-6" />

                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-brand-summary">
                      Responsable de pago
                    </h4>
                    <p className="text-sm font-[14px] text-brand-summary leading-none">
                      {clientDocType}: {clientDni}
                    </p>
                    <p className="text-sm font-[14px] text-brand-summary leading-none">
                      Celular: {clientCelular}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-brand-summary">
                      Plan elegido
                    </h4>
                    <p className="text-sm font-[14px] text-brand-summary leading-none">
                      {selectedPlan.name}
                    </p>
                    <p className="text-sm font-[14px] text-brand-summary leading-none">
                      Costo del Plan: $
                      {selectedPlan.price % 1 === 0
                        ? selectedPlan.price
                        : selectedPlan.price.toFixed(2)}{" "}
                      al mes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerMain>
    </div>
  );
}

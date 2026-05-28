import { useNavigate } from "react-router-dom";
import { useSummary } from "../features/summary/useSummary";
import { ProgressStepper, Button } from "../shared/components/ui";

export function SummaryPage() {
  const navigate = useNavigate();
  const { user, planId, tipoCotizante } = useSummary();

  const clientName = user.nombre;
  const clientDni = user.dni;
  const clientCelular = user.celular;
  const cotizanteType = tipoCotizante;

  const getPlanDetails = (id: string | null) => {
    switch (id) {
      case "plan-casa":
        return { name: "Plan en Casa", price: 39 };
      case "plan-clinica":
        return { name: "Plan en Casa y Clínica", price: 99 };
      case "plan-chequeo":
        return { name: "Plan en Casa + Chequeo", price: 49 };
      default:
        return { name: "Plan en Casa y Clínica", price: 99 };
    }
  };

  const selectedPlan = getPlanDetails(planId);

  const handleBack = () => {
    navigate("/planes");
  };

  return (
    <div>
      <ProgressStepper currentStep={2} onBack={handleBack} />

      <div className="mb-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 group text-xs font-bold text-brand-dark/80 hover:text-brand-red transition-all duration-200"
        >
          <div className="w-6 h-6 rounded-full border border-brand-dark/40 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red/5 transition-all duration-200">
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current stroke-2.5"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
          <span className="tracking-wide">Volver</span>
        </button>
      </div>

      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
          Resumen de tu cotización
        </h1>
        <p className="text-sm font-medium text-brand-gray mt-2 leading-relaxed">
          Tu solicitud ha sido procesada con éxito. Revisa el detalle a
          continuación:
        </p>
      </div>

      <div className="max-w-2xl mx-auto md:mx-0 bg-white rounded-3xl border border-brand-border/30 shadow-xl shadow-brand-dark/5 overflow-hidden animate-fade-in">
        <div className="bg-[#EEF2FF] p-6 border-b border-brand-border/20 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-success flex items-center justify-center text-white shadow-sm shrink-0 animate-bounce">
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-3"
              viewBox="0 0 24 24"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <span className="block text-[10px] font-black uppercase tracking-wider text-[#4F46E5]">
              Cotización Exitosa
            </span>
            <span className="text-sm font-bold text-brand-dark">
              ¡Gracias por confiar en RIMAC!
            </span>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <h3 className="text-xs font-black uppercase text-brand-gray tracking-widest mb-4">
              Datos del Asegurado
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-brand-light-gray/60 p-4 rounded-xl">
                <span className="block text-[10px] font-bold text-brand-gray uppercase">
                  Nombre Completo
                </span>
                <span className="text-sm font-extrabold text-brand-dark mt-0.5 block">
                  {clientName}
                </span>
              </div>
              <div className="bg-brand-light-gray/60 p-4 rounded-xl">
                <span className="block text-[10px] font-bold text-brand-gray uppercase">
                  Tipo Cotizante
                </span>
                <span className="text-sm font-extrabold text-brand-dark mt-0.5 block">
                  {cotizanteType}
                </span>
              </div>
              <div className="bg-brand-light-gray/60 p-4 rounded-xl">
                <span className="block text-[10px] font-bold text-brand-gray uppercase">
                  DNI
                </span>
                <span className="text-sm font-extrabold text-brand-dark mt-0.5 block">
                  {clientDni}
                </span>
              </div>
              <div className="bg-brand-light-gray/60 p-4 rounded-xl">
                <span className="block text-[10px] font-bold text-brand-gray uppercase">
                  Celular
                </span>
                <span className="text-sm font-extrabold text-brand-dark mt-0.5 block">
                  {clientCelular}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-border/30 w-full" />

          <div>
            <h3 className="text-xs font-black uppercase text-brand-gray tracking-widest mb-4">
              Plan Seleccionado
            </h3>
            <div className="bg-[#FFF2F4] p-5 rounded-2xl border border-brand-red/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-red/10 flex items-center justify-center shrink-0">
                  <img
                    src="/icons/IcHomeLight.png"
                    alt="Plan"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-base font-extrabold text-brand-dark block">
                    {selectedPlan.name}
                  </span>
                  <span className="text-xs font-bold text-brand-gray block mt-0.5">
                    Seguro de Salud Flexible
                  </span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="block text-[10px] font-bold text-brand-gray uppercase">
                  Precio Mensual
                </span>
                <span className="text-xl font-extrabold text-brand-dark mt-0.5 block">
                  ${selectedPlan.price}{" "}
                  <span className="text-xs font-medium text-brand-gray">
                    / mes
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-light-gray/40 px-8 py-5 border-t border-brand-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-bold text-brand-gray text-center sm:text-left">
            ¿Deseas realizar una nueva cotización?
          </span>
          <Button
            variant="outline"
            onClick={() => {
              navigate("/");
            }}
          >
            Nueva Cotización
          </Button>
        </div>
      </div>
    </div>
  );
}

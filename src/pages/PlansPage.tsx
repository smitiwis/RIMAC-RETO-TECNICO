import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuoteStore } from "../store/useQuoteStore";
import { usePlanStore } from "../store/usePlanStore";
import { ProgressStepper, SelectionCard } from "../shared/components/ui";
import { PlanCard } from "../features/plans/PlanCard";
import type { Plan } from "../types";

export function PlansPage() {
  const navigate = useNavigate();
  const { nombre } = useQuoteStore();
  const { setPlanId, setTipoCotizante } = usePlanStore();

  const currentStep = 1;

  const [option, setOption] = useState<"me" | "other" | null>(null);

  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: "plan-casa",
      nombre: "Plan en Casa",
      precio: 39,
      tipo: "me",
      coberturas: [
        "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
        "Videoconsulta y orientación telefónica al 100% en medicina general + pediatría.",
        "Indemnización de S/300 en caso de hospitalización por más de un día.",
      ],
    },
    {
      id: "plan-clinica",
      nombre: "Plan en Casa y Clínica",
      precio: 99,
      tipo: "me",
      coberturas: [
        "Consultas en clínica para cualquier especialidad.",
        "Medicinas y exámenes derivados cubiertos al 80%.",
        "Atención médica en más de 200 clínicas del país.",
      ],
    },
    {
      id: "plan-chequeo",
      nombre: "Plan en Casa + Chequeo",
      precio: 49,
      tipo: "me",
      coberturas: [
        "Un Chequeo preventivo general de manera presencial o virtual.",
        "Acceso a Vacunas en el Programa del MINSA en centros privados.",
        "Incluye todos los beneficios del Plan en Casa.",
      ],
    },
  ];

  const handleBack = () => {
    if (option) {
      setOption(null);
      setSelectedPlanId(null);
    } else {
      navigate("/");
    }
  };

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlanId(plan.id);

    setPlanId(plan.id);
    setTipoCotizante(option === "me" ? "Para mí" : "Para alguien más");

    navigate("/resumen");
  };

  return (
    <div>
      <ProgressStepper currentStep={currentStep} onBack={handleBack} />

      <div className="mb-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 group text-[12px] font-bold text-indigo-600 hover:text-brand-red transition-all duration-200 cursor-pointer"
        >
          <img
            src="/icons/Icon-button.png"
            alt="Volver"
            className="w-6 h-6 object-contain"
          />
          <span className="tracking-wide font-extrabold">Volver</span>
        </button>
      </div>

      <div className="text-center md:text-left max-w-2xl mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight mb-3">
          {nombre || "Rocío"} ¿Para quién deseas cotizar?
        </h1>
        <p className="text-sm font-medium text-brand-gray leading-relaxed">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center md:items-stretch mb-16">
        <SelectionCard
          title="Para mí"
          description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          icon="me"
          selected={option === "me"}
          onSelect={() => setOption("me")}
        />
        <SelectionCard
          title="Para alguien más"
          description="Realiza una cotización para uno de tus familiares o cualquier persona."
          icon="other"
          selected={option === "other"}
          onSelect={() => setOption("other")}
        />
      </div>

      {option && (
        <div className="border-t border-brand-border/30 pt-16 animate-fade-in">
          <div className="text-center md:text-left mb-10">
            <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight mb-2">
              Planes disponibles para tu perfil
            </h2>
            <p className="text-xs font-bold text-brand-gray uppercase tracking-widest">
              Selecciona el seguro ideal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-start">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                selected={selectedPlanId === plan.id}
                onSelect={() => handleSelectPlan(plan)}
                recommended={plan.id === "plan-clinica"}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

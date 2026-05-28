import type { Plan } from "../../types";
import { Button } from "../../shared/components/ui/Button";

interface PlanCardProps {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
  recommended?: boolean;
  className?: string;
}

export function PlanCard({
  plan,
  selected,
  onSelect,
  recommended = false,
  className = "",
}: PlanCardProps) {
  const isClinic = plan.nombre.toLowerCase().includes("clínica");

  return (
    <div
      className={`relative flex flex-col justify-between w-[288px] h-[687px] pt-[68px] pb-[48px] px-[32px] bg-white rounded-[24px] border transition-all duration-300 shadow-[0px_1px_32px_0px_rgba(174,172,243,0.35)] ${
        selected
          ? "border-brand-dark ring-1 ring-brand-dark/10"
          : "border-[#E4E8F7]"
      } ${className}`}
    >
      {recommended && (
        <div className="absolute -top-[12px] left-8">
          <span className="px-2 py-0.5 text-[12px] font-bold bg-[#7DF5C4] text-brand-dark rounded-[4px]">
            Plan recomendado
          </span>
        </div>
      )}

      <div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-extrabold text-brand-dark tracking-tight leading-snug">
              {plan.nombre}
            </h3>
          </div>
          <div className="text-brand-red">
            {isClinic ? (
              <img
                src="/icons/IcHospitalLight.png"
                alt="Plan Hospital"
                className="w-12 h-12 object-contain"
              />
            ) : (
              <img
                src="/icons/IcHomeLight.png"
                alt="Plan Home"
                className="w-12 h-12 object-contain"
              />
            )}
          </div>
        </div>

        <div className="text-left">
          <span className="text-[10px] font-extrabold text-brand-gray tracking-wider uppercase">
            Costo del plan
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-2xl font-extrabold text-brand-dark">
              ${plan.precio}
            </span>
            <span className="text-xs font-bold text-brand-gray">al mes</span>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-brand-border/40 my-2" />

      <ul className="flex-1 space-y-4 my-6 text-left overflow-y-auto pr-1 scrollbar-thin">
        {plan.coberturas.map((cobertura, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-dark mt-2 flex-shrink-0" />
            <span className="text-xs font-medium text-brand-dark leading-relaxed">
              {cobertura}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <Button
          variant={selected ? "primary" : "secondary"}
          fullWidth
          onClick={onSelect}
        >
          {selected ? "Plan Seleccionado" : "Seleccionar Plan"}
        </Button>
      </div>
    </div>
  );
}

import type { Plan } from "../../types";
import { Button } from "../../shared/components/ui/Button";
import { Badge } from "@/shared/components/ui";

interface PlanCardProps {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
  recommended?: boolean;
  className?: string;
  hasDiscount?: boolean;
  originalPrecio?: number;
}

export function PlanCard({
  plan,
  selected,
  onSelect,
  recommended = false,
  className = "",
  hasDiscount = false,
  originalPrecio,
}: PlanCardProps) {
  const isClinic = plan.nombre.toLowerCase().includes("clínica");

  return (
    <div
      className={`font-lato relative flex flex-col justify-between w-full max-w-73 h-171 pt-10 pb-12 px-8 bg-white rounded-3xl border transition-all duration-300 shadow-[0px_1px_32px_0px_rgba(174,172,243,0.35)] ${
        selected
          ? "border-brand-dark ring-1 ring-brand-dark/10"
          : "border-[#E4E8F7]"
      } ${className}`}
    >
      {recommended && (
        <Badge className="rounded-md w-fit mb-2" variant="flat">
          Plan recomendado
        </Badge>
      )}

      <div className="flex justify-between items-start">
        <div className="space-y-3  w-full max-w-[70%]">
          <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight leading-snug">
            {plan.nombre}
          </h3>
          <div className="space-y-1">
            <div className="text-[10px] font-extrabold text-brand-gray-step tracking-wider uppercase">
              Costo del plan
            </div>
            {hasDiscount && originalPrecio && (
              <div className="text-xs text-brand-gray-step line-through font-medium leading-none mb-0.5">
                ${originalPrecio} antes
              </div>
            )}
            <div className="text-xl font-extrabold text-brand-dark">
              ${plan.precio % 1 === 0 ? plan.precio : plan.precio.toFixed(2)} al
              mes
            </div>
          </div>
        </div>
        <div className="w-12 h-12 pt-1">
          {isClinic ? (
            <img
              src="/icons/IcHospitalLight.png"
              alt="Plan Hospital"
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src="/icons/IcHomeLight.png"
              alt="Plan Home"
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      <div className="w-full border-t border-brand-divider my-5" />

      <ul className="flex-1 space-y-5 text-left overflow-y-auto pr-1 scrollbar-thin">
        {plan.coberturas.map((cobertura, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-dark mt-2 shrink-0" />
            <span className="text-base font-medium text-brand-dark leading-relaxed">
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

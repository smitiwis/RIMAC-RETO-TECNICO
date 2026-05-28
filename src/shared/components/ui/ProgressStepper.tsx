import type { FC } from "react";

export interface Step {
  id: number;
  title: string;
}

interface ProgressStepperProps {
  currentStep: number;
  steps?: Step[];
  onBack?: () => void;
  className?: string;
}

const DEFAULT_STEPS: Step[] = [
  { id: 1, title: "Planes y coberturas" },
  { id: 2, title: "Resumen" },
];

export function ProgressStepper({
  currentStep,
  steps = DEFAULT_STEPS,
  onBack,
  className = "",
}: ProgressStepperProps) {
  const totalSteps = steps.length;

  const progressPercentage = Math.min(
    Math.max((currentStep / totalSteps) * 100, 0),
    100,
  );

  return (
    <nav
      aria-label="Progreso del formulario"
      className={`w-full  md:bg-[#EDEFFC] ${className}`}
    >
      <div className="hidden md:flex items-center justify-center gap-8 py-4 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div
              key={step.id}
              className="flex items-center gap-8 animate-fade-in"
            >
              <StepItem
                id={step.id}
                title={step.title}
                isActive={isActive}
                isCompleted={isCompleted}
              />

              {index < totalSteps - 1 && <StepDivider />}
            </div>
          );
        })}
      </div>

      <div className="md:hidden flex items-center gap-4 px-6 py-4">
        <button
          onClick={onBack}
          className="w-6 h-6 flex items-center justify-center rounded-full active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
          aria-label="Volver al paso anterior"
        >
          <img
            src="/icons/button-circle.png"
            alt="Atrás"
            className="w-6 h-6 object-contain"
          />
        </button>

        <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark whitespace-nowrap shrink-0">
          PASO {currentStep} DE {totalSteps}
        </span>

        <div
          className="flex-1 h-1.5 bg-[#E4E8F7] rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-brand-blue rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </nav>
  );
}

interface StepItemProps {
  id: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

const StepItem: FC<StepItemProps> = ({ id, title, isActive, isCompleted }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border ${
          isActive || isCompleted
            ? "bg-brand-blue text-white border-brand-blue"
            : "bg-transparent border-brand-gray-step text-brand-gray-step"
        }`}
      >
        {id}
      </div>

      <span
        className={`text-sm font-bold tracking-wide transition-all duration-300 ${
          isActive || isCompleted
            ? "text-brand-dark"
            : "text-brand-gray-step/60 font-medium"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

const StepDivider: FC = () => {
  return (
    <div
      className="flex items-center gap-1 text-brand-blue font-bold select-none text-lg tracking-wider"
      aria-hidden="true"
    >
      <span>·</span>
      <span>·</span>
      <span>·</span>
      <span>·</span>
    </div>
  );
};

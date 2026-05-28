interface ProgressStepperProps {
  currentStep: 1 | 2
  onBack?: () => void
  className?: string
}

export function ProgressStepper({ currentStep, onBack, className = '' }: ProgressStepperProps) {
  return (
    <div className={`w-full bg-white md:bg-[#EDEFFC]/40 border-b border-brand-border/30 ${className}`}>
      <div className="hidden md:flex items-center justify-center gap-8 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-brand-dark text-white'
                : 'bg-transparent border-2 border-brand-gray/40 text-brand-gray'
            }`}
          >
            1
          </div>
          <span
            className={`text-sm font-bold tracking-wide transition-all duration-300 ${
              currentStep === 1 ? 'text-brand-dark' : 'text-brand-gray/60 font-medium'
            }`}
          >
            Planes y coberturas
          </span>
        </div>

        <div className="flex items-center gap-1 text-brand-gray/30 font-bold select-none text-lg">
          <span>·</span>
          <span>·</span>
          <span>·</span>
          <span>·</span>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              currentStep === 2
                ? 'bg-brand-dark text-white'
                : 'bg-transparent border-2 border-brand-gray/40 text-brand-gray'
            }`}
          >
            2
          </div>
          <span
            className={`text-sm font-bold tracking-wide transition-all duration-300 ${
              currentStep === 2 ? 'text-brand-dark' : 'text-brand-gray/60 font-medium'
            }`}
          >
            Resumen
          </span>
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-3 px-6 py-4 bg-white border-b border-brand-border/40">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center hover:opacity-85 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <img src="/icons/Icon-button.png" alt="Atrás" className="w-8 h-8 object-contain" />
          </button>
          
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark">
            Paso {currentStep} de 2
          </span>

          <div className="w-8" />
        </div>

        <div className="w-full h-1 bg-brand-border/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: currentStep === 1 ? '50%' : '100%' }}
          />
        </div>
      </div>
    </div>
  )
}

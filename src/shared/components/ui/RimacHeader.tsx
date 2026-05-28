import ContainerMain from "../layouts/ContainerMain";

interface RimacHeaderProps {
  className?: string;
}

export function RimacHeader({ className = "" }: RimacHeaderProps) {
  return (
    <header className={`w-full h-16 flex items-center  ${className}`}>
      <ContainerMain className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/icons/Logo.png"
            alt="RIMAC"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-xs font-bold text-brand-dark tracking-wide">
            ¡Compra por este medio!
          </span>
          <a
            href="tel:014116001"
            className="flex items-center gap-1.5 text-brand-dark hover:text-brand-red transition-colors duration-200"
          >
            <img
              src="/icons/Vector.png"
              alt="Teléfono"
              className="w-4 h-4 object-contain"
            />
            <span className="text-sm font-extrabold tracking-tight">
              (01) 411 6001
            </span>
          </a>
        </div>
      </ContainerMain>
    </header>
  );
}

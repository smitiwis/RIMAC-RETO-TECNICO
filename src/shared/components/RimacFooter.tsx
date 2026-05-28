interface RimacFooterProps {
  className?: string;
}

export function RimacFooter({ className = "" }: RimacFooterProps) {
  return (
    <footer
      className={`w-full bg-brand-dark text-[#A9B0D2] py-8 px-6 md:px-12 mt-auto border-t border-white/5 ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center text-white opacity-85">
          <span className="text-sm font-black tracking-widest uppercase">
            RIMAC
          </span>
        </div>

        <div className="text-center md:text-right">
          <span className="text-xs font-medium">
            © {new Date().getFullYear()} RIMAC Seguros y Reaseguros. Todos los
            derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

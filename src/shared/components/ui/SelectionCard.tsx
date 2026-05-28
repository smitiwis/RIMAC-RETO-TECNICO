import type { SelectionCardProps } from "../types/card-shared";

export function SelectionCard({
  title,
  description,
  icon,
  selected,
  onSelect,
  className = "",
}: SelectionCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect();
        }
      }}
      style={{ boxShadow: "0px 1px 32px 0px #AEACF359" }}
      className={`space-y-2 relative flex flex-col justify-between pt-4 pb-10 px-6 w-full md:max-w-[256px] text-left bg-white rounded-2xl border-2 transition-all duration-300 cursor-pointer outline-none select-none 
 ${
   selected
     ? "border-brand-dark shadow-md shadow-brand-dark/5"
     : "border-transparent shadow-sm hover:border-brand-dark/20 hover:shadow-md"
 } ${className}`}
    >
      <div className="mb-0 flex justify-end">
        {selected ? (
          <div className="w-6 h-6 rounded-full bg-brand-success flex items-center justify-center text-white shadow-sm transition-all duration-200">
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current stroke-3"
              viewBox="0 0 24 24"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full border border-[#A9AFD9] bg-white transition-all duration-200" />
        )}
      </div>

      {icon === "me" ? (
        <img
          src="/icons/IcProtectionLight.png"
          alt="Para mí"
          className="w-12 h-12 object-contain"
        />
      ) : (
        <img
          src="/icons/IcAddUserLight.png"
          alt="Para alguien más"
          className="w-12 h-12 object-contain"
        />
      )}

      <h3 className="text-lg font-bold text-brand-dark  tracking-tight">
        {title}
      </h3>
      <p className="text-xs font-medium text-brand-gray leading-relaxed">
        {description}
      </p>
    </div>
  );
}

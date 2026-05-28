import type { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onToggle"
> {
  label: ReactNode;
  checked: boolean;
  onToggle: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({
  label,
  checked,
  onToggle,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <label
      className={`flex items-start gap-3 cursor-pointer select-none group leading-5 ${className}`}
    >
      <div className="relative flex items-center justify-center mt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(e.target.checked)}
          className="sr-only"
          {...props}
        />
        <div
          className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center ${
            checked
              ? "bg-brand-dark border-brand-dark shadow-sm"
              : "border-brand-border/60 bg-white group-hover:border-brand-dark"
          }`}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white fill-none stroke-current stroke-3"
              viewBox="0 0 24 24"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
      <span className="flex-1 font-normal text-[12px] text-[#0A0F1F] tracking-[-0.1px] mt-px">
        {label}
      </span>
    </label>
  );
}

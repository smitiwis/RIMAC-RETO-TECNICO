import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "degrade" | "flat";
}

export function Badge({
  children,
  className = "",
  variant = "degrade",
}: BadgeProps) {
  const variants = {
    degrade: "bg-linear-to-r from-[#00F4E2] to-[#00FF7F] rounded-sm",
    flat: "bg-[#7DF0BA] rounded-md",
  };
  return (
    <span
      className={`inline-flex items-center justify-center h-6 px-2 py-1 text-[12px] md:text-sm font-bold leading-4 tracking-[0.4px] text-brand-dark select-none ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

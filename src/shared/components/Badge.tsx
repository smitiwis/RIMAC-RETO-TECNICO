import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center h-6 px-2 py-1 rounded-sm bg-linear-to-r from-[#00F4E2] to-[#00FF7F] text-[14px] font-bold leading-4 tracking-[0.4px] text-brand-dark select-none ${className}`}
    >
      {children}
    </span>
  );
}

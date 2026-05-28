import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-10 cursor-pointer h-16 font-semibold inline-flex items-center justify-center text-[20px] transition-all duration-350 active:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-brand-dark hover:bg-brand-dark/90 text-white rounded-full py-3.5  shadow-md shadow-brand-dark/10 hover:shadow-lg",
    secondary:
      "bg-brand-red hover:bg-brand-red-dark text-white rounded-full py-3  shadow-md shadow-brand-red/10",
    outline:
      "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white rounded-full py-2.5 ",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

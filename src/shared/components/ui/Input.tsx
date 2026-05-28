import type { InputHTMLAttributes, ReactNode } from "react";
import { forwardRef, useState } from "react";
import { MessageError } from "./MessageError";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  leftElement?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className = "",
      inputClassName = "",
      leftElement,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={`flex flex-col gap-1.5 w-full text-left ${className}`}>
        {label && (
          <span className="text-[14px] font-semibold text-brand-dark leading-4 tracking-[-0.2px] pl-0.5 block">
            {label}
          </span>
        )}
        <div className="relative flex items-center w-full">
          {leftElement}
          <input
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full px-4 h-12 text-base bg-white rounded-md border transition-all duration-200 outline-none font-medium text-brand-dark placeholder-brand-gray/60 ${
              error
                ? "border-brand-red"
                : isFocused
                  ? "border-brand-dark shadow-sm"
                  : "border-brand-border hover:border-brand-dark/60"
            } ${leftElement ? "pl-32" : ""} ${inputClassName}`}
            {...props}
          />
        </div>
        {error && <MessageError text={error} />}
      </div>
    );
  },
);

Input.displayName = "Input";

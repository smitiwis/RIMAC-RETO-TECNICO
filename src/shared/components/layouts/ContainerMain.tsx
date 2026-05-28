import type { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function ContainerMain({ children, className }: Props) {
  return (
    <div
      className={`max-w-6xl w-full mx-auto grid grid-cols-4 md:grid-cols-12 gap-6 px-4 md:px-0 ${className}`}
    >
      {children}
    </div>
  );
}

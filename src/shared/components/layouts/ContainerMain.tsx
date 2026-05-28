import type { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function ContainerMain({ children, className }: Props) {
  return (
    <div className={`max-w-6xl w-full mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
}

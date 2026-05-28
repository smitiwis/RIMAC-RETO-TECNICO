import type { FC } from "react";

interface Props {
  text: string;
}

export const MessageError: FC<Props> = ({ text }) => {
  return (
    <span className="text-xs text-brand-red font-medium pl-1 -mt-0.5">
      {text}
    </span>
  );
};

export type IForSharedIcon = "me" | "other";

export interface IForShared {
  title: string;
  description: string;
  icon: IForSharedIcon;
}

export interface SelectionCardProps extends IForShared {
  selected: boolean;
  onSelect: () => void;
  className?: string;
}

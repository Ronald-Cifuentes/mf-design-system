export type ButtonProps = Partial<{
  primary: boolean;
  backgroundColor: string;
  size: "small" | "medium" | "large";
  label: string;
  onClick: () => void;
}>;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  Partial<{
    primary: boolean;
    backgroundColor: string;
    size: "small" | "medium" | "large";
    label: string;
    onClick: () => void;
  }>;

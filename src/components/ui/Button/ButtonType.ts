export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outlined";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

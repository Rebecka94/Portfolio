import type { HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outlined";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

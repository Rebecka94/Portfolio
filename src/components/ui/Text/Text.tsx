import styles from "./Text.module.css";
import type { TextProps } from "./TextType";

export default function Text({
  size = "medium",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p className={`${styles[size]} ${className ?? ""}`} {...props}>
      {children}
    </p>
  );
}

import styles from "./Button.module.css";
import type { ButtonProps } from "./ButtonType";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}

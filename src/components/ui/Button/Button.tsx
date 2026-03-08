import styles from "./Button.module.css";
import type { ButtonProps } from "./ButtonType";

export default function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}

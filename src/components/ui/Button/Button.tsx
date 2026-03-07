import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
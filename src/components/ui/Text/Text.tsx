import styles from "./Text.module.css";

export default function Text({ size = "md", children }: { size?: "sm" | "md" | "lg" | "xl"; children: React.ReactNode }) {
  return <p className={styles[size]}>{children}</p>;
}
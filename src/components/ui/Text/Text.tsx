import styles from "./Text.module.css";
import type { TextProps } from "./TextType";

export default function Text({ size = "md", children }: TextProps) {
  return <p className={styles[size]}>{children}</p>;
}
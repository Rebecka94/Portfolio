import styles from "./Text.module.css";
import type { TextProps } from "./TextType";

export default function Text({ size = "medium", children, ...props }: TextProps) {
  return (<p className={styles[size]} {...props}>{children}</p>);
}
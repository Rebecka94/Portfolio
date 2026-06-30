import { motion } from "framer-motion";
import styles from "./Button.module.css";
import type { ButtonProps } from "./ButtonType";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

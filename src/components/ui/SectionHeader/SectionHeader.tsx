import { Link } from "react-router-dom";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  index?: number;
  link?: { label: string; to: string; external?: boolean };
  bordered?: boolean;
}

export default function SectionHeader({
  label,
  index,
  link,
  bordered = true,
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${bordered ? styles.bordered : ""}`}>
      <span className={styles.label}>
        {index !== undefined && (
          <span className={styles.index}>
            {String(index).padStart(2, "0")}
          </span>
        )}
        {label}
      </span>
      {link &&
        (link.external ? (
          <a
            href={link.to}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ) : (
          <Link to={link.to} className={styles.link}>
            {link.label}
          </Link>
        ))}
    </div>
  );
}

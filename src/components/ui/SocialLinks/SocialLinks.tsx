import styles from "./SocialLinks.module.css";

interface SocialLinksProps {
  align?: "left" | "center";
}

export default function SocialLinks({ align = "left" }: SocialLinksProps) {
  return (
    <div className={`${styles.connect} ${align === "center" ? styles.connectCenter : ""}`}>
      <span className={styles.label}>Let's connect</span>
      <div className={styles.row}>
        <a
          href="https://github.com/Rebecka94"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={styles.icon}
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rebecka-larssson94"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.icon}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:rebeckalarsson.1994@gmail.com"
          aria-label="Email"
          className={styles.icon}
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

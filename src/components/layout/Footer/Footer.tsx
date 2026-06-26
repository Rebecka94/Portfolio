import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>
          © {currentYear} Rebecka Larsson. All rights reserved.
        </p>
        <div className={styles.links}>
          <a href="https://github.com/Rebecka94" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rebecka-larssson94" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:rebeckalarsson.1994@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
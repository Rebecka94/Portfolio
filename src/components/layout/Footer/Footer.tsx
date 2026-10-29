import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container">
      <div className={styles.content}>
        <p className={styles.text}>
          © {currentYear} Rebecka Larsson. All rights reserved.
        </p>
        <a href="#" className={styles.link}>
          Back to top
        </a>
      </div>
    </footer>
  );
}
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <p className={styles.text}>
          © {currentYear} Rebecka Larsson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
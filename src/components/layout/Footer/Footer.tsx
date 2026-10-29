import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  // The green Connect section sits right above the footer on the home page
  const isHome = pathname === "/";

  return (
    <footer className="container">
      <div className={`${styles.content} ${isHome ? styles.noBorder : ""}`}>
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

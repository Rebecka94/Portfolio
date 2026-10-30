import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  // A green section sits right above the footer on these pages
  const hasGreenAbove =
    pathname === "/" ||
    pathname === "/about" ||
    pathname.startsWith("/projects/");

  return (
    <footer className="container">
      <div className={`${styles.content} ${hasGreenAbove ? styles.noBorder : ""}`}>
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

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../ui/Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  // The home page hero is green, so the navbar matches it there
  const isHome = pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} ${isHome ? styles.tinted : ""}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.navWrapper}>
          <Link to="/" className={styles.logo} aria-label="Rebecka Larsson, home">
            <span className={styles.logoMark} aria-hidden="true" />
          </Link>
          <div className={styles.mobileTop}>
            <a href="mailto:rebeckalarsson.1994@gmail.com">
              <Button variant="outlined" size="sm">
                Contact
              </Button>
            </a>

            <button
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <ul className={styles.desktopLinks}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/#projects">Projects</Link>
            </li>
            <li>
              <a
                href="mailto:rebeckalarsson.1994@gmail.com"
                className={styles.contactLink}
              >
                <Button variant="outlined" size="sm">
                  Contact
                </Button>
              </a>
            </li>
          </ul>
        </div>
        <ul className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <button
            className={styles.closeButton}
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <i className="fas fa-xmark"></i>
          </button>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

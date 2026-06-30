import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navWrapper}>
          <div className={styles.mobileTop}>
            <Button variant="outlined" size="sm">
              Contact
            </Button>

            <button
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className={styles.desktopLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <Button variant="outlined" size="sm">
                Contact
              </Button>
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
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

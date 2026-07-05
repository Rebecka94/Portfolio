import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className={styles.logo}>
            <img src="/Logga.png" alt="RL" />
          </Link>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/#projects">Projects</Link>
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
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
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

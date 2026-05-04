import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <ul className={styles.links}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <Button variant="outlined" size="sm" style={{ fontSize: "20px" }}>
            Contact
          </Button>
        </ul>
      </div>
    </nav>
  );
}

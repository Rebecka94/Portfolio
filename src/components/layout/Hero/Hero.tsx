import { useIsMobile } from "./useIsMobile";
import Button from "../../ui/Button/Button";
import Text from "../../ui/Text/Text";
import Reveal from "../../ui/Reveal/Reveal";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const isMobile = useIsMobile();

  const connect = (
    <div className={styles.connect}>
      <span className={styles.connectLabel}>Let's connect</span>
      <div className={styles.socialRow}>
        <a
          href="https://github.com/Rebecka94"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={styles.socialIcon}
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rebecka-larssson94"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.socialIcon}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:rebeckalarsson.1994@gmail.com"
          aria-label="Email"
          className={styles.socialIcon}
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          {isMobile ? (
            <>
              <span className={styles.label}>Hi, I'm</span>
              <h1 className={styles.heading}>Rebecka Larsson</h1>
              <Reveal className={styles.imageWrapper} distance={24}>
                <img src="/profileimg.png" alt="Rebecka" className={styles.profile} />
              </Reveal>
              <Reveal className={styles.text} distance={24}>
                <p className={styles.role}>
                  Frontend Developer
                </p>
                <Text size="small">
                  I craft clean, modern and user-friendly web experiences with a
                  focus on design, performance and accessibility.
                </Text>
                <div className={styles.buttonRow}>
                <Link to="/projects" className={styles.buttonLink}>
                  <Button variant="secondary" size="sm">View my work</Button>
                </Link>
                <Link to="/about" className={styles.buttonLink}>
                  <Button variant="outlined" size="sm">Learn more about me</Button>
                </Link>
                </div>
                {connect}
              </Reveal>
            </>
          ) : (
            <>
              <Reveal className={styles.text} distance={24}>
                <span className={styles.label}>Hi, I'm</span>
                <h1>Rebecka Larsson</h1>
                <p className={styles.role}>
                  Frontend Developer
                </p>
                <Text size="medium">
                  I craft clean, modern and user-friendly web experiences with a
                  focus on design, performance and accessibility.
                </Text>
                <div className={styles.buttonRow}>
                <Link to="/projects" className={styles.buttonLink}>
                  <Button variant="secondary" size="md">View my work</Button>
                </Link>
                <Link to="/about" className={styles.buttonLink}>
                  <Button variant="outlined" size="md">Learn more about me</Button>
                </Link>
                </div>
                {connect}
              </Reveal>
              <Reveal className={styles.imageWrapper} distance={24}>
                <img src="/profileimg.png" alt="Rebecka" className={styles.profile} />
              </Reveal>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
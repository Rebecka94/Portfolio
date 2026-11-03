import Button from "../../ui/Button/Button";
import Text from "../../ui/Text/Text";
import Reveal from "../../ui/Reveal/Reveal";
import SocialLinks from "../../ui/SocialLinks/SocialLinks";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <section className={styles.hero}>
        <div className={`container section ${styles.content}`}>
          <Reveal className={styles.heading} distance={24}>
            <h1>Rebecka Larsson</h1>
            {/* Desktop: role under the name. Mobile shows it under the photo */}
            <p className={`${styles.role} ${styles.roleDesktop}`}>
              Frontend Developer
            </p>
          </Reveal>
          <Reveal className={styles.imageWrapper} distance={24}>
            <img
              src="/profileimg.png"
              alt="Rebecka"
              className={styles.profile}
            />
          </Reveal>
          <Reveal className={styles.text} distance={24}>
            <p className={`${styles.role} ${styles.roleMobile}`}>
              Frontend Developer
            </p>
            <Text size="medium">
              I craft clean, modern and user-friendly web experiences with a
              focus on design, performance and accessibility.
            </Text>
            <div className={styles.buttonRow}>
              <Link to="/#projects">
                <Button variant="secondary" size="sm">
                  View my work
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outlined" size="sm">
                  Learn more about me
                </Button>
              </Link>
            </div>
            <div className={styles.socials}>
              <SocialLinks />
            </div>
          </Reveal>
        </div>
      </section>
      {/* Same curve as the hero's mask, drawn as a line */}
      <svg
        className={styles.waveLine}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M1440 100C1150 100 1000 58 720 55S240 48 0 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

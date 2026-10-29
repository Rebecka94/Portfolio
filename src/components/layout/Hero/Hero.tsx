import Button from "../../ui/Button/Button";
import Text from "../../ui/Text/Text";
import Reveal from "../../ui/Reveal/Reveal";
import SocialLinks from "../../ui/SocialLinks/SocialLinks";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container section ${styles.content}`}>
        <Reveal className={styles.heading} distance={24}>
          <h1>Rebecka Larsson</h1>
          <p className={styles.role}>Frontend Developer</p>
        </Reveal>
        <Reveal className={styles.imageWrapper} distance={24}>
          <img src="/profileimg.png" alt="Rebecka" className={styles.profile} />
        </Reveal>
        <Reveal className={styles.text} distance={24}>
          <Text size="medium">
            I craft clean, modern and user-friendly web experiences with a
            focus on design, performance and accessibility.
          </Text>
          <div className={styles.buttonRow}>
            <Link to="/#projects">
              <Button variant="secondary" size="sm">View my work</Button>
            </Link>
            <Link to="/about">
              <Button variant="outlined" size="sm">Learn more about me</Button>
            </Link>
          </div>
          <div className={styles.socials}>
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

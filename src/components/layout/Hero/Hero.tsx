import { useIsMobile } from "./useIsMobile";
import Button from "../../ui/Button/Button";
import Text from "../../ui/Text/Text";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          {isMobile ? (
            <>
              <h1 className={styles.heading}>Hi, I'm Rebecka</h1>
              <div className={styles.imageWrapper}>
                <img src="/profile-img.png" alt="Rebecka" className={styles.profile} />
              </div>
              <div className={styles.text}>
                <Text size="small">
                  <span className={styles.span}>Frontend Developer</span><br /> crafting clean and modern web experiences.
                </Text>
                <Link to="/projects">
                <Button variant="secondary" size="sm">View my work →</Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className={styles.text}>
                <h1>Hi, I'm Rebecka</h1>
                <Text size="medium">
                  <span className={styles.span}>Frontend Developer</span><br /> crafting clean and modern web experiences.
                </Text>
                <Link to="/projects">
                  <Button variant="secondary" size="md">View my work →</Button>
                </Link>
              </div>
              <div className={styles.imageWrapper}>
                <img src="/profile-img.png" alt="Rebecka" className={styles.profile} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
import styles from "./Hero.module.css";
import Button from "../../ui/Button/Button";
import Text from "../../ui/Text/Text";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
      <div className={styles.content}>
        
        <div className={styles.text}>
          <h1>Hi, I’m Rebecka</h1>

          <Text size="medium">
          Frontend Developer <br/> - crafting clean and modern web experiences.
          </Text>

          <Button variant="secondary" size="md">View my work →</Button>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/Ellipse-shadow.png" className={styles.shadow} />
          <img src="/Ellipse-green.png" className={styles.shapeGreen} />
          <img src="/Ellipse-pink.png" className={styles.shapePink} />
          <img src="/profileimg.png" alt="Rebecka" className={styles.profile} />
        </div>

      </div>
      </div>
    </section>
  );
}
import Text from "../../ui/Text/Text";
import styles from "./SkillsCards.module.css";

export default function SkillsCards() {
  return (
    <div className={styles.container}>
      <h3>Things i care about</h3>
      <div className={styles.card}>
        <div className={styles.cardItem}>
          <img
            src="/images/tech/code.svg"
            alt="Clean Code"
            className={styles.cardIcon}
          />
          <h3>Clean Code</h3>
          <Text size="xsmall">
            Writing clean, maintainable, and scalable code with a strong focus
            on structure and usability.
          </Text>
        </div>
        <div className={styles.cardItem}>
          <img
            src="/images/tech/rocket.svg"
            alt="Modern Tools"
            className={styles.cardIcon}
          />
          <h3>Modern Tools</h3>
          <Text size="xsmall">
            Working with modern frontend technologies to build fast, responsive,
            and intuitive web applications.
          </Text>
        </div>
        <div className={styles.cardItem}>
          <img
            src="/images/tech/brush.svg"
            alt="UX Focused"
            className={styles.cardIcon}
          />
          <h3>UX Focused</h3>
          <Text size="xsmall">
            Creating user-friendly interfaces with attention to accessibility,
            visual detail, and overall user experience.
          </Text>
        </div>
      </div>
    </div>
  );
}

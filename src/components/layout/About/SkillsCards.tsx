import Text from "../../ui/Text/Text";
import styles from "./SkillsCards.module.css";

export default function SkillsCards() {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardWrapper}>
        <img
          src="/images/tech/Git.png"
          alt="Clean Code"
          className={styles.cardIcon}
        />
        <div className={styles.card}>
          <h3>Clean Code</h3>
          <Text size="xsmall">
            Writing maintainable and well-documented code that stands the test
            of time
          </Text>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <img
          src="/images/tech/Git.png"
          alt="Modern Tools"
          className={styles.cardIcon}
        />
        <div className={styles.card}>
          <h3>Modern Tools</h3>
          <Text size="xsmall">
            Leveraging the latest technologies for optimal performance and
            scalability
          </Text>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <img
          src="/images/tech/Git.png"
          alt="UX Focused"
          className={styles.cardIcon}
        />
        <div className={styles.card}>
          <h3>UX Focused</h3>
          <Text size="xsmall">
            Building intuitive interfaces that users love to interact with every
            day
          </Text>
        </div>
      </div>
    </div>
  );
}

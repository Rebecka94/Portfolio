import Text from "../../ui/Text/Text";
import styles from "./AboutSection.module.css";
import TechStack from "./TechStack";

export default function AboutSection() {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h2>About Me</h2>
          <span className={styles.underline}></span>
          <Text size="small">
            I'm a passionate developer with a love for creating beautiful and
            functional web experiences. With experience in modern web
            technologies, I focus on writing clean, maintainable code and
            building intuitive user interfaces.
          </Text>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Clean Code</h3>
            <Text size="xsmall">
              Writing maintainable and well-documented code that stands the test
              of time
            </Text>
          </div>
          <div className={styles.card}>
            <h3>Modern Tools</h3>
            <Text size="xsmall">
              Leveraging the latest technologies for optimal performance and
              scalability
            </Text>
          </div>
          <div className={styles.card}>
            <h3>UX Focused</h3>
            <Text size="xsmall">
              Building intuitive interfaces that users love to interact with
              every day
            </Text>
          </div>
        </div>
      </div>

      <TechStack />
    </div>
  );
}

import Text from "../../ui/Text/Text";
import styles from "./AboutSection.module.css";
import TechStack from "./TechStack";

export default function AboutSection() {
  return (
    <div id="about" className={styles.container}>
      <h2>About Me</h2>
      <Text size="small">
        I'm a passionate developer with a love for creating beautiful and
        functional web experiences. With experience in modern web technologies,
        I focus on writing clean, maintainable code and building intuitive user
        interfaces.
      </Text>
      <TechStack />
    </div>
  );
}

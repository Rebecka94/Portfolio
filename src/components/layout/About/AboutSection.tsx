import Text from "../../ui/Text/Text";
import styles from "./AboutSection.module.css";
import SkillsCards from "./SkillsCards";
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
        <SkillsCards />
      </div>
      <TechStack />
    </div>
  );
}

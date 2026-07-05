import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Text from "../../ui/Text/Text";
import Reveal from "../../ui/Reveal/Reveal";
import styles from "./AboutSection.module.css";
import SkillsCards from "./SkillsCards";

export default function AboutSection() {
  return (
    <Reveal id="about" className={`container ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <span className={styles.label}>About me</span>
          <h2>Building ideas through code and design.</h2>
          <Text size="small">
            I'm a frontend developer with a background in education and a
            strong interest in design and user experience. I enjoy turning
            ideas into modern web interfaces using React, Next.js,
            TypeScript, and more.
          </Text>
          <Link to="/about">
            <Button variant="secondary" size="md">Learn more about me →</Button>
          </Link>
        </div>
        <div className={styles.skills}>
          <SkillsCards />
        </div>
      </div>
    </Reveal>
  );
}

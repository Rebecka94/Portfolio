import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Text from "../../ui/Text/Text";
import Reveal from "../../ui/Reveal/Reveal";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import styles from "./AboutSection.module.css";
import SkillsCards from "./SkillsCards";

export default function AboutSection() {
  return (
    <section id="about" className="container section">
      <SectionHeader index={1} label="About me" bordered={false} />
      <Reveal>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h2>Building ideas through code and design.</h2>
            <Text size="small">
              I'm a frontend developer with a background in education and a
              strong interest in design and user experience. I enjoy turning
              ideas into modern web interfaces using React, Next.js,
              TypeScript, and more.
            </Text>
            <Link to="/about">
              <Button variant="outlined" size="sm">Learn more about me</Button>
            </Link>
          </div>
          <SkillsCards />
        </div>
      </Reveal>
    </section>
  );
}

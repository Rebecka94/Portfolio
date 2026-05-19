import Text from "../../ui/Text/Text";
import styles from "./AboutSection.module.css";
import SkillsCards from "./SkillsCards";

export default function AboutSection() {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h2>About Me 👋🏼 </h2>
          <span className={styles.underline}></span>
          <Text size="small">
            I’m a frontend developer with a background in education and a strong
            interest in design and user experience. I enjoy creating modern web
            interfaces and bringing ideas to life through clean and thoughtful
            frontend development. Over the past year, I’ve worked with React,
            Next.js, TypeScript, and modern frontend workflows through
            internships and personal projects, while continuing to grow as a
            developer every day.
          </Text>
        </div>
        <SkillsCards />
      </div>
    </div>
  );
}

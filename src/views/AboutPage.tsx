import { Link } from "react-router-dom";
import Timeline from "../components/layout/Timeline/Timeline";
import Button from "../components/ui/Button/Button";
import Reveal from "../components/ui/Reveal/Reveal";
import SocialLinks from "../components/ui/SocialLinks/SocialLinks";
import Text from "../components/ui/Text/Text";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div>
      <section className={styles.intro}>
        <Reveal className={`container ${styles.introInner}`}>
          <span className={styles.label}>About me</span>
          <h1>Hi, I'm Rebecka.</h1>
          <div className={styles.introText}>
            <Text size="medium">
              I'm a frontend developer based in Sweden with hands-on experience
              building responsive web applications in React and Next.js. I enjoy
              turning UX/UI designs into intuitive, production-ready interfaces
              and creating reusable components that make products easier to
              build and maintain.
            </Text>
            <Text size="medium">
              Before transitioning into tech, I worked as a preschool teacher
              for several years. That experience taught me clear communication,
              empathy, and collaboration—skills that have become just as
              valuable when working in cross-functional development teams.
            </Text>
          </div>
          <SocialLinks />
        </Reveal>
      </section>

      <Reveal className={`container ${styles.story}`}>
        <span className={styles.label}>My story</span>
        <h2>From classrooms to codebases.</h2>
        <div className={styles.storyColumns}>
          <div className={styles.storyColumn}>
            <Text size="small">
              While teaching was meaningful, I found myself increasingly drawn
              to technology. What started as curiosity about HTML and CSS
              quickly turned into evenings of self-study, a frontend education,
              and eventually internships where I could apply those skills in
              real products.
            </Text>
            <Text size="small">
              During my internships I've worked with React, TypeScript and
              Next.js to build responsive applications, reusable UI components
              and API-driven features. I've also had the opportunity to design
              interfaces in Figma and collaborate closely with backend
              developers in agile teams.
            </Text>
          </div>
          <div className={styles.storyColumn}>
            <Text size="small">
              Today I'm looking for opportunities where thoughtful design and
              clean code go hand in hand and where I can continue growing as a
              developer.
            </Text>
            <Text size="small">
              Outside of work I enjoy travelling, skiing, and spending time with
              friends. I'm always up for discovering new places, whether it's a
              city break, a ski trip, or an adventure somewhere I've never been
              before.
            </Text>
          </div>
        </div>
      </Reveal>

      <Timeline />

      <section className={styles.cta}>
        <Reveal className={`container ${styles.ctaInner}`}>
          <span className={styles.label}>Ready to collaborate?</span>
          <h2>Want to see my work?</h2>
          <Text size="small">Check out the projects I've been building</Text>
          <Link to="/#projects">
            <Button variant="secondary" size="md">
              View my projects
            </Button>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

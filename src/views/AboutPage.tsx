import { Link } from "react-router-dom";
import Timeline from "../components/layout/Timeline/Timeline";
import Reveal from "../components/ui/Reveal/Reveal";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";
import SocialLinks from "../components/ui/SocialLinks/SocialLinks";
import Text from "../components/ui/Text/Text";
import connectStyles from "../components/layout/Connect/Connect.module.css";
import styles from "./AboutPage.module.css";

const interests = [
  { label: "Travel", icon: "fa-plane" },
  { label: "Skiing", icon: "fa-mountain" },
  { label: "Good company", icon: "fa-user-group" },
];

export default function AboutPage() {
  return (
    <div>
      <section className={`container section ${styles.introSection}`}>
        <SectionHeader index={1} label="About me" bordered={false} />
        <Reveal className={styles.intro}>
          <div className={styles.introInner}>
            <h1>
              Hi, I'm <em>Rebecka.</em>
            </h1>
            <div className={styles.introText}>
              <Text size="medium">
                I'm a frontend developer based in Sweden with hands-on experience
                building responsive web applications in React and Next.js. I enjoy
                turning UX/UI designs into intuitive, production-ready interfaces
                and creating reusable components that make products easier to
                build and maintain.
              </Text>
            </div>
            <SocialLinks />
          </div>
          <img src="/code-img.png" alt="" className={styles.introImage} />
        </Reveal>
      </section>

      {/* Tinted full-width band with two columns split by a thin line */}
      <section className={styles.storySection}>
        <div className="container section">
          <SectionHeader index={2} label="My story" bordered={false} />
          <Reveal>
            <h2 className={styles.storyHeading}>
              From classrooms to <em>codebases.</em>
            </h2>
            <div className={styles.storyColumns}>
              <div className={styles.storyColumn}>
                <Text size="small">
                  Before transitioning into tech, I worked as a preschool teacher
                  for several years.
                </Text>
                <Text size="small">
                  While teaching was meaningful, I found myself increasingly drawn
                  to technology. What started as curiosity about HTML and CSS
                  quickly turned into evenings of self-study, a frontend education,
                  and eventually internships where I could apply those skills in
                  real products.
                </Text>
                <Text size="small">
                  Today I'm looking for opportunities where thoughtful design and
                  clean code go hand in hand and where I can continue growing as a
                  developer.
                </Text>
              </div>
              <div className={`${styles.storyColumn} ${styles.storyColumnRight}`}>
                <Text size="small">
                  Outside of work I enjoy travelling, skiing, and spending time with
                  friends. I'm always up for discovering new places, whether it's a
                  city break, a ski trip, or an adventure somewhere I've never been
                  before.
                </Text>
                <Text size="small">
                  New places and new people tend to spark new ideas, and I bring
                  that same curiosity into my work: asking questions, trying
                  things out and looking for the solution that feels right for
                  the people who will use it.
                </Text>
                <ul className={styles.interests}>
                  {interests.map((interest) => (
                    <li key={interest.label} className={styles.interest}>
                      <span className={styles.interestIcon}>
                        <i className={`fa-solid ${interest.icon}`} aria-hidden="true" />
                      </span>
                      <span className={styles.interestLabel}>{interest.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Timeline />

      {/* Same look as the green Connect section on the home page */}
      <section className={connectStyles.connect}>
        <Reveal className={`container ${connectStyles.inner}`}>
          <span className={connectStyles.label}>Ready to collaborate?</span>
          <h2 className={connectStyles.heading}>
            Want to see my <em>work?</em>
          </h2>
          <p className={connectStyles.text}>
            Check out the projects I've been building
          </p>
          <Link to="/#projects" className={connectStyles.button}>
            View my projects
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

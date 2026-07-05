import Reveal from "../../ui/Reveal/Reveal";
import styles from "./Timeline.module.css";

const items = [
  {
    year: "jan 2026 - jun 2026",
    role: "Internship, Frontend Developer",
    company: "Nexer AB, Gothenburg",
    description:
      "Built and improved an internal email builder application using Next.js and TypeScript. Developed reusable UI components, implemented new features, integrated APIs, and collaborated closely with backend developers in an agile environment. Refactored existing code to improve maintainability and scalability.",
  },
  {
    year: "sep 2025 - nov 2025",
    role: "Internship, Frontend Developer",
    company: "Novalo Technologies, Gothenburg",
    description:
      "Designed and developed the company's website from Figma prototypes to a responsive Next.js application. Built reusable components, integrated APIs, and collaborated with the team through continuous feedback and iterative development.",
  },
  {
    year: "jan 2018 – aug 2023",
    role: "Preeschool Teacher",
    company: "Gothenburg, Partille & Berlin",
    description:
      "Developed strong communication, planning and collaboration skills while working in diverse educational environments in Sweden and abroad. These experiences continue to shape how I work in cross-functional teams and build products with users in mind.",
  },
];

export default function Timeline() {
  return (
    <section className={styles.section}>
      <Reveal className="container">
        <span className={styles.label}>Experience</span>
        <h2>My journey so far.</h2>
        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.role} className={styles.item}>
              <span className={styles.year}>{item.year}</span>
              <span className={styles.role}>{item.role}</span>
              <span className={styles.company}>{item.company}</span>
              <p className={styles.desc}>{item.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

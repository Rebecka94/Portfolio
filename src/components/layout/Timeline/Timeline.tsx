import Button from "../../ui/Button/Button";
import Reveal from "../../ui/Reveal/Reveal";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import styles from "./Timeline.module.css";

const items = [
  {
    year: "sep 2026 - present",
    role: "Frontend Developer",
    company: "METS Technology AB, Gothenburg",
    description:
      "Responsible for building a new web layout and website for Metstech. Building a functional and user-friendly website based on the company's needs, and responsible for the structure, responsive design and implementation of the new layout.",
  },
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
    <section className={`container section ${styles.section}`}>
      <SectionHeader index={3} label="Experience" bordered={false} />
      <Reveal>
        <h2>
          My journey <em>so far.</em>
        </h2>
        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.role + item.company} className={styles.item}>
              <span className={styles.year}>{item.year}</span>
              <span className={styles.role}>{item.role}</span>
              <span className={styles.company}>{item.company}</span>
              <p className={styles.desc}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.cv}>
          <p className={styles.cvText}>
            Want the full picture? Download my CV to read more about my
            experience and education.
          </p>
          <a
            href="/cv/rebecka-cv.pdf"
            download="Rebecka-Larsson-CV.pdf"
            className={styles.cvLink}
          >
            <Button variant="outlined" size="sm">
              Download CV
              <svg className={styles.cvIcon} viewBox="0 0 12 12" aria-hidden="true">
                <path d="M6 2v7M3 6l3 3 3-3M2.5 10.5h7" />
              </svg>
            </Button>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

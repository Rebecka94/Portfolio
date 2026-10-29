import Reveal from "../../ui/Reveal/Reveal";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import styles from "./TechStack.module.css";

const techGroups = [
  {
    category: "Languages",
    items: [
      { name: "HTML", image: "html5.svg" },
      { name: "CSS", image: "css3.svg" },
      { name: "JavaScript", image: "javascript.svg" },
      { name: "TypeScript", image: "typescript.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", image: "react.svg" },
      { name: "Next.js", image: "nextdotjs.svg" },
      { name: "Node.js", image: "nodedotjs.svg" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", image: "git.svg" },
      { name: "GitHub", image: "github.svg" },
      { name: "Azure DevOps", image: "azuredevops.svg" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", image: "figma.svg" },
      { name: "Illustrator", image: "adobeillustrator.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="container section">
      <SectionHeader label="Tech stack" />
      <Reveal>
        <div className={styles.content}>
          <h2 className={styles.heading}>Technologies I work with</h2>
          <ul className={styles.rows}>
            {techGroups.map((group) => (
              <li key={group.category} className={styles.row}>
                <h3 className={styles.category}>{group.category}</h3>
                <div className={styles.techList}>
                  {group.items.map((tech) => (
                    <span key={tech.name} className={styles.tech}>
                      <img
                        src={`/images/tech/mono/${tech.image}`}
                        alt=""
                        className={styles.icon}
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

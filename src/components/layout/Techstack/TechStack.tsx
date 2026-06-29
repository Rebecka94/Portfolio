import styles from "./TechStack.module.css";

const techGroups = [
  {
    category: "Languages",
    items: [
      { name: "HTML", image: "HTML5.png" },
      { name: "CSS", image: "CSS3.png" },
      { name: "JavaScript", image: "JavaScript.png" },
      { name: "TypeScript", image: "TypeScript.png" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", image: "React.png" },
      { name: "Next.js", image: "Next.js.png" },
      { name: "Node.js", image: "Node.js.png" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", image: "Git.png" },
      { name: "GitHub", image: "GitHub.png" },
      { name: "Azure DevOps", image: "Azure-Devops.png" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", image: "Figma.png" },
      { name: "Illustrator", image: "Adobe-Illustrator.png" },
    ],
  },
];

export default function TechStack() {
  return (
    <div className={`container ${styles.container}`}>
      <span className={styles.label}>Tech stack</span>
      <h2>Technologies I work with</h2>
      <div className={styles.techGroups}>
        {techGroups.map((group) => (
          <div key={group.category} className={styles.techGroup}>
            <span className={styles.groupLabel}>{group.category}</span>
            <div className={styles.techList}>
              {group.items.map((tech) => (
                <div key={tech.name} className={styles.techcontainer}>
                  <img
                    src={`/images/tech/${tech.image}`}
                    alt={tech.name}
                    className={styles.icon}
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import styles from "./TechStack.module.css";

const technologies = [
  { name: "HTML", image: "HTML5.png" },
  { name: "CSS", image: "CSS3.png" },
  { name: "JavaScript", image: "JavaScript.png" },
  { name: "TypeScript", image: "TypeScript.png" },
  { name: "React", image: "React.png" },
  { name: "Next.js", image: "Next.js.png" },
  { name: "Node.js", image: "Node.js.png" },
  { name: "Git", image: "Git.png" },
  { name: "Azure DevOps", image: "Azure-Devops.png" },
  { name: "GitHub", image: "GitHub.png" },
  { name: "Figma", image: "Figma.png" },
  { name: "Illustrator", image: "Adobe-Illustrator.png" },
];

export default function TechStack() {
  return (
    <div className={styles.container}>
      <h3>Tech Stack</h3>
      <div className={styles.techList}>
        {technologies.map((tech) => (
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
  );
}

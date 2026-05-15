import styles from "./TechStack.module.css";

export default function TechStack() {
  return (
    <div className={styles.container}>
      <h3>Tech Stack</h3>
      <ul className={styles.techList}>
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>CSS Modules</li>
      </ul>
    </div>
  );
}

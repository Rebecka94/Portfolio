import styles from "./Section.module.css";

export default function Section() {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2>Section Title</h2>
            <p>This is a section of the page.</p>
   
        </div>
    </section>
  );
}
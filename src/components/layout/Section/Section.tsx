import styles from "./Section.module.css";
import Text from "../../ui/Text/Text";

export default function Section() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Section Title</h2>
        <Text size="small">This is a section of the page.</Text>
      </div>
    </section>
  );
}
import Reveal from "../../ui/Reveal/Reveal";
import SocialLinks from "../../ui/SocialLinks/SocialLinks";
import styles from "./Connect.module.css";

export default function Connect() {
  return (
    <section id="contact" className={styles.connect}>
      <Reveal className={`container ${styles.inner}`}>
        <span className={styles.label}>Let's connect</span>
        <h2 className={styles.heading}>Interested in working together?</h2>
        <p className={styles.text}>
          I'm always open to new opportunities, interesting projects or just a
          chat about design, development or anything in between. Feel free to
          reach out – I'd love to hear from you!
        </p>
        <div className={styles.buttonRow}>
          <a href="mailto:rebeckalarsson.1994@gmail.com" className={styles.button}>
            Contact me
            <svg className={styles.arrow} viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3 9L9 3M4 3h5v5" />
            </svg>
          </a>
          <a
            href="/cv/rebecka-cv.pdf"
            download="Rebecka-Larsson-CV.pdf"
            className={styles.buttonOutlined}
          >
            Download CV
            <svg className={styles.arrow} viewBox="0 0 12 12" aria-hidden="true">
              <path d="M6 2v7M3 6l3 3 3-3M2.5 10.5h7" />
            </svg>
          </a>
        </div>
        <div className={styles.socials}>
          <SocialLinks showLabel={false} />
        </div>
      </Reveal>
    </section>
  );
}

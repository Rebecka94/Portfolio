import { Link } from "react-router-dom";
import { projects } from "../../../data/projects";
import Text from "../../ui/Text/Text";
import Reveal from "../../ui/Reveal/Reveal";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  return (
    <section id="projects" className="container section">
      <SectionHeader index={3} label="My projects" />
      <Reveal>
        <div className={styles.intro}>
          <h2>Things I've built</h2>
          <Text size="small">
            These are some of the projects I've been working on, both individually and in groups.
          </Text>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.slug} className={styles.card}>
              <div className={styles.thumbnail}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.thumbnailImage}
                  />
                ) : (
                  <span className={styles.thumbnailInitial}>
                    {project.title.charAt(0)}
                  </span>
                )}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                  <h3>
                    {/* Stretched over the whole card so the card is clickable */}
                    <Link to={`/projects/${project.slug}`} className={styles.cardLink}>
                      {project.title}
                    </Link>
                  </h3>
                  {(project.liveUrl || project.repoUrl) && (
                    <div className={styles.links}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className={styles.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          className={styles.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source code
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <span className={styles.tags}>{project.tags.join(" · ")}</span>
                <p className={`${styles.description} ${styles.clamped}`}>
                  {project.description}
                </p>
                {/* Same destination as the title link, so kept out of the tab order */}
                <Link
                  to={`/projects/${project.slug}`}
                  className={styles.readMore}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  Read more
                  <svg
                    className={styles.arrow}
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path d="M3 9L9 3M4 3h5v5" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

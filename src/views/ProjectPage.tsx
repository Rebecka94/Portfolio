import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Reveal from "../components/ui/Reveal/Reveal";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";
import styles from "./ProjectPage.module.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return (
      <section className="container section">
        <SectionHeader label="Project" bordered={false} />
        <h1>Project not found</h1>
        <Link to="/#projects" className={styles.back}>
          ← Back to all projects
        </Link>
      </section>
    );
  }

  const project = projects[index];
  const others = projects.filter((other) => other.slug !== project.slug);

  return (
    <>
      <article className="container section">
        <Link to="/#projects" className={styles.back}>
          ← All projects
        </Link>

        <Reveal className={styles.header}>
          <span className={styles.tags}>{project.tags.join(" · ")}</span>
          <h1 className={styles.title}>{project.title}</h1>
          {(project.liveUrl || project.repoUrl) && (
            <div className={styles.links}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className={styles.linkPrimary}
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
        </Reveal>

        {project.image && (
          <Reveal>
            <img src={project.image} alt={project.title} className={styles.image} />
          </Reveal>
        )}

        <Reveal className={styles.body}>
          <SectionHeader label="About the project" />
          <p className={styles.description}>{project.description}</p>
        </Reveal>

      </article>

      {/* Full-width dark green band, same look as the Connect section */}
      <section className={styles.others}>
        <div className="container">
          <span className={styles.othersLabel}>Other projects</span>
          <div className={styles.othersHeader}>
            <h2 className={styles.othersHeading}>
              Explore more <em>projects.</em>
            </h2>
          </div>
          <div className={styles.othersGrid}>
            {others.map((other, i) => (
              <Link
                key={other.slug}
                to={`/projects/${other.slug}`}
                className={styles.otherCard}
              >
                {other.image && (
                  <span className={styles.otherThumb}>
                    <img src={other.image} alt="" />
                  </span>
                )}
                <span className={styles.otherInfo}>
                  <span className={styles.otherText}>
                    <span className={styles.otherIndex}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.otherTitle}>{other.title}</span>
                    <span className={styles.otherSummary}>{other.summary}</span>
                  </span>
                  <span className={styles.otherButton} aria-hidden="true">
                    <svg viewBox="0 0 12 12">
                      <path d="M3 9L9 3M4 3h5v5" />
                    </svg>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

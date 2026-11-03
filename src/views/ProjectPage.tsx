import { Link, useParams } from "react-router-dom";
import { projects, type FeatureIcon } from "../data/projects";
import Reveal from "../components/ui/Reveal/Reveal";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";
import Text from "../components/ui/Text/Text";
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
        {/* Intro: text on the left, image on the right (stacked on mobile) */}
        <div className={styles.intro}>
          <Reveal className={styles.header}>
            <Link to="/#projects" className={styles.back}>
              ← All projects
            </Link>
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
                    <svg
                      className={styles.linkArrow}
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path d="M3 9L9 3M4 3h5v5" />
                    </svg>
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
                    <svg
                      className={styles.linkArrow}
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path d="M3 9L9 3M4 3h5v5" />
                    </svg>
                  </a>
                )}
              </div>
            )}
            {project.tagline && (
              <p className={styles.tagline}>{project.tagline}</p>
            )}
          </Reveal>

          {project.image && (
            <Reveal className={styles.figure}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            </Reveal>
          )}
        </div>

        {/* About: heading, then text on the left half and images on the right,
            starting on the same line */}
        <Reveal className={styles.about} amount={0.05}>
          <SectionHeader index={1} label="About" />
          <h2 className={styles.aboutHeading}>
            About the <em>project.</em>
          </h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <Text size="lead">{project.description}</Text>
              {project.highlights && (
                <ol className={styles.highlights}>
                  {project.highlights.map((highlight, i) => (
                    <li key={highlight.label} className={styles.highlight}>
                      <span className={styles.highlightIndex}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.highlightLabel}>
                        {highlight.label}
                      </span>
                      <span className={styles.highlightText}>
                        {highlight.text}
                      </span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
            {project.gallery && project.gallery.length > 0 && (
              <div className={styles.aboutGallery}>
                {project.gallery.map((image) => (
                  <img key={image.src} src={image.src} alt={image.alt} />
                ))}
              </div>
            )}
          </div>
        </Reveal>

        {project.techStack && (
          <Reveal className={styles.block}>
            <SectionHeader index={2} label="Tech stack" />
            <div className={styles.techHeader}>
              <h2 className={styles.techHeading}>
                Technologies behind the <em>project.</em>
              </h2>
              <Text size="lead">
                A selection of the tools and technologies used to build{" "}
                {project.title}.
              </Text>
            </div>
            <ul className={styles.techGrid}>
              {project.techStack.map((tech, i, all) => (
                <li key={tech.name} className={styles.techCard}>
                  <span className={styles.techTop}>
                    {tech.logos && (
                      <span className={styles.techLogos} aria-hidden="true">
                        {tech.logos.map((logo) => (
                          <img key={logo} src={logo} alt="" />
                        ))}
                      </span>
                    )}
                    <span className={styles.techCount}>
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(all.length).padStart(2, "0")}
                    </span>
                  </span>
                  <h3 className={styles.techName}>{tech.name}</h3>
                  <p className={styles.techDescription}>{tech.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {project.features && (
          <Reveal className={styles.block} amount={0.1}>
            <SectionHeader index={3} label="Features and implementation" />
            <div className={styles.featuresHeader}>
              <h2 className={styles.featuresHeading}>
                Features and <em>implementation.</em>
              </h2>
              <Text size="lead">
                The core functionality of {project.title} and how it's built.
              </Text>
            </div>

            {/* Numbered steps split in two halves: 1-3 in the left column,
                4-6 in the right on desktop; one list on mobile */}
            <div className={styles.timeline}>
              {[
                project.features.slice(
                  0,
                  Math.ceil(project.features.length / 2),
                ),
                project.features.slice(Math.ceil(project.features.length / 2)),
              ].map((column, c) => (
                <div key={c} className={styles.timelineColumn}>
                  {column.map((feature, j) => {
                    const i = c * Math.ceil(project.features!.length / 2) + j;
                    return (
                      <div key={feature.title} className={styles.feature}>
                        <div className={styles.featureText}>
                          <span className={styles.featureIndex}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className={styles.featureTitle}>
                            {feature.title}
                          </h3>
                          <p className={styles.featureSummary}>
                            {feature.summary}
                          </p>
                        </div>
                        {feature.icon && (
                          <span
                            className={styles.featureIcon}
                            aria-hidden="true"
                          >
                            <FeatureIconSvg icon={feature.icon} />
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </Reveal>
        )}
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

/** Simple outline icons (24x24, stroke) for the feature cards */
function FeatureIconSvg({ icon }: { icon: FeatureIcon }) {
  const paths: Record<FeatureIcon, React.ReactNode> = {
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <path d="M15.5 4.8a3.5 3.5 0 0 1 0 6.4" />
        <path d="M18 14.4c2.1.8 3.5 2.9 3.5 5.6" />
      </>
    ),
    chat: (
      <path d="M12 3.5c-4.7 0-8.5 3.4-8.5 7.6 0 2 .9 3.9 2.4 5.2L5 20.5l4.3-1.9c.9.3 1.8.4 2.7.4 4.7 0 8.5-3.4 8.5-7.6S16.7 3.5 12 3.5Z" />
    ),
    book: (
      <>
        <path d="M12 6.5C10.3 5 7.8 4.5 3.5 4.5v14c4.3 0 6.8.5 8.5 2 1.7-1.5 4.2-2 8.5-2v-14c-4.3 0-6.8.5-8.5 2Z" />
        <path d="M12 6.5v14" />
      </>
    ),
    layers: (
      <>
        <path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" />
        <path d="m2.5 12 9.5 5 9.5-5" />
        <path d="m2.5 16 9.5 5 9.5-5" />
      </>
    ),
    grid: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </>
    ),
  };

  return <svg viewBox="0 0 24 24">{paths[icon]}</svg>;
}

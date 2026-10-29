import { useState } from "react";
import Text from "../../ui/Text/Text";
import Reveal from "../../ui/Reveal/Reveal";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import styles from "./ProjectsSection.module.css";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "BookHive",
    description:
      "BookHive is a full-stack web application for digital book clubs. It allows users to discover books, create and join book clubs, manage memberships, and participate in discussions linked to specific books.",
    tags: ["NextJS", "TypeScript"],
    image: "/bookhive-mockup.png",
    liveUrl: "https://book-hive-navy.vercel.app/",
    repoUrl: "https://github.com/Rebecka94/BookHive",
  },
  {
    title: "Bee Rise",
    description:
      "Bee Rise is a 2D game where you control a bee that jumps on flowers to fly as high as possible. The higher you go, the more points you earn, while avoiding birds and airplanes. The game was built with TypeScript, following Object-Oriented Programming (OOP) principles, and uses p5.js vectors for movement and game mechanics.",
    tags: ["React", "TypeScript", "p5.js"],
    image: "/beerise-mockup.png",
    liveUrl: "https://spelprojekt.vercel.app/",
    repoUrl: "https://github.com/Rebecka94/spelprojekt",
  },
  {
    title: "DiveBudz (In Progress)",
    description:
      "DiveBudz is a React Native mobile application that aims to connect scuba divers with other dive buddies nearby. The app will allow users to discover divers in their area, connect with them, and schedule diving trips together. The goal is to make it easier for divers to meet new people and plan enjoyable diving experiences. The project is currently under development.",
    tags: [ "React Native", "TypeScript", "MUI"],
    image: "/divebudz-mockup.png"
  },
];

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (title: string) => {
    setExpanded((current) =>
      current.includes(title)
        ? current.filter((t) => t !== title)
        : [...current, title],
    );
  };

  return (
    <section id="projects" className="container section">
      <SectionHeader
        index={3}
        label="My projects"
        link={{
          label: "View GitHub",
          to: "https://github.com/Rebecka94",
          external: true,
        }}
      />
      <Reveal>
        <div className={styles.intro}>
          <h2>Things I've built</h2>
          <Text size="small">
            These are some of the projects I've been working on, both individually and in groups.
          </Text>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
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
                  <h3>{project.title}</h3>
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
                <p
                  className={`${styles.description} ${
                    expanded.includes(project.title) ? "" : styles.clamped
                  }`}
                >
                  {project.description}
                </p>
                <button
                  type="button"
                  className={styles.readMore}
                  onClick={() => toggle(project.title)}
                  aria-expanded={expanded.includes(project.title)}
                >
                  {expanded.includes(project.title) ? "Show less" : "Read more"}
                  <svg
                    className={styles.arrow}
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path d="M3 9L9 3M4 3h5v5" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

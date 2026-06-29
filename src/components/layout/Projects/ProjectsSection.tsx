import Text from "../../ui/Text/Text";
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
    image: "/hero-img.png",
    liveUrl: "https://book-hive-navy.vercel.app/",
    repoUrl: "https://github.com/Rebecka94/BookHive",
  },
  {
    title: "Bee Rise",
    description:
      "Bee Rise is a 2D game where you control a bee that jumps on flowers to fly as high as possible. The higher you go, the more points you earn, while avoiding birds and airplanes. The game was built with TypeScript, following Object-Oriented Programming (OOP) principles, and uses p5.js vectors for movement and game mechanics.",
    tags: ["React", "TypeScript", "p5.js"],
    image: "/beerise.png",
    liveUrl: "https://spelprojekt.vercel.app/",
    repoUrl: "https://github.com/Rebecka94/spelprojekt",
  },
  {
    title: "DiveBudz (In Progress)",
    description:
      "DiveBudz is a React Native mobile application that aims to connect scuba divers with other dive buddies nearby. The app will allow users to discover divers in their area, connect with them, and schedule diving trips together. The goal is to make it easier for divers to meet new people and plan enjoyable diving experiences. The project is currently under development.",
    tags: [ "React Native", "TypeScript", "MUI"],
    image: "/Divebudz.png"
  },
];

export default function ProjectsSection() {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.header}>
        <div>
          <span className={styles.label}>My projects</span>
          <h2>Things I've built</h2>
        </div>
      </div>
      <Text size="small">
        These are some of the projects I've been working on, both individually and in groups.
      </Text>
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
              <h3>{project.title}</h3>
              <Text size="xsmall">{project.description}</Text>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export interface Project {
  slug: string;
  title: string;
  /** One-line summary used on small cards */
  summary: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "bookhive",
    title: "BookHive",
    summary: "A full-stack web app for digital book clubs.",
    description:
      "BookHive is a full-stack web application for digital book clubs. It allows users to discover books, create and join book clubs, manage memberships, and participate in discussions linked to specific books.",
    tags: ["NextJS", "TypeScript"],
    image: "/bookhive-mockup.png",
    liveUrl: "https://book-hive-navy.vercel.app/",
    repoUrl: "https://github.com/Rebecka94/BookHive",
  },
  {
    slug: "bee-rise",
    title: "Bee Rise",
    summary: "Bee Rise is a 2D game where you control a bee.",
    description:
      "Bee Rise is a 2D game where you control a bee that jumps on flowers to fly as high as possible. The higher you go, the more points you earn, while avoiding birds and airplanes. The game was built with TypeScript, following Object-Oriented Programming (OOP) principles, and uses p5.js vectors for movement and game mechanics.",
    tags: ["React", "TypeScript", "p5.js"],
    image: "/beerise-screenshot.jpg",
    liveUrl: "https://spelprojekt.vercel.app/",
    repoUrl: "https://github.com/Rebecka94/spelprojekt",
  },
  {
    slug: "divebudz",
    title: "DiveBudz (In Progress)",
    summary: "A mobile app for finding dive buddies.",
    description:
      "DiveBudz is a React Native mobile application that aims to connect scuba divers with other dive buddies nearby. The app will allow users to discover divers in their area, connect with them, and schedule diving trips together. The goal is to make it easier for divers to meet new people and plan enjoyable diving experiences. The project is currently under development.",
    tags: ["React Native", "TypeScript", "MUI"],
    image: "/divebudz-mockup.png",
  },
];

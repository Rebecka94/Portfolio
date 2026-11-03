export interface TechItem {
  name: string;
  /** Logo image paths, shown above the name */
  logos?: string[];
  /** What the tool was used for in this project */
  description: string;
}

/** Outline icons available for feature cards (drawn in ProjectPage) */
export type FeatureIcon =
  "user" | "users" | "chat" | "book" | "layers" | "grid";

export interface Feature {
  title: string;
  icon?: FeatureIcon;
  /** One or two sentences about the feature */
  summary: string;
}

export interface Highlight {
  /** Short keyword, shown in capitals */
  label: string;
  text: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

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
  /** Serif intro shown under the buttons at the top of the project page */
  tagline?: string;
  /** Short list of what the project focuses on */
  highlights?: Highlight[];
  /** Images shown next to "About the project" on desktop */
  gallery?: GalleryImage[];
  techStack?: TechItem[];
  features?: Feature[];
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
    tagline:
      "A digital space for readers to discover books, connect through book clubs and share their thoughts.",
    highlights: [
      {
        label: "Discover",
        text: "Find and explore books through search and browsing.",
      },
      {
        label: "Connect",
        text: "Create and join book clubs, with memberships managed inside each club.",
      },
      {
        label: "Discuss",
        text: "Participate in discussions and share your thoughts on specific books.",
      },
      {
        label: "Experience",
        text: "A responsive and accessible interface that works on both mobile and desktop.",
      },
    ],
    gallery: [
      {
        src: "/discover-bookhive.png",
        alt: "BookHive's book browser with genres, search and a grid of poetry books",
      },
      {
        src: "/discuss-bookhive.png",
        alt: "Form for starting a new topic in a book club, with the option to link a book",
      },
      {
        src: "/bookclubs-bookhive.png",
        alt: "BookHive's book club overview with cards for each club and a button to create a new one",
      },
    ],
    techStack: [
      {
        name: "Next.js + TypeScript",
        logos: ["/images/tech/Next.js.png", "/images/tech/TypeScript.png"],
        description:
          "The main framework, providing file-based routing and server-side rendering. TypeScript adds type safety, reduces bugs and keeps the code easier to maintain.",
      },
      {
        name: "Supabase",
        logos: ["/images/tech/Supabase.webp"],
        description:
          "Database and authentication. Stores users, clubs, club members and posts, and handles login, registration and the security rules that protect data.",
      },
      {
        name: "MUI",
        logos: ["/images/tech/MUI.webp"],
        description:
          "Component library for responsive, accessible UI like buttons, cards, forms and layouts, keeping the design consistent and speeding up development.",
      },
      {
        name: "Zustand",
        logos: ["/images/tech/Zustand.png"],
        description:
          "Global state management, mainly for favourite books so they can be shown across pages and used when creating posts.",
      },
      {
        name: "Open Library API",
        logos: ["/images/tech/OpenLibrary.png"],
        description:
          "Free book data such as titles, authors and cover images, with no API key required.",
      },
      {
        name: "Vercel",
        logos: ["/images/tech/Vercel.svg"],
        description:
          "Deployment. Builds and hosts the app automatically, with great support for Next.js.",
      },
    ],
    features: [
      {
        title: "Authentication and user management",
        icon: "user",
        summary:
          "Built with Supabase Auth and Next.js, with secure registration, login, protected routes and Row-Level Security.",
      },
      {
        title: "Book clubs and memberships",
        icon: "users",
        summary:
          "Create and join book clubs, manage memberships, and let admins handle members and access.",
      },
      {
        title: "Topics and posts",
        icon: "chat",
        summary:
          "Create posts within clubs, optionally link them to a specific book, and read, update or delete your own posts.",
      },
      {
        title: "Books from the Open Library API",
        icon: "book",
        summary:
          "Search for books and view titles, authors and cover images, and link them to discussion topics.",
      },
      {
        title: "Global state with Zustand",
        icon: "layers",
        summary:
          "Keep favourite books accessible across pages and use them when creating new topics.",
      },
      {
        title: "UI and styling with MUI",
        icon: "grid",
        summary:
          "Build a responsive and accessible interface with ready-made components, a consistent design and faster development.",
      },
    ],
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

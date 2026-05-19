import Hero from "../components/layout/Hero/Hero";
import TechStack from "../components/layout/Techstack/TechStack";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <About />
      <TechStack />
      <Projects />
    </div>
  );
}

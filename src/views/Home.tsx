import Hero from "../components/layout/Hero/Hero";
import Section from "../components/layout/Section/Section";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
        <Section />
      </section>
      <About />
      <Projects />
    </div>
  );
}

import Hero from "../components/layout/Hero/Hero";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <About />
      <Projects />
    </div>
  );
}

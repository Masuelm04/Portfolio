import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />

      <section
        id="certifications"
        className="min-h-screen px-6 py-24"
      >
        <h2 className="text-4xl font-bold">
          Certifications
        </h2>
      </section>

      <section
        id="contact"
        className="min-h-screen px-6 py-24"
      >
        <h2 className="text-4xl font-bold">
          Contact
        </h2>
      </section>
    </>
  );
}
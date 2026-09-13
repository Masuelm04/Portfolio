export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex min-h-screen items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Masuel Matos
          </h1>

          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            QA Engineer | QA Automation
          </p>
        </div>
      </section>

      <section id="about" className="min-h-screen px-6 py-24">
        <h2 className="text-4xl font-bold">About</h2>
      </section>

      <section id="skills" className="min-h-screen px-6 py-24">
        <h2 className="text-4xl font-bold">Skills</h2>
      </section>

      <section id="projects" className="min-h-screen px-6 py-24">
        <h2 className="text-4xl font-bold">Projects</h2>
      </section>

      <section
        id="certifications"
        className="min-h-screen px-6 py-24"
      >
        <h2 className="text-4xl font-bold">
          Certifications
        </h2>
      </section>

      <section id="contact" className="min-h-screen px-6 py-24">
        <h2 className="text-4xl font-bold">Contact</h2>
      </section>
    </>
  );
}
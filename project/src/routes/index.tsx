import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ParticleBg } from "@/components/ParticleBg";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Qualities } from "@/components/sections/Qualities";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soo Teng Xiang — Game Tech Student & Creative Designer" },
      {
        name: "description",
        content:
          "Portfolio of Soo Teng Xiang — Bachelor of Game Technology student at UTeM. Programmer, video editor, and creative digital designer.",
      },
      { property: "og:title", content: "Soo Teng Xiang — Game Tech Portfolio" },
      { property: "og:description", content: "Game developer, programmer, and creative designer." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Qualities />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

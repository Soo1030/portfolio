import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    return {
      meta: [
        { title: p ? `${p.title} — Soo Teng Xiang` : "Project — Soo Teng Xiang" },
        { name: "description", content: p?.short ?? "Project detail" },
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-3">Project not found</h1>
        <Link to="/" className="text-accent underline">Back home</Link>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all mb-10"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-display tracking-[0.3em] text-accent mb-3">
            {project.engine.toUpperCase()}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-black mb-6 text-gradient-neon glow-text">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((t: string) => (
              <span
                key={t}
                className="text-[11px] tracking-widest font-display px-3 py-1 rounded glass border border-accent/40 text-accent"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden neon-border mb-10">
            <img src={project.cover} alt={project.title} className="w-full object-cover" />
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-10">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">About the project</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.description}
              </p>

              <h2 className="font-display text-2xl font-bold mt-10 mb-4">
                {project.videos.length > 1 ? "Videos" : "Gameplay Video"}
              </h2>
              <div className="space-y-6">
                {project.videos.map((v: Project["videos"][number]) => (
                  <div key={v.url}>
                    {v.label && project.videos.length > 1 && (
                      <p className="text-xs font-display tracking-[0.2em] text-accent mb-2">
                        {v.label.toUpperCase()}
                      </p>
                    )}
                    <div className="aspect-video rounded-2xl overflow-hidden neon-border bg-black">
                      <video
                        src={v.url}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="glass rounded-2xl p-6 h-fit">
              <h3 className="font-display text-lg font-bold mb-4">More Projects</h3>
              <ul className="space-y-3">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 5)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        to="/projects/$slug"
                        params={{ slug: p.slug }}
                        className="block text-sm hover:text-accent transition-colors"
                      >
                        <span className="font-semibold">{p.title}</span>
                        <span className="block text-xs text-muted-foreground">{p.engine}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

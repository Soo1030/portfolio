import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../SectionHeading";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading kicker="Inventory" title="Portfolio" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden glass-hover flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-background">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] tracking-widest font-display px-2 py-1 rounded bg-background/70 backdrop-blur border border-accent/40 text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-accent/80 font-display tracking-wider mb-3">{p.engine}</p>
                <p className="text-muted-foreground text-sm mb-5 flex-1">{p.short}</p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all w-fit"
                >
                  View Project <ExternalLink size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

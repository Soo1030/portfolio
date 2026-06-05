import { motion } from "framer-motion";
import { Briefcase, Code, Video, Users } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading kicker="Battle Log" title="Experience" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass glass-hover rounded-2xl p-8 relative"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="h-14 w-14 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                <Briefcase className="text-accent" size={26} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl font-bold">
                  Programmer & Video Editor
                </h3>
                <p className="text-accent font-medium mt-1">Pandahrms</p>
                <p className="text-sm text-muted-foreground mt-1">August 2023 — January 2024</p>
              </div>
            </div>

            <div className="space-y-3 pl-2">
              {[
                { icon: Code, text: "Assisted in programming-related tasks across internal tools." },
                { icon: Video, text: "Edited videos and multimedia content for marketing and product." },
                { icon: Users, text: "Collaborated with creative and technical teams to ship deliverables." },
              ].map((r) => (
                <div key={r.text} className="flex items-start gap-3 group">
                  <r.icon size={18} className="text-accent mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const entries = [
  {
    status: "Current",
    title: "Bachelor of Game Technology",
    school: "Universiti Teknikal Malaysia Melaka (UTeM)",
    period: "2024 — 2028",
    location: "Melaka, Malaysia",
    tags: ["Game Dev", "C++", "Unreal"],
  },
  {
    status: "Diploma",
    title: "Diploma in Information Technology",
    school: "Politeknik Seberang Perai",
    period: "2021 — 2024",
    location: "Pulau Pinang, Malaysia",
    tags: ["Python", "Java", "Hardware & Software"],
  },
  {
    status: "Secondary",
    title: "SMJK Krian",
    school: "Secondary School (extended 1 year due to COVID)",
    period: "2015 — 2021",
    location: "Perak, Malaysia",
    tags: ["Add Maths", "Physics", "Chemistry"],
  },
  {
    status: "Primary",
    title: "SJK(C) Sin Hwa",
    school: "Primary School",
    period: "2010 — 2015",
    location: "Perak, Malaysia",
    tags: ["Languages", "Basic Math", "Science"],
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading kicker="Quest Log" title="Education" />
        <div className="max-w-3xl mx-auto space-y-6">
          {entries.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="glass glass-hover rounded-2xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 neon-border">
                    <GraduationCap size={36} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-display text-accent tracking-[0.3em] uppercase">
                      {e.status}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mt-1">
                      {e.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{e.school}</p>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                      <span className="inline-flex items-center gap-2 text-accent">
                        <Calendar size={14} /> {e.period}
                      </span>
                      <span className="inline-flex items-center gap-2 text-muted-foreground">
                        <MapPin size={14} /> {e.location}
                      </span>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {e.tags.map((t) => (
                        <span
                          key={t}
                          className="text-center text-xs py-1.5 rounded-md border border-accent/30 text-accent bg-accent/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

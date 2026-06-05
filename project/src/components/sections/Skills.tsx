import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const engines = [
  { name: "Unreal Engine", level: 60 },
  { name: "Unity", level: 60 },
  { name: "Godot", level: 85 },
  { name: "GDevelop", level: 85 },
  { name: "Scratch", level: 100 },
];

const programming = [
  { name: "C++", level: 85 },
  { name: "HTML / Web Games", level: 78 },
  { name: "Three.js", level: 60 },
];

const creative = [
  { name: "Blender (3D & Animation)", level: 70 },
  { name: "Photoshop", level: 75 },
  { name: "Canva", level: 90 },
  { name: "CapCut", level: 88 },
];

function SkillCol({ title, items, accent }: { title: string; items: { name: string; level: number }[]; accent: string }) {
  return (
    <div className="glass rounded-2xl p-7">
      <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
        <span className={`h-2 w-2 rounded-full ${accent} animate-pulse`} />
        {title}
      </h3>
      <div className="space-y-5">
        {items.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between mb-1.5 font-display text-sm">
              <span>{s.name}</span>
              <span className="text-accent">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden border border-border">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary via-accent to-neon-cyan shadow-[0_0_12px_var(--neon-cyan)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading kicker="Stat Sheet" title="Skills" />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <SkillCol title="Game Engines" items={engines} accent="bg-neon-pink" />
          <SkillCol title="Programming" items={programming} accent="bg-primary" />
          <SkillCol title="Creative & 3D" items={creative} accent="bg-accent" />
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Sparkles, Trophy } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const milestones = [
  { year: "2003", title: "Born in Taiping", desc: "Perak, Malaysia", icon: MapPin },
  { year: "2010–2015", title: "Primary School", desc: "SJK(C) Sin Hwa", icon: GraduationCap },
  { year: "2015–2021", title: "Secondary School", desc: "SMJK Krian (extended 1 year due to COVID)", icon: GraduationCap },
  { year: "2021–2024", title: "Diploma in IT", desc: "Politeknik Seberang Perai", icon: GraduationCap },
  { year: "2024–2028", title: "Bachelor at UTeM", desc: "Game Technology — current quest", icon: Sparkles },
  { year: "2025", title: "Game Jams & Projects", desc: "Built Petrol Hazard + course games", icon: Trophy },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading kicker="Player Profile" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 space-y-4"
          >
            <h3 className="font-display text-2xl font-bold text-accent">Bio.exe</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Soo Teng Xiang</span>, a young
              creator from <span className="text-accent">Taiping, Perak</span>. I love turning
              ideas into playable experiences and crisp visual stories.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Off-screen I'm into <span className="text-foreground font-semibold">sports</span> and
              staying active — I used to live a pretty healthy lifestyle. These days I've also
              joined the <span className="text-accent">gamer life</span>, so I'm not your usual
              gamer — somewhere between ball sports and the controller, haha.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing a{" "}
              <span className="text-foreground font-semibold">Bachelor of Game Technology</span> at
              Universiti Teknikal Malaysia Melaka (UTeM, 2024–2028). My toolkit spans Unreal
              Engine, C++, Photoshop, Canva and CapCut.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { k: "Location", v: "Taiping, Perak" },
                { k: "University", v: "UTeM" },
                { k: "Focus", v: "Game Tech" },
                { k: "Engine", v: "Unreal" },
              ].map((d) => (
                <div key={d.k} className="border border-border/60 rounded-lg p-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.k}</p>
                  <p className="font-display text-foreground mt-1">{d.v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="absolute -left-[26px] top-1 h-5 w-5 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-[0_0_12px_var(--neon-cyan)]">
                  <m.icon size={10} className="text-accent" />
                </div>
                <div className="glass glass-hover rounded-xl p-5">
                  <p className="font-display text-sm text-accent tracking-widest">{m.year}</p>
                  <h4 className="font-bold text-lg mt-1">{m.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

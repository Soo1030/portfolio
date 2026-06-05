import { motion } from "framer-motion";
import { Code2, Globe, ArrowRight, Mail } from "lucide-react";
import profile from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import gdevelopLogo from "@/assets/gdevelop.png.asset.json";

const logo = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

const skills: { name: string; logo?: string; icon?: typeof Code2 }[] = [
  { name: "Unreal", logo: logo("unrealengine", "ffffff") },
  { name: "Unity", logo: logo("unity", "ffffff") },
  { name: "Godot", logo: logo("godotengine", "478CBF") },
  { name: "GDevelop", logo: gdevelopLogo.url },
  { name: "Scratch", logo: logo("scratch", "4D97FF") },
  { name: "Three.js / HTML", icon: Globe },
  { name: "Blender", logo: logo("blender", "E87D0D") },
  { name: "C++", icon: Code2 },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="container mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">Available for collaborations</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05] mb-6">
            <span className="block text-foreground">SOO TENG</span>
            <span className="block text-gradient-neon glow-text">XIANG</span>
          </h1>
          <p className="text-base md:text-lg text-accent font-medium tracking-wide mb-5">
            Game Technology Student <span className="text-muted-foreground">|</span> Programmer{" "}
            <span className="text-muted-foreground">|</span> Video Editor{" "}
            <span className="text-muted-foreground">|</span> Creative Designer
          </p>
          <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Bachelor of Game Technology student at UTeM with experience in game development, video
            editing, and creative digital design. Passionate about Unreal Engine and C++,
            building immersive projects and participating in game jams.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground neon-border animate-pulse-glow"
            >
              View Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg glass glass-hover px-6 py-3 font-semibold text-foreground"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="glass glass-hover rounded-lg px-4 py-2.5 flex items-center gap-2 text-sm"
              >
                {s.logo ? (
                  <img src={s.logo} alt={s.name} className="h-4 w-4 object-contain" />
                ) : s.icon ? (
                  <s.icon size={16} className="text-accent" />
                ) : null}
                <span className="font-medium">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary via-accent to-neon-pink opacity-40 blur-2xl animate-pulse-glow" />
          <div className="relative rounded-3xl overflow-hidden neon-border animate-float scanline">
            <img
              src={profile}
              alt="Soo Teng Xiang"
              width={500}
              height={500}
              className="w-full max-w-md object-cover"
            />
            <div className="absolute top-3 left-3 right-3 flex justify-between text-[10px] font-display tracking-widest text-accent">
              <span>● REC</span>
              <span>STX_001</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] font-display tracking-widest text-accent">
              <span>UTeM • 2024-28</span>
              <span>LV.55 → 100</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

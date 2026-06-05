import { motion } from "framer-motion";
import { Lightbulb, Users, Sparkles, BookOpen } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const qualities = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "When I hit a tough problem, I try to crack it on my own first. If it's still stuck, I reach out to more experienced people, learn how they'd approach it, and absorb that thinking for next time.",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "I enjoy working alongside others — sharing ideas, dividing tasks fairly, and keeping communication open so the team ships something we're all proud of.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    desc: "I love turning rough ideas into playable, visual, or interactive experiences — mixing gameplay, design and edits to make things feel a little more alive.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Tech and game dev move fast. I keep exploring new engines, tools and techniques so my skills stay sharp and I can grow with every project.",
  },
];

export function Qualities() {
  return (
    <section id="qualities" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading kicker="Character Traits" title="Personal Qualities" />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {qualities.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group glass glass-hover rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl group-hover:bg-accent/30 transition-colors" />
              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <q.icon className="text-primary-foreground" size={26} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{q.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{q.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

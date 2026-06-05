import { motion } from "framer-motion";

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <p className="font-display text-xs tracking-[0.4em] text-accent mb-3 uppercase">
        // {kicker}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gradient-neon glow-text">{title}</h2>
      <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "../SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeading kicker="Connect" title="Contact" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
            <h3 className="relative font-display text-2xl font-bold mb-3">Let's build together</h3>
            <p className="relative text-muted-foreground mb-6">
              Open to game projects, freelance edits, collaborations and internships.
            </p>

            <a
              href="mailto:sootengxiang47@gmail.com"
              className="relative flex items-center gap-3 glass-hover glass rounded-xl p-4 mb-6"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/30 flex items-center justify-center">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium">sootengxiang47@gmail.com</p>
              </div>
            </a>

            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Socials</p>
              <div className="flex gap-3">
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/txiang011/",
                    path: "M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.155 0-3.507.012-4.747.069-1.05.048-1.62.222-2 .371-.504.196-.864.43-1.243.808-.378.379-.612.739-.808 1.243-.149.38-.323.95-.371 2-.057 1.24-.069 1.592-.069 4.747s.012 3.507.069 4.747c.048 1.05.222 1.62.371 2 .196.504.43.864.808 1.243.379.378.739.612 1.243.808.38.149.95.323 2 .371 1.24.057 1.592.069 4.747.069s3.507-.012 4.747-.069c1.05-.048 1.62-.222 2-.371.504-.196.864-.43 1.243-.808.378-.379.612-.739.808-1.243.149-.38.323-.95.371-2 .057-1.24.069-1.592.069-4.747s-.012-3.507-.069-4.747c-.048-1.05-.222-1.62-.371-2-.196-.504-.43-.864-.808-1.243-.379-.378-.739-.612-1.243-.808-.38-.149-.95-.323-2-.371C15.507 4.012 15.155 4 12 4zm0 3.064A4.936 4.936 0 1 1 7.064 12 4.94 4.94 0 0 1 12 7.064zm0 8.136A3.2 3.2 0 1 0 8.8 12 3.2 3.2 0 0 0 12 15.2zm5.072-8.348a1.152 1.152 0 1 1-1.152-1.152 1.152 1.152 0 0 1 1.152 1.152z",
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com/Soo1030",
                    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/soo-teng-xiang-0556a5355/",
                    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z",
                  },
                ].map(({ label, href, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 w-11 rounded-lg glass glass-hover flex items-center justify-center text-accent"
                    aria-label={label}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="glass rounded-2xl p-8 space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                required
                className="w-full mt-1 bg-input/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                required
                type="email"
                className="w-full mt-1 bg-input/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                rows={4}
                className="w-full mt-1 bg-input/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground neon-border"
            >
              {sent ? "Message Sent ✓" : (<>Send Message <Send size={16} /></>)}
            </button>
          </motion.form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-16 font-display tracking-widest">
          © 2026 SOO TENG XIANG · POWERED BY PIXELS & CAFFEINE
        </p>
      </div>
    </section>
  );
}

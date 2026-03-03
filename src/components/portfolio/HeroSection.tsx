import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6">

        {/* Status badge */}
        <div className="flex items-center gap-2">
          <span className="tag-pill bg-primary text-primary-foreground messy-sm">
            <span className="w-2 h-2 rounded-full bg-primary-foreground mr-2 animate-blink" />
            status: shipping_fast
          </span>
          <span className="tag-pill bg-highlight text-highlight-foreground messy-sm-alt">
            open to work
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
          Hi, I'm{" "}
          <span className="relative inline-block">Tilak

            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-muted-foreground">.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-xl text-muted-foreground font-mono">
          I build Solutions that are{" "}
          <span className="bg-highlight text-highlight-foreground px-2 py-0.5 rounded font-bold">
            fast
          </span>
          , accessible, and{" "}
          <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded font-bold">
            beautiful
          </span>
          .
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#contact"
            className="btn-brutal inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-lg messy-sm">

            <Mail className="w-5 h-5" />
            Get in touch
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=17KaIXHQU0TStCbUYS2roD7fgELYhO5TA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg text-lg messy-sm-alt">
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </motion.div>
    </section>);

};

export default HeroSection;
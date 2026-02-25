import { motion } from "framer-motion";
import WindowFrame from "./WindowFrame";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "World Auto Forum",
    period: "Jun 2024 – Aug 2024",
    description: "Built internal tools and APIs using FastAPI and Python.",
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2023 – Present",
    description: "Contributed to ML tooling and developer infrastructure projects.",
  },
];

const hackathons = [
  {
    name: "HackTheNorth 2024",
    result: "🏆 Winner",
    project: "AI-powered meeting summarizer using Whisper + RAG pipeline.",
  },
  {
    name: "MLH Global Hack 2023",
    result: "🥈 Runner-up",
    project: "Real-time sign language translator with computer vision.",
  },
  {
    name: "DevPost AI Challenge",
    result: "🏅 Top 10",
    project: "Automated workflow builder using n8n and Gemini API.",
  },
];

const ExperienceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Experience */}
      <WindowFrame title="experience.log">
        <div className="p-6 font-mono text-sm md:text-base space-y-6">
          <div className="text-muted-foreground">{"// career timeline"}</div>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="pl-4 border-l-[3px] border-primary space-y-1 transition-transform duration-200 hover:rotate-1 hover:scale-[1.01]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-foreground font-bold">{exp.role}</span>
                <span className="text-primary">@</span>
                <span className="text-accent">{exp.company}</span>
              </div>
              <div className="text-muted-foreground text-xs">{exp.period}</div>
              <div className="text-foreground/80 text-sm">{exp.description}</div>
            </div>
          ))}
        </div>
      </WindowFrame>

      {/* Hackathons */}
      <WindowFrame title="hackathons.sh" variant="terminal">
        <div className="p-6 font-mono text-sm space-y-4">
          <div className="text-terminal-foreground/60">
            <span className="text-primary">$</span> cat ./hackathon_results.md
          </div>
          {hackathons.map((h, i) => (
            <div
              key={i}
              className="pl-4 space-y-1 transition-transform duration-200 hover:-rotate-1 hover:scale-[1.01]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-highlight font-bold">{h.name}</span>
                <span className="tag-pill bg-primary/20 text-primary text-xs border-primary/40">
                  {h.result}
                </span>
              </div>
              <div className="text-terminal-foreground/70 text-sm">{h.project}</div>
            </div>
          ))}
        </div>
      </WindowFrame>
    </motion.section>
  );
};

export default ExperienceSection;

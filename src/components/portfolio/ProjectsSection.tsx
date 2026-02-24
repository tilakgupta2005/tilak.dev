import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import WindowFrame from "./WindowFrame";

const projects = [
  {
    name: "cloud-dash",
    description: "Real-time cloud infrastructure monitoring dashboard",
    tags: ["React", "TypeScript", "WebSocket"],
    link: "#",
    github: "#",
  },
  {
    name: "ai-writer",
    description: "AI-powered content generation tool with markdown export",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    name: "devlog-cli",
    description: "CLI tool for developers to log daily progress",
    tags: ["Node.js", "CLI", "SQLite"],
    link: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <WindowFrame title="~/projects" variant="terminal">
        <div className="p-6 font-mono text-sm space-y-6">
          <div className="text-muted-foreground">
            <span className="text-primary">$</span> ls ./projects --detailed
          </div>

          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-terminal-foreground/20 rounded-lg p-4 space-y-3 hover:border-primary transition-all duration-300 hover:rotate-1 hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-primary font-bold text-base md:text-lg">
                    ./{project.name}
                  </h3>
                  <p className="text-terminal-foreground/70 mt-1">{project.description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a href={project.github} className="text-terminal-foreground/50 hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="text-terminal-foreground/50 hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-xs bg-accent/20 text-accent border border-accent/30">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="text-muted-foreground">
            <span className="text-primary">$</span> <span className="animate-blink">▊</span>
          </div>
        </div>
      </WindowFrame>
    </motion.section>
  );
};

export default ProjectsSection;

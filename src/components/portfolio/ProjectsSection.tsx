import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import WindowFrame from "./WindowFrame";

const projects = [
  {
    name: "Autopostix.ai",
    description: "AI video automation platform that converts long YouTube videos into short-form reels for Instagram, YouTube Shorts, and TikTok.",
    tags: ["Python", "FastAPI", "FFmpeg", "Whisper", "Gemini API"],
    link: "#",
    github: "https://github.com/tilakgupta2005/Autopostix.ai",
  },
  {
    name: "AI Voice Assistant for FinCov",
    description: "Real-time AI voice assistant with RAG for accurate, context-aware responses. Sponsored by IBOTIX Pvt. Ltd.",
    tags: ["Python", "FastAPI", "RAG", "ML", "Twilio"],
    link: "https://demo.ibotix.ai/",
  },
  {
    name: "AI Project Generator",
    description: "Automation system that generates personalized project ideas using Gemini AI, deploys HTML pages to GitHub with zero manual intervention.",
    tags: ["JavaScript", "Gemini API", "n8n"],
    github: "https://github.com/tilakgupta2005/project_generator",
  },
  {
    name: "Minecraft Voice Control Mod",
    description: "Voice-controlled gameplay system with multilingual support (English, Hindi, Hinglish) as a Fabric-based Minecraft mod.",
    tags: ["Java", "CMU Sphinx", "Fabric API"],
    github: "https://github.com/tilakgupta2005/SpeechControlsGame",
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
              className={`border border-terminal-foreground/20 rounded-lg p-4 space-y-3 hover:border-primary transition-all duration-300 ${i % 2 === 0 ? 'messy-sm' : 'messy-sm-alt'}`}
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

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import WindowFrame from "./WindowFrame";

type ProjectCategory = "all" | "personal" | "client" | "opensource" | "company" | "hackathon" | "learning" | "experiments";
type ProjectStatus = "live" | "in-progress" | "completed";

interface Project {
  name: string;
  description: string;
  comment: string;
  tags: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: "Autopostix.ai",
    description: "AI video automation platform",
    comment: "// Converts YouTube → Reels/Shorts",
    tags: ["Python", "FastAPI", "FFmpeg", "Whisper", "Gemini API"],
    category: "opensource",
    status: "live",
    github: "https://github.com/tilakgupta2005/Autopostix.ai",
  },
  {
    name: "AI Voice Assistant",
    description: "Real-time AI voice assistant with RAG",
    comment: "// Sponsored by IBOTIX Pvt. Ltd.",
    tags: ["Python", "FastAPI", "RAG", "ML", "Twilio"],
    category: "company",
    status: "live",
    link: "https://demo.ibotix.ai/",
  },
  {
    name: "AI Project Generator",
    description: "Auto project ideas + deploy to GitHub",
    comment: "// Zero manual intervention",
    tags: ["JavaScript", "Gemini API", "n8n"],
    category: "personal",
    status: "live",
    github: "https://github.com/tilakgupta2005/project_generator",
  },
  {
    name: "Minecraft Voice Mod",
    description: "Voice-controlled gameplay system",
    comment: "// English, Hindi, Hinglish support",
    tags: ["Java", "CMU Sphinx", "Fabric API"],
    category: "experiments",
    status: "completed",
    github: "https://github.com/tilakgupta2005/SpeechControlsGame",
  },
];

const categories: { label: string; value: ProjectCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Personal", value: "personal" },
  { label: "Client", value: "client" },
  { label: "Open Source", value: "opensource" },
  { label: "Company", value: "company" },
  { label: "Hackathon", value: "hackathon" },
  { label: "Learning", value: "learning" },
  { label: "Experiments", value: "experiments" },
];

const statusColors: Record<ProjectStatus, string> = {
  live: "bg-emerald-500",
  "in-progress": "bg-orange-500",
  completed: "bg-primary",
};

const ProjectsSection = () => {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  // Only show categories that have projects + "all"
  const availableCategories = categories.filter(
    (c) => c.value === "all" || projects.some((p) => p.category === c.value)
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
        Projects from the{" "}
        <span className="bg-primary text-primary-foreground px-2 py-0.5 inline-block rotate-[-1deg]">
          Lab
        </span>
      </h2>
      <p className="text-center text-muted-foreground font-mono text-sm mb-8">
        $ ls -la ~/tilak/projects/
      </p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {availableCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-md border-2 border-foreground font-mono text-sm font-bold transition-all duration-200 ${
              active === cat.value
                ? "bg-primary text-primary-foreground shadow-[3px_3px_0px_hsl(var(--foreground))]"
                : "bg-background text-foreground hover:bg-muted shadow-[2px_2px_0px_hsl(var(--foreground))]"
            }`}
          >
            <Folder className="w-4 h-4" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border-2 border-foreground rounded-lg bg-card overflow-hidden shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--foreground))] hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-foreground">
              <h3 className="font-mono font-bold text-sm truncate">{project.name}</h3>
              <span className={`flex items-center gap-1.5 text-xs font-bold text-white px-2 py-0.5 rounded ${statusColors[project.status]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {project.status}
              </span>
            </div>

            {/* Card Body */}
            <div className="px-4 py-4 space-y-2">
              <p className="text-sm text-foreground">{project.description}</p>
              <p className="text-xs text-muted-foreground font-mono">{project.comment}</p>

              {/* Links */}
              <div className="flex items-center gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit project
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground font-mono text-sm py-12">
          // No projects in this category yet
        </p>
      )}
    </motion.section>
  );
};

export default ProjectsSection;

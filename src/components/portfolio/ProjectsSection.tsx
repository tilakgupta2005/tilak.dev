import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, X, Users, User, Calendar, ChevronRight, ChevronDown } from "lucide-react";
import projects, { Project, ProjectCategory, ProjectStatus } from "@/data/project";

// ── Categories (easy to add — just append here) ────────────────────────────────

const categories: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Personal", value: "personal" },
  { label: "Client", value: "client" },
  { label: "Open Source", value: "opensource" },
  { label: "Company", value: "company" },
  { label: "Hackathon", value: "hackathon" },
  { label: "Learning", value: "learning" },
  { label: "Experiments", value: "experiments" },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

const statusColors: Record<ProjectStatus, string> = {
  live: "bg-emerald-500",
  "in-progress": "bg-highlight",
  completed: "bg-primary",
  planning: "bg-blue-500",
  "on-hold": "bg-orange-500",
  dumped: "bg-muted-foreground",
};

const messyRotations = [
  "rotate-[-1deg]",
  "rotate-[0.8deg]",
  "rotate-[-0.6deg]",
  "rotate-[1deg]",
  "rotate-[-0.8deg]",
  "rotate-[0.6deg]",
  "rotate-[-1deg]",
  "rotate-[0.8deg]",
];

// ── Component ──────────────────────────────────────────────────────────────────

const ProjectsSection = () => {
  const [active, setActive] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const getCategoryCount = (value: ProjectCategory) =>
    value === "all" ? projects.length : projects.filter((p) => p.category === value).length;

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
      <h2 className="text-4xl md:text-5xl font-black text-center mb-2">
        Projects from the{" "}
        <span className="bg-primary text-primary-foreground px-3 py-1 inline-block rotate-[-1deg] border-2 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))]">
          Lab
        </span>
      </h2>
      <p className="text-center text-muted-foreground font-mono text-sm mb-10">
        $ ls -la ~/tilak/projects/
      </p>

      {/* Category Filters — messy style */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {availableCategories.map((cat, i) => (
          <button
            key={cat.value}
            onClick={() => { setActive(cat.value); setVisibleCount(4); }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg border-2 border-foreground font-mono text-sm font-bold transition-all duration-300 ease-out hover:rotate-0 ${
              messyRotations[i % messyRotations.length]
            } ${
              active === cat.value
                ? "bg-primary text-primary-foreground shadow-[4px_4px_0px_hsl(var(--foreground))]"
                : "bg-card text-foreground hover:bg-muted shadow-[3px_3px_0px_hsl(var(--foreground))]"
            }`}
          >
            <Folder className="w-4 h-4" />
            {cat.label}
            <span className="ml-1 text-[10px] opacity-70">({getCategoryCount(cat.value)})</span>
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visible.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border-2 border-foreground rounded-none bg-card overflow-hidden shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 group"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b-2 border-foreground bg-muted">
              <h3 className="font-mono font-bold text-sm truncate">{project.name}</h3>
              <span className={`flex items-center gap-1.5 text-xs font-bold text-white px-2.5 py-0.5 rounded-full border border-foreground/20 ${statusColors[project.status]}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {project.status}
              </span>
            </div>

            {/* Card Body */}
            <div className="px-5 py-4 space-y-3">
              <p className="text-sm font-semibold text-foreground">{project.description}</p>
              <p className="text-xs text-muted-foreground font-mono">{project.comment}</p>

              {/* Footer: Links + Details */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1 text-xs font-mono font-bold text-accent hover:text-accent/80 transition-colors"
                >
                  Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground font-mono text-sm py-12">
          {"// No projects in this category yet"}
        </p>
      )}

      {hasMore && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 4)}
          className="flex items-center gap-1.5 mx-auto mt-8 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
        >
          View More
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      )}

      {/* ── Detail Modal ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto border-[3px] border-foreground rounded-none bg-background shadow-[6px_6px_0px_hsl(var(--foreground))]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b-[3px] border-foreground bg-muted sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive border border-foreground" />
                    <div className="w-3 h-3 rounded-full bg-highlight border border-foreground" />
                    <div className="w-3 h-3 rounded-full bg-primary border border-foreground" />
                  </div>
                  <h3 className="font-mono font-bold text-lg">{selectedProject.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-md hover:bg-muted-foreground/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 font-mono text-sm">
                {/* Meta row */}
                <div className="flex flex-wrap gap-3">
                  <span className={`flex items-center gap-1.5 text-xs font-bold text-white px-3 py-1 rounded-full ${statusColors[selectedProject.status]}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {selectedProject.status}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-muted border border-border">
                    {selectedProject.teamType === "solo" ? <User className="w-3.5 h-3.5" /> : <Users className="w-3.5 h-3.5" />}
                    {selectedProject.teamType === "solo"
                      ? "Solo Project"
                      : `Team of ${selectedProject.teamSize || "?"}`}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-muted border border-border">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedProject.timeline}
                  </span>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2">{"// tech_stack"}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="tag-pill bg-muted text-foreground text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problem */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2">{"// problem"}</p>
                  <div className="p-4 rounded-lg bg-destructive/10 border-2 border-destructive/30">
                    <p className="text-sm text-foreground leading-relaxed">{selectedProject.problem}</p>
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2">{"// solution"}</p>
                  <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary/30">
                    <p className="text-sm text-foreground leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-border">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal flex items-center gap-2 px-4 py-2 rounded-lg bg-card text-foreground text-sm"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                  )}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectsSection;

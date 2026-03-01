import { motion } from "framer-motion";

interface Sticker {
  name: string;
  role: string;
  color: string;
  type: "company" | "hackathon" | "community";
}

const stickers: Sticker[] = [
  // Companies
  { name: "World Auto Forum", role: "Creative Design & Video Editing Intern", color: "bg-[hsl(263,70%,85%)]", type: "company" },
  { name: "IBOTIX PVT. LTD.", role: "Open Source Contributor", color: "bg-[hsl(160,61%,80%)]", type: "company" },
  // Hackathons
  { name: "Smart India Hackathon", role: "🏆 Internal Finalist", color: "bg-[hsl(30,96%,85%)]", type: "hackathon" },
  { name: "Samadhan 2.0", role: "Participant", color: "bg-[hsl(340,80%,88%)]", type: "hackathon" },
  { name: "Adobe Hackathon", role: "Participant", color: "bg-[hsl(0,84%,88%)]", type: "hackathon" },
  { name: "Samadhan 1.0", role: "Participant", color: "bg-[hsl(200,80%,85%)]", type: "hackathon" },
  // Community
  { name: "Corporate Crew", role: "Student Placement Lead", color: "bg-[hsl(50,90%,82%)]", type: "community" },
  { name: "GDG On Campus", role: "Digital Lead", color: "bg-[hsl(160,50%,82%)]", type: "community" },
  { name: "Microsoft Student Ambassador", role: "Campus Lead", color: "bg-[hsl(220,70%,85%)]", type: "community" },
];

const rotations = [
  "-rotate-[2deg]", "rotate-[1.5deg]", "-rotate-[1deg]",
  "rotate-[2.5deg]", "-rotate-[1.8deg]", "rotate-[1deg]",
  "-rotate-[2.2deg]", "rotate-[1.8deg]", "-rotate-[0.8deg]",
];

const typeLabels: Record<string, { label: string; emoji: string }> = {
  company: { label: "Companies", emoji: "💼" },
  hackathon: { label: "Hackathons", emoji: "⚡" },
  community: { label: "Community", emoji: "🤝" },
};

const LaptopStickers = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-black text-foreground inline-flex items-center gap-3 justify-center">
          <span>📋</span> Laptop{" "}
          <span className="bg-primary text-primary-foreground px-3 py-1 inline-block rotate-[-1deg] border-2 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))]">Stickers</span>
        </h2>
        <p className="font-mono text-sm text-muted-foreground">{"// where I've been & what I've done"}</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 font-mono text-xs text-muted-foreground mb-4">
        {Object.entries(typeLabels).map(([key, val]) => (
          <span key={key} className="flex items-center gap-1">
            <span>{val.emoji}</span> {val.label}
          </span>
        ))}
      </div>

      {/* Laptop Frame */}
      <div className="relative mx-auto max-w-3xl">
        <div className="border-[6px] border-foreground rounded-2xl overflow-hidden">
          <div className="bg-foreground/90 flex justify-center py-2">
            <div className="w-16 h-2 rounded-full bg-muted-foreground/50" />
          </div>
          <div className="bg-muted/80 p-6 md:p-10 min-h-[280px] flex flex-wrap gap-4 md:gap-5 items-start content-start justify-center">
            {stickers.map((sticker, i) => (
              <motion.div
                key={sticker.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                whileHover={{ rotate: 0, scale: 1.08 }}
                className={`group ${sticker.color} ${rotations[i % rotations.length]} border-2 border-foreground px-4 py-2 font-mono text-sm font-bold text-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] cursor-default transition-transform duration-200 relative hover:z-20`}
              >
                <span className="text-[10px] mr-1">{typeLabels[sticker.type].emoji}</span>
                {sticker.name}
                {/* Tooltip with role */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-foreground text-background text-[10px] font-mono px-2 py-1 z-10">
                  {sticker.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </motion.section>
  );
};

export default LaptopStickers;

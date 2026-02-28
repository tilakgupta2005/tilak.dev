import { motion } from "framer-motion";

const stickers = [
  { name: "World Auto Forum", color: "bg-[hsl(263,70%,85%)]" },
  { name: "IBOTIX PVT. LTD.", color: "bg-[hsl(160,61%,80%)]" },
  { name: "Smart India Hackathon", color: "bg-[hsl(30,96%,85%)]" },
  { name: "Samadhan 2.0", color: "bg-[hsl(340,80%,88%)]" },
  { name: "Adobe Hackathon", color: "bg-[hsl(0,84%,88%)]" },
  { name: "Samadhan 1.0", color: "bg-[hsl(200,80%,85%)]" },
  { name: "Corporate Crew", color: "bg-[hsl(50,90%,82%)]" },
  { name: "GDG On Campus", color: "bg-[hsl(160,50%,82%)]" },
  { name: "MLSA", color: "bg-[hsl(220,70%,85%)]" },
];

const rotations = [
  "-rotate-[2deg]",
  "rotate-[1.5deg]",
  "-rotate-[1deg]",
  "rotate-[2.5deg]",
  "-rotate-[1.8deg]",
  "rotate-[1deg]",
  "-rotate-[2.2deg]",
  "rotate-[1.8deg]",
  "-rotate-[0.8deg]",
];

const LaptopStickers = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground inline-flex items-center gap-2 justify-center">
          <span>📋</span> Laptop{" "}
          <span className="bg-primary text-primary-foreground px-2 py-0.5">Stickers</span>
        </h2>
        <p className="font-mono text-sm text-muted-foreground">{"// companies I've worked with"}</p>
      </div>

      {/* Laptop Frame */}
      <div className="relative mx-auto max-w-3xl">
        {/* Screen */}
        <div className="border-[6px] border-foreground rounded-2xl overflow-hidden">
          {/* Bezel top */}
          <div className="bg-foreground/90 flex justify-center py-2">
            <div className="w-16 h-2 rounded-full bg-muted-foreground/50" />
          </div>
          {/* Screen area */}
          <div className="bg-muted/80 p-6 md:p-10 min-h-[260px] flex flex-wrap gap-4 md:gap-5 items-start content-start justify-center">
            {stickers.map((sticker, i) => (
              <motion.div
                key={sticker.name}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                whileHover={{ rotate: 0, scale: 1.1 }}
                className={`${sticker.color} ${rotations[i % rotations.length]} border-2 border-foreground px-4 py-2 font-mono text-sm font-bold text-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] cursor-default transition-transform duration-200`}
              >
                {sticker.name}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Laptop base */}
        <div className="mx-auto w-[110%] -ml-[5%] h-4 bg-foreground rounded-b-xl" />
        {/* Built with label */}
        <div className="absolute bottom-8 right-6 bg-card border-2 border-foreground px-2 py-1 font-mono text-[10px] text-muted-foreground rounded">
          Built with ❤️ and ☕
        </div>
      </div>
    </motion.section>
  );
};

export default LaptopStickers;

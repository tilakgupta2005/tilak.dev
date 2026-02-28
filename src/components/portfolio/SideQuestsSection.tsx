import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const quests = [
  {
    icon: Instagram,
    platform: "Instagram",
    stat: "20+ followers",
    handle: "@tilakgupta2005",
    href: "https://www.instagram.com/tilakgupta2005",
    color: "bg-[hsl(330,80%,60%)]",
  },
  {
    icon: Youtube,
    platform: "YouTube",
    stat: "2.7K+ subs",
    handle: " Not Tilak",
    href: "https://www.youtube.com/channel/UCd0K3J64pA78s3WN53q74RA",
    color: "bg-destructive",
  },
  {
    icon: Linkedin,
    platform: "LinkedIn",
    stat: "700+ connections",
    handle: "tilakgupta2005",
    href: "https://www.linkedin.com/in/tilakgupta2005",
    color: "bg-[hsl(210,80%,55%)]",
  },
];

const SideQuestsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Heading */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
          Content{" "}
          <span className="bg-highlight text-highlight-foreground px-3 py-1 rounded-md">
            Side Quests
          </span>
        </h2>
        <p className="font-mono text-sm text-muted-foreground">
          {"// tech content → community → growth"}
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {quests.map((q, i) => (
          <motion.a
            key={q.platform}
            href={q.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`window-border-sm overflow-hidden bg-card group cursor-pointer ${i % 2 === 0 ? 'messy-sm' : 'messy-sm-alt'}`}
          >
            {/* Colored header */}
            <div className={`${q.color} flex items-center justify-center py-6`}>
              <q.icon className="w-10 h-10 text-foreground" />
            </div>
            {/* Info */}
            <div className="p-5 text-center space-y-1">
              <h3 className="font-black text-lg tracking-tight group-hover:text-primary transition-colors">
                {q.platform}
              </h3>
              <p className="text-2xl font-black tracking-tighter">{q.stat}</p>
              <p className="font-mono text-xs text-primary">{q.handle}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Quote */}
      <div className="window-border-sm bg-primary/10 border-primary p-6 text-center space-y-2 messy-alt">
        <p className="font-bold text-base md:text-lg">
          "I create content in public so by the time ideas reach you, they've already been battle-tested."
        </p>
        <p className="font-mono text-xs text-primary">
          {"// content → community → impact"}
        </p>
      </div>
    </motion.section>
  );
};

export default SideQuestsSection;

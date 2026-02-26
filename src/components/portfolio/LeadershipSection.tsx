import { motion } from "framer-motion";
import { Users, Award, Youtube, Trophy, Gamepad2, Dribbble } from "lucide-react";
import WindowFrame from "./WindowFrame";

const leadership = [
  {
    role: "Student Placement Lead",
    org: "Corporate Crew",
    description: "Led and coordinated campus placement drives impacting 1300+ students.",
    icon: Users,
  },
  {
    role: "Microsoft Learn Student Ambassador",
    org: "MLSA",
    description: "Contributed to technical learning initiatives and community programs.",
    icon: Award,
  },
  {
    role: "Digital Lead",
    org: "GDG On Campus",
    description: "Created promotional creatives and edited videos for technical events and community activities.",
    icon: Users,
  },
  {
    role: "Organizing Team",
    org: "Fiesta 2025",
    description: "Organized BGMI tournament during college fest and managed live stream operations.",
    icon: Gamepad2,
  },
];

const achievements = [
  {
    title: "Runner Up – RGPV Handball Nodal Tournament",
    year: "2025",
    icon: Trophy,
  },
  {
    title: "Quarter Finalist – RGPV Basketball Nodal",
    year: "2024",
    icon: Dribbble,
  },
  {
    title: "YouTube Creator – 2.7K+ Subscribers",
    year: "Ongoing",
    icon: Youtube,
  },
];

const LeadershipSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Leadership */}
      <WindowFrame title="leadership.log">
        <div className="p-6 font-mono text-sm md:text-base space-y-6">
          <div className="text-muted-foreground">{"// leadership & community"}</div>
          {leadership.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`pl-4 border-l-[3px] border-accent space-y-1 ${i % 2 === 0 ? 'messy-sm' : 'messy-sm-alt'}`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-foreground font-bold">{item.role}</span>
                <span className="text-primary">@</span>
                <span className="text-highlight">{item.org}</span>
              </div>
              <div className="text-foreground/80 text-sm">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </WindowFrame>

      {/* Achievements */}
      <WindowFrame title="achievements.sh" variant="terminal">
        <div className="p-6 font-mono text-sm space-y-4">
          <div className="text-terminal-foreground/60">
            <span className="text-primary">$</span> cat ./achievements.md
          </div>
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-3 pl-4 ${i % 2 === 0 ? 'messy-alt' : 'messy'}`}
            >
              <a.icon className="w-5 h-5 text-highlight shrink-0" />
              <div>
                <span className="text-primary font-bold">{a.title}</span>
                <span className="text-terminal-foreground/50 ml-2 text-xs">({a.year})</span>
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

export default LeadershipSection;

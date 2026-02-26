import { motion } from "framer-motion";
import { Users, Award, Gamepad2 } from "lucide-react";
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

const LeadershipSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.section>
  );
};

export default LeadershipSection;

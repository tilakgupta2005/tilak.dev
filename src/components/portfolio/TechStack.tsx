import { motion } from "framer-motion";
import WindowFrame from "./WindowFrame";

const stack = [
  { category: "programming", items: ["Python", "Java", "C", "C++"] },
  { category: "web_&_backend", items: ["HTML5", "CSS3", "JavaScript", "FastAPI"] },
  { category: "ai_ml", items: ["Machine Learning", "RAG", "Whisper", "Prompt Engineering"] },
  { category: "cloud", items: ["AWS", "Oracle Cloud Infrastructure"] },
  { category: "tools", items: ["Git", "GitHub", "n8n", "FFmpeg", "Gemini API", "Twilio"] },
];

const TechStack = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <WindowFrame title="malleable-stack.js">
        <div className="p-6 font-mono text-sm md:text-base space-y-4">
          <div className="text-muted-foreground">{"// what I work with"}</div>
          <div>
            <span className="text-accent">const</span>{" "}
            <span className="text-foreground font-bold">techStack</span> = {"{"}
          </div>
          {stack.map((group) => (
            <div key={group.category} className="pl-4 md:pl-8">
              <span className="text-primary">{group.category}</span>: [
              <div className="pl-4 flex flex-wrap gap-2 py-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="tag-pill bg-muted text-foreground text-xs"
                  >
                    "{item}"
                  </span>
                ))}
              </div>
              ],
            </div>
          ))}
          <div>{"}"}</div>
        </div>
      </WindowFrame>
    </motion.section>
  );
};

export default TechStack;

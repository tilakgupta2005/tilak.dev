import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import WindowFrame from "./WindowFrame";

const blogPosts = [
  {
    title: "Why I Switched from REST to tRPC",
    date: "2024-12-15",
    excerpt: "Type safety across the stack changed how I think about APIs...",
    readTime: "5 min read",
    tags: ["TypeScript", "Backend"],
  },
  {
    title: "Building a CLI Tool in Rust (from scratch)",
    date: "2024-11-28",
    excerpt: "Learning Rust by building something useful for my workflow...",
    readTime: "8 min read",
    tags: ["Rust", "CLI"],
  },
  {
    title: "The Art of Minimal UI Design",
    date: "2024-10-10",
    excerpt: "Less is more — how constraints breed creativity in interface design...",
    readTime: "4 min read",
    tags: ["Design", "UI/UX"],
  },
];

const BlogSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
            blog<span className="text-primary">.</span>
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            {blogPosts.length} posts
          </span>
        </div>

        <div className="space-y-4">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`window-border-sm p-5 bg-card hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 cursor-pointer group ${i % 2 === 0 ? 'messy' : 'messy-alt'}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  <div className="flex gap-2 pt-1">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs bg-accent/10 text-accent font-mono font-bold border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-2" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;

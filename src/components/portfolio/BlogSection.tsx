import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { getSortedBlogPosts } from "@/data/blogData";

const BlogSection = () => {
  const blogPosts = getSortedBlogPosts().slice(0, 3);

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
          <Link
            to="/blog"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            view all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-10">
          {blogPosts.map((post, i) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <motion.article
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
                    <p className="text-muted-foreground text-sm">{post.shortDescription}</p>
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
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;

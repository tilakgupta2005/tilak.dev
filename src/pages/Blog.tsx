import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { getSortedBlogPosts } from "@/data/blogData";

const Blog = () => {
  const posts = getSortedBlogPosts();

  return (
    <div className="min-h-screen bg-background" style={{ backgroundImage: 'none' }}>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            blog<span className="text-primary">.</span>
          </h1>
          <p className="font-mono text-sm text-muted-foreground">
            {posts.length} posts — latest first
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link to={`/blog/${post.slug}`} className="block group">
                <article className="flex flex-col md:flex-row bg-card border-2 border-foreground rounded-lg overflow-hidden hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: '3px 3px 0px 0px hsl(var(--foreground))' }}
                >
                  {/* Thumbnail */}
                  <div className="w-full md:w-72 h-48 md:h-auto shrink-0 overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col justify-center space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs bg-accent/90 text-accent-foreground font-mono font-bold border border-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm">{post.shortDescription}</p>

                    <span className="font-mono text-sm text-primary flex items-center gap-1">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

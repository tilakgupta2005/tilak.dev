import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { getSortedBlogPosts } from "@/data/blogData";

const Blog = () => {
  const posts = getSortedBlogPosts();

  return (
    <div className="min-h-screen">
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

        <div className="space-y-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link to={`/blog/${post.slug}`} className="block group">
                <article
                  className={`window-border-sm bg-card overflow-hidden hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 ${
                    i % 2 === 0 ? "messy-sm" : "messy-sm-alt"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full h-48 md:h-64 overflow-hidden border-b-2 border-foreground">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs bg-accent/90 text-accent-foreground font-mono font-bold border border-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <p className="font-mono text-xs text-primary">{post.comment}</p>
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">{post.shortDescription}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
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

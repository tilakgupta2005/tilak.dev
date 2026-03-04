import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { getBlogPostBySlug } from "@/data/blogData";
import NotFound from "./NotFound";
import ContactSection from "@/components/portfolio/ContactSection";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Tilak's Blog`;
      document.querySelector('meta[name="description"]')?.setAttribute("content", post.shortDescription);
    }
  }, [post]);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background" style={{ backgroundImage: 'none' }}>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            back to blog
          </Link>

          {/* Thumbnail */}
          <div className="window-border overflow-hidden">
            <img
              src={post.thumbnail}
              alt={post.title}
              loading="lazy"
              className="w-full h-56 md:h-80 object-cover"
            />
          </div>

          {/* Meta */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs bg-accent/10 text-accent font-mono font-bold border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-mono text-sm text-primary">{post.comment}</p>

            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
              {post.shortDescription}
            </p>
          </div>

          {/* Full content */}
          <article className="prose prose-lg max-w-none">
            {post.fullDescription.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-foreground/90 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>')
                    .replace(/`(.*?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'),
                }}
              />
            ))}
          </article>

          {/* Back to blog */}
          <div className="pt-8 border-t-2 border-border">
            <Link
              to="/blog"
              className="btn-brutal inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              all posts
            </Link>
          </div>
        </motion.div>
      </main>
      <section className="bg-secondary py-16 mt-8 pb-0" style={{
        backgroundImage: 'linear-gradient(hsl(var(--secondary-foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary-foreground) / 0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16">
          <ContactSection />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;

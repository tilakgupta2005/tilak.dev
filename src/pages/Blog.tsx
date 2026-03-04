import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { getSortedBlogPosts } from "@/data/blogData";
import ContactSection from "@/components/portfolio/ContactSection";

const POSTS_PER_PAGE = 10;

const Blog = () => {
  const posts = getSortedBlogPosts();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Math.max(1, Number(searchParams.get("page") || 1));
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);
  const paginatedPosts = posts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE);

  useEffect(() => {
    document.title = "Blog | Tilak - Full-Stack Developer";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Read Tilak's blog posts about TypeScript, Rust, UI design, and modern web development.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [safePage]);

  const goToPage = (page: number) => {
    setSearchParams(page === 1 ? {} : { page: String(page) });
  };

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
            // Sharing thoughts.
          </p>
        </motion.div>

        <div className="space-y-6">
          {paginatedPosts.map((post, i) => (
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
                  <div className="w-full md:w-48 h-32 md:h-auto shrink-0 overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 flex flex-col justify-center space-y-1.5 flex-1">
                    <div className="flex items-center gap-3">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-xs bg-accent/90 text-accent-foreground font-mono font-bold border border-foreground">
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12 font-mono text-sm">
            <button
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage <= 1}
              className="btn-brutal inline-flex items-center gap-1 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`btn-brutal px-3 py-2 rounded-lg ${page === safePage ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage >= totalPages}
              className="btn-brutal inline-flex items-center gap-1 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg disabled:opacity-40 disabled:pointer-events-none"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
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

export default Blog;

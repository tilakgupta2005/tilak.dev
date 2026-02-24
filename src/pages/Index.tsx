import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import TechStack from "@/components/portfolio/TechStack";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import BlogSection from "@/components/portfolio/BlogSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 md:px-8 space-y-16 pb-8">
        <HeroSection />
        <section id="stack">
          <TechStack />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

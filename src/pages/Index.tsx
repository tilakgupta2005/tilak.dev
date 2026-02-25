import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import TechStack from "@/components/portfolio/TechStack";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import BlogSection from "@/components/portfolio/BlogSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <HeroSection />
        </div>
        <section id="stack" className="bg-card/80 backdrop-blur-sm py-16 mt-16" style={{ backgroundImage: 'none' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <TechStack />
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <section id="experience">
            <ExperienceSection />
          </section>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <section id="projects">
            <ProjectsSection />
          </section>
        </div>
        <section id="blog" className="bg-muted/60 backdrop-blur-sm py-16" style={{ backgroundImage: 'none' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <BlogSection />
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

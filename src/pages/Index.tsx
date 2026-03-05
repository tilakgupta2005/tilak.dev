import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import TechStack from "@/components/portfolio/TechStack";
import LaptopStickers from "@/components/portfolio/LaptopStickers";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SideQuestsSection from "@/components/portfolio/SideQuestsSection";
import BlogSection from "@/components/portfolio/BlogSection";
import LeadershipSection from "@/components/portfolio/LeadershipSection";
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
        <section id="stack" className="bg-card/80 backdrop-blur-sm py-16 mt-16 overflow-hidden" style={{ backgroundImage: 'none' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <TechStack />
          </div>
        </section>
        <section id="experience" className="bg-card/80 backdrop-blur-sm py-16 overflow-hidden" style={{ backgroundImage: 'none' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <LaptopStickers />
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <section id="projects">
            <ProjectsSection />
          </section>
        </div>
        <section id="sidequests" className="bg-muted/60 backdrop-blur-sm py-16" style={{ backgroundImage: 'none' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <SideQuestsSection />
          </div>
        </section>
        <section id="blog" className="py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <BlogSection />
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <section id="leadership">
            <LeadershipSection />
          </section>
        </div>
        <section id="contact" className="bg-secondary py-16 mt-8 pb-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--secondary-foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary-foreground) / 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}>
          <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16">
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

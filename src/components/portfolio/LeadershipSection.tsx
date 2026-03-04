import { motion } from "framer-motion";
import { Users, Award, Gamepad2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import WindowFrame from "./WindowFrame";

const leadership = [
  {
    role: "Student Placement Lead",
    org: "Corporate Crew",
    description: "Led and coordinated campus placement drives impacting 1300+ students.",
    icon: Users,
    image: "https://i.ibb.co/ZRYjNFwL/IMG-20251222-WA0047.jpg",
  },
  {
    role: "Microsoft Learn Student Ambassador",
    org: "MLSA",
    description: "Contributed to technical learning initiatives and community programs.",
    icon: Award,
    image: "https://i.ibb.co/WvKJ1D1V/Whats-App-Image-2026-03-03-at-11-13-45-PM.jpg",
  },
  {
    role: "Digital Lead",
    org: "GDG On Campus",
    description: "Created promotional creatives and edited videos for technical events and community activities.",
    icon: Users,
    image: "https://i.ibb.co/zWCjCQm1/IMG-9275.jpg",
  },
  {
    role: "Organizing Team",
    org: "Fiesta 2025",
    description: "Organized BGMI tournament during college fest and managed live stream operations.",
    icon: Gamepad2,
    image: "https://i.ibb.co/cKfs2Pz9/Whats-App-Image-2026-03-03-at-11-10-09-PM.jpg",
  },
];

const LeadershipSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <WindowFrame title="leadership.log">
        <div className="p-6 font-mono text-sm md:text-base space-y-4">
          <div className="text-muted-foreground">{"// leadership & community"}</div>

          {/* Single Carousel */}
          <div className="relative group/carousel">
            <div className="overflow-hidden rounded-md border-2 border-foreground" ref={emblaRef}>
              <div className="flex">
                {leadership.map((item, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 relative">
                    <img
                      src={item.image}
                      alt={`${item.role} @ ${item.org}`}
                      className="w-full h-48 md:h-64 object-cover"
                      loading="lazy"
                    />
                    {/* Overlay with role info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent flex flex-col justify-between p-4">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-accent" />
                        <span className="text-background font-bold text-xs md:text-sm">{item.org}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-background font-bold text-sm md:text-lg">{item.role}</div>
                        <div className="text-background/80 text-xs md:text-sm">{item.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-foreground/80 text-background rounded-full p-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-foreground/80 text-background rounded-full p-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {leadership.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === selectedIndex ? "bg-accent" : "bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </WindowFrame>
    </motion.section>
  );
};

export default LeadershipSection;

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
    images: [
      { src: "/placeholder.svg", caption: "Corporate Crew — Placement Drive" },
      { src: "/placeholder.svg", caption: "Corporate Crew — Team Meeting" },
      { src: "/placeholder.svg", caption: "Corporate Crew — Event Day" },
    ],
  },
  {
    role: "Microsoft Learn Student Ambassador",
    org: "MLSA",
    description: "Contributed to technical learning initiatives and community programs.",
    icon: Award,
    images: [
      { src: "/placeholder.svg", caption: "MLSA — Tech Workshop" },
      { src: "/placeholder.svg", caption: "MLSA — Community Session" },
    ],
  },
  {
    role: "Digital Lead",
    org: "GDG On Campus",
    description: "Created promotional creatives and edited videos for technical events and community activities.",
    icon: Users,
    images: [
      { src: "/placeholder.svg", caption: "GDG — Event Promo" },
      { src: "/placeholder.svg", caption: "GDG — Tech Talk" },
      { src: "/placeholder.svg", caption: "GDG — Community Meetup" },
    ],
  },
  {
    role: "Organizing Team",
    org: "Fiesta 2025",
    description: "Organized BGMI tournament during college fest and managed live stream operations.",
    icon: Gamepad2,
    images: [
      { src: "/placeholder.svg", caption: "Fiesta 2025 — BGMI Tournament" },
      { src: "/placeholder.svg", caption: "Fiesta 2025 — Live Stream" },
    ],
  },
];

interface CarouselImage {
  src: string;
  caption: string;
}

const ImageCarousel = ({ images }: { images: CarouselImage[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
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
    <div className="relative group/carousel mt-3">
      <div className="overflow-hidden rounded-md border-2 border-foreground" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-32 md:h-40 object-cover"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 right-0 bg-foreground/70 text-background font-mono text-[10px] md:text-xs px-2 py-1 truncate">
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-foreground/80 text-background rounded-full p-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-3 h-3" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-foreground/80 text-background rounded-full p-1 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-3 h-3" />
          </button>
          <div className="flex justify-center gap-1 mt-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === selectedIndex ? "bg-accent" : "bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const LeadershipSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <WindowFrame title="leadership.log">
        <div className="p-6 font-mono text-sm md:text-base space-y-6">
          <div className="text-muted-foreground">{"// leadership & community"}</div>
          {leadership.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`pl-4 border-l-[3px] border-accent space-y-1 ${i % 2 === 0 ? 'messy-sm' : 'messy-sm-alt'}`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-foreground font-bold">{item.role}</span>
                <span className="text-primary">@</span>
                <span className="text-highlight">{item.org}</span>
              </div>
              <div className="text-foreground/80 text-sm">{item.description}</div>
              {item.images && item.images.length > 0 && (
                <ImageCarousel images={item.images} />
              )}
            </motion.div>
          ))}
        </div>
      </WindowFrame>
    </motion.section>
  );
};

export default LeadershipSection;

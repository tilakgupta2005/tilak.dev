const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 border-t-[3px] border-secondary-foreground" style={{
      backgroundImage: 'linear-gradient(hsl(var(--secondary-foreground) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary-foreground) / 0.08) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
    }}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm opacity-70">
          © {new Date().getFullYear()} Tilak.dev — built with caffeine & curiosity
        </span>
        <span className="font-mono text-xs opacity-70">
          <span className="text-primary">$</span> echo "thanks for scrolling" <span className="animate-blink">▊</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

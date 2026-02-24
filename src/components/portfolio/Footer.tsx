const Footer = () => {
  return (
    <footer className="border-t-[3px] border-foreground py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} mann.dev — built with caffeine & curiosity
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo "thanks for scrolling" <span className="animate-blink">▊</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

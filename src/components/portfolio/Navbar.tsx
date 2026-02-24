import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "stack", href: "#stack" },
  { label: "projects", href: "#projects" },
  { label: "blog", href: "#blog" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b-[3px] border-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">
        <a href="#" className="font-black text-xl tracking-tighter">
          mann<span className="text-primary">.</span>dev
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-1.5 font-mono text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              .{l.label}()
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t-2 border-foreground bg-background px-4 py-3 space-y-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 font-mono text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              .{l.label}()
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

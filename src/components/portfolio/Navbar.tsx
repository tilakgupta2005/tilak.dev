import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "home", href: "/", isRoute: true },
  { label: "stack", href: "/#stack", isRoute: false },
  { label: "projects", href: "/#projects", isRoute: false },
  { label: "blog", href: "/blog", isRoute: true },
  { label: "contact", href: "/#contact", isRoute: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavItem = ({ l, className, onClick }: { l: typeof links[0]; className: string; onClick?: () => void }) => {
    if (l.isRoute) {
      return (
        <Link to={l.href} className={className} onClick={onClick}>
          .{l.label}()
        </Link>
      );
    }
    return (
      <a href={l.href} className={className} onClick={onClick}>
        .{l.label}()
      </a>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b-[3px] border-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">
        <Link to="/" className="font-black text-xl tracking-tighter">
          tilak<span className="text-primary">.</span>dev
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavItem
              key={l.label}
              l={l}
              className="px-3 py-1.5 font-mono text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            />
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
            <NavItem
              key={l.label}
              l={l}
              className="block px-3 py-2 font-mono text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

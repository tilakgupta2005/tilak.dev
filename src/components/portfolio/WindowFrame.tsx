import { ReactNode } from "react";

interface WindowFrameProps {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "terminal";
}

const WindowFrame = ({ title, children, className = "", variant = "default" }: WindowFrameProps) => {
  const isTerminal = variant === "terminal";

  return (
    <div className={`window-border overflow-hidden ${className}`}>
      {/* Title bar */}
      <div className={`flex items-center gap-2 px-4 py-2 border-b-[3px] border-foreground ${isTerminal ? "bg-terminal" : "bg-muted"}`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive border border-foreground" />
          <div className="w-3 h-3 rounded-full bg-highlight border border-foreground" />
          <div className="w-3 h-3 rounded-full bg-primary border border-foreground" />
        </div>
        <span className={`font-mono text-sm ${isTerminal ? "text-terminal-foreground" : "text-muted-foreground"}`}>
          {title}
        </span>
      </div>
      {/* Content */}
      <div className={isTerminal ? "bg-terminal text-terminal-foreground" : "bg-card"}>
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;

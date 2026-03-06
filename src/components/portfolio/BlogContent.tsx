import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1.5 rounded bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Copy code"
    >
      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
    </button>
  );
};

const renderInlineFormatting = (text: string): string => {
  return text
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>')
    // Inline code
    .replace(/`(.*?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">$1</code>')
    // Links: [text](url)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors inline-flex items-center gap-0.5">$1<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline ml-0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>'
    );
};

interface BlogContentProps {
  content: string;
}

const BlogContent = ({ content }: BlogContentProps) => {
  // Extract code blocks first, then split remaining text by double newlines
  const segments: { type: 'code' | 'text'; lang?: string; value: string }[] = [];
  const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: content.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'code', lang: match[1], value: match[2].trim() });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < content.length) {
    segments.push({ type: 'text', value: content.slice(lastIndex) });
  }

  const blocks: { type: string; lang?: string; value: string }[] = [];
  segments.forEach((seg) => {
    if (seg.type === 'code') {
      blocks.push(seg);
    } else {
      seg.value.split("\n\n").forEach((b) => {
        const trimmed = b.trim();
        if (trimmed) blocks.push({ type: 'text', value: trimmed });
      });
    }
  });

  return (
    <article className="prose prose-lg max-w-none space-y-4">
      {blocks.map((block, i) => {
        if (block.type === 'code') {
          return (
            <div key={i} className="relative group">
              {block.lang && (
                <span className="absolute top-2 left-3 text-xs font-mono text-muted-foreground/60">
                  {block.lang}
                </span>
              )}
              <CopyButton text={block.value} />
              <pre className="bg-foreground/5 border-2 border-border rounded-lg p-4 pt-8 overflow-x-auto">
                <code className="text-sm font-mono text-foreground/90 whitespace-pre">
                  {block.value}
                </code>
              </pre>
            </div>
          );
        }

        // Heading: ## or ###
        if (block.value.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="text-lg font-bold tracking-tight text-foreground mt-6"
              dangerouslySetInnerHTML={{ __html: renderInlineFormatting(block.value.slice(4)) }}
            />
          );
        }
        if (block.value.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-xl font-black tracking-tight text-foreground mt-8"
              dangerouslySetInnerHTML={{ __html: renderInlineFormatting(block.value.slice(3)) }}
            />
          );
        }

        // Skip horizontal rules
        if (block.value === "---") return null;

        // List items (- item)
        const lines = block.value.split("\n");
        if (lines.every((l) => l.startsWith("- ") || l.trim() === "")) {
          return (
            <ul key={i} className="space-y-1.5 list-none pl-0">
              {lines
                .filter((l) => l.startsWith("- "))
                .map((line, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-foreground/90 leading-relaxed"
                  >
                    <span className="text-primary font-bold mt-0.5">▸</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: renderInlineFormatting(line.slice(2)),
                      }}
                    />
                  </li>
                ))}
            </ul>
          );
        }

        // Numbered list (1. item)
        if (lines.every((l) => /^\d+\.\s/.test(l) || l.trim() === "")) {
          return (
            <ol key={i} className="space-y-1.5 list-none pl-0 counter-reset-none">
              {lines
                .filter((l) => /^\d+\.\s/.test(l))
                .map((line, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-foreground/90 leading-relaxed"
                  >
                    <span className="text-primary font-mono font-bold mt-0.5 min-w-[1.25rem]">
                      {j + 1}.
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: renderInlineFormatting(line.replace(/^\d+\.\s/, "")),
                      }}
                    />
                  </li>
                ))}
            </ol>
          );
        }

        // Regular paragraph
        return (
          <p
            key={i}
            className="text-foreground/90 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: renderInlineFormatting(block.value),
            }}
          />
        );
      })}
    </article>
  );
};

export default BlogContent;

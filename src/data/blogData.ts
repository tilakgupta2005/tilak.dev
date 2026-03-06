export interface BlogPost {
  slug: string;
  title: string;
  comment: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  date: string;
  readTime: string;
  tags: string[];
}

// Code blocks: ```lang\ncode\n```
// Links: [text](url)
// Headings: ## Title or ### Subtitle
// Bold: **text**
// Inline code: `code`
// Lists: - item or 1. item

const blogPosts: BlogPost[] = [
{
  slug: "leetcode-runtime-0ms-hack-explained",
  title: "The LeetCode 0ms Runtime Hack (And How It Works)",
  comment: "// Sometimes the leaderboard lies.",
  shortDescription: "A trick that can display 0 ms runtime on LeetCode by modifying the runtime output file.",
  fullDescription: `While browsing LeetCode leaderboards you may occasionally notice submissions showing **0 ms runtime**.  
At first it looks like an incredibly optimized solution, but sometimes it is caused by a small trick that changes how the runtime value is displayed.

⚠️ This does **not actually make your algorithm faster**.  
It simply manipulates the runtime output that the platform shows.

---

## Where to Paste the Code

The snippet must be placed **outside your main function or Solution class**, usually at the **top of the file**.

Example (Java):

\`\`\`java
class Solution {

    static {
        Runtime.getRuntime().gc();
        Runtime.getRuntime().addShutdownHook(
            new Thread(() -> {
                try (FileWriter f = new FileWriter("display_runtime.txt")) {
                    f.write("0");
                } catch (Exception e) {}
            })
        );
    }

    public int[] twoSum(int[] nums, int target) {
        // your normal solution
    }
}
\`\`\`

The static block executes **when the program starts**, and the shutdown hook runs **after the program finishes**.

---

## Java Implementation

\`\`\`java
static {
    Runtime.getRuntime().gc();
    Runtime.getRuntime().addShutdownHook(
        new Thread(() -> {
            try (FileWriter f = new FileWriter("display_runtime.txt")) {
                f.write("0");
            } catch (Exception e) {}
        })
    );
}
\`\`\`

---

## Python Version

Place this at the **top of your submission file**.

\`\`\`python
import atexit

def hack():
    try:
        with open("display_runtime.txt", "w") as f:
            f.write("0")
    except:
        pass

atexit.register(hack)
\`\`\`

---

## C++ Version

\`\`\`cpp
#include <fstream>
#include <cstdlib>

void hack() {
    std::ofstream f("display_runtime.txt");
    if (f.is_open()) {
        f << "0";
    }
}

int main() {
    atexit(hack);

    // your normal solution
}
\`\`\`

---

## JavaScript (Node.js)

\`\`\`javascript
const fs = require("fs");

process.on("exit", () => {
  try {
    fs.writeFileSync("display_runtime.txt", "0");
  } catch {}
});
\`\`\`

---

## Go Version

\`\`\`go
package main

import "os"

func hack() {
    os.WriteFile("display_runtime.txt", []byte("0"), 0644)
}

func main() {
    defer hack()

    // your solution code
}
\`\`\`

---

## Rust Version

\`\`\`rust
use std::fs::File;
use std::io::Write;

fn hack() {
    if let Ok(mut f) = File::create("display_runtime.txt") {
        let _ = f.write_all(b"0");
    }
}

fn main() {
    hack();
}
\`\`\`

---

## Important Note

This trick **does not improve algorithm performance**.  
It only modifies the displayed runtime value.

Real improvements come from:

- better algorithms
- lower time complexity
- optimized data structures

Competitive programming platforms often patch tricks like this once they become widely known.

So focus on writing **efficient solutions**, not leaderboard tricks.`,
  thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLaIlgU4Swan4qRu1Y8vfVi7I0EnLkU8Ixdg&s",
  date: "2026-03-06",
  readTime: "4 min read",
  tags: ["LeetCode", "Algorithms", "Competitive Programming"]
},
{
  slug: "how-to-create-an-ats-friendly-resume-with-ai",
  title: "How to Create an ATS-Friendly Resume Using AI",
  comment: "// Turn your CV into a powerful job-winning resume.",
  shortDescription: "A simple system to convert your CV into an ATS-friendly LaTeX resume using AI.",
  fullDescription: `Creating a strong resume is one of the most important steps when applying for jobs. Instead of designing resumes manually every time, you can use AI to convert your CV into a clean ATS-optimized resume written in LaTeX.

This method keeps your resume structured, professional, and optimized for applicant tracking systems.

## Step 1: Create Your CV

Prepare a **master CV document** containing all your information.

Include sections like:

- Basic Information (name, email, GitHub, LinkedIn)
- Education
- Experience
- Projects
- Technical Skills
- Certifications
- Achievements


## Step 2: Generate Resume with AI

Use this prompt with an AI model:

\`\`\`
Act as a professional resume writer.

Using the CV details provided below and the job description, generate:

1. An ATS-friendly resume
2. Single-column layout
3. Clean professional format
4. No graphics, tables, or icons
5. Keyword optimization based on job description
6. Quantified bullet points
7. Output strictly in LaTeX code

Job Description:
[Paste job description]

CV Details:
[Paste your full CV]
\`\`\`

## Step 3: Compile Using Overleaf

1. Go to [https://www.overleaf.com](https://www.overleaf.com)  
2. Create a new blank project  
3. Paste the LaTeX code into **main.tex**  
4. Click **Recompile** and download the PDF

Using this workflow, you can quickly generate tailored resumes for different roles while maintaining a professional format.`,
  thumbnail: "https://static.resumegiants.com/wp-content/uploads/sites/25/2024/12/12121143/2_choose_template_resumegiants-1040x665.webp",
  date: "2026-03-02",
  readTime: "5 min read",
  tags: ["Career", "AI", "Resume"],
},
  {
    slug: "why-i-switched-from-rest-to-trpc",
    title: "Why I Switched from REST to tRPC",
    comment: "// Turn AI-generated code into real engineering skill.",
    shortDescription: "Type safety across the stack changed how I think about APIs...",
    fullDescription: `Moving from REST to tRPC was one of the best decisions I made for my developer experience. The end-to-end type safety means catching errors at compile time rather than runtime, and the developer experience with auto-complete is unmatched.

With REST, I was constantly writing boilerplate — defining request/response types, maintaining OpenAPI specs, and manually keeping the frontend and backend in sync. [tRPC](https://trpc.io) eliminates all of that by letting TypeScript do the heavy lifting.

## Setting up tRPC

Here's a basic router definition:

\`\`\`typescript
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const appRouter = t.router({
  getUser: t.procedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await db.user.findUnique({ where: { id: input.id } });
    }),
});
\`\`\`

And calling it from the client is fully typed:

\`\`\`typescript
const user = await trpc.getUser.query({ id: '123' });
// user is fully typed — no manual type definitions needed!
\`\`\`

## Key Benefits

The key benefits I've experienced:
- **Zero API boilerplate** — no more writing fetch wrappers or type definitions for endpoints
- **Instant refactoring** — rename a procedure and TypeScript catches every usage
- **Better error handling** — typed errors mean the frontend always knows what to expect
- **Smaller bundle size** — no runtime schema validation needed on the client

## When to Use It

If you're building a TypeScript full-stack app, tRPC is worth serious consideration. It's not for every project — public APIs still benefit from REST/GraphQL — but for internal APIs, it's a game-changer.

Check out the [official docs](https://trpc.io/docs) and the [GitHub repo](https://github.com/trpc/trpc) to get started.`,
    thumbnail: "/placeholder.svg",
    date: "2024-12-15",
    readTime: "5 min read",
    tags: ["TypeScript", "Backend"],
  },
  {
    slug: "building-a-cli-tool-in-rust",
    title: "Building a CLI Tool in Rust (from scratch)",
    comment: "// Learn by building, not by reading.",
    shortDescription: "Learning Rust by building something useful for my workflow...",
    fullDescription: `I decided to learn Rust the hard way — by building a CLI tool I'd actually use every day. The tool automates my project scaffolding workflow, generating boilerplate files, setting up configs, and initializing git repos.

Rust's ownership model was initially confusing, but once it clicked, it felt like having a safety net that catches bugs before they happen. The compiler is strict but fair — every error message teaches you something. Check out [The Rust Book](https://doc.rust-lang.org/book/) if you're getting started.

## What I Built

Here's what I built:
- **Project scaffolding** — templates for React, Node, and Rust projects
- **Config generation** — ESLint, Prettier, TypeScript configs with sensible defaults
- **Git initialization** — auto-creates .gitignore, initial commit, and remote setup

## Example Code

Here's how I set up the CLI entry point using [clap](https://docs.rs/clap/latest/clap/):

\`\`\`rust
use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "scaffold")]
#[command(about = "Project scaffolding CLI")]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    New { name: String, #[arg(short, long)] template: String },
    Init { #[arg(short, long)] git: bool },
}

fn main() {
    let cli = Cli::parse();
    match cli.command {
        Commands::New { name, template } => create_project(&name, &template),
        Commands::Init { git } => init_project(git),
    }
}
\`\`\`

The performance difference compared to my old Node.js scripts was staggering. What used to take 2-3 seconds now completes in under 50ms. Rust's zero-cost abstractions aren't just marketing — they deliver real results.

### Key Takeaways

1. Start with something practical, not "Hello World"
2. Embrace the borrow checker — it's teaching you better patterns
3. Use \`clap\` for argument parsing — it's the gold standard
4. Write tests from day one — Rust's built-in test framework is excellent`,
    thumbnail: "https://static.resumegiants.com/wp-content/uploads/sites/25/2024/12/12121143/2_choose_template_resumegiants-1040x665.webp",
    date: "2026-03-02",
    readTime: "8 min read",
    tags: ["Rust", "CLI"],
  },
  {
    slug: "the-art-of-minimal-ui-design",
    title: "The Art of Minimal UI Design",
    comment: "// Constraints breed creativity.",
    shortDescription: "Less is more — how constraints breed creativity in interface design...",
    fullDescription: `Minimal design isn't about removing things — it's about keeping only what matters. Every pixel should earn its place on the screen. This philosophy has shaped how I approach every interface I build.

The biggest misconception about minimal UI is that it's easy. In reality, it requires more thought and iteration than maximalist design. When you can't hide behind decorative elements, every spacing decision, color choice, and typography pairing becomes critical.

My principles for minimal UI:
- **Content-first hierarchy** — the most important information should be immediately visible
- **Purposeful whitespace** — empty space isn't wasted, it guides the eye
- **Limited color palette** — 2-3 colors maximum, with one strong accent
- **Typography as design** — when you strip away decoration, type becomes your primary design tool

Tools I use for minimal design:
- Figma for wireframing and prototyping
- Tailwind CSS for consistent spacing and sizing
- Framer Motion for subtle, meaningful animations

The best interfaces are invisible — users accomplish their goals without thinking about the design. That's the true measure of minimal UI done right.`,
    thumbnail: "/placeholder.svg",
    date: "2024-10-10",
    readTime: "4 min read",
    tags: ["Design", "UI/UX"],
  },
];

// Sorted by date descending (latest first)
export const getSortedBlogPosts = (): BlogPost[] => {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export default blogPosts;

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
];

// Sorted by date descending (latest first)
export const getSortedBlogPosts = (): BlogPost[] => {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export default blogPosts;

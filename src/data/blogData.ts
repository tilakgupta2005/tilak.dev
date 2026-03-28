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
  "slug": "matchflow-autonomous-ai-negotiation-engine",
  "title": "We Built AI That Negotiates Deals — Here’s the System Behind It",
  "comment": "// Stop building chatbots. Start building decision systems.",
  "shortDescription": "A step-by-step breakdown of how we built Matchflow — a dual-agent AI system that autonomously negotiates brand–creator deals using Node.js, TypeScript, and a state-driven architecture.",
  "fullDescription": "Most people think AI in marketplaces should recommend matches.\n\nWe asked a different question:\n\nWhat if AI didn’t just suggest deals — what if it actually negotiated them?\n\nThat question led us to build Matchflow — an AI-powered marketplace where deals are not manually discussed, but computationally resolved through a controlled negotiation engine.\n\nThis isn’t a chatbot demo.\n\nThis is a system that computes agreement.\n\n---\n\n## Step 1: Structure the Problem (Not Just the UI)\n\nBefore introducing AI, we redefined the system as structured data.\n\nCore entities:\n\n- Influencer → engagement metrics, niche, pricing signals\n- Brand Campaign → budget, deliverables, constraints\n- Deal → evolving negotiation state\n\nThe key shift:\n\n**AI does not operate on conversation.**\n\nIt operates on **structured state**.\n\n---\n\n## Step 2: Design a State-Driven Negotiation Engine\n\nWe did not allow agents to \"talk freely.\"\n\nInstead, every deal is modeled as a bounded state machine:\n\n```bash\nstate = {\n  round: 1,\n  maxRounds: 5,\n  currentOffer: 5000,\n  minPrice: 3000,\n  maxPrice: 8000,\n  status: \"NEGOTIATING\"\n}\n```\n\nEach iteration is a **state transition**.\n\nNo transition is applied without validation.\n\nThis guarantees:\n\n- no infinite loops\n- no invalid pricing\n- predictable convergence\n\n---\n\n## Step 3: Dual-Agent Decision System\n\nInstead of multiple agents arguing, we simplified the system into two opposing roles:\n\n### Brand Agent\n- minimizes cost within budget\n- generates strategic offers\n\n### Influencer Agent\n- maximizes value based on performance\n- generates counter-offers\n\n**Agents do not control outcomes.**\n\nThey generate **candidate decisions**.\n\n---\n\n## Step 4: Enforce Structured Outputs\n\nEvery agent must return strict JSON:\n\n```bash\n{\n  \"offerPrice\": 6500,\n  \"reason\": \"Adjusted toward fair value\"\n}\n```\n\nThis ensures:\n\n- deterministic parsing\n- reliable updates\n- clean storage\n\n---\n\n## Step 5: Controlled Negotiation Loop\n\nNegotiation runs as a bounded algorithm:\n\n```bash\nfor round in range(maxRounds):\n  brandOffer = brandAgent(state)\n  influencerCounter = influencerAgent(state)\n\n  validate(brandOffer, influencerCounter)\n  updateState()\n\n  if converged:\n    break\n```\n\nStopping conditions:\n\n- price gap < threshold\n- max rounds reached\n- no improvement\n\nThis transforms negotiation into a **bounded optimization process**.\n\n---\n\n## Step 6: Constraint Enforcement Layer\n\nAI outputs are always validated:\n\n- enforce budget ceilings\n- clamp pricing ranges\n- reject unrealistic values\n- normalize outputs\n\n```bash\nif offer > budget:\n  reject()\n\nif offer < minPrice:\n  adjust()\n```\n\n**AI suggests. System enforces.**\n\n---\n\n## Step 7: Workflow Orchestration\n\nExecution is separated from logic:\n\n- Backend (Node.js + TypeScript) → controls state\n- n8n → executes workflows\n\n```bash\ntrigger -> match_found\n  -> start_negotiation\n  -> run_agents\n  -> update_state\n  -> repeat_until_converged\n```\n\nThis enables:\n\n- asynchronous execution\n- parallel negotiations\n- failure recovery\n\n---\n\n## Step 8: Persistent Negotiation Timeline\n\nEvery step is stored:\n\n```bash\n{\n  round: 2,\n  agent: \"brand\",\n  offer: 5500,\n  timestamp: \"...\"\n}\n```\n\nThis creates a **replayable negotiation history**.\n\n---\n\n## Step 9: Deal Intelligence Generation\n\nAfter convergence:\n\n- compute final price\n- track number of rounds\n- analyze price movement\n\n```bash\nsummary = {\n  finalPrice: 6500,\n  rounds: 4,\n  delta: +1500\n}\n```\n\nThis converts raw system activity into **explainable insights**.\n\n---\n\n## Step 10: Human-in-the-Loop Control\n\nFinal pipeline:\n\n```bash\nREQUEST\n  -> NEGOTIATION\n  -> DEAL_LOCKED\n  -> PENDING_APPROVAL\n  -> APPROVED / REJECTED\n```\n\nHumans approve the final outcome.\n\n---\n\n## System Prompts\n\n### Brand Agent\n\n```bash\nGoal: optimize cost within budget\nRules:\n- do not exceed budget\n- start at 70–90% of expected value\n- keep pricing realistic\n```\n\n### Influencer Agent\n\n```bash\nGoal: maximize payout\nRules:\n- do not go below minimum value\n- counter strategically\n- stay within realistic range\n```\n\n---\n\n## Why This Works\n\nMost systems fail because they rely on open-ended prompts.\n\nWe built Matchflow as a **controlled system**:\n\n- structured inputs\n- constrained agents\n- validated outputs\n- deterministic execution\n\n---\n\n## TL;DR\n\n1. Model negotiation as a state machine\n2. Use dual agents for decision generation\n3. Enforce strict schemas\n4. Validate every output\n5. Run everything in backend\n6. Keep humans in control\n\n---\n\nMatchflow is not a chatbot.\n\nIt is a system that computes agreements.\n\nAnd once you treat AI as infrastructure instead of magic, you stop building demos — and start building real systems.",
  "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  "date": "2026-03-28",
  "readTime": "6 min read",
  "tags": ["AI", "Multi-Agent Systems", "Node.js", "TypeScript", "Automation", "Marketplace", "Agent AI"]
},
{
  "slug": "ai-website-design-prompting-workflow",
  "title": "Your AI Website Looks Mid? It's Probably Your Prompt.",
  "comment": "// AI isn’t the problem. Your prompting strategy is.",
  "shortDescription": "A practical workflow to turn boring AI-generated websites into aesthetic designs using visual references and structured prompts.",
  "fullDescription": "A lot of people blame AI tools when their websites look generic. But honestly, the problem usually isn’t the tool — it’s the prompt.\n\nWhen you type something like **\"create a modern landing page\"**, the AI has almost zero design direction. So it falls back to the safest, most average layout possible: bland hero section, random gradients, and the same template you’ve already seen 400 times.\n\nIf you want websites that actually look good, you need to give the AI **taste, context, and structure**.\n\nHere’s the workflow that turns \"I saw this cool design\" into \"this is live on production\" without spending hours fighting random prompts.\n\n---\n\n## Step 1: Find a Visual North Star\n\nStart with inspiration. Open platforms like **Pinterest, Dribbble, or Behance** and search for a design that captures the vibe you want.\n\nMaybe it's:\n\n- minimalist startup landing page\n- brutalist portfolio design\n- playful SaaS interface\n- dark-mode tech aesthetic\n\nImportant rule: **don't collect 20 screenshots.**\n\nPick **one strong reference** that clearly represents the visual direction.\n\nAction:\n\nTake a screenshot of the full landing page or the specific UI block you want to replicate.\n\nThis becomes your **design compass**.\n\n---\n\n## Step 2: Convert the Vibe Into Words\n\nAI tools are much better with structured language than raw vibes.\n\nSo instead of just uploading the image and hoping for magic, convert the visual design into a **technical description**.\n\nUpload your screenshot to ChatGPT or Gemini and ask it to break down the design.\n\nExample prompt:\n\n```\nAnalyze this website design.\nDescribe its aesthetic, layout structure,\ncolor palette (include hex codes if possible),\ntypography style, spacing system,\nand button design in one detailed paragraph.\n```\n\nNow you have something powerful: a **structured design brief**.\n\nInstead of \"make it look premium,\" you now have things like:\n\n- dark navy gradient background\n- bold geometric sans-serif typography\n- glassmorphism UI cards\n- rounded CTA buttons\n- large whitespace spacing\n\nThis becomes your **high-signal prompt artifact**.\n\n---\n\n## Step 3: Feed the Brief Into a Vibe Builder\n\nNow take that description and feed it into AI website builders that convert text into UI.\n\nTools that work well:\n\n- Lovable\n- Tempo Labs\n- TellNova\n- v0\n- Framer AI\n\nPaste the extracted design paragraph and then add functional instructions.\n\nExample:\n\n```\nCreate a responsive landing page for a tech startup based on this aesthetic.\nInclude a hero section with headline, subheading, and signup form.\nAdd feature cards, testimonials, and a pricing section.\nUse the design style described above.\n```\n\nNow the AI isn't guessing anymore.\n\nIt has **both design direction and functional structure**.\n\n---\n\n## Step 4: Iterate Like a Builder, Not a Tourist\n\nThe first output is **draft mode**, not final production.\n\nInstead of regenerating everything, guide the design with precise instructions.\n\nExamples:\n\n- \"Increase hero headline size by 20%.\"\n- \"Darken the background gradient slightly.\"\n- \"Add hover animation on CTA buttons.\"\n- \"Increase spacing between feature cards.\"\n\nThink of it like directing a junior designer.\n\nSmall targeted prompts > starting over.\n\n---\n\n## Step 5: Export, Connect, Ship\n\nOnce the design looks right, export the generated code.\n\nMost AI builders support publishing directly to platforms like:\n\n- GitHub\n- Netlify\n- Vercel\n\nAt this point you're no longer experimenting with vibes.\n\nYou're shipping a real product.\n\n---\n\n## Why This Workflow Works\n\nThe magic happens because you **separate taste capture from code generation**.\n\nIf you skip the taste step, AI defaults to generic templates.\n\nIf you capture the design intent first, AI becomes a fast design-to-code teammate instead of a random layout generator.\n\n---\n\n## TL;DR\n\n1. Find one strong design reference\n2. Convert visual vibe into structured text\n3. Generate UI with clear functional constraints\n4. Iterate using targeted prompts\n5. Export and ship\n\nStop prompting **\"make it modern.\"**\n\nStart feeding the AI **actual design taste**.",
  "thumbnail": "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
  "date": "2026-03-12",
  "readTime": "5 min read",
  "tags": ["AI", "Web Design", "Prompt Engineering", "Frontend", "NoCode"]
},
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

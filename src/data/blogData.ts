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
  "title": "We Built AI That Negotiates Deals For You — Here’s How.",
  "comment": "// Stop building chatbots. Start building decision systems.",
  "shortDescription": "A step-by-step breakdown of how we built Matchflow — a multi-agent AI system that autonomously negotiates brand–creator deals using Node.js, TypeScript, and structured workflows.",
  "fullDescription": "Most people think AI in marketplaces should recommend matches.\n\nWe asked a different question:\n\nWhat if AI didn’t just suggest deals — what if it actually negotiated them?\n\nThat question led us to build Matchflow — an AI-powered marketplace where deals are not manually discussed, but autonomously executed through a multi-agent negotiation system.\n\nThis isn’t a chatbot demo. This is a controlled, backend-driven decision engine.\n\nIn this post, we’ll break down exactly how we built it.\n\n---\n\n## Step 1: Structure the Problem (Not Just the UI)\n\nBefore writing any AI logic, we defined the system in terms of **entities and constraints**.\n\nCore entities:\n\n- Influencer (niche, followers, engagement, pricing signals)\n- Brand Campaign (budget, deliverables, requirements)\n- Deal (state, negotiation history, final outcome)\n\nThe key insight:\n\nAI should not operate on raw text — it should operate on **structured data**.\n\nThis allowed us to move from vague prompts to **deterministic decision flows**.\n\n---\n\n## Step 2: Design a State-Driven Negotiation Engine\n\nWe didn’t let agents \"talk freely.\"\n\nWe built a **state machine** inside our Node.js (TypeScript) backend.\n\nEach negotiation has a controlled state:\n\n```\n{\n  round: 1,\n  maxRounds: 5,\n  currentOffer: 5000,\n  minPrice: 3000,\n  maxPrice: 8000,\n  status: \"NEGOTIATING\"\n}\n```\n\nEvery agent reads from this state and proposes the next move.\n\nThe backend validates and updates the state.\n\nThis ensures:\n- no infinite loops\n- no unrealistic pricing\n- predictable convergence\n\n---\n\n## Step 3: Build Multi-Agent Roles (With Constraints)\n\nWe implemented three specialized agents:\n\n### Brand Agent\n- Optimizes for cost efficiency\n- Generates initial and follow-up offers\n\n### Influencer Agent\n- Defends value based on engagement and niche\n- Produces counter-offers\n\n### Mediator Agent\n- Evaluates both sides\n- Enforces convergence and fairness\n\nImportant:\n\nAgents don’t decide outcomes.\n\nThey **suggest structured actions**.\n\n---\n\n## Step 4: Enforce Output Structure (Critical)\n\nInstead of free text, every agent must return strict JSON.\n\nExample:\n\n```\n{\n  \"nextOffer\": 6500,\n  \"reason\": \"Adjusted toward fair market range\"\n}\n```\n\nThis allowed us to:\n- parse outputs reliably\n- validate logic\n- store negotiation history cleanly\n\n---\n\n## Step 5: Build the Negotiation Loop\n\nWe implemented a controlled execution loop:\n\n```\nfor (round = 1; round <= maxRounds; round++) {\n  brandOffer = brandAgent(state)\n  influencerCounter = influencerAgent(state)\n  mediatorDecision = mediatorAgent(state)\n\n  updateState()\n\n  if (dealReached) break\n}\n```\n\nStopping conditions:\n- price difference below threshold\n- max rounds reached\n- mediator override\n\nThis converts AI from \"chat\" into a **bounded decision system**.\n\n---\n\n## Step 6: Orchestrate with Workflows\n\nWe used n8n to orchestrate multi-step execution:\n\n- trigger negotiation on match\n- call agents in sequence\n- handle retries and failures\n\nImportant design choice:\n\nAll business logic lives in the backend.\n\nn8n only executes workflows.\n\n---\n\n## Step 7: Store Everything (Transparency Layer)\n\nEvery negotiation step is persisted:\n\n- offers\n- counters\n- agent reasoning\n- timestamps\n\nThis powers a **chat-like negotiation viewer** in the frontend.\n\nUsers can replay the entire deal evolution.\n\n---\n\n## Step 8: Generate Deal Intelligence\n\nAfter negotiation completes, we generate a summary:\n\n- final price\nn- number of rounds\n- key compromises\n\nThis transforms raw AI output into **explainable decisions**.\n\n---\n\n## Step 9: Human-in-the-Loop Control\n\nWe don’t auto-finalize deals.\n\nFinal flow:\n\nRequest → Negotiation → Deal Locked → Pending Approval → Approved / Rejected\n\nUsers review the AI-generated outcome before approval.\n\n---\n\n## System Prompts (Core of the Agents)\n\n### Brand Agent Prompt\n\n```\nYou are a negotiation agent representing a brand.\n\nGoal:\nMinimize cost while staying within budget and securing the deal.\n\nRules:\n- Never exceed the campaign budget\n- Gradually increase offers\n- Stay within realistic pricing ranges\n\nReturn JSON only:\n{\n  \"nextOffer\": number,\n  \"reason\": string\n}\n```\n\n### Influencer Agent Prompt\n\n```\nYou are a negotiation agent representing an influencer.\n\nGoal:\nMaximize payout based on engagement and niche value.\n\nRules:\n- Do not drop below minimum acceptable price\n- Justify value using performance signals\n- Counter strategically, not randomly\n\nReturn JSON only:\n{\n  \"counterOffer\": number,\n  \"reason\": string\n}\n```\n\n### Mediator Agent Prompt\n\n```\nYou are a neutral mediator.\n\nGoal:\nEnsure fair agreement and convergence.\n\nRules:\n- Keep negotiation within realistic range\n- Detect convergence or deadlock\n- Suggest final price if needed\n\nReturn JSON only:\n{\n  \"action\": \"continue\" | \"close\" | \"adjust\",\n  \"suggestedPrice\": number,\n  \"confidence\": number\n}\n```\n\n---\n\n## Why This Approach Works\n\nMost AI systems fail because they rely on open-ended prompts.\n\nWe treated AI as a **component inside a controlled system**, not the system itself.\n\nKey principles:\n- constrain everything\n- validate every output\n- separate logic from orchestration\n\n---\n\n## TL;DR\n\n1. Structure your data first\n2. Build a state-driven engine\n3. Use agents as constrained decision-makers\n4. Enforce strict output formats\n5. Control execution loops\n6. Keep humans in the final step\n\n---\n\nMatchflow is not a chatbot.\n\nIt is a system that executes negotiation.\n\nAnd once you treat AI like infrastructure instead of magic, you stop building demos — and start building products.",
  "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  "date": "2026-03-27",
  "readTime": "6 min read",
  "tags": ["AI", "Multi-Agent Systems", "Node.js", "TypeScript", "Automation", "Marketplace"]
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

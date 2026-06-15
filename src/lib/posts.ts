// Coaching Insights post data.
// In the future, swap this for a CMS fetch (Sanity / Contentful) — keep the
// `Post` shape stable so the components don't change.

export type Category = "Training" | "Nutrition" | "Mindset";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[]; // paragraphs
  category: Category;
  date: string; // ISO
  readTime: string; // "5 min read"
  image: string;
  featured?: boolean;
};

export const POSTS: Post[] = [
  {
    slug: "the-case-for-consistency",
    title: "The case for consistency over intensity",
    excerpt:
      "The flashy stuff sells. The boring stuff works. A look at why showing up matters more than how hard you go on any given day.",
    body: [
      "Most people overestimate what one hard session can do and underestimate what twelve months of average sessions can do. The math isn't close.",
      "When you train consistently with the same coach, patterns show up. Adjustments happen in real time. Progress compounds. The first eight weeks aren't about transformation — they're about removing guesswork.",
      "If you're choosing between an intense program you'll abandon in six weeks and a moderate one you'll hold for a year, the moderate one wins every time. Pick the version you can actually sustain. Then we make it harder together, in steps.",
    ],
    category: "Training",
    date: "2026-04-22",
    readTime: "5 min read",
    image: "/images/blog-consistency.png",
    featured: true,
  },
  {
    slug: "what-real-accountability-looks-like",
    title: "What real accountability actually looks like",
    excerpt:
      "Accountability isn't a check-in text on Monday. It's a system that makes the wrong decision harder than the right one.",
    body: [
      "There's a difference between motivation and accountability. Motivation is a feeling. Accountability is a structure.",
      "Real accountability removes the daily decision. You don't decide whether to train Tuesday at 6:30am — you've already decided. The coach is there. The plan is written. The only thing left is to show up.",
      "When clients tell me they finally feel different about training, it's usually not because they got more motivated. It's because the structure is doing the heavy lifting.",
    ],
    category: "Mindset",
    date: "2026-04-08",
    readTime: "4 min read",
    image: "/images/blog-accountability.png",
  },
  {
    slug: "eating-around-training",
    title: "Eating around training, simplified",
    excerpt:
      "You don't need a macro spreadsheet to make progress. You need a few non-negotiables done consistently for long enough.",
    body: [
      "Most clients don't have a nutrition problem. They have a consistency problem dressed up as a nutrition problem.",
      "Three rules, applied for ninety days, will outperform any complicated diet: enough protein, enough total food to support training, and enough sleep to recover from it.",
      "Once those three are stable, we can layer in nuance. Until they are, the nuance is noise.",
    ],
    category: "Nutrition",
    date: "2026-03-19",
    readTime: "6 min read",
    image: "/images/blog-eating.png",
  },
  {
    slug: "why-the-first-six-weeks-look-slow",
    title: "Why the first six weeks look slow",
    excerpt:
      "Early weeks build infrastructure: technique, recovery patterns, weekly rhythm. The visible results show up later, on top of that.",
    body: [
      "Clients who panic at week three almost always become the strongest case studies by month six. The first phase is infrastructure work.",
      "We're calibrating intensity, dialing in technique, and building a weekly rhythm that survives travel, work spikes, and bad sleep. None of it is photogenic.",
      "Then the curve bends. The same effort starts producing visibly different outputs. That's not a coincidence — it's the infrastructure paying out.",
    ],
    category: "Training",
    date: "2026-03-05",
    readTime: "5 min read",
    image: "/images/blog-sixweeks.png",
  },
  {
    slug: "the-myth-of-the-quick-fix",
    title: "The myth of the quick fix",
    excerpt:
      "Six-week transformations sell because the math is appealing. The catch is what they don't tell you happens in week seven.",
    body: [
      "Short stints produce short results. That isn't a moral statement, it's a structural one. The systems that produce lasting change need time to be built.",
      "When a client comes from a transformation program, the first job is usually rebuilding their relationship with sustainable training. Crash programs leave debt — physical and psychological.",
      "If you want results that hold, you have to give the process enough runway. The trade-off for slower start is a result that actually lasts.",
    ],
    category: "Mindset",
    date: "2026-02-18",
    readTime: "4 min read",
    image: "/images/blog-quickfix.png",
  },
  {
    slug: "protein-targets-without-the-spreadsheet",
    title: "Protein targets without the spreadsheet",
    excerpt:
      "Most people undershoot protein not because they don't know better, but because they don't structure meals to make hitting it easy.",
    body: [
      "The number isn't the hard part. The structure around the number is.",
      "Two strategies do most of the work: a protein-anchored breakfast, and one repeatable lunch you can default to when the week falls apart. Get those two locked, and the daily target stops being something you 'try' to hit.",
      "Stop tracking. Start designing the day so the target is the natural result of the meals you actually eat.",
    ],
    category: "Nutrition",
    date: "2026-02-04",
    readTime: "5 min read",
    image: "/images/blog-protein.png",
  },
];

export const CATEGORIES = ["All", "Training", "Nutrition", "Mindset"] as const;

export const CATEGORY_COLOR: Record<Category, string> = {
  Training: "var(--color-gold)",
  Nutrition: "var(--color-brick)",
  Mindset: "var(--color-smoke)",
};

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPostBySlug(slug);
  if (!current) return POSTS.slice(0, limit);
  return POSTS.filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 0 : 1;
      const bMatch = b.category === current.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

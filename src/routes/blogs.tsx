import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Niladri Chatterjee" },
      {
        name: "description",
        content:
          "Long-form, data-driven essays on AI, platform integrity and the operating systems of digital trust.",
      },
      { property: "og:title", content: "Blogs — Niladri Chatterjee" },
      {
        property: "og:description",
        content: "Essays on AI, integrity and the architecture of trust.",
      },
    ],
  }),
  component: Blogs,
});

const posts = [
  {
    cat: "AI Policy",
    title: "The Operating System for Responsible AI at Scale",
    excerpt:
      "What it actually takes to move responsible AI from principle to production across global markets.",
    read: "12 min read",
    date: "March 2026",
  },
  {
    cat: "Integrity",
    title: "Why Trust Metrics Should Be Reported Like Revenue",
    excerpt:
      "The case for treating platform integrity as a first-class quarterly disclosure.",
    read: "8 min read",
    date: "Feb 2026",
  },
  {
    cat: "Leadership",
    title: "Leading Distributed Teams Through Policy Ambiguity",
    excerpt:
      "Frameworks for decision velocity when regulation, product and people pull in different directions.",
    read: "10 min read",
    date: "Jan 2026",
  },
  {
    cat: "Data",
    title: "What 2.7B Sessions Taught Me About Signal vs Noise",
    excerpt:
      "A working theory of detection economics and where most teams misallocate.",
    read: "14 min read",
    date: "Dec 2025",
  },
  {
    cat: "Strategy",
    title: "The Quiet Restructuring of Global Trust Teams",
    excerpt:
      "How the next five years of T&S org design will diverge from the last ten.",
    read: "9 min read",
    date: "Nov 2025",
  },
  {
    cat: "Essay",
    title: "On Optimism, with Caveats",
    excerpt:
      "A personal note on building inside the industry, written for the next cohort of leaders.",
    read: "6 min read",
    date: "Oct 2025",
  },
];

function Blogs() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Writing"
        title="Notes on AI, integrity and the systems behind the screens."
        intro="Long-form, data-driven essays — written from inside the operating rooms of large platforms."
      />

      <section className="container-edge pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {posts.map((p, i) => (
            <article
              key={i}
              className="group bg-background p-8 hover:bg-surface transition-colors cursor-pointer flex flex-col min-h-[280px]"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                  {p.cat}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
              <h3 className="text-xl font-semibold leading-snug mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-auto">
                {p.excerpt}
              </p>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span>{p.read}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

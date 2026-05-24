import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — Niladri Chatterjee" },
      {
        name: "description",
        content:
          "Career milestones across product, policy and AI leadership at the world's largest platforms.",
      },
      { property: "og:title", content: "Journey — Niladri Chatterjee" },
      { property: "og:description", content: "Two decades of executive milestones." },
    ],
  }),
  component: Journey,
});

const milestones = [
  {
    year: "2022 — Present",
    role: "Director, Trust & Safety",
    org: "YouTube",
    body:
      "Leading global teams across AI policy enforcement, integrity operations and product trust. Shaping how responsible AI ships to 2B+ users.",
  },
  {
    year: "2019 — 2022",
    role: "Head of Integrity Operations",
    org: "Global Platform",
    body:
      "Architected cross-functional integrity programs spanning misinformation, monetization and creator ecosystem health across 40+ markets.",
  },
  {
    year: "2015 — 2019",
    role: "Senior Leader, Policy & Product",
    org: "Big Tech",
    body:
      "Drove the formation of regional policy councils and embedded safety-by-design into core product roadmaps.",
  },
  {
    year: "2010 — 2015",
    role: "Strategy & Operations",
    org: "Management Consulting → Tech",
    body:
      "Transitioned from consulting to in-house operating roles. Built early machine-learning enforcement pilots before they were mainstream.",
  },
  {
    year: "2004 — 2010",
    role: "Foundations",
    org: "Engineering & MBA",
    body:
      "Engineering rigor, an MBA, and the formative years that shaped a systems-thinking approach to trust.",
  },
];

function Journey() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Career timeline"
        title="A career compounded in trust, scale and signal."
        intro="A condensed map of the inflection points — the bets, the builds, and the leadership moments that shaped the work."
      />

      <section className="container-edge pb-24">
        <ol className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[calc(20%+7px)]" />
          {milestones.map((m, i) => (
            <li
              key={i}
              className="relative grid grid-cols-1 md:grid-cols-[20%_1fr] gap-6 md:gap-12 pb-16 last:pb-0"
            >
              <div className="flex items-center gap-4 md:justify-end md:pr-6">
                <span className="eyebrow">{m.year}</span>
              </div>
              <div className="relative pl-8 md:pl-12">
                <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-background border-2 border-primary shadow-[0_0_0_4px_var(--background),0_0_24px_var(--primary)]" />
                <h3 className="text-2xl font-semibold leading-tight">{m.role}</h3>
                <p className="font-mono text-xs text-primary mt-1 mb-4 tracking-wider">
                  {m.org.toUpperCase()}
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {m.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}

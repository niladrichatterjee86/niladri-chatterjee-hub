import { createFileRoute } from "@/lib/router-shim";
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
    year: "2025 – Present",
    role: "Director, YouTube Trust & Safety",
    org: "YouTube",
    body:
      "Leading global teams across policy implementation, complex platform AI integrity frameworks, and digital trust operations at a multi-billion user planetary scale.",
  },
  {
    year: "2023 – 2025",
    role: "Senior Leader, Elections Integrity",
    org: "YouTube",
    body:
      "Directed cross-functional, full-stack trust and safety operations to safeguard user experience and platform integrity during high-profile global elections.",
  },
  {
    year: "2019 – 2023",
    role: "Operations Leader",
    org: "YouTube",
    body:
      "Focus on driving cross-regional policy enforcement architecture and managing scaled operational groups.",
  },
  {
    year: "2017 – 2019",
    role: "Customer Experience Leader",
    org: "Google Ads",
    body:
      "Championed world-class operational strategy to deliver high-impact Google Ads experiences for the global small and medium businesses.",
  },
  {
    year: "2015 – 2016",
    role: "Process Excellence Leader",
    org: "Ola (ANI Technologies Ltd)",
    body:
      "Spearheaded core platform initiatives in driver optimization and fraud prevention, maximizing operational efficiencies and product reliability during aggressive scale phases.",
  },
  {
    year: "2015 – 2015",
    role: "Consultant",
    org: "Accenture",
    body:
      "Designed value-creation and automation frameworks, driving resource efficiency and strategic alignment via advanced program governance.",
  },
  {
    year: "2014 – 2015",
    role: "MBA",
    org: "IIM Calcutta",
    body:
      "Mastered cross-functional general management, organizational strategy, and corporate dynamics, graduating with top academic honors (Overall Grade: A).",
  },
  {
    year: "2008 – 2014",
    role: "Operations and Supply Chain Manager",
    org: "Steel Authority of India Limited",
    body:
      "Led large-scale plant operations, supply chain logistics, and strategic sourcing, leveraging Theory of Constraints (TOC) and Lean Six Sigma to de-bottleneck macro-production environments.",
  },
  {
    year: "2004 – 2008",
    role: "B Tech (Electrical Engineering)",
    org: "West Bengal University of Technology",
    body:
      "Graduated as the absolute top-ranked scholar out of the entire Engineering cohort across all departments, receiving the prestigious Gold Medal for unmatched academic excellence.",
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Compass, GraduationCap, Mic } from "lucide-react";

export const Route = createFileRoute("/collaborations")({
  head: () => ({
    meta: [
      { title: "Collaborations — Niladri Chatterjee" },
      {
        name: "description",
        content:
          "Startup advisory frameworks, career counselling, and executive speaking engagements.",
      },
      { property: "og:title", content: "Collaborations — Niladri Chatterjee" },
      {
        property: "og:description",
        content: "Advisory, counselling and speaking — three pillars of practice.",
      },
    ],
  }),
  component: Collaborations,
});

const pillars = [
  {
    icon: Compass,
    n: "01",
    t: "Startup Advisory",
    s: "For founders building in AI, trust, and integrity-adjacent categories.",
    points: [
      "0→1 trust architecture & policy",
      "Go-to-market for regulated AI products",
      "Board prep and investor narratives",
    ],
  },
  {
    icon: GraduationCap,
    n: "02",
    t: "Career Counselling",
    s: "For senior operators charting the next decade of their careers.",
    points: [
      "Executive positioning & narrative",
      "Cross-industry pivots into tech",
      "Long-horizon compounding bets",
    ],
  },
  {
    icon: Mic,
    n: "03",
    t: "Executive Speaking",
    s: "Keynotes, boardrooms and closed-door convenings on AI and trust.",
    points: [
      "Keynotes — AI, integrity, leadership",
      "Board & C-suite workshops",
      "Policy roundtables, by invitation",
    ],
  },
];

function Collaborations() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Ways to work together"
        title="Three pillars. One operating philosophy."
        intro="A small, deliberate slate of engagements outside the day job — chosen for impact, not volume."
      />

      <section className="container-edge pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.n}
                className="bg-surface/40 border border-border p-10 md:p-12 rounded-xl"
              >
                <div className="flex items-start justify-between mb-10">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.2} />
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.n} / 03
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                  {p.t}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
                  {p.s}
                </p>
                <ul className="space-y-3 mb-10">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-3 text-sm border-t border-border pt-3"
                    >
                      <span className="text-primary mt-1">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm border-b border-primary pb-1 hover:gap-3 transition-all"
                >
                  Inquire →
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}

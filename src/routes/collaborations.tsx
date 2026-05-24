import { createFileRoute, Link } from "@/lib/router-shim";
import { PageShell } from "@/components/PageShell";
import { Compass, GraduationCap, Mic, ArrowUpRight } from "lucide-react";

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
      <section className="container-edge flex-1 flex flex-col justify-center py-6 lg:py-8">
        <div className="mb-6 lg:mb-8">
          <p className="eyebrow mb-3">Ways to work together</p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-[0.95] tracking-tight max-w-3xl">
            Three pillars. One operating philosophy.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            A small, deliberate slate of engagements outside the day job —
            chosen for impact, not volume.
          </p>
          <div className="hairline h-px w-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.n}
                className="bg-surface/40 border border-border p-5 lg:p-6 rounded-xl flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.2} />
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {p.n} / 03
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-2 tracking-tight">
                  {p.t}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {p.s}
                </p>
                <ul className="space-y-2 mb-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-xs border-t border-border pt-2"
                    >
                      <span className="text-primary mt-0.5">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between border border-border bg-surface/20 rounded-xl p-6 lg:p-8 gap-6">
          <div>
            <h4 className="text-lg font-semibold tracking-tight">Interested in collaborating?</h4>
            <p className="text-muted-foreground text-sm mt-1">Let's discuss how we can work together across these pillars.</p>
          </div>
          <Link
            to="/contact"
            className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide transition-all hover:bg-primary/90 hover:shadow-[0_0_40px_-8px_var(--primary)]"
          >
            Inquire for details
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

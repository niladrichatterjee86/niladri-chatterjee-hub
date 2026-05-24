import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niladri Chatterjee — Director, YouTube Trust & Safety" },
      {
        name: "description",
        content:
          "Executive leader in AI implementation, platform integrity and global trust at YouTube. Advisory, speaking and counselling.",
      },
      { property: "og:title", content: "Niladri Chatterjee — Executive Portfolio" },
      {
        property: "og:description",
        content:
          "Leadership in AI, platform integrity and global trust. Advisory, speaking, counselling.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { k: "01", t: "AI Implementation", d: "Operationalizing responsible AI at planetary scale." },
  { k: "02", t: "Platform Integrity", d: "Frameworks that protect billions without dulling product velocity." },
  { k: "03", t: "Global Trust", d: "Policy, people and product — aligned across geographies." },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="container-edge relative pt-12 pb-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <p className="eyebrow mb-8">
              Director · YouTube Trust &amp; Safety
            </p>
            <h1 className="text-[clamp(2.75rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
              Building the
              <br />
              <span className="text-muted-foreground">architecture of</span>
              <br />
              digital trust.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:text-right">
            <p className="text-sm text-muted-foreground max-w-xs lg:ml-auto leading-relaxed">
              Two decades shaping how the world&apos;s largest platforms govern
              content, deploy AI responsibly, and earn user trust at scale.
            </p>
          </div>
        </div>

        <div className="hairline h-px w-full mt-20" />

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm font-medium tracking-wide transition-all hover:bg-primary/90 hover:shadow-[0_0_40px_-8px_var(--primary)]"
            >
              Connect for Advisory
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/journey"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2"
            >
              See journey →
            </Link>
          </div>
          <div className="flex gap-10 text-sm">
            <div>
              <div className="font-display text-2xl">20+</div>
              <div className="text-muted-foreground text-xs mt-1">Years in tech leadership</div>
            </div>
            <div>
              <div className="font-display text-2xl">2.7B</div>
              <div className="text-muted-foreground text-xs mt-1">Users impacted</div>
            </div>
            <div>
              <div className="font-display text-2xl">40+</div>
              <div className="text-muted-foreground text-xs mt-1">Markets</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-edge grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {pillars.map((p) => (
            <div key={p.k} className="py-12 md:px-10 first:md:pl-0 last:md:pr-0">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-xs text-primary">{p.k}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{p.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-edge py-32">
        <p className="eyebrow mb-8">Operating principle</p>
        <blockquote className="text-3xl md:text-5xl font-display leading-tight max-w-4xl tracking-[-0.02em]">
          &ldquo;Trust isn&apos;t a feature you ship. It&apos;s the negative space
          inside every decision a platform makes.&rdquo;
        </blockquote>
      </section>
    </PageShell>
  );
}

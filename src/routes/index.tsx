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

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="container-edge relative pt-12 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Copy + CTA + Stats */}
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-6">
              Director · YouTube Trust &amp; Safety
            </p>
            <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
              Building the
              <br />
              <span className="text-muted-foreground">architecture of</span>
              <br />
              digital trust.
            </h1>
            <p className="mt-8 max-w-md text-sm text-muted-foreground leading-relaxed">
              Two decades shaping how the world&apos;s largest platforms govern
              content, deploy AI responsibly, and earn user trust at scale.
            </p>

            <div className="mt-10 flex items-center gap-4">
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

            <div className="hairline h-px w-full mt-14" />

            <div className="mt-8 flex gap-10 text-sm">
              <div>
                <div className="font-display text-2xl">18</div>
                <div className="text-muted-foreground text-xs mt-1">Years</div>
              </div>
              <div>
                <div className="font-display text-2xl">3.2B</div>
                <div className="text-muted-foreground text-xs mt-1">Users</div>
              </div>
              <div>
                <div className="font-display text-2xl">4</div>
                <div className="text-muted-foreground text-xs mt-1">Industries</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Portrait placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] border border-border bg-surface/60 flex items-center justify-center">
              {/* Subtle inner frame accent */}
              <div className="absolute inset-3 border border-border/50" />
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl tracking-[-0.04em] text-muted-foreground/40">
                  NC
                </div>
                <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/30">
                  Portrait
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

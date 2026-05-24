import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/niladri-portrait.jpg";

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
      <section className="container-edge relative flex-1 flex items-center py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* LEFT: Copy + CTA + Stats */}
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-4">
              Director · YouTube Trust &amp; Safety
            </p>
            <h1 className="text-[clamp(2.25rem,4.6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
              Building the
              <br />
              <span className="text-muted-foreground">architecture of</span>
              <br />
              digital trust.
            </h1>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              Two decades shaping how the world&apos;s largest platforms govern
              content, deploy AI responsibly, and earn user trust at scale.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide transition-all hover:bg-primary/90 hover:shadow-[0_0_40px_-8px_var(--primary)]"
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

            <div className="hairline h-px w-full mt-8" />

            <div className="mt-5 flex gap-10 text-sm">
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

          {/* RIGHT: Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[220px] h-[290px] md:w-[280px] md:h-[370px] lg:w-[320px] lg:h-[420px]">
              <img
                src={portrait}
                alt="Portrait of Niladri Chatterjee"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

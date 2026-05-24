import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Niladri Chatterjee" },
      {
        name: "description",
        content: "Reach out for advisory, speaking and collaboration inquiries.",
      },
      { property: "og:title", content: "Contact — Niladri Chatterjee" },
      {
        property: "og:description",
        content: "Direct channels for advisory, speaking and collaboration.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  { label: "Email", value: "hello@niladri.co", href: "mailto:hello@niladri.co" },
  { label: "LinkedIn", value: "in/niladri-chatterjee", href: "https://www.linkedin.com" },
  { label: "Speaking", value: "speaking@niladri.co", href: "mailto:speaking@niladri.co" },
  { label: "Advisory", value: "advisory@niladri.co", href: "mailto:advisory@niladri.co" },
];

function Contact() {
  return (
    <PageShell>
      <section className="container-edge pt-12 pb-32">
        <p className="eyebrow mb-8">Get in touch</p>
        <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] max-w-4xl">
          Let&apos;s build
          <br />
          <span className="text-muted-foreground">something worth</span>
          <br />
          trusting.
        </h1>

        <p className="mt-10 max-w-xl text-muted-foreground leading-relaxed">
          For advisory engagements, speaking inquiries and collaboration —
          the channels below reach me directly. Every note is read.
        </p>

        <div className="hairline h-px w-full mt-20" />

        <ul className="mt-2 divide-y divide-border">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className="group flex items-center justify-between py-8 hover:px-4 transition-all"
              >
                <div className="flex items-baseline gap-8">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest w-24">
                    {c.label.toUpperCase()}
                  </span>
                  <span className="text-2xl md:text-3xl font-display group-hover:text-primary transition-colors">
                    {c.value}
                  </span>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all"
                  strokeWidth={1.2}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          <div>
            <p className="eyebrow mb-3">Based</p>
            <p>Singapore · Global</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Response time</p>
            <p>Within 5 business days</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Availability</p>
            <p>Limited slate — Q3/Q4 2026</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

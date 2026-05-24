import { createFileRoute } from "@/lib/router-shim";
import { PageShell, PageHeader } from "@/components/PageShell";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Selected Perspectives — Niladri Chatterjee" },
      {
        name: "description",
        content:
          "Exploring the underlying dynamics of leadership, corporate culture, and structural systems.",
      },
      { property: "og:title", content: "Selected Perspectives — Niladri Chatterjee" },
      {
        property: "og:description",
        content: "Exploring the underlying dynamics of leadership, corporate culture, and structural systems.",
      },
    ],
  }),
  component: Blogs,
});

interface Article {
  title: string;
  date: string;
  category: string;
  summary: string;
  externalUrl: string;
}

const articles: Article[] = [
  {
    title: "What NOT to do when trying to bring change in a country?",
    date: "March 15, 2020",
    category: "Politics & Society",
    summary: "True national progress requires citizens to avoid constant criticism and passive activism, drawing on corporate leadership principles to become constructive, responsible agents of change.",
    externalUrl: "https://www.linkedin.com/pulse/what-do-when-trying-tobring-change-country-niladri-chatterjee/?trackingId=wSGqQy44Tfu97F0X4bdi6A%3D%3D",
  },
  {
    title: "Stages of psychological safety in a team",
    date: "September 8, 2019",
    category: "Team Building",
    summary: "Managers can assess and cultivate team psychological safety by guiding members through three progressive stages of open critique: from discussing job shortcomings, to evaluating the manager, and finally, to providing peer-to-peer feedback.",
    externalUrl: "https://www.linkedin.com/pulse/stages-psychological-safety-team-niladri-chatterjee/?trackingId=wSGqQy44Tfu97F0X4bdi6A%3D%3D",
  },
  {
    title: "Online ride aggregators may be facing the Kodak moment very soon!",
    date: "February 24, 2017",
    category: "Startup Advisory",
    summary: "Online ride aggregators risk facing a \"Kodak moment\" unless they look beyond private cars and proactively pivot toward technology-driven, high-capacity public transportation solutions that align with the future of sustainable urban mobility.",
    externalUrl: "https://www.linkedin.com/pulse/online-ride-aggregators-may-facing-kodak-moment-very-soon-chatterjee/?trackingId=wSGqQy44Tfu97F0X4bdi6A%3D%3D",
  },
  {
    title: "Most abused word in business today - ‘Strategy’",
    date: "February 18, 2017",
    category: "Leadership",
    summary: "The business world has overly commoditized and misapplied the term \"strategy\" to describe what is actually tactical or operational work, distracting from the critical execution and bias for action that drive 95% of corporate value.",
    externalUrl: "https://www.linkedin.com/pulse/most-abused-word-business-today-strategy-niladri-chatterjee/?trackingId=wSGqQy44Tfu97F0X4bdi6A%3D%3D",
  },
];

function Blogs() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Articles"
        title="Selected Perspectives"
        intro="Exploring the underlying dynamics of leadership, corporate culture, and structural systems."
      />

      <section className="container-edge pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-5xl mx-auto border border-border rounded-lg overflow-hidden">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0a0a0a] p-6 lg:p-8 hover:bg-[#111111] transition-all duration-300 flex flex-col justify-between min-h-[260px] border border-border/10 focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase font-bold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="font-mono text-[10px]">Read on LinkedIn</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>{article.date}</span>
                <span>LinkedIn Pulse</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

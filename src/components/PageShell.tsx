import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="container-edge pt-16 pb-20">
      <p className="eyebrow mb-6">{eyebrow}</p>
      <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      ) : null}
      <div className="hairline h-px w-full mt-16" />
    </section>
  );
}

import { useState } from "react";
import { Reveal } from "./Reveal";

const tabs = ["All", "B2B", "B2C", "E‑commerce", "Finance & Insurance"] as const;
type Tab = (typeof tabs)[number];

type Case = {
  client: string;
  metric: string;
  label: string;
  tags: readonly Tab[];
};

const cases: Case[] = [
  { client: "Pétiole", metric: "300–400%", label: "Increase in leads", tags: ["All", "B2C"] },
  { client: "PYUR", metric: "50%", label: "Business growth", tags: ["All", "B2B"] },
  { client: "Brivlet", metric: "100%", label: "Growth in first year", tags: ["All", "B2C"] },
  { client: "Pushabit", metric: "200%", label: "User growth in 3 months", tags: ["All", "E‑commerce"] },
  { client: "Ozeangagen", metric: "100%", label: "Increase in B2B leads", tags: ["All", "B2B"] },
  { client: "Red Cross", metric: "400%", label: "Growth in first year", tags: ["All", "Finance & Insurance"] },
];

export function Results() {
  const [active, setActive] = useState<Tab>("All");
  const visible = cases.filter((c) => c.tags.includes(active));

  return (
    <section id="work" className="bg-ink text-background">
      <div className="container-r17 py-24 md:py-32">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow text-background/60">Our results</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Numbers we put on a{" "}
              <span className="serif-accent text-accent">scoreboard</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <p className="text-[15px] leading-relaxed text-background/70">
              A small selection from clients who let us share. Every figure
              independently reported, monthly, against the KPI we signed up to.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`h-9 rounded-sm border px-4 text-[12px] font-semibold uppercase tracking-widest transition-colors ${
                  active === t
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-background/25 text-background/70 hover:border-background/60 hover:text-background"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px bg-background/10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c, i) => (
            <Reveal key={c.client} delay={Math.min(i * 0.04, 0.2)}>
              <article className="group flex h-full flex-col justify-between bg-accent p-8 text-accent-foreground transition-colors md:p-10">
                <p className="font-display text-[11px] uppercase tracking-widest">
                  {c.client}
                </p>
                <div className="mt-10">
                  <div className="font-display text-5xl font-semibold leading-none tracking-tight md:text-7xl">
                    {c.metric}
                  </div>
                  <p className="mt-3 text-[14px] font-medium">{c.label}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Get a custom forecast
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#work" className="text-sm font-semibold text-background underline decoration-background/40 decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent">
              View full case studies
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/home/Reveal";

const pillars = [
  {
    n: "01",
    t: "We model the unit economics first",
    d: "Before we touch a single ad account, we rebuild your P&L by order: AOV, blended COGS, fees, fulfilment, repeat rate. That's what sets your scaling CPA — not a benchmark from someone else's brand.",
  },
  {
    n: "02",
    t: "We optimise to contribution margin",
    d: "Every channel, every creative, every flow is judged on $ contribution per order — not ROAS, not impressions. The number the CFO actually cares about.",
  },
  {
    n: "03",
    t: "Senior, in‑house, performance‑priced",
    d: "No juniors, no resellers, no spend‑based fees. A pod of senior operators with a base fee plus a performance bonus tied to the KPIs we sign up to.",
  },
];

export function EcomDifference() {
  return (
    <section id="difference" className="bg-background hairline-b">
      <div className="container-r17 py-16 md:py-24">
        <div className="grid grid-cols-12 items-end gap-y-6">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow">[ Why brands switch to R17 ]</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Most agencies sell{" "}
              <span className="serif-accent text-ink-soft">ROAS</span>. We
              engineer{" "}
              <span className="serif-accent text-accent">profit</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <p className="text-[14px] leading-relaxed text-ink-soft">
              E‑commerce growth gets broken by three things: the wrong KPI, the
              wrong team seniority, and the wrong pricing model. We've spent
              twelve years building the answer to all three — inside one pod.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-hairline md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={0.05 + i * 0.05}>
              <article className="flex h-full flex-col bg-background p-6 md:p-8">
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  {p.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-ink md:text-2xl">
                  {p.t}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                  {p.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/home/Reveal";

const systems = [
  {
    n: "01",
    title: "Rigorous Creative Testing",
    body: "We test hundreds of creative variants every month — hooks, formats, angles, offers — each scored against real revenue impact, not vanity engagement. Our testing cadence is relentless: launch, learn, iterate, scale winners, kill losers fast.",
  },
  {
    n: "02",
    title: "Scaling Systems & Blueprints",
    body: "Growth doesn't happen by accident. We run documented, repeatable systems for campaign structure, budget allocation, and creative replenishment — so your performance scales predictably, not just sporadically.",
  },
  {
    n: "03",
    title: "Data-Driven Decision Making",
    body: "Every creative decision is backed by proprietary performance data. We analyse sales signals, user feedback, and cohort behaviour to inform what we produce next — not gut feel, not trends, not agency folklore.",
  },
];

export function EcomCreativeTesting() {
  return (
    <section id="systems" className="bg-surface hairline-t hairline-b">
      <div className="container-r17 py-24 md:py-32">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow">Creative & Scaling Systems</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Engineered systems for{" "}
              <span className="serif-accent text-accent">profitable scale</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Most brands churn through agencies chasing the next tactic. We
              build the underlying systems that make growth repeatable —
              creative testing at velocity, scaling blueprints, and
              decision-making rooted in data.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <Reveal key={s.n} delay={Math.min(i * 0.05, 0.15)}>
              <article className="group h-full bg-background p-8 transition-colors hover:bg-accent md:p-10">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-ink-soft group-hover:text-accent-foreground/80">
                  <span>{s.n}</span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink group-hover:text-accent-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft group-hover:text-accent-foreground/90">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              See our systems in action
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

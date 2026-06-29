import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-r17 pt-12 pb-12 md:pt-16 md:pb-14">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-accent" />
            Performance-First Growth Partner
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6.8vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-ink">
            Your growth{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-2">partner.</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-[0.55em] bg-accent" />
            </span>
            <br />
            Engineered for <span className="serif-accent text-ink-soft">revenue &</span>
            <br />
            <span className="serif-accent text-ink-soft">profitability.</span>
          </h1>
        </Reveal>

        <div className="mt-8 grid grid-cols-12 items-end gap-8 md:mt-10">
          <Reveal delay={0.15} className="col-span-12 md:col-span-7">
            <p className="max-w-xl text-[17px] leading-relaxed text-ink-soft">
              We engineer revenue and profitability growth for ambitious brands.
              Expert team, battle-tested systems, and a business-first mindset —
              all measured against the numbers that matter to your board.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex h-12 items-center gap-3 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Book an intro call
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#services"
                className="group inline-flex h-12 items-center gap-3 rounded-sm border border-ink px-6 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background"
              >
                See our services
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                { n: "$100M+", l: "in media managed" },
                { n: "70+", l: "active clients" },
                { n: "50+", l: "in-house team" },
                { n: "12+", l: "years of compounding" },
              ].map((s) => (
                <div key={s.n} className="hairline-t border-ink/15 pt-3">
                  <div className="font-display text-3xl font-semibold text-accent md:text-4xl">
                    {s.n}
                  </div>
                  <div className="mt-1 text-[12px] uppercase tracking-widest text-ink-soft">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

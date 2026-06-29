import { Reveal } from "@/components/home/Reveal";

export function EcomHeroV2() {
  return (
    <section className="relative overflow-hidden bg-background hairline-b">
      <div className="container-r17 pt-14 pb-16 md:pt-20 md:pb-24">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-accent" />
            R17 Ventures for · E‑Commerce & DTC
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-12 items-end gap-y-8 md:gap-x-10">
          <Reveal delay={0.05} className="col-span-12 md:col-span-8">
            <h1
              style={{ fontSize: "clamp(2rem, 7.5vw, 5.5rem)" }}
              className="font-display font-semibold leading-[1.02] tracking-tight text-ink"
            >
              Scale your store on{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-1.5">profit.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-[0.55em] bg-accent" />
              </span>{" "}
              <br className="hidden md:block" />
              Not on <span className="serif-accent text-ink-soft">vanity</span>{" "}
              <span className="serif-accent text-ink-soft">ROAS.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15} className="col-span-12 md:col-span-4">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              The performance partner for ambitious e‑commerce brands —
              engineered around contribution margin, scaling CPA and LTV.
              Full‑service when you need a growth engine. Modular when you
              just need a channel done properly.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex h-11 items-center gap-3 rounded-sm bg-accent px-5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Book an intro call
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#calculator"
                className="group inline-flex h-11 items-center gap-3 rounded-sm border border-ink px-5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background"
              >
                Run the CPA calculator
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
            {[
              { n: "$100M+", l: "in media managed" },
              { n: "70+", l: "e‑com & DTC brands" },
              { n: "50+", l: "in‑house team" },
              { n: "12+", l: "years compounding" },
            ].map((s) => (
              <div key={s.n} className="hairline-t border-ink/15 pt-4">
                <div className="font-display text-3xl font-semibold text-accent md:text-4xl">
                  {s.n}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-ink-soft">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

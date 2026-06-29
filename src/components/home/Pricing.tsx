import { brand } from "@/lib/brand-assets";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section className="bg-background hairline-b">
      <div className="container-r17 py-24 md:py-32">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow">[ 04 ] Pricing</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Performance-based{" "}
              <span className="serif-accent text-accent">pricing</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              We charge a low monthly base fee to cover senior staffing and
              tooling — then a performance bonus, tied directly to the
              commercial KPIs we agree with you.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <article className="flex h-full flex-col justify-between border border-hairline bg-surface p-10 md:p-12">
              <div>
                <p className="eyebrow">Fixed</p>
                <h3 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Base fee
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  The base fee covers all work done for you — from
                  implementation to optimisation and reporting — and is
                  discounted in the scope of our cooperation. Agnostic ALL-IN.
                </p>
              </div>
              <ul className="hairline-t mt-10 divide-y divide-hairline">
                {["Senior, in-house pod", "All work covered", "Predictable monthly cost"].map((p) => (
                  <li key={p} className="flex items-center justify-between py-3 text-[14px] text-ink">
                    <span>{p}</span>
                    <span aria-hidden className="text-accent">+</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="flex h-full flex-col justify-between bg-accent p-10 text-accent-foreground md:p-12">
              <div>
                <p className="eyebrow text-accent-foreground/80">Variable</p>
                <h3 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  + Performance bonus
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-accent-foreground/90">
                  The performance bonus is added based on the KPIs we agree
                  with you upfront. We only win when you grow. No retainer
                  inflation, no incentives to burn budget.
                </p>
              </div>
              <ul className="mt-10 divide-y divide-accent-foreground/20 border-t border-accent-foreground/20">
                {["Tied to revenue / margin", "Aligned incentives", "Capped, agreed upfront"].map((p) => (
                  <li key={p} className="flex items-center justify-between py-3 text-[14px]">
                    <span>{p}</span>
                    <span aria-hidden>+</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-12 items-center gap-6">
            <div className="relative col-span-12 aspect-video overflow-hidden bg-ink md:col-span-7">
              <img src={brand.photos.p5} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale" />
              <button
                type="button"
                aria-label="Watch how our pricing works"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-110"
              >
                <span aria-hidden className="ml-1 border-y-[10px] border-l-[14px] border-y-transparent border-l-current" />
              </button>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="font-display text-xl font-medium leading-snug">
                See how our performance-based pricing works in 90 seconds.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex h-12 items-center gap-3 rounded-sm border border-ink px-6 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background"
              >
                Get a custom proposal
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

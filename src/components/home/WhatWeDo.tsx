import { brand } from "@/lib/brand-assets";
import { Reveal } from "./Reveal";

export function WhatWeDo() {
  return (
    <section id="about" className="bg-surface hairline-t hairline-b">
      <div className="container-r17 py-24 md:py-32">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow">[ 01 ] What we do</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              We are a <span className="serif-accent text-accent">digital growth</span>
              <br /> partner — engineered for results.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              We don't sell tactics. We run your entire performance funnel —
              strategy, paid media, creative, CRO, lifecycle and analytics — as
              one accountable team, measured against the business outcomes
              that matter to your board.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-14 aspect-video w-full overflow-hidden bg-ink">
            <img
              src={brand.brandVideo.poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <button
              type="button"
              aria-label="Play R17 Ventures brand video"
              className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl transition-transform hover:scale-110 md:h-24 md:w-24"
            >
              <span aria-hidden className="ml-1.5 border-y-[14px] border-l-[20px] border-y-transparent border-l-current" />
            </button>
            <div className="absolute bottom-6 left-6 z-10 text-background">
              <p className="text-[11px] uppercase tracking-widest text-background/70">
                Brand film · 1:42
              </p>
              <p className="mt-1 font-display text-lg font-medium">
                Inside R17 Ventures
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex h-12 items-center gap-3 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Book an intro call
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#work" className="text-sm font-semibold text-ink underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent">
            See our results
          </a>
        </div>
      </div>
    </section>
  );
}

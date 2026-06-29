import { useState } from "react";
import { Reveal } from "@/components/home/Reveal";

export function WhyR17() {
  const [open, setOpen] = useState(false);
  return (
    <section id="why" className="relative bg-ink">
      <div className="container-r17 py-20 md:py-28 text-background">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <Reveal className="col-span-12 md:col-span-8">
            <p className="eyebrow text-background/70">Pricing</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Built for{" "}
              <span className="serif-accent text-accent">commercial outcomes</span>
              {" "}— with our fee on the line.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-4">
            <p className="text-[15px] leading-relaxed text-background/70">
              On the performance marketing, a base fee plus a bonus you only
              pay when you grow. No growth, no bonus. Above $10M in annual
              revenue? We&apos;ll look at an all-in performance deal — no base
              fee at all.
            </p>
          </Reveal>
        </div>


        {/* Pricing band */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="flex flex-col justify-between border border-background/15 bg-background/5 p-10">
              <div>
                <p className="eyebrow text-background/70">Fixed</p>
                <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                  Base fee
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-background/70">
                  Covers all the work — implementation, optimization &
                  reporting. Senior, in-house, predictable.
                </p>
              </div>
            </article>
            <article className="flex flex-col justify-between bg-accent p-10 text-accent-foreground">
              <div>
                <p className="eyebrow text-accent-foreground/80">Shared risk</p>
                <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                  + Performance bonus
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-accent-foreground/90">
                  Tied to the revenue & margin KPIs we agree upfront. If you
                  don&apos;t grow, we don&apos;t earn the bonus.
                </p>
              </div>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Get a custom proposal
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex h-12 items-center gap-3 rounded-sm border border-background px-6 text-sm font-semibold text-background transition-colors hover:bg-background hover:text-ink"
            >
              <span aria-hidden className="border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />
              Our pricing explained
            </button>
          </div>
        </Reveal>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pricing explainer video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 text-background text-sm font-semibold tracking-wide hover:text-accent"
            >
              Close ✕
            </button>
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/tQ3XOy9iYZs?autoplay=1"
              title="R17 Ventures pricing explainer"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

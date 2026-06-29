import { useEffect, useState } from "react";
import { Reveal } from "@/components/home/Reveal";
import p5 from "@/assets/photos/p5.jpg.asset.json";

const YT_ID = "BPZsZQbwzXI";

export function HeroV2() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-r17 pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-10 bg-accent" />
                A digital performance agency · paid on results
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 style={{ fontSize: "clamp(1.75rem, 8vw, 5rem)" }} className="mt-4 font-display font-semibold leading-[1.05] tracking-tight text-ink break-words">
                Your growth{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-1.5">partner.</span>
                  <span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-[0.55em] bg-accent" />
                </span>
                <br />
                Engineered for <span className="serif-accent text-ink-soft">revenue &</span>
                <br />
                <span className="serif-accent text-ink-soft">profitability.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-soft">
                Most agencies sell you more. We tell you what&apos;s actually
                worth doing — then put our fee on the result. Paid social,
                paid search, SEO, email, CRM, creative: we work out which will
                move your numbers, then run them. A base fee plus a bonus you
                only pay when you grow.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="group inline-flex h-12 items-center gap-3 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Book an intro call
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 max-w-lg">
                {[
                  { n: "$100M+", l: "annual revenue for clients" },
                  { n: "70+", l: "active clients" },
                  { n: "50+", l: "in-house team" },
                  { n: "12+", l: "active ventures" },
                ].map((s) => (
                  <div key={s.n} className="hairline-t border-ink/15 pt-3">
                    <div className="font-display text-2xl font-semibold text-accent md:text-3xl">
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

          <Reveal delay={0.2} className="col-span-12 md:col-span-5">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Play R17 Ventures brand video"
              className="group relative block aspect-[4/5] w-full overflow-hidden bg-ink"
            >
              <img
                src={p5.url}
                alt="R17 Ventures brand film"
                className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span
                className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl transition-transform group-hover:scale-110 md:h-20 md:w-20"
              >
                <span aria-hidden className="ml-1.5 border-y-[12px] border-l-[18px] border-y-transparent border-l-current" />
              </span>
              <div className="absolute bottom-5 left-5 z-10 text-left text-background">
                <p className="text-[10px] uppercase tracking-widest text-background/70">
                  Brand film · 1:42
                </p>
                <p className="mt-1 font-display text-base font-medium">
                  Inside R17 Ventures
                </p>
              </div>
            </button>
          </Reveal>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="R17 Ventures brand video"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-sm font-medium text-white/80 hover:text-white"
            >
              Close ✕
            </button>
            <div className="relative aspect-video w-full overflow-hidden bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&rel=0`}
                title="R17 Ventures brand video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

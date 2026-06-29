import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Who manages our budget?",
    a: "A senior, named lead — usually an ex-in-house growth or media director — supported by specialist operators across each channel. No juniors hidden behind a slide deck.",
  },
  {
    q: "What services does R17 offer?",
    a: "We cover the full performance funnel: paid social, SEA/PPC, SEO, content production, e-mail/SMS, organic social, HubSpot, websites & e‑commerce, influencer marketing, and data/reporting.",
  },
  {
    q: "How are performance deals structured?",
    a: "A low monthly base fee covers staffing and tooling. On top, a performance bonus is tied to KPIs we agree with you upfront — revenue, contribution margin, or qualified leads.",
  },
];

export function FAQTeaser() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface hairline-t hairline-b">
      <div className="container-r17 py-20 md:py-24">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-12">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Frequently asked <span className="serif-accent text-accent">questions</span>.
            </h2>
            <p className="mt-6 max-w-sm text-[14px] text-ink-soft">
              Three of the questions we get most often. The full list lives on our FAQ page.
            </p>
            <a
              href="#faq"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-ink transition-colors hover:text-accent"
            >
              See all FAQs
              <span aria-hidden>→</span>
            </a>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-7">
            <ul className="divide-y divide-hairline border-y border-hairline">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-lg font-semibold text-ink md:text-xl">
                        {f.q}
                      </span>
                      <span
                        aria-hidden
                        className={`text-2xl text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pb-6 pr-10 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

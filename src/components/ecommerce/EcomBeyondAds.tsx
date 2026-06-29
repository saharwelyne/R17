import { Reveal } from "@/components/home/Reveal";

const channels = [
  {
    n: "01",
    title: "Merchant Center Optimisation",
    body: "Your Google Shopping feed is a performance channel — not a checklist. We restructure product titles, optimise imagery, and fix disapprovals at scale so your listings actually convert, not just exist.",
  },
  {
    n: "02",
    title: "Meta Catalog Ads",
    body: "Beyond standard DPA, we build dynamic catalog creatives that look like bespoke brand ads — automated, beautiful, and tested at scale. Your product feed becomes a creative engine.",
  },
  {
    n: "03",
    title: "Lifecycle & Retention",
    body: "We don't stop at the first purchase. Post-purchase flows, repeat-buyer windows, churn signals — all orchestrated across email, SMS, and direct mail to compound LTV while your ads acquire.",
  },
  {
    n: "04",
    title: "CRO & Store Experience",
    body: "Traffic is only half the battle. We optimise landing pages, collection layouts, and checkout flows so the clicks you paid for actually turn into revenue, not bounce.",
  },
  {
    n: "05",
    title: "Attribution & Reporting",
    body: "Server-side tracking, incrementality testing, and board-grade reporting — so you know exactly what's working, what isn't, and where to double down.",
  },
  {
    n: "06",
    title: "Influencer Marketing at Scale",
    body: "Vetted creator programmes with full-funnel measurement. Real revenue, not vanity views — and the content is repurposed across your entire paid and organic funnel.",
  },
];

export function EcomBeyondAds() {
  return (
    <section id="beyond-ads" className="bg-ink text-background">
      <div className="container-r17 py-24 md:py-32">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow text-accent">Full-Funnel E‑Commerce</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              We go <span className="serif-accent text-accent">beyond</span> the
              ads.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <p className="text-[15px] leading-relaxed text-background/70">
              Performance marketing doesn't stop at the campaign manager. We
              optimise every touchpoint that turns a click into a customer — and
              a customer into a repeat buyer.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-background/10 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.n} delay={Math.min(i * 0.03, 0.15)}>
              <article className="group h-full bg-ink p-8 transition-colors hover:bg-accent md:p-10">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-background/50 group-hover:text-accent-foreground/80">
                  <span>{c.n}</span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-background group-hover:text-accent-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-background/65 group-hover:text-accent-foreground/90">
                  {c.body}
                </p>
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
              Explore the full stack
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#services"
              className="text-sm font-semibold text-background underline decoration-background/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
            >
              See all services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

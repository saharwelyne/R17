import { brand } from "@/lib/brand-assets";
import { Reveal } from "./Reveal";

const services = [
  { n: "01", title: "Paid Social", body: "Performance creative and media on Meta, TikTok, LinkedIn, Snap, Pinterest, X — engineered for contribution margin." },
  { n: "02", title: "SEA / PPC", body: "Search engine marketing — any ad-click — including Google, Bing and Yahoo. Performance-engineered." },
  { n: "03", title: "SEO", body: "Technical and editorial SEO that compounds — built around your buyer journey, not vanity rankings." },
  { n: "04", title: "Content Production", body: "Performance creative at scale — motion, lifestyle and brand — produced by our in-house studio." },
  { n: "05", title: "E-mail / SMS", body: "Lifecycle, retention and onboarding flows that turn first-time buyers into a compounding revenue line." },
  { n: "06", title: "Organic Social", body: "Always-on social that earns share-of-search and feeds your paid funnel with proof and warmth." },
  { n: "07", title: "HubSpot", body: "Implementation, automation and revenue ops on HubSpot — so sales and marketing finally speak one language." },
  { n: "08", title: "Websites & E‑commerce", body: "High-converting websites and stores on Webflow, Shopify and WordPress — designed by performance marketers." },
  { n: "09", title: "Influencer Marketing", body: "Vetted creator programmes with full-funnel measurement — not vanity, not gifting, real revenue." },
  { n: "10", title: "Data Analysis & Reporting", body: "Server-side tracking, attribution, and board-grade reporting your CFO will actually quote." },
];

export function Services() {
  return (
    <section id="services" className="bg-ink text-background">
      <div className="container-r17 py-24 md:py-32">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <Reveal className="col-span-12 md:col-span-8">
            <p className="eyebrow text-accent">[ 03 ] Services</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Our digital marketing{" "}
              <span className="serif-accent text-accent">services</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-4">
            <p className="text-[15px] leading-relaxed text-background/70">
              Ten disciplines, one operating partner. We staff senior, run them
              against a single growth thesis, and report on contribution margin
              — not vanity metrics.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src={brand.illustrations.funnel} alt="" aria-hidden className="h-14 w-auto opacity-90" />
              <p className="text-[13px] text-background/60 max-w-[200px]">
                Full-funnel coverage from awareness to retention.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-background/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 0.03, 0.2)}>
              <article className="group h-full bg-ink p-7 transition-colors hover:bg-accent">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-background/50 group-hover:text-accent-foreground/80">
                  <span>{s.n}</span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-background group-hover:text-accent-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-background/65 group-hover:text-accent-foreground/90">
                  {s.body}
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
              Get started
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#work" className="text-sm font-semibold text-background underline decoration-background/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent">
              See our results
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

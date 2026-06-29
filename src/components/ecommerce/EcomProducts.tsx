import { brand } from "@/lib/brand-assets";
import { Reveal } from "@/components/home/Reveal";

const products = [
  {
    key: "pf",
    logo: brand.products.performanceFirst.src,
    name: "Performance First",
    tag: "For early-stage e‑commerce founders",
    body: "Built on R17's exact frameworks, Performance First started as our internal tool and is now a self-serve growth recipe book for founders who are too small for a full agency. You bring the ingredients — it gives you the recipe. (Once you've outgrown DIY, the Michelin-starred kitchen is right here.)",
    cta: "Explore Performance First",
  },
  {
    key: "gp",
    logo: brand.products.gotpost.src,
    name: "GotPost",
    tag: "Joint venture with Brain'print · Switzerland",
    body: "A Swiss-based automation that sends highly personalised postcards straight from your CRM, triggered by conversion events (first purchase, repeat windows, churn signals…). A gamechanger for Swiss e‑commerce.",
    cta: "Explore GotPost",
  },
];

export function EcomProducts() {
  return (
    <section id="products" className="bg-accent text-white hairline-b">
      <div className="container-r17 py-20 md:py-24">
        <div className="grid grid-cols-12 items-end gap-y-6">
          <Reveal className="col-span-12 md:col-span-8">
            <p className="eyebrow text-white/70">[ Products ] Built for e-com</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              Services are our core.{" "}
              <span className="serif-accent text-white/80">These are the e-com products we've built on top.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-4">
            <p className="text-[14px] leading-relaxed text-white/85">
              Productised programmes for e‑commerce brands — for founders too
              small for an agency, and for Swiss D2C brands who want to land in
              someone's actual mailbox.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.06}>
              <article className="group flex h-full flex-col justify-between border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-colors hover:bg-white/15 hover:border-white/30">
                <div>
                  <div className="flex h-14 items-center">
                    <img src={p.logo} alt={p.name} className="max-h-10 w-auto object-contain" />
                  </div>
                  <p className="mt-6 text-[11px] uppercase tracking-widest text-white/70">{p.tag}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-white">{p.name}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/85">{p.body}</p>
                </div>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
                >
                  {p.cta}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

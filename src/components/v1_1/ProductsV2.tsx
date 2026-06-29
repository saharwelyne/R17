import { Reveal } from "@/components/home/Reveal";
import { brand } from "@/lib/brand-assets";
import gotpostBg from "@/assets/products/gotpost-bg.avif.asset.json";

type Product = {
  key: string;
  logo: string;
  tag: string;
  name: string;
  body: string;
  cta: string;
  videoId: string;
  style: React.CSSProperties;
  textClass: string;
  mutedClass: string;
  borderClass: string;
  logoFilter?: string;
};

const products: Product[] = [
  {
    key: "ff",
    logo: brand.products.performanceFoundations.src,
    tag: "For B2B brands",
    name: "Foundations First",
    body: "Foundations First is a revolutionary way to bridge the gap between sales and marketing. In B2B, if your foundations are misaligned, the odds are stacked against you — Foundations First gets the plumbing right so growth has somewhere to land.",
    cta: "Explore Foundations First",
    videoId: "_IU6aeFIzco",
    style: { background: "linear-gradient(135deg, #1A1934 0%, #8779D1 100%)" },
    textClass: "text-white",
    mutedClass: "text-white/80",
    borderClass: "border-white/20",
  },
  {
    key: "pf",
    logo: brand.products.performanceFirst.src,
    tag: "For early-stage e‑commerce founders",
    name: "Performance First",
    body: "Built on R17's exact frameworks, Performance First started as our internal tool and is now a self-serve growth recipe book for founders who are too small for a full agency. You bring the ingredients — it gives you the recipe.",
    cta: "Explore Performance First",
    videoId: "1Gqd-1SJ7Bk",
    style: { background: "#CBFB5A" },
    textClass: "text-[#0a0a0a]",
    mutedClass: "text-[#0a0a0a]/75",
    borderClass: "border-black/20",
    logoFilter: "brightness(0)",
  },
  {
    key: "gp",
    logo: brand.products.gotpost.src,
    tag: "Joint venture with Brain'print · Switzerland",
    name: "GotPost",
    body: "GotPost is a Swiss-based automation that sends highly personalised postcards straight from your CRM, triggered by conversion events (first purchase, repeat windows, churn signals…). A gamechanger for Swiss e‑commerce.",
    cta: "Explore GotPost",
    videoId: "r2Wi-cnpJtI",
    style: {
      backgroundImage: `url(${gotpostBg.url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    textClass: "text-white",
    mutedClass: "text-white/85",
    borderClass: "border-white/20",
  },
];

export function ProductsV2() {
  return (
    <section id="products" className="hairline-t hairline-b bg-background">
      <div className="container-r17 py-20 md:py-28">
        <div className="grid grid-cols-12 items-end gap-y-6">
          <Reveal className="col-span-12 md:col-span-8">
            <p className="eyebrow">Products</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              The right growth engine{" "}
              <span className="serif-accent text-ink-soft">
                for every business.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-4">
            <p className="text-[14px] leading-relaxed text-ink-soft">
              Every growth journey is different. Our proprietary products are built
              to address the specific needs of companies at different stages of
              development and industry served. By aligning strategy, execution, and
              measurable outcomes within dedicated frameworks, we offer market-leading
              solutions that cannot be found anywhere else. The result is faster
              execution, greater focus, and stronger business impact.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.08}>
              <article
                className={`group flex h-full flex-col overflow-hidden border ${p.borderClass} p-6 md:p-7`}
                style={p.style}
              >
                {/* Tag at top */}
                <p className={`text-[11px] uppercase tracking-widest ${p.mutedClass}`}>
                  {p.tag}
                </p>

                {/* Logo */}
                <div className="mt-5 flex h-14 items-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-12 w-auto object-contain"
                    style={p.logoFilter ? { filter: p.logoFilter } : undefined}
                  />
                </div>

                {/* Description (includes product name) */}
                <p className={`mt-5 text-[14px] leading-relaxed ${p.mutedClass}`}>
                  {p.body}
                </p>

                {/* Video below description */}
                <div className={`mt-6 relative aspect-video w-full overflow-hidden border ${p.borderClass}`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${p.videoId}?rel=0&modestbranding=1`}
                    title={`${p.name} video`}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex items-center gap-2 text-[14px] font-semibold ${p.textClass} transition-opacity hover:opacity-80`}
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

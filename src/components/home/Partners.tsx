import { brand } from "@/lib/brand-assets";
import { Reveal } from "./Reveal";

export function Partners({ tone = "surface" }: { tone?: "surface" | "background" } = {}) {
  const bg = tone === "background" ? "bg-background" : "bg-surface";
  return (
    <section className={`hairline-t hairline-b ${bg}`}>
      <div className="container-r17 grid grid-cols-12 gap-y-10 py-16 md:gap-x-12 md:py-20">
        <Reveal className="col-span-12 md:col-span-4">
          <p className="eyebrow">Partnerships</p>
          <h3 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
            Certified <span className="serif-accent text-accent">where</span> it counts.
          </h3>
        </Reveal>
        <Reveal delay={0.1} className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {brand.partners.map((p) =>
              p.src ? (
                <img
                  key={p.name}
                  src={p.src}
                  alt={p.name}
                  className="h-9 w-auto object-contain grayscale brightness-0 contrast-200 opacity-70 transition-opacity hover:opacity-100"
                />
              ) : (
                <span
                  key={p.name}
                  className="font-display text-[13px] font-semibold uppercase tracking-[0.15em] text-ink-soft/80"
                >
                  {p.name}
                </span>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

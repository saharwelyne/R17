import { brand } from "@/lib/brand-assets";

export function ClientMarquee() {
  const loop = [...brand.clients, ...brand.clients];
  return (
    <section className="hairline-t hairline-b bg-surface">
      <div className="container-r17 flex flex-col gap-6 py-10 md:flex-row md:items-center">
        <p className="eyebrow shrink-0 md:w-44">Trusted by</p>
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
          <div className="flex w-max items-center gap-14 animate-marquee">
            {loop.map((c, i) => (
              <img
                key={i}
                src={c.src}
                alt={c.name}
                className="h-10 w-auto shrink-0 object-contain opacity-70 grayscale brightness-0 contrast-200"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

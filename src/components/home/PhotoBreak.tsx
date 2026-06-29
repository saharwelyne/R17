import { brand } from "@/lib/brand-assets";
import { Reveal } from "./Reveal";

export function PhotoBreak() {
  return (
    <section className="bg-background">
      <div className="container-r17 py-16 md:py-20">
        <div className="grid grid-cols-12 gap-4">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink md:aspect-[16/10]">
              <img
                src={brand.photos.p2}
                alt="Inside the R17 Ventures studio"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 md:p-8">
                <p className="text-[11px] uppercase tracking-widest text-accent">
                  Inside R17
                </p>
                <p className="mt-1 font-display text-xl font-medium text-background md:text-2xl">
                  A senior, in-house team — 50+ specialists under one roof.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-1">
            <Reveal delay={0.08}>
              <div className="relative aspect-square overflow-hidden bg-ink md:aspect-[16/10]">
                <img
                  src={brand.photos.p4}
                  alt="R17 strategy session"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="relative aspect-square overflow-hidden bg-accent md:aspect-[16/10]">
                <img
                  src={brand.photos.p1}
                  alt="R17 team at work"
                  className="absolute inset-0 h-full w-full object-cover mix-blend-multiply grayscale"
                />
                <div className="absolute inset-0 bg-accent/30" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { brand } from "@/lib/brand-assets";
import { Reveal } from "./Reveal";

export function AcademyTeaser() {
  return (
    <section id="academy" className="bg-background">
      <div className="container-r17 py-20 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
              <img
                src={brand.photos.p4}
                alt="R17 Academy classroom"
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-ink/20" />
              <div className="absolute bottom-6 left-6 right-6 text-background">
                <p className="text-[11px] uppercase tracking-widest text-accent">[ 10 ] Academy</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 flex flex-col justify-center md:col-span-6">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Apply for our <span className="serif-accent text-accent">Academy</span>.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Now recruiting Applications open. A 12-month, in-house programme
              that turns ambitious operators into senior performance marketers
              — with paid work on real client accounts from day one.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex h-12 items-center gap-3 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Apply now
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#academy" className="text-sm font-semibold text-ink underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent">
                See curriculum
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

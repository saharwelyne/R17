import { Reveal } from "./Reveal";

const awards = [
  "Top Performance Marketing Agency 2025",
  "Clutch Top B2B Provider",
  "Google Premier Partner",
  "Meta Business Partner",
  "Leaders League Recommended",
  "Webby Honoree",
];

export function Awards() {
  return (
    <section className="bg-background hairline-b">
      <div className="container-r17 py-16 md:py-20">
        <Reveal>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
            <div>
              <p className="eyebrow">[ 09 ] Awards & recognition</p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Recognised for the work, <span className="serif-accent text-accent">not the spin</span>.
              </h3>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-px bg-hairline sm:grid-cols-3 lg:grid-cols-6">
            {awards.map((a) => (
              <div
                key={a}
                className="flex aspect-square items-center justify-center bg-background p-4 text-center"
              >
                <div>
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full border-2 border-accent" aria-hidden />
                  <p className="text-[11px] font-semibold uppercase leading-tight tracking-widest text-ink-soft">
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

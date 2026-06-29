import { Reveal } from "./Reveal";

const oldSchool = [
  "Hourly-based fees / charging based on ad-spend",
  "Strategies built in silos",
  "Campaigns optimised for reach & impressions",
  "Creative assets used to be produced as an afterthought",
  "One single mandate for months or years",
  "Six- to nine-month commitment",
  "Complex contract structure",
];

const r17 = [
  "Performance-based pricing",
  "One integrated, board-grade growth thesis",
  "Campaigns optimised for revenue & contribution margin",
  "Creative is generated weekly using proprietary data, sales, user feedback",
  "Tight 90-day growth sprints, with quarterly reviews",
  "Single-month rolling, after the foundations are set",
  "One contract. One team. One number.",
];

export function OurDifference() {
  return (
    <section id="difference" className="bg-background hairline-b">
      <div className="container-r17 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">[ 02 ] Our difference</p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Why choose R17 Ventures as your{" "}
            <span className="serif-accent text-accent">trusted digital agency</span>?
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <div className="border-l-4 border-hairline pl-6">
              <p className="eyebrow text-ink-soft">Old-school digital agencies</p>
              <ul className="mt-5 space-y-3">
                {oldSchool.map((row) => (
                  <li key={row} className="flex items-start gap-3 text-[15px] text-ink-soft line-through decoration-ink/25">
                    <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft/40" />
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-l-4 border-accent pl-6">
              <p className="eyebrow text-accent">R17 Ventures AG</p>
              <ul className="mt-5 space-y-3">
                {r17.map((row) => (
                  <li key={row} className="flex items-start gap-3 text-[15px] font-medium text-ink">
                    <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 rounded-sm bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Switch to performance-based
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

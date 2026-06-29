import { Reveal } from "./Reveal";

const quotes = [
  {
    quote:
      "R17 has been a true partner. They genuinely care about our results and behave like an extension of our internal team.",
    name: "Michael Spannagel",
    role: "Founder, Pétiole",
  },
  {
    quote:
      "The level of senior attention and the speed of execution are something we hadn't experienced with any other agency before.",
    name: "Donna James",
    role: "Head of Growth, PYUR",
  },
  {
    quote:
      "They have a structured, data-driven approach to growth — and they show you exactly where every dollar is going.",
    name: "Anna Müller",
    role: "CMO, Pages Holding",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background hairline-t hairline-b">
      <div className="container-r17 py-24 md:py-28">
        <Reveal>
          <p className="eyebrow">What our clients say</p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            We let the work — and the operators — speak{" "}
            <span className="serif-accent text-accent">for us</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.07}>
              <figure className="flex h-full flex-col justify-between border border-hairline bg-background p-8">
                <blockquote className="font-display text-lg font-medium leading-snug text-ink">
                  <span className="serif-accent mr-1 text-3xl leading-none text-accent">“</span>
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-display text-[15px] font-semibold text-ink">{q.name}</div>
                  <div className="text-[12px] uppercase tracking-widest text-ink-soft">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

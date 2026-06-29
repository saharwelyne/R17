import { Reveal } from "@/components/home/Reveal";

const reviews = [
  { score: "5.0", platform: "Google" },
  { score: "4.8", platform: "Clutch" },
  { score: "4.8", platform: "The Manifest" },
  { score: "5.0", platform: "DesignRush" },
  { score: "Excellent", platform: "Trustindex" },
];

const awards = [
  { count: "5×", title: "Digital Commerce Awards" },
  { count: "20×", title: "Web Excellence Awards" },
  { count: "2×", title: "Shop Usability Awards" },
  { count: "2×", title: "African Excellence Awards" },
  { count: "1×", title: "Clutch 100 Winner" },
];

export function RecognitionStrip() {
  return (
    <section className="bg-surface hairline-t hairline-b">
      <div className="container-r17 grid grid-cols-12 gap-y-10 py-16 md:gap-x-12 md:py-20">
        <Reveal className="col-span-12 md:col-span-4">
          <p className="eyebrow">Recognition</p>
          <h3 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
            Rated by clients.{" "}
            <span className="serif-accent text-accent">Recognized</span> by peers.
          </h3>
        </Reveal>

        <Reveal delay={0.1} className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Reviews */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-soft/70">
                Reviews
              </p>
              <div className="flex flex-wrap gap-2">
                {reviews.map((r) => (
                  <div
                    key={r.platform}
                    className="flex items-center gap-2 rounded-full border border-hairline bg-background px-3 py-1.5"
                  >
                    <span className="font-display text-sm font-semibold text-accent">
                      {r.score}
                    </span>
                    <span className="text-[12px] text-ink-soft">{r.platform}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-soft/70">
                Awards
              </p>
              <div className="flex flex-wrap gap-2">
                {awards.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-center gap-2 rounded-full border border-hairline bg-background px-3 py-1.5"
                  >
                    <span className="font-display text-sm font-semibold text-accent">
                      {a.count}
                    </span>
                    <span className="text-[12px] text-ink-soft">{a.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

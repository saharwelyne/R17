import { Reveal } from "@/components/home/Reveal";

const modular = [
  "Meta Ads only",
  "Google Ads / PMax only",
  "TikTok Ads only",
  "Klaviyo / lifecycle only",
  "Creative production only",
  "SEO / GEO only",
  "Server‑side tracking & analytics",
  "Fractional Head of Growth",
];

export function EcomEngagement() {
  return (
    <section id="engagement" className="bg-background hairline-b">
      <div className="container-r17 py-16 md:py-24">
        <div className="grid grid-cols-12 items-end gap-y-6">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow">[ How we engage ]</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Full growth engine — or{" "}
              <span className="serif-accent text-accent">just the channel</span>{" "}
              you need.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <p className="text-[14px] leading-relaxed text-ink-soft">
              Most clients hire R17 as their end‑to‑end growth partner. But
              we'll also run a single channel if that's where the gap is — and
              hand it back to your in‑house team better than we found it.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Full service */}
          <Reveal className="md:col-span-7">
            <article className="relative flex h-full flex-col overflow-hidden bg-accent p-8 text-accent-foreground md:p-10">
              <p className="eyebrow text-accent-foreground/80">
                Most popular · Recommended
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Full‑service growth pod
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-accent-foreground/90">
                One senior pod runs paid, lifecycle, creative, SEO, tracking
                and reporting against a single contribution‑margin thesis. One
                contract. One team. One number.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2 text-[13px] sm:grid-cols-2">
                {[
                  "Paid (Meta, Google, TikTok…)",
                  "Lifecycle (Email, SMS, WhatsApp)",
                  "Creative production",
                  "SEO / GEO",
                  "Server‑side tracking",
                  "Weekly CFO‑grade reporting",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-foreground" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="group inline-flex h-11 items-center gap-3 rounded-sm bg-ink px-5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                >
                  Scope a full pod
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          </Reveal>

          {/* Modular */}
          <Reveal delay={0.1} className="md:col-span-5">
            <article className="flex h-full flex-col border border-hairline bg-surface p-8 md:p-10">
              <p className="eyebrow">Modular</p>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                Single‑channel engagements
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
                Already have a team? Plug us in for the one piece that's
                under‑performing.
              </p>
              <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                {modular.map((m) => (
                  <li
                    key={m}
                    className="flex items-center justify-between py-2.5 text-[13px] text-ink"
                  >
                    <span>{m}</span>
                    <span aria-hidden className="text-accent">+</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="group inline-flex h-11 items-center gap-3 rounded-sm border border-ink px-5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background"
                >
                  Ask about a single channel
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

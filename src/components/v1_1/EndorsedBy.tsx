import { Reveal } from "@/components/home/Reveal";
import swissStartup from "@/assets/endorsements/swiss_startup.png.asset.json";
import make from "@/assets/endorsements/make.png.asset.json";
import goodfirms from "@/assets/endorsements/goodfirms.png.asset.json";
import swissEmbassy from "@/assets/endorsements/swiss_embassy.png.asset.json";
import abc from "@/assets/press/abc.webp.asset.json";
import ap from "@/assets/press/ap.webp.asset.json";
import benzinga from "@/assets/press/benzinga.webp.asset.json";
import biz from "@/assets/press/bizcommunity.webp.asset.json";
import capetalk from "@/assets/press/capetalk.webp.asset.json";
import cbs from "@/assets/press/cbs.webp.asset.json";
import fox from "@/assets/press/fox.webp.asset.json";
import iol from "@/assets/press/iol.webp.asset.json";
import leader from "@/assets/press/leader.webp.asset.json";
import marketwatch from "@/assets/press/marketwatch.webp.asset.json";
import msnbc from "@/assets/press/msnbc-1.webp.asset.json";
import nzz from "@/assets/press/nzz.png.asset.json";
import tagblatt from "@/assets/press/tagblatt.webp.asset.json";
import yahoo from "@/assets/press/yahoo.webp.asset.json";

const press = [
  { name: "CBS", src: cbs.url },
  { name: "FOX", src: fox.url },
  { name: "ABC", src: abc.url },
  { name: "MSNBC", src: msnbc.url },
  { name: "Associated Press", src: ap.url },
  { name: "Yahoo Finance", src: yahoo.url },
  { name: "MarketWatch", src: marketwatch.url },
  { name: "Benzinga", src: benzinga.url },
  { name: "NZZ", src: nzz.url },
  { name: "Tagblatt", src: tagblatt.url },
  { name: "Leader Digital", src: leader.url },
  { name: "Bizcommunity", src: biz.url },
  { name: "CapeTalk", src: capetalk.url },
  { name: "IOL", src: iol.url },
];

const endorsements = [
  { name: "Swiss Startup Association", src: swissStartup.url },
  { name: "Swiss Confederation", src: swissEmbassy.url },
  { name: "Make", src: make.url },
  { name: "GoodFirms", src: goodfirms.url },
];

const reviews = [
  { score: "5.0", platform: "Google", note: "5-star average" },
  { score: "4.8", platform: "Clutch", note: "Verified reviews" },
  { score: "4.8", platform: "The Manifest", note: "Top-rated agency" },
  { score: "5.0", platform: "DesignRush", note: "Top-rated agency" },
  { score: "Excellent", platform: "Trustindex", note: "Independently rated" },
];

const awards = [
  { count: "5×", title: "Digital Commerce Awards", note: "Winner across multiple categories" },
  { count: "20×", title: "Web Excellence Awards", note: "Web design & performance" },
  { count: "2×", title: "Shop Usability Awards", note: "For our e‑commerce work" },
  { count: "2×", title: "African Excellence Awards", note: "Best Performance Marketing Agency" },
  { count: "1×", title: "Clutch 100 Winner", note: "Only Swiss digital agency in its year" },
];

export function EndorsedByStrip() {
  return (
    <section className="bg-ink text-background">
      <div className="container-r17 py-12 md:py-16">
        <Reveal>
          <p className="eyebrow mb-8 text-center text-background/60 md:mb-10">Endorsed by</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-4 md:grid-cols-4 md:gap-x-16">
            {endorsements.map((e) => (
              <div key={e.name} className="flex items-center justify-center">
                <img
                  src={e.src}
                  alt={e.name}
                  loading="lazy"
                  className="h-10 w-auto max-w-[160px] object-contain opacity-90 brightness-0 invert transition hover:opacity-100 md:h-12"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function EndorsedBy({ hidePress = false }: { hidePress?: boolean }) {
  return (
    <>


      <section className="bg-surface hairline-b">
        <div className="container-r17 py-20 md:py-28">

          {/* Recognition — single heading + 2 columns (reviews | awards) */}
          <Reveal>
            <div className="grid grid-cols-12 items-end gap-y-6">
              <div className="col-span-12 md:col-span-7">
                <p className="eyebrow">Recognition</p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  Rated by clients.{" "}
                  <span className="serif-accent text-accent">Recognised</span> by peers.
                </h2>
              </div>
              <p className="col-span-12 text-[15px] leading-relaxed text-ink-soft md:col-span-5">
                Independent reviews on the platforms that matter, and 30+
                international awards across performance marketing, e‑commerce
                and web — judged on outcomes, not narrative.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            {/* Reviews column */}
            <Reveal delay={0.05}>
              <p className="eyebrow mb-6">Reviews</p>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {reviews.map((r) => (
                  <li key={r.platform} className="grid grid-cols-12 items-center gap-3 py-5">
                    <div className="col-span-3 font-display text-2xl font-semibold tracking-tight text-accent md:text-3xl">
                      {r.score}
                    </div>
                    <div className="col-span-6">
                      <p className="font-display text-base font-semibold text-ink">
                        {r.platform}
                      </p>
                      <p className="mt-0.5 text-[12px] uppercase tracking-widest text-ink-soft">
                        {r.note}
                      </p>
                    </div>
                    <div className="col-span-3 flex items-center justify-end gap-0.5 text-accent" aria-hidden>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg key={idx} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9z" />
                        </svg>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Awards column */}
            <Reveal delay={0.1}>
              <p className="eyebrow mb-6">Awards</p>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {awards.map((a) => (
                  <li key={a.title} className="grid grid-cols-12 items-center gap-3 py-5">
                    <span className="col-span-3 font-display text-2xl font-semibold tracking-tight text-accent md:text-3xl">
                      {a.count}
                    </span>
                    <div className="col-span-9">
                      <p className="font-display text-base font-semibold text-ink">
                        {a.title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-snug text-ink-soft">
                        {a.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {!hidePress && (
            <>
              {/* Featured in — press logos */}
              <Reveal delay={0.15}>
                <div className="mt-10 md:mt-12">
                  <p className="eyebrow mb-6 text-center md:mb-8">As featured in</p>
                  <div className="grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-4 md:grid-cols-7 md:gap-x-10 md:gap-y-10">
                    {press.map((p) => (
                      <div key={p.name} className="flex items-center justify-center">
                        <img
                          src={p.src}
                          alt={p.name}
                          loading="lazy"
                          className="h-10 w-auto max-w-[140px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-14"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </>
          )}
        </div>
      </section>
    </>
  );
}

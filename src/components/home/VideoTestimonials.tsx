import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import oxa from "@/assets/testimonials/oxa.webp.asset.json";
import daszelt from "@/assets/testimonials/daszelt.webp.asset.json";
import pyur from "@/assets/testimonials/pyur.webp.asset.json";
import pushdat from "@/assets/testimonials/pushdat.webp.asset.json";
import dcap from "@/assets/testimonials/dcap.webp.asset.json";
import ninetyone from "@/assets/testimonials/ninetyone.webp.asset.json";
import assenagon from "@/assets/testimonials/assenagon.webp.asset.json";

type Item = {
  quote: string;
  client: string;
  photo: string;
  youtubeId: string;
};

const items: Item[] = [
  {
    quote: "R17 goes above & beyond to help us reach our ambitious goals",
    client: "Oxa (Nanoleq AG)",
    photo: oxa.url,
    youtubeId: "hPZX2JKyGUw",
  },
  {
    quote: "I can guarantee R17 can deliver results!",
    client: "DAS ZELT",
    photo: daszelt.url,
    youtubeId: "WMh5XoKwDh0",
  },
  {
    quote: "R17 are able to achieve good commercial results!",
    client: "Fliggs Mobile / PŸUR",
    photo: pyur.url,
    youtubeId: "DNOdGQs5RE4",
  },
  {
    quote: "R17 just delivers!",
    client: "Pushdat",
    photo: pushdat.url,
    youtubeId: "2U9K-GPIDDY",
  },
  {
    quote:
      "It's a next-level of results that we can achieve working with R17",
    client: "DCAP",
    photo: dcap.url,
    youtubeId: "e0iqnPq6QwU",
  },
  {
    quote: "R17 are on top of their game!",
    client: "Ninety One Asset Management",
    photo: ninetyone.url,
    youtubeId: "k1o9b00xp3o",
  },
  {
    quote: "R17 goes way beyond typical agencies",
    client: "Assenagon Asset Management",
    photo: assenagon.url,
    youtubeId: "8h8TktFrPCI",
  },
];

export function VideoTestimonials() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [playing, setPlaying] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Clone first 3 items at the end for seamless infinite loop
  const looped = [...items, ...items.slice(0, 3)];

  const next = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i + 1);
  }, []);
  const prev = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i - 1);
  }, []);

  // Seamless wrap: after sliding into clones, jump silently back to real start
  const onTrackTransitionEnd = () => {
    if (index >= items.length) {
      setAnimate(false);
      setIndex(0);
    } else if (index < 0) {
      setAnimate(false);
      setIndex(items.length - 1);
    }
  };
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  // Autoplay
  useEffect(() => {
    if (playing) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [playing, next]);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlaying(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [playing]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = () => {
    const start = touchStartX.current;
    const end = touchEndX.current;
    if (start == null || end == null) return;
    const delta = end - start;
    const threshold = 50;
    if (delta > threshold) prev();
    else if (delta < -threshold) next();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="bg-background">
      <div className="container-r17 py-20 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow text-accent">Client Stories</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              In their <span className="serif-accent text-ink-soft">own words.</span>
            </h2>
          </Reveal>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-sm border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-background"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-sm border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-background"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`flex [--per:1] md:[--per:3] ${animate ? "transition-transform duration-700 ease-out" : ""}`}
            style={{
              transform: `translateX(calc(${index} * -100% / var(--per)))`,
            }}
            onTransitionEnd={onTrackTransitionEnd}
          >
            {looped.map((t, i) => (
              <div
                key={`${t.youtubeId}-${i}`}
                className="w-full shrink-0 px-3 md:w-1/3"
              >
                <button
                  type="button"
                  onClick={() => setPlaying(t.youtubeId)}
                  className="group relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden bg-ink text-left text-background md:aspect-[4/5]"
                  aria-label={`Play testimonial from ${t.client}`}
                >
                  <img
                    src={t.photo}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-85 group-hover:scale-[1.03]"
                    style={{ filter: "grayscale(100%)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                  <span
                    aria-hidden
                    className="relative z-10 m-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:scale-110"
                  >
                    <span className="ml-1 border-y-[7px] border-l-[10px] border-y-transparent border-l-current" />
                  </span>
                  <div className="relative z-10 p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-background md:text-xl">
                      “{t.quote}”
                    </h3>
                    <p className="mt-3 text-[11px] uppercase tracking-widest text-accent">
                      Client · {t.client}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-sm border border-ink/20 text-ink"
          >
            ←
          </button>
          <div className="text-[11px] uppercase tracking-widest text-ink-soft">
            {((index % items.length) + items.length) % items.length + 1} / {items.length}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-sm border border-ink/20 text-ink"
          >
            →
          </button>
        </div>
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setPlaying(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setPlaying(null)}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-background text-ink transition-transform hover:scale-110"
          >
            ✕
          </button>
          <div
            className="relative aspect-video w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${playing}?autoplay=1&rel=0`}
              title="Client testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

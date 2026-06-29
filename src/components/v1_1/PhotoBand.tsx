import { Reveal } from "@/components/home/Reveal";
import { brand } from "@/lib/brand-assets";

type Props = {
  src?: string;
  alt?: string;
  caption?: string;
  kicker?: string;
};

export function PhotoBand({
  src = brand.photos.p2,
  alt = "R17 Ventures team",
  kicker = "Skin in the game.",
  caption = "A base fee plus a bonus we only earn when you grow. If you don't, we don't.",
}: Props) {
  return (
    <section className="bg-ink">
      <Reveal>
        <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden md:h-[70vh]">
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover grayscale"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="container-r17 absolute inset-x-0 bottom-0 pb-10 md:pb-14">
            <p className="eyebrow text-accent">{kicker}</p>
            <p className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-snug text-background md:text-4xl">
              {caption}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

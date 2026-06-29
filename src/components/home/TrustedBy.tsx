import { Reveal } from "./Reveal";

// Eagerly import every uploaded client logo pointer
const modules = import.meta.glob("@/assets/trusted/*.asset.json", {
  eager: true,
  import: "default",
}) as Record<string, { url: string; original_filename: string }>;

function prettyName(filename: string) {
  // strip extension, strip _tags after first underscore that looks like category
  const base = filename.replace(/\.[^.]+$/, "");
  // take everything before the first descriptor token
  const head = base.split(/_(?=[a-z])/)[0];
  return head
    .replace(/[_\-+]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

const logos = Object.entries(modules)
  .map(([path, mod]) => {
    const file = path.split("/").pop()!.replace(/\.asset\.json$/, "");
    return { name: prettyName(file), src: mod.url };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export function TrustedBy() {
  // Duplicate for seamless marquee
  const loop = [...logos, ...logos];
  return (
    <section className="hairline-t hairline-b bg-surface">
      <div className="container-r17 py-16 md:py-20">
        <Reveal>
          <p className="eyebrow text-center">We've worked with</p>
        </Reveal>
        <div className="relative mt-10 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
          <div className="flex w-max items-center gap-12 animate-marquee md:gap-16">
            {loop.map((c, i) => (
              <img
                key={`${c.name}-${i}`}
                src={c.src}
                alt={c.name}
                loading="lazy"
                className="h-10 w-auto max-w-[160px] shrink-0 object-contain opacity-60 grayscale brightness-0 contrast-200 transition hover:opacity-100 md:h-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

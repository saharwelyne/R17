import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { VideoTestimonials } from "@/components/home/VideoTestimonials";
import { Partners } from "@/components/home/Partners";
import { ContactCTA } from "@/components/home/ContactCTA";
import { PressStrip } from "@/components/home/PressStrip";
import { Footer } from "@/components/home/Footer";
import { HeroV2 } from "@/components/v1_1/HeroV2";
import { ServicesGrouped } from "@/components/v1_1/ServicesGrouped";
import { WhyR17 } from "@/components/v1_1/WhyR17";
import { RecognitionStrip } from "@/components/v1_1/RecognitionStrip";
import { PhotoBand } from "@/components/v1_1/PhotoBand";
import photoA from "@/assets/photos/p1.jpg.asset.json";
import photoB from "@/assets/photos/p4.jpg.asset.json";

const title = "R17 Ventures — Your growth partner, engineered for revenue & profitability";
const description =
  "A digital performance agency, paid on results. We work out what'll actually move your numbers — then run the paid social, paid search, SEO and email to get there.";

export const Route = createFileRoute("/v1.2")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: V12,
});

function NextStepsTriCTA() {
  const items = [
    { label: "Why R17", href: "#why" },
    { label: "How we're paid", href: "#pricing" },
    { label: "Case Studies", href: "/case-studies" },
  ];
  return (
    <section className="bg-accent">
      <div className="container-r17 py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow text-accent-foreground/70">Explore</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-snug tracking-tight text-accent-foreground md:text-4xl">
            See how the{" "}
            <span className="serif-accent text-accent-foreground">partnership</span> actually works.
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              className="group inline-flex h-12 items-center gap-3 rounded-sm bg-background px-6 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {it.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function V12() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <main>
        <HeroV2 />
        <ClientMarquee />
        <ServicesGrouped />
        <PhotoBand src={photoA.url} />
        <WhyR17 />
        <VideoTestimonials />
        <NextStepsTriCTA />
        <PhotoBand
          src={photoB.url}
          kicker="One number"
          caption="Contribution margin — independently reported, monthly, against the KPIs we signed up to."
        />
        <RecognitionStrip />
        <ContactCTA />
        <Partners />
        <PressStrip />
      </main>
      <Footer />
    </div>
  );
}

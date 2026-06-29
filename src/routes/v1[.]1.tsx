import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { VideoTestimonials } from "@/components/home/VideoTestimonials";
import { Results } from "@/components/home/Results";
import { Testimonials } from "@/components/home/Testimonials";

import { Partners } from "@/components/home/Partners";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FAQTeaser } from "@/components/home/FAQTeaser";
import { Footer } from "@/components/home/Footer";
import { HeroV2 } from "@/components/v1_1/HeroV2";
import { ServicesGrouped } from "@/components/v1_1/ServicesGrouped";
import { WhyR17 } from "@/components/v1_1/WhyR17";
import { EndorsedBy, EndorsedByStrip } from "@/components/v1_1/EndorsedBy";
import { ProductsV2 } from "@/components/v1_1/ProductsV2";
import { PhotoBand } from "@/components/v1_1/PhotoBand";
import photoA from "@/assets/photos/p1.jpg.asset.json";
import photoB from "@/assets/photos/p4.jpg.asset.json";

const title = "R17 Ventures — Leading Digital Growth Partner";
const description =
  "R17 Ventures engineers revenue and profitability growth for ambitious brands through full-funnel digital marketing. Performance-based pricing, senior in-house team, board-grade reporting.";

export const Route = createFileRoute("/v1.1")({
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
  component: V11,
});

function V11() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <main>
        <HeroV2 />
        <ClientMarquee />
        <VideoTestimonials />
        <ServicesGrouped />
        <EndorsedByStrip />
        <WhyR17 />
        <Results />
        <PhotoBand src={photoA.url} />
        <ProductsV2 />
        <EndorsedBy />
        <PhotoBand
          src={photoB.url}
          kicker="One number"
          caption="Contribution margin — independently reported, monthly, against the KPIs we signed up to."
        />
        <Testimonials />
        <Partners />
        <ContactCTA />
        <FAQTeaser />
      </main>
      <Footer />
    </div>
  );
}

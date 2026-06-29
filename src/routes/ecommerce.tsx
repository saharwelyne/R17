import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { EcomHeroV2 } from "@/components/ecommerce/EcomHeroV2";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { VideoTestimonials } from "@/components/home/VideoTestimonials";
import { ScalingCalculator } from "@/components/ecommerce/ScalingCalculator";
import { EcomCreativeTesting } from "@/components/ecommerce/EcomCreativeTesting";
import { EcomBeyondAds } from "@/components/ecommerce/EcomBeyondAds";
import { EcomDifference } from "@/components/ecommerce/EcomDifference";
import { EcomEngagement } from "@/components/ecommerce/EcomEngagement";
import { WhyR17 } from "@/components/v1_1/WhyR17";
import { EndorsedBy } from "@/components/v1_1/EndorsedBy";
import { Results } from "@/components/home/Results";
import { ProductsV2 } from "@/components/v1_1/ProductsV2";
import { Partners } from "@/components/home/Partners";
import { PhotoBand } from "@/components/v1_1/PhotoBand";
import photoB from "@/assets/photos/p4.jpg.asset.json";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FAQTeaser } from "@/components/home/FAQTeaser";
import { Footer } from "@/components/home/Footer";

const title = "E‑Commerce Growth Partner — R17 Ventures";
const description =
  "R17 Ventures helps e‑commerce brands scale profitably. Plug your numbers into our scaling CPA calculator and stop optimising for vanity ROAS.";

export const Route = createFileRoute("/ecommerce")({
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
    links: [{ rel: "canonical", href: "https://r17ventures.com/ecommerce" }],
  }),
  component: EcommercePage,
});

function EcommercePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <main>
        <EcomHeroV2 />
        <ClientMarquee />
        <EcomDifference />
        <ScalingCalculator />
        <EcomEngagement />
        <EcomCreativeTesting />
        <Partners tone="background" />
        <EcomBeyondAds />
        <ProductsV2 />
        <Results />
        <WhyR17 />
        <PhotoBand
          src={photoB.url}
          kicker="One number"
          caption="Contribution margin — independently reported, monthly, against the KPIs we signed up to."
        />
        <VideoTestimonials />
        <EndorsedBy />
        <ContactCTA />
        <FAQTeaser />
      </main>
      <Footer />
    </div>
  );
}

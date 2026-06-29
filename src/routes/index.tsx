import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { VideoTestimonials } from "@/components/home/VideoTestimonials";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { PressStrip } from "@/components/home/PressStrip";
import { OurDifference } from "@/components/home/OurDifference";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Services } from "@/components/home/Services";
import { PhotoBreak } from "@/components/home/PhotoBreak";
import { Pricing } from "@/components/home/Pricing";
import { Partners } from "@/components/home/Partners";
import { Results } from "@/components/home/Results";
import { Products } from "@/components/home/Products";
import { Testimonials } from "@/components/home/Testimonials";
import { Awards } from "@/components/home/Awards";
import { AcademyTeaser } from "@/components/home/AcademyTeaser";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FAQTeaser } from "@/components/home/FAQTeaser";
import { Footer } from "@/components/home/Footer";

const title = "R17 Ventures — Your performance-first growth partner.";
const description =
  "R17 Ventures engineers revenue and profitability growth for ambitious brands. Expert team, proven systems, business-first mindset — all tied to the numbers that matter.";

export const Route = createFileRoute("/")({
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
    links: [{ rel: "canonical", href: "https://r17ventures.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <ClientMarquee />
        <VideoTestimonials />
        <WhatWeDo />
        <PressStrip />
        <OurDifference />
        <TrustedBy />
        <PhotoBreak />
        <Services />
        <Pricing />
        <Partners />
        <Results />
        <Products />
        <Testimonials />
        <Awards />
        <AcademyTeaser />
        <ContactCTA />
        <FAQTeaser />
      </main>
      <Footer />
    </div>
  );
}
